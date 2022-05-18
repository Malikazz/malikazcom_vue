<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement,CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'doughnut',
  components: { Doughnut },
  props: {
    chartId: {
      type: String,
      default: 'doughnut'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Python', 'C#', 'Javascript', 'Dart','Rust','SQL', 'Java' ],
        datasets: [ { data: [2240, 1040, 860, 600, 100, 1200, 150], 
        backgroundColor: ['#873e23', '#154c79', '#ff5133', ' #02843d','#ffd233' ,'#33ffb6', '#000000' ],
        },]
      },
      chartOptions: {
        responsive: true,
        plugins:{
            title:{
                display:true,
                text:"Title"
            },
        },
      }
    }
  }
}
</script>
