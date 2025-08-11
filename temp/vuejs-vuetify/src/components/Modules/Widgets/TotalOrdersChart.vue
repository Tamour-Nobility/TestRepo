<template>
  <v-card
    class="total-orders-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="title">
      <div
        class="d-flex d-md-block d-lg-flex align-items-center justify-space-between"
      >
        <div class="d-flex align-items-center">
          <span class="d-block"> Total Orders </span>
          <span class="info-badge down d-inline-block"> -7.6% </span>
        </div>
        <span class="days d-block"> Last 7 days </span>
      </div>
      <h5 class="mb-0">$72,458</h5>
    </div>
    <div class="chart ml-auto mr-auto">
      <apexchart
        v-if="isClient"
        type="bar"
        height="120"
        :options="totalOrders"
        :series="orders"
      ></apexchart>
    </div>
    <ul class="pl-0 mb-0 mt-0 list-unstyled">
      <li
        class="completed position-relative d-flex aling-items-center justify-space-between"
      >
        <span class="d-block"> Completed </span>
        <span class="d-block"> 62% </span>
      </li>
      <li
        class="pending position-relative d-flex aling-items-center justify-space-between"
      >
        <span class="d-block"> Pending payment </span>
        <span class="d-block"> 38% </span>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrdersChart",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Completed",
        data: [80, 55, 60, 55, 80],
      },
      {
        name: "Pending",
        data: [50, 85, 60, 70, 60],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 120,
        toolbar: {
          show: false,
        },
      },
      colors: ["#1F64F1", "#C2CDFF"],
      plotOptions: {
        bar: {
          columnWidth: "85%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      grid: {
        borderColor: "#ffffff",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
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
    max-width: 150px;
    margin-top: -30px;
    margin-bottom: -30px;
  }
  ul {
    li {
      font-size: 13px;
      padding-left: 30px;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      &.completed {
        &::before {
          background: var(--primaryColor);
        }
      }
      &.pending {
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
