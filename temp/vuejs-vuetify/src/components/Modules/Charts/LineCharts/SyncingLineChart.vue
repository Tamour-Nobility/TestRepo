<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Stepline Line Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="line"
        height="160"
        :options="syncingLine"
        :series="syncing"
      ></apexchart>
      <apexchart
        v-if="isClient"
        type="line"
        height="160"
        :options="syncingLine2"
        :series="syncing2"
      ></apexchart>
      <apexchart
        v-if="isClient"
        type="area"
        height="160"
        :options="syncingLine3"
        :series="syncing3"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { generateDayWiseTimeSeries } from "@/utils";

export default defineComponent({
  name: "SyncingLineChart",
  setup() {
    const isClient = ref(false);
    const syncing = ref([
      {
        name: "chart1",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]);
    const syncing2 = ref([
      {
        name: "chart2",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 30,
        }),
      },
    ]);
    const syncing3 = ref([
      {
        name: "chart3",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]);
    const syncingLine = ref({
      chart: {
        group: "social",
        type: "line",
        height: 160,
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      tooltip: {
        followCursor: false,
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
      grid: {
        show: true,
        clipMarkers: false,
        borderColor: "#ECEEF2",
      },
      yaxis: {
        tickAmount: 2,
        labels: {
          show: true,
          minWidth: 40,
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
      xaxis: {
        type: "datetime",
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
    });
    const syncingLine2 = ref({
      chart: {
        group: "social",
        type: "line",
        height: 160,
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      tooltip: {
        followCursor: false,
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
      grid: {
        show: true,
        clipMarkers: false,
        borderColor: "#ECEEF2",
      },
      yaxis: {
        tickAmount: 2,
        labels: {
          show: true,
          minWidth: 40,
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
      xaxis: {
        type: "datetime",
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
    });
    const syncingLine3 = ref({
      chart: {
        group: "social",
        type: "area",
        height: 160,
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      toolbar: {
        tools: {
          selection: false,
        },
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
      },
      tooltip: {
        followCursor: false,
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
      grid: {
        show: true,
        clipMarkers: false,
        borderColor: "#ECEEF2",
      },
      yaxis: {
        tickAmount: 2,
        labels: {
          show: true,
          minWidth: 40,
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
      xaxis: {
        type: "datetime",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      syncing,
      syncing2,
      syncing3,
      syncingLine,
      syncingLine2,
      syncingLine3,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin: {
    top: -4px;
    left: -35px;
    bottom: -20px !important;
  }
}
</style>
