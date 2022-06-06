<script setup lang="ts">
import GreetingsCard from "@/components/GreetingsCard.vue";
import ExpandableDoughnutChart from "@/components/ExpandableDoughnutChart.vue";
import type {InteractiveChartData} from "../types/InteractiveChartData";
import {LanguageData} from "../models/LanguageData"
import { TechData } from "../models/TechData"
</script>

<script lang="ts">
export default {
  data () {
    return {
      languageChart: LanguageData,
      technologiesChart: TechData,
    }
  },  
};
</script>

<template>
  <main class="main">
    <GreetingsCard msg="You did it!" />
    <div class="chart">
      <ExpandableDoughnutChart :data="this.languageChart" />
      <ExpandableDoughnutChart :data="this.technologiesChart" />
    </div>
  </main>
</template>

<style scoped>
.chart {
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-self: start;
  flex-wrap: wrap;
}
.main {
  max-width: 1500px;
  margin: auto auto;
}
</style>