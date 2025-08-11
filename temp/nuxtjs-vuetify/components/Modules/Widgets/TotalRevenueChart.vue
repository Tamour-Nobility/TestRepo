<template>
  <v-card
    class="total-revenue-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="title">
      <div
        class="d-flex d-md-block d-lg-flex align-items-center justify-space-between"
      >
        <div class="d-flex align-items-center">
          <span class="d-block"> Total Revenue </span
          ><span class="info-badge d-inline-block"> +10% </span>
        </div>
        <span class="days d-block"> Last 30 days </span>
      </div>
      <h5 class="mb-0">$165,458</h5>
    </div>
    <div class="chart ml-auto mr-auto">
      <apexchart
        v-if="isClient"
        type="bar"
        height="100"
        :options="totalRevenue"
        :series="revenue"
      ></apexchart>
    </div>
    <ul class="pl-0 mb-0 mt-0 list-unstyled">
      <li
        class="fashion position-relative d-flex aling-items-center justify-space-between"
      >
        <span class="d-block"> Fashion </span><span class="d-block"> 75% </span>
      </li>
      <li
        class="others position-relative d-flex aling-items-center justify-space-between"
      >
        <span class="d-block"> Others </span><span class="d-block"> 25% </span>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Fashion",
        data: [20, 40, 25, 60, 30, 50],
      },
      {
        name: "Others",
        data: [20, 20, 25, 15, 35, 25],
      },
    ]);
    const totalRevenue = ref({
      chart: {
        type: "bar",
        height: 100,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "55%",
        },
      },
      colors: ["#605DFF", "#C2CDFF"],
      grid: {
        borderColor: "#ffffff",
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
        show: false,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
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
        },
      },
      fill: {
        opacity: 1,
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
.total-revenue-card {
  .title {
    .info-badge {
      font-size: 13px;
      color: #1e8308;
      margin-left: 10px;
      padding: 1px 8.3px;
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
    h5 {
      font-size: 20px;
    }
  }
  .chart {
    max-width: 200px;
    margin-top: -22px;
    margin-bottom: -13px;
  }
  ul {
    li {
      font-size: 13px;
      padding-left: 30px;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      &.fashion {
        &::before {
          background: var(--primaryColor);
        }
      }
      &.others {
        &::before {
          background: #c2cdff;
        }
      }
      &::before {
        left: 0;
        top: 50%;
        content: "";
        width: 20px;
        height: 5px;
        border-radius: 7px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
