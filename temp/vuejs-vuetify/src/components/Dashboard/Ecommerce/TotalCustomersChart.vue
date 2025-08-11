<template>
  <v-card
    class="total-customers-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="title">
      <div
        class="d-flex d-md-block d-lg-flex align-items-center justify-space-between"
      >
        <div class="d-flex align-items-center">
          <span class="d-block"> Total Customers </span>
          <span class="info-badge d-inline-block"> +5.4 </span>
        </div>
        <span class="days d-block"> Last 7 days </span>
      </div>
      <h5 class="mb-0">1,528</h5>
    </div>
    <div class="chart ml-auto mr-auto">
      <apexchart
        v-if="isClient"
        type="line"
        height="190"
        :options="totalCustomers"
        :series="customers"
      ></apexchart>
    </div>
    <div class="info d-flex align-items-center justify-space-between">
      <span class="d-block"> 1 June </span><span class="d-block"> 7 June </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalCustomersChart",
  setup() {
    const isClient = ref(false);
    const customers = ref([
      {
        name: "Orders",
        data: [55, 50, 60, 45, 85, 80, 100],
      },
      {
        name: "Sales",
        data: [45, 38, 80, 65, 55, 75, 90],
      },
    ]);
    const totalCustomers = ref({
      chart: {
        height: 190,
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
      colors: ["#605DFF", "#C2CDFF"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      grid: {
        borderColor: "#ffffff",
      },
      xaxis: {
        categories: [
          "01 Jun",
          "02 Jun",
          "03 Jun",
          "04 Jun",
          "05 Jun",
          "06 Jun",
          "07 Jun",
        ],
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      customers,
      totalCustomers,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-customers-card {
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
      margin-top: 4px;
    }
  }
  .chart {
    max-width: 300px;
    margin-top: -50px;
    margin-bottom: -50px;
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
