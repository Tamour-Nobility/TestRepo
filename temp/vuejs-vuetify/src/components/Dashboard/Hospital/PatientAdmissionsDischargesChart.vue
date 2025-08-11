<template>
  <v-card
    class="patient-admissions-discharges-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Patient Admissions & Discharges</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Last Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Last Day
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="patient-admissions-discharges-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="338"
          :options="patientAdmissionsDischarges"
          :series="patientAdmissions"
        ></apexchart>
      </div>
    </div>
  </v-card>
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
        height: 338,
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

<style lang="scss" scoped>
.patient-admissions-discharges-card {
  .patient-admissions-discharges-card-content {
    .chart {
      margin: {
        bottom: -15px;
        left: -15px;
        top: -5px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .patient-admissions-discharges-card {
    .patient-admissions-discharges-card-content {
      .v-card-header {
        display: block;

        h5 {
          margin-bottom: 12px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .patient-admissions-discharges-card {
    .patient-admissions-discharges-card-content {
      .v-card-header {
        display: flex;

        h5 {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
