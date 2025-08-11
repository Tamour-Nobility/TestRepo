<template>
  <div>
    <div
      class="d-flex align-items-center justify-content-between position-relative"
    >
      <div class="mb-3">
        <span class="fs-14">New Registers</span>
        <h3 class="fs-20 mb-0">35.3k</h3>
      </div>
      <div class="chart-position for-sale" style="right: -10px; top: -30px">
        <apexchart
          v-if="isClient"
          type="area"
          height="95"
          :options="newRegisters"
          :series="registers"
        ></apexchart>
      </div>
    </div>
    <div
      class="d-flex align-items-center justify-content-between position-relative mt-1"
    >
      <span
        class="d-inline-block bg-success bg-opacity-10 text-success px-2 border border-success rounded-pill fs-12 fw-medium"
      >
        +15% Increase
      </span>
      <span class="fs-12">Last 7 days</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NewRegistersChart",
  setup() {
    const isClient = ref(false);
    const registers = ref([
      {
        name: "New Registers",
        data: [3, 12, 8, 10, 15, 10, 7],
      },
    ]);
    const newRegisters = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#C52B09"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 1,
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
          formatter: (val: string) => {
            return val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
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
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      registers,
      newRegisters,
    };
  },
});
</script>
