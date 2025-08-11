<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <span class="d-block mb-2">Critical Patients</span>
      <h3 class="fs-18 mb-3">780</h3>

      <div style="margin: 0 -10px 0 -12px">
        <apexchart
          v-if="isClient"
          type="area"
          height="130"
          :options="criticalPatients"
          :series="patients"
        ></apexchart>
      </div>

      <div class="d-flex align-items-center mb-2 mt-2">
        <span
          style="width: 12px; height: 2px"
          class="bg-primary d-inline-block me-2"
        ></span>
        <span>Cardiology: <span class="fw-semibold">280</span></span>
      </div>
      <div class="d-flex align-items-center mb-0">
        <span
          style="width: 12px; height: 2px"
          class="bg-danger d-inline-block me-2"
        ></span>
        <span>Orthopedics: <span class="fw-semibold">600</span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CriticalPatientsChart",
  setup() {
    const isClient = ref(false);
    const patients = ref([
      {
        name: "Orthopedics",
        data: [
          10, 15, 21, 25, 19, 15, 25, 20, 20, 15, 21, 25, 17, 18, 15, 20, 15,
          20, 18, 13,
        ],
      },
      {
        name: "Cardiology",
        data: [3, 7, 7, 10, 9, 7, 15, 3, 7, 7, 10, 9, 7, 13, 3, 7, 7, 10, 9, 7],
      },
    ]);
    const criticalPatients = ref({
      chart: {
        type: "area",
        height: 130,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#FD5812", "#796DF6"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 2,
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
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
        ],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
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
        max: 25,
        min: 0,
        labels: {
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      patients,
      criticalPatients,
    };
  },
});
</script>
