<template>
  <v-card
    class="real-time-sales-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Real-Time Sales</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Today
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
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
    <div class="real-time-sales-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="240"
          :options="realTimeSales"
          :series="sales"
        ></apexchart>
      </div>
      <div class="info d-flex justify-content-between">
        <div>
          <span class="d-block text-body"> Total Sales </span>
          <h6 class="mb-0 fw-medium">
            $150.7k
            <span class="text-success position-relative">
              <i class="ri-arrow-up-fill"></i>
              12%
            </span>
          </h6>
        </div>
        <div>
          <span class="d-block text-body"> Avg. Sales Per Day </span>
          <h6 class="mb-0 fw-medium">
            $19.2k
            <span class="text-danger position-relative">
              <i class="ri-arrow-down-fill"></i>
              7%
            </span>
          </h6>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RealTimeSalesChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
      },
    ]);
    const realTimeSales = ref({
      chart: {
        height: 240,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "22px",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["#64748B"],
        },
      },
      xaxis: {
        show: false,
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      colors: ["#3584FC"],
      yaxis: {
        tickAmount: 5,
        show: false,
        max: 11,
        min: 0,
        labels: {
          formatter: (val: any) => {
            return val + "%";
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      realTimeSales,
    };
  },
});
</script>

<style lang="scss" scoped>
.real-time-sales-card {
  .real-time-sales-card-content {
    .chart {
      margin-top: -25px;
    }
    .info {
      border-top: 1px solid var(--borderColor);
      padding-top: 30px;

      span {
        font-size: 12px;
      }
      h6 {
        font-size: 18px;
        margin-top: 5px;

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
  .real-time-sales-card {
    .real-time-sales-card-content {
      .chart {
        margin: {
          top: -25px;
          bottom: -8px;
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
</style>
