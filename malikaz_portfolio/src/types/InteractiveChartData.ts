type InteractiveChartData = {
  name: string;
  outterChart: ChartJSData;
  innerCharts: ChartJSData[];
}

type ChartJSData = {
  data: Object;
  options: Object;
}

export type {InteractiveChartData, ChartJSData}
