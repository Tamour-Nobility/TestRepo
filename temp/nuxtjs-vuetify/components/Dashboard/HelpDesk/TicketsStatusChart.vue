<template>
  <v-card
    class="tickets-status-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Tickets Status</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="status-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="410"
          :options="ticketsStatus"
          :series="status"
        ></apexchart>
      </div>
      <div class="info">
        <h6 class="fw-normal">Avg. 1.5k</h6>
        <span class="d-block sub-title text-body"> Tickets Weekly Solved </span>
        <ul class="mb-0 list-unstyled pl-0">
          <li>
            <div class="d-flex align-items-center text-body">
              <div class="dot bg-primary"></div>
              Solved
            </div>
            <span class="d-block fw-medium text-black"> 1.5k </span>
          </li>
          <li>
            <div class="d-flex align-items-center text-body">
              <div class="dot bg-secondary"></div>
              In Progress
            </div>
            <span class="d-block fw-medium text-black"> 4.7k </span>
          </li>
          <li>
            <div class="d-flex align-items-center text-body">
              <div class="dot bg-purple"></div>
              Pending
            </div>
            <span class="d-block fw-medium text-black"> 780 </span>
          </li>
          <li>
            <div class="d-flex align-items-center text-body">
              <div class="dot bg-danger"></div>
              Others
            </div>
            <span class="d-block fw-medium text-black"> 320 </span>
          </li>
        </ul>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TicketsStatusChart",
  setup() {
    const isClient = ref(false);
    const status = ref([
      {
        name: "Solved",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "In Progress",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Pending",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Others",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const ticketsStatus = ref({
      chart: {
        type: "bar",
        height: 410,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + " Tickets";
          },
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      status,
      ticketsStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.tickets-status-card {
  .status-card-content {
    z-index: 1;
    position: relative;
    padding-right: 230px;

    .chart {
      margin: {
        top: -20px;
        left: -15px;
        bottom: -22px;
      }
    }
    .info {
      right: 0;
      top: 20px;
      width: 175px;
      position: absolute;

      h6 {
        font-size: 18px;
        margin-bottom: 5px;
      }
      ul {
        margin-top: 35px;

        li {
          font-size: 13px;
          margin-bottom: 20px;

          .dot {
            width: 11px;
            height: 11px;
            margin-right: 8px;
            border-radius: 3px;
          }
          span {
            font-size: 18px;
            margin-top: 5px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    &::before {
      top: 0;
      bottom: 0;
      width: 1px;
      content: "";
      z-index: -1;
      right: 215px;
      position: absolute;
      background: #eceef2;
      margin: {
        top: -55px;
        bottom: -3px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .tickets-status-card {
    .status-card-content {
      padding-right: 0;

      .chart {
        margin: {
          top: -20px;
          left: -15px;
          bottom: -22px;
        }
      }
      .info {
        top: 0;
        width: auto;
        margin-top: 17px;
        position: relative;

        h6 {
          font-size: 16px;
        }
        ul {
          margin-top: 0;
          flex-wrap: wrap;
          display: flex;

          li {
            margin: {
              right: 20px;
              bottom: 0;
              top: 17px;
            }
            span {
              font-size: 16px;
            }
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tickets-status-card {
    .status-card-content {
      padding-right: 220px;

      .info {
        top: 20px;
        width: 170px;

        h6 {
          font-size: 17px;
        }
        ul {
          margin-top: 20px;

          li {
            margin-bottom: 17px;

            span {
              font-size: 17px;
            }
          }
        }
      }
      &::before {
        right: 195px;
        margin-top: -50px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .tickets-status-card {
    .status-card-content {
      padding-right: 0;

      .info {
        top: 0;
        width: auto;
        margin-top: 25px;
        position: relative;

        h6 {
          margin-bottom: 7px;
        }
        ul {
          flex-wrap: wrap;
          display: flex;
          margin-top: 0;

          li {
            margin: {
              right: 30px;
              bottom: 0;
              top: 20px;
            }
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .tickets-status-card {
    .status-card-content {
      padding-right: 0;

      .info {
        top: 0;
        width: auto;
        margin-top: 25px;
        position: relative;

        h6 {
          margin-bottom: 7px;
        }
        ul {
          flex-wrap: wrap;
          display: flex;
          margin-top: 0;

          li {
            margin: {
              right: 30px;
              bottom: 0;
              top: 20px;
            }
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
