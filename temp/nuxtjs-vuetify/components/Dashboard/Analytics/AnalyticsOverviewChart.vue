<template>
  <v-card
    class="analytics-overview-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-1">Analytics Overview</h5>
      <div class="card-subtitle">
        <button type="button">Day</button>
        <button type="button" class="active">Week</button>
        <button type="button">Month</button>
      </div>
    </div>
    <div class="analytics-overview-card-content">
      <p>Track, Analyze, and Optimize Performance</p>
      <div class="row">
        <div class="col-lg-8">
          <div class="chart">
            <apexchart
              v-if="isClient"
              type="bar"
              height="350"
              :options="analyticsOverview"
              :series="analytics"
            ></apexchart>
          </div>
        </div>
        <div class="col-lg-4">
          <ul class="content p-0 list-unstyled">
            <li>
              <div class="d-flex justify-content-between">
                <div>
                  <span class="d-block text-black"> New Users </span>
                  <h5 class="mb-0">19.5k</h5>
                </div>
                <div>
                  <span class="d-block text-black"> Goal Reached </span>
                  <h5 class="mb-0 text-body text-end">75%</h5>
                </div>
              </div>
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="new-users-progressbar"
                model-value="75"
              >
              </v-progress-linear>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <div>
                  <span class="d-block text-black"> Page Views </span>
                  <h5 class="mb-0">48k</h5>
                </div>
                <div>
                  <span class="d-block text-black"> Goal Reached </span>
                  <h5 class="mb-0 text-body text-end">45%</h5>
                </div>
              </div>
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="page-views-progressbar"
                model-value="45"
              >
              </v-progress-linear>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <div>
                  <span class="d-block text-black"> Page Sessions </span>
                  <h5 class="mb-0">33.3k</h5>
                </div>
                <div>
                  <span class="d-block text-black"> Goal Reached </span>
                  <h5 class="mb-0 text-body text-end">55%</h5>
                </div>
              </div>
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="page-sessions-progressbar"
                model-value="55"
              >
              </v-progress-linear>
            </li>
            <li>
              <div class="d-flex justify-content-between">
                <div>
                  <span class="d-block text-black"> Bounce Rate </span>
                  <h5 class="mb-0">22.45%</h5>
                </div>
                <div>
                  <span class="d-block text-black"> Goal Reached </span>
                  <h5 class="mb-0 text-body text-end">35%</h5>
                </div>
              </div>
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="bounce-rate-progressbar"
                model-value="75"
              >
              </v-progress-linear>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AnalyticsOverviewChart",
  setup() {
    const isClient = ref(false);
    const analytics = ref([
      {
        name: "New users",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "Page Views",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Page Sessions",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Bounce Rate",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const analyticsOverview = ref({
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
          borderRadius: 4,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      analytics,
      analyticsOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.analytics-overview-card {
  .v-card-header {
    margin-bottom: 25px;
    .card-subtitle {
      padding: 0;
      button {
        font-size: 14px;
        padding: 2px 15px;
        border-radius: 0;
        color: var(--bodyColor);
        border: 1px solid var(--borderColor);

        &.active,
        &:hover,
        &.mat-active {
          background-color: #ecf0ff;
        }
        &:first-child {
          border-right-width: 0;
          border-radius: 7px 0 0 7px;
        }
        &:last-child {
          border-radius: 0 7px 7px 0;
          border-left-width: 0;
        }
      }
    }
  }
  .analytics-overview-card-content {
    margin-top: -22px;

    p {
      font-size: 12px;
    }
    .chart {
      margin: {
        left: -15px;
        bottom: -18px;
      }
    }
    .content {
      margin: 20px 0 0 -22px;

      li {
        margin-bottom: 25px;

        span {
          font-size: 12px;
          margin-bottom: 5px;
        }
        h5 {
          font-size: 16px;
        }
      }
    }
    .apexcharts-canvas {
      .apexcharts-tooltip-series-group {
        &.apexcharts-active {
          padding-bottom: 4px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .analytics-overview-card {
    .mat-mdc-card-header {
      .mat-mdc-card-header-text {
        display: block;
      }
      .mat-mdc-card-subtitle {
        margin-top: 12px;

        .mdc-button {
          font-size: 12px;
          padding: 0 13px;
        }
      }
    }
    .mat-mdc-card-content {
      margin-top: -5px;

      .chart {
        margin: {
          top: -15px;
          bottom: -15px;
        }
      }
      .content {
        margin: 15px 0 0 0;

        li {
          margin-bottom: 15px;

          h5 {
            font-size: 14px;
          }
          .mat-mdc-progress-bar {
            margin-top: 8px;
          }
        }
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .content {
          margin-right: 0;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .analytics-overview-card {
    .mat-mdc-card-header {
      .mat-mdc-card-header-text {
        display: flex;
      }
      .mat-mdc-card-subtitle {
        margin-top: 0;
      }
    }
    .mat-mdc-card-content {
      margin-top: -18px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .analytics-overview-card {
    .mat-mdc-card-header {
      .mat-mdc-card-subtitle {
        .mdc-button {
          font-size: 13px;
        }
      }
    }
    .mat-mdc-card-content {
      margin-top: -20px;

      .content {
        margin: 20px 0 0 0;

        li {
          margin-bottom: 20px;
        }
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .content {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
