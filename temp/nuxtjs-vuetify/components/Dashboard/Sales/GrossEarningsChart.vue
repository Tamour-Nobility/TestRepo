<template>
  <v-card
    class="gross-earnings-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="gross-earnings-card-content">
      <div class="gross-earnings d-flex align-items-center">
        <img
          src="~/assets/images/icons/gross-earnings.svg"
          alt="gross-earnings"
        />
        <div>
          <span class="d-block text-body text-uppercase"> Gross Earnings </span>
          <h4 class="mb-0 fw-semibold">
            $78,350.00
            <span class="text-success fw-medium position-relative">
              <i class="material-symbols-outlined"> trending_up </i>
              +2.3%
            </span>
          </h4>
        </div>
      </div>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="line"
          height="240"
          :options="grossEarnings"
          :series="earnings"
        ></apexchart>
      </div>
      <div class="info d-flex justify-content-between">
        <div>
          <span class="d-block text-body"> Total Balance </span>
          <h6 class="mb-0 fw-medium">$3,42,890</h6>
        </div>
        <div>
          <span class="d-block text-body"> Withdrawals </span>
          <h6 class="mb-0 fw-medium">$2,35,425</h6>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GrossEarningsChart",
  setup() {
    const isClient = ref(false);
    const earnings = ref([
      {
        name: "Earnings",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7],
      },
    ]);
    const grossEarnings = ref({
      chart: {
        height: 240,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "1W",
          "2W",
          "3W",
          "4W",
          "5W",
          "6W",
          "7W",
          "8W",
          "9W",
          "10W",
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      colors: ["#9135E8"],
      yaxis: {
        show: false,
        labels: {
          formatter: (val: any) => {
            return "$" + val + "K";
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      earnings,
      grossEarnings,
    };
  },
});
</script>

<style lang="scss" scoped>
.gross-earnings-card {
  background: #f3e8ff;

  .gross-earnings-card-content {
    .gross-earnings {
      div {
        margin-left: 10px;

        h4 {
          margin-top: 4px;
          font-size: 20px;

          span {
            top: -1px;
            font-size: 14px;
            color: #d8ffc8;
            margin-left: 2px;
            padding-left: 25px;

            i {
              left: 0;
              top: 50%;
              font-size: 20px;
              position: absolute;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .chart {
      margin: {
        top: -15px;
        bottom: -5px;
      }
    }
    .info {
      border-top: 1px solid #e9d5ff;
      padding-top: 25px;

      span {
        font-size: 12px;
      }
      h6 {
        font-size: 18px;
        margin-top: 3px;

        span {
          padding-left: 16px;

          i {
            left: 0;
            top: 50%;
            font-size: 16px;
            position: absolute;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .gross-earnings-card {
    .gross-earnings-card-content {
      .gross-earnings {
        div {
          h4 {
            margin-top: 5px;
            font-size: 18px;
          }
        }
      }
      .chart {
        margin: {
          top: -15px;
          bottom: -15px;
        }
      }
      .info {
        padding-top: 20px;

        h6 {
          font-size: 16px;

          span {
            i {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .gross-earnings-card {
    .gross-earnings-card-content {
      .gross-earnings {
        div {
          h4 {
            font-size: 19px;
          }
        }
      }
    }
  }
}
</style>
