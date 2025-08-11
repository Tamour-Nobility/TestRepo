<template>
  <v-card
    class="balance-overview-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Balance Overview</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Current Year
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Current Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Current Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Current Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="balance-overview-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="350"
          :options="balanceOverview"
          :series="overview"
        ></apexchart>
      </div>
      <ul class="list pl-0 mb-0 list-unstyled text-center">
        <li class="d-inline-block">
          <div class="d-sm-flex align-items-center">
            <span class="fw-semibold text-primary"> $628k </span>
            <span class="d-block"> Revenue </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-sm-flex align-items-center">
            <span class="fw-semibold text-purple"> $379k </span>
            <span class="d-block"> Expenses </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-sm-flex align-items-center">
            <span class="fw-semibold text-success"> 11.2% </span>
            <span class="d-block"> Profit Ratio </span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BalanceOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([
      {
        name: "Revenue",
        data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80],
      },
      {
        name: "Expenses",
        data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120],
      },
    ]);
    const balanceOverview = ref({
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      colors: ["#AD63F6", "#605DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
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
        tickAmount: 6,
        max: 150,
        min: 0,
        labels: {
          formatter: (val) => {
            return "$" + val + "k";
          },
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
        show: true,
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      overview,
      balanceOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.balance-overview-card {
  .balance-overview-content {
    .chart {
      margin: {
        bottom: -15px;
        left: -10px;
      }
    }
    .list {
      margin-top: 10px;
      li {
        margin: {
          left: 15px;
          right: 15px;
        }
        span {
          &:nth-child(1) {
            margin-right: 10px;
            font-size: 20px;
          }
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .balance-overview-card {
    .balance-overview-content {
      .chart {
        margin: {
          bottom: -20px;
          left: -10px;
        }
      }
      .list {
        li {
          margin: {
            left: 10px;
            right: 10px;
          }
          span {
            &:nth-child(1) {
              font-size: 20px;
              margin-right: 0;
            }
            &:nth-child(2) {
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .balance-overview-card {
    .balance-overview-content {
      .list {
        li {
          span {
            &:nth-child(1) {
              margin-right: 8px;
            }
            &:nth-child(2) {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .balance-overview-card {
    .balance-overview-content {
      .list {
        li {
          span {
            &:nth-child(1) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
