<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <div class="">
          <h3 class="mb-0">Emergency Room Visits</h3>
          <p>ER based on patient visits</p>
        </div>
        <select
          class="form-select month-select form-control w-135"
          aria-label="Default select example"
        >
          <option selected>Last Week</option>
          <option value="1">Last 60 Days</option>
          <option value="2">Last 90 Days</option>
        </select>
      </div>

      <div style="margin: -36px -21px -63px -18px">
        <div style="margin: 35px auto">
          <apexchart
            v-if="isClient"
            type="heatmap"
            height="235"
            :options="overallVisitors"
            :series="visitors"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "EmergencyRoomVisitsChart",
  setup() {
    const isClient = ref(false);
    const visitors = ref([
      {
        name: "08 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "09 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "10 PM",
        data: generateData(20, {
          min: 0,
          max: 0,
        }),
      },
      {
        name: "11 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "12 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "13 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "14 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
    ]);
    const overallVisitors = ref({
      chart: {
        height: 235,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
      ],
      plotOptions: {
        heatmap: {
          shadeIntensity: 1,
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      xaxis: {
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
        categories: [
          "W1",
          "W2",
          "W3",
          "W4",
          "W5",
          "W6",
          "W7",
          "W8",
          "W9",
          "W10",
          "W11",
          "W12",
          "W13",
          "W14",
          "W15",
          "W16",
          "W17",
          "W18",
          "W19",
          "W20",
        ],
      },
      yaxis: {
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

    function generateData(count: number, yrange: { min: any; max: any }) {
      return Array.from({ length: count }, (_, i) => ({
        x: (i + 1).toString(),
        y:
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min,
      }));
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      visitors,
      overallVisitors,
    };
  },
});
</script>
