<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Performance Overview</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color"
          aria-label="Default select example"
        >
          <option selected>Last Week</option>
          <option value="1">Last 60 Days</option>
          <option value="2">Last 90 Days</option>
        </select>
      </div>
      <div style="margin: -25px -10px -17px -17px">
        <apexchart
          v-if="isClient"
          type="bubble"
          height="351"
          :options="performanceOverview"
          :series="performance"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface DataPoint {
  name: string;
  data: Array<[number, number, number]>;
}

export default defineComponent({
  name: "PerformanceOverviewChart",
  setup() {
    const isClient = ref(false);

    const performance = ref<DataPoint[]>([
      {
        name: "Social Campaigns",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Email Newsletter",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "TV Campaign",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Google Ads",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Courses",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Radio",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]);

    const performanceOverview = ref({
      chart: {
        type: "bubble",
        height: 351,
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#757DFF",
        "#5DA8FF",
        "#BF85FB",
        "#1E8308",
        "#FE7A36",
        "#174EDE",
      ],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      grid: {
        borderColor: "#ECEEF2",
      },
      xaxis: {
        tickAmount: 10,
        type: "category",
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 70,
        min: 0,
        labels: {
          formatter: (val: number) => {
            return "$" + val / 1 + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
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
          offsetX: -2,
          offsetY: -0.5,
          size: 7,
          shape: "square", // circle, square, line, plus, cross
          radius: 5,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
    });

    function generateData(
      baseval: number,
      count: number,
      yrange: { min: number; max: number }
    ): Array<[number, number, number]> {
      const series: Array<[number, number, number]> = [];
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        baseval += 86400000;
      }
      return series;
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      performance,
      performanceOverview,
    };
  },
});
</script>
