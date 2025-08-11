<template>
  <div
    class="revenue-box total-revenue-box border-radius position-relative overflow-hidden"
  >
    <div class="content d-flex align-items-center">
      <div
        class="icon bg-orange-100 text-white text-center position-relative z-1"
      >
        <i class="ri-money-dollar-circle-line"></i>
      </div>
      <div class="title">
        <h6 class="fw-medium">$250,000</h6>
        <span class="d-block text-body"> Total Revenue </span>
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
        type="line"
        height="120"
        :options="totalRevenue"
        :series="revenue"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Revenue",
        data: [0, 35, 25, 45, 30, 45, 25, 45, 70],
      },
    ]);
    const totalRevenue = ref({
      chart: {
        height: 120,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FD5812"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      markers: {
        size: 3,
        strokeWidth: 0,
        hover: {
          size: 5,
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
          formatter: (val: any) => {
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
        horizontalAlign: "center",
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
      revenue,
      totalRevenue,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-box {
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
        background: var(--orangeColor);
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
  &.total-revenue-box {
    padding-bottom: 65px;

    .chart {
      left: 15px;
      right: 15px;
      bottom: -30px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .revenue-box {
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
  .revenue-box {
    padding: 20px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .revenue-box {
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
  .revenue-box {
    .info {
      margin-top: 30px;
    }
  }
}
</style>
