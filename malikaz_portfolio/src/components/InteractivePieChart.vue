<template>
  <div>
    <button v-if="isInner" @click.stop="back">&#11164;</button>
    <Doughnut
      ref="bar"
      v-if="!isInner"
      @click="expandData"
      :chart-options="this.chartOptions"
      :chart-data="this.chartData"
      :height="this.height"
      :width="this.width"
    />
    <Doughnut
      ref="bar"
      v-if="isInner"
      @click="expandData"
      :chart-options="this.chartOptions"
      :chart-data="this.chartData"
    />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement
);

export default {
  name: "doughnut",
  components: { Doughnut },
  props: {
    data: {
      type: Object,
      default: {},
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 600
    }
  },
  data() {
    return {
      isInner: false,
      index: -1,
    }
  },
  computed:{
    chartData: function (){
      let data = {};
      if(this.isInner){
        data = this.data.innerCharts[this.index].data;
      } else {
        data = this.data.outterChart.data;
      }
      return data;
    },
    chartOptions: function (){
      let data = {};
      if(this.isInner){
        data = this.data.innerCharts[this.index].options;
      } else {
        data = this.data.outterChart.options;
      }
      return data;
    },
  },
  methods: {
    getClickedIndex: function (event) {
      return this.$refs.bar.chart.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        false
      )[0].index;
    },
    expandData: function (event) {
      this.index = this.getClickedIndex(event);
      this.isInner = true;
    },
    back: function (event){
      this.isInner = false;
      this.index = -1;
    }
  },
};
</script>
