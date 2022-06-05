import type { InteractiveChartData } from '../types/InteractiveChartData.js';

export const TechData: InteractiveChartData = {
  name: "Technologies",
  outterChart: {
    data: {
      labels: ["Git", "SSMS", "PGAdmin", "Linux", "Azure", "AWS", "Java"],
      datasets: [
        {
          data: [2240, 1040, 860, 600, 100, 1200, 150],
          backgroundColor: [
            "#873e23",
            "#154c79",
            "#ff5133",
            "#02843d",
            "#ffd233",
            "#33ffb6",
            "#000000"
          ]
        }
      ]
    },
    options: {
      type: Object,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Technologies",
          font:{
            size: 36
          }
        },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
      }
    }
  },
  innerCharts: [
    {
      data: {
        labels: ["Django", " Flask", "Scripting"],
        datasets: [
          {
            data: [2000, 40, 200],
            backgroundColor: [
              "#873e23",
              "#154c79",
              "#ff5133",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["ASP4.5", ".Net3", ".Net5"],
        datasets: [
          {
            data: [240, 400, 400],
            backgroundColor: [
              "#02843d",
              "#ffd233",
              "#33ffb6",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["Vanilla", "Vue", "React Native"],
        datasets: [
          {
            data: [700, 120, 40],
            backgroundColor: [
              "#02843d",
              "#ffd233",
              "#33ffb6",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["Flutter Null Safe"],
        datasets: [
          {
            data: [600],
            backgroundColor: [
              "#02843d",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["RustByExample", "Rocket.rs"],
        datasets: [
          {
            data: [50,50],
            backgroundColor: [
              "#873e23",
              "#154c79",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["MsSQL", "Postgresql", "MySql"],
        datasets: [
          {
            data: [700,450, 50],
            backgroundColor: [
              "#873e23",
              "#154c79",
              "#33ffb6",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
    {
      data: {
        labels: ["Android"],
        datasets: [
          {
            data: [150],
            backgroundColor: [
              "#33ffb6",
            ]
          }
        ]
      },
      options: {
        type: Object,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Language Break Down",
            font:{
              size: 36
            }
          },
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        }
      }
    },
  ],
}