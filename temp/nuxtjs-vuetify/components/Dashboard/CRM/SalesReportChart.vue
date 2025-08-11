<template>
  <v-card
    class="sales-report-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sales Report</h5>
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
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="line"
        height="360"
        :options="salesReport"
        :series="report"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesReportChart",
  setup() {
    const isClient = ref(false);
    const report = ref([
      {
        name: "Online",
        data: [45, 23, 62, 60, 110, 100, 135],
      },
      {
        name: "Offline",
        data: [20, 58, 24, 50, 40, 70, 97],
      },
    ]);
    const salesReport = ref({
      chart: {
        height: 360,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#FE7A36"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
      markers: {
        size: 4,
        strokeWidth: 0,
        shape: ["circle", "square"],
        hover: {
          size: 5,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
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
      report,
      salesReport,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-report-card {
  .chart {
    margin: {
      bottom: -15px;
      left: -10px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-report-card {
    .chart {
      margin-left: -15px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-report-card {
    .chart {
      margin-left: -13px;
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
