<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center position-relative"
      >
        <div class="flex-grow-1 me-3">
          <span class="d-block mb-2">Conversion</span>
          <h3 class="fs-24 fw-bold">32.5%</h3>
          <span
            class="bg-success bg-opacity-10 border border-success rounded-pill text-success px-2 fs-12 fw-medium d-inline-block"
          >
            +1.4%
          </span>
        </div>
        <div
          class="position-absolute top-50 end-0 translate-middle-y saas-chart-position"
        >
          <div id="conversion" style="width: 103px"></div>
          <apexchart
            v-if="isClient"
            style="width: 130px"
            type="bar"
            height="100"
            :options="conversionChart"
            :series="conversion"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ConversionChart",
  setup() {
    const isClient = ref(false);
    const conversion = ref([
      {
        name: "Conversion",
        data: [20, 40, 25, 60, 30, 50],
      },
      {
        name: "Not Conversion",
        data: [20, 20, 25, 15, 35, 25],
      },
    ]);
    const conversionChart = ref({
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
          shape: "diamond",
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
      conversion,
      conversionChart,
    };
  },
});
</script>
