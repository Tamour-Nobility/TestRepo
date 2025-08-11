<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Dashed</h3>
      <div id="page_statistics"></div>
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="dashedChart"
        :series="dashed"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "DashedChart",
  setup() {
    const isClient = ref(false);
    const dashed = ref([
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ]);
    const dashedChart = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: {
        text: "Page Statistics",
        align: "left",
        style: {
          fontSize: "14px",
          fontWeight: "500",
          color: "#64748B",
        },
      },
      legend: {
        tooltipHoverFormatter: function (
          val: string,
          opts: {
            w: {
              globals: { series: { [x: string]: { [x: string]: string } } };
            };
            seriesIndex: string | number;
            dataPointIndex: string | number;
          }
        ) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val: string) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val: string) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      dashed,
      dashedChart,
    };
  },
});
</script>
