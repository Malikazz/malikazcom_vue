<script setup lang="ts">
import GreetingsCard from '@/components/GreetingsCard.vue'
import InteractivePieChart from '@/components/InteractivePieChart.vue'
</script>

<template>
  <main class="main">
    <GreetingsCard msg="You did it!" />
    <div class="chart">
      <InteractivePieChart />
      <InteractivePieChart />
      <InteractivePieChart />
    </div>
    
  </main>
</template>

<style scoped>
.chart{
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-self: start;
  flex-wrap: wrap;
}
.main{
  max-width: 1500px;
  margin: auto auto;
}
</style>