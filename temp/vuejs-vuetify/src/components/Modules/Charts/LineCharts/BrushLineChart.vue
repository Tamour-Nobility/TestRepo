<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Brush Line Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="line"
        height="190"
        :options="brushLine"
        :series="brush"
      ></apexchart>
      <apexchart
        v-if="isClient"
        type="line"
        height="145"
        :options="brushLine2"
        :series="brush2"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { generateDayWiseTimeSeries } from "@/utils";

export default defineComponent({
  name: "BrushLineChart",
  setup() {
    const isClient = ref(false);
    const brush = ref([
      {
        name: "series2",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          185,
          {
            min: 0,
            max: 20,
          }
        ),
      },
    ]);

    const brush2 = ref([
      {
        name: "series1",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          185,
          {
            min: 0,
            max: 20,
          }
        ),
      },
    ]);
    const brushLine = ref({
      chart: {
        id: "chart1",
        type: "line",
        height: 190,
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#605DFF"],
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
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
      yaxis: {
        tickAmount: 2,
        labels: {
          show: true,
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
    const brushLine2 = ref({
      chart: {
        id: "chart2",
        height: 145,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("19 Jun 2017").getTime(),
            max: new Date("14 Aug 2017").getTime(),
          },
        },
      },
      colors: ["#0f79f3"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: "#e0e0e0",
        row: {
          colors: ["#f4f6fc", "transparent"],
          opacity: 0.5,
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
      yaxis: {
        tickAmount: 2,
        labels: {
          show: true,
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
      brush,
      brushLine,
      brush2,
      brushLine2,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin: {
    left: -13px;
    bottom: -20px !important;
  }
}
</style>
