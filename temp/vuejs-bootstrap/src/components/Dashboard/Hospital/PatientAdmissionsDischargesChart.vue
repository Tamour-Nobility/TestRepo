<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Patient Admissions & Discharges</h3>
        <select
          class="form-select month-select form-control w-135"
          aria-label="Default select example"
        >
          <option selected>Last Week</option>
          <option value="1">Last 60 Days</option>
          <option value="2">Last 90 Days</option>
        </select>
      </div>

      <div style="margin: -5px -9px -28px -17px">
        <apexchart
          v-if="isClient"
          type="area"
          height="345"
          :options="patientAdmissionsDischarges"
          :series="patientAdmissions"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PatientAdmissionsDischargesChart",
  setup() {
    const isClient = ref(false);
    const patientAdmissions = ref([
      {
        name: "Admissions",
        data: [170, 420, 300, 550, 550, 650, 820],
      },
      {
        name: "Discharges",
        data: [320, 300, 650, 400, 750, 650, 600],
      },
    ]);
    const patientAdmissionsDischarges = ref({
      chart: {
        type: "area",
        height: 345,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5", "#EC1F00"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2],
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
        strokeDashArray: 10,
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        tickAmount: 5,
        max: 1000,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
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
      patientAdmissions,
      patientAdmissionsDischarges,
    };
  },
});
</script>
