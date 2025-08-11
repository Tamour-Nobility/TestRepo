<template>
  <div
    class="sales-box total-sales-box border-radius position-relative overflow-hidden"
  >
    <div class="content d-flex align-items-center">
      <div
        class="icon bg-primary-100 text-white text-center position-relative z-1"
      >
        <i class="ri-shopping-cart-line"></i>
      </div>
      <div class="title">
        <h6 class="fw-medium">$150,000</h6>
        <span class="d-block text-body"> Total Sales </span>
      </div>
    </div>
    <div class="info d-flex align-items-center">
      <span class="info-badge fw-medium d-inline-block position-relative">
        <i class="ri-arrow-up-fill"></i>
        12%
      </span>
      <span class="days d-block text-body"> from last week </span>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="area"
        height="120"
        :options="totalSales"
        :series="sales"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalSalesChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [3, 7, 7, 10, 9, 7, 20],
      },
    ]);
    const totalSales = ref({
      chart: {
        type: "area",
        height: 120,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 1,
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
          formatter: (val: string) => {
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
      sales,
      totalSales,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-box {
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid var(--borderColor);

  .content {
    .icon {
      margin-right: 15px;
      border-radius: 5px;
      font-size: 25px;
      height: 55px;
      width: 55px;

      i {
        left: 0;
        top: 50%;
        right: 0;
        position: absolute;
        transform: translateY(-50%);
      }
      &::before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        margin: 8px;
        content: "";
        position: absolute;
        border-radius: 5px;
        background: var(--primaryColor);
      }
    }
    h6 {
      font-size: 24px;
      margin-bottom: 3px;
    }
  }
  .info {
    margin-top: 45px;

    .info-badge {
      font-size: 12px;
      color: #1e8308;
      border-radius: 30px;
      padding: 2px 10px 2px 20px;
      background-color: #d8ffc8;
      border: 1px solid #82fc5a;

      i {
        top: 50%;
        left: 6px;
        font-size: 14px;
        margin-top: -1px;
        position: absolute;
        transform: translateY(-50%);
      }
      &.down {
        border-color: #ffa294;
        background: #ffc8c0;
        color: #ee3e08;
      }
    }
    .days {
      font-size: 12px;
      margin-left: 10px;
    }
  }
  &.total-sales-box {
    padding-bottom: 65px;

    .chart {
      left: 0;
      right: 0;
      bottom: -30px;
      position: absolute;
      margin: {
        left: -12px;
        right: -10px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-box {
    padding: 17px;

    .content {
      .icon {
        font-size: 22px;
      }
      h6 {
        font-size: 20px;
        margin-bottom: 5px;
      }
    }
    .info {
      margin-top: 20px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sales-box {
    padding: 20px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-box {
    .content {
      .icon {
        font-size: 23px;
      }
      h6 {
        font-size: 22px;
      }
    }
    .info {
      margin-top: 25px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sales-box {
    .info {
      margin-top: 30px;
    }
  }
}
</style>
