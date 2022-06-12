<script setup lang="ts">
import GreetingsCard from "@/components/GreetingsCard.vue";
import ExpandableDoughnutChart from "@/components/ExpandableDoughnutChart.vue";
import type {InteractiveChartData} from "../types/InteractiveChartData";
import {LanguageData} from "@/models/LanguageData"
import { TechData } from "@/models/TechData"
import { SkillsData } from "@/models/SkillsData"
</script>

<script lang="ts">
export default {
  data () {
    return {
      languageChart: LanguageData,
      technologiesChart: TechData,
      skillsChart: SkillsData
    }
  },  
};
</script>

<template>
  <main class="main">
    <GreetingsCard msg="You did it!" />
    <div class="chart_title">
      <h2> Me in three doughnuts</h2>
    </div>
    <div class="chart">
      <ExpandableDoughnutChart :data="this.languageChart" />
      <ExpandableDoughnutChart :data="this.skillsChart" />
    </div>
  </main>
</template>

<style scoped>
.chart {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-self: start;
  flex-wrap: wrap;
}
.main {
  max-width: 1500px;
  margin: auto auto;
}
h2{
  font-size: 3rem
}
.chart_title{
  margin-top:300px;
  text-align: center;
}
</style>