<template>
  <v-card
    class="total-orders-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="total-orders-content">
      <div class="title">
        <span class="d-block"> Total Orders </span>
        <h5 class="mb-0">$72,458</h5>
      </div>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="110"
          :options="totalOrders"
          :series="orders"
        ></apexchart>
      </div>
      <div class="d-flex align-items-center justify-space-between">
        <span class="info-badge d-inline-block"> +25% </span>
        <span class="days d-block"> Last 90 days </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrders",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Total Orders",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 110,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        },
      },
      colors: ["#0dcaf0"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        width: 2,
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
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
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
          formatter: function (val) {
            return "$" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      orders,
      totalOrders,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-orders-card {
  .total-orders-content {
    position: relative;

    .title {
      margin-bottom: 35px;

      h5 {
        margin-top: 5px;
        font-size: 20px;
      }
    }
    .chart {
      top: -30px;
      right: -10px;
      max-width: 120px;
      position: absolute;
    }
    .info-badge {
      font-size: 13px;
      color: #1e8308;
      padding: 3px 8.3px;
      border-radius: 100px;
      border: 1px solid #82fc5a;
      background-color: #d8ffc8;

      &.down {
        border-color: #ffcea9;
        color: var(--dangerColor);
        background-color: #ffe1dd;
      }
    }
    .days {
      font-size: 13px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .total-orders-card {
    .total-orders-content {
      .title {
        margin-bottom: 20px;

        h5 {
          font-size: 18px;
        }
      }
      .info-badge {
        font-size: 12px;
        padding: 3px 8px;
      }
      .days {
        font-size: 12px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .total-orders-card {
    .total-orders-content {
      .title {
        margin-bottom: 25px;

        h5 {
          margin-top: 8px;
          font-size: 18px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .total-orders-card {
    .total-orders-content {
      .chart {
        top: -34px;
        right: -12px;
        max-width: 100px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
