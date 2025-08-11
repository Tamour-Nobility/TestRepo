<template>
  <v-card
    class="patient-bg-age-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Patient by Age</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-none p-0"
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
    <div class="patient-bg-age-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="pie"
          height="298"
          :options="patientByAge"
          :series="patient"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PatientByAgeChart",
  setup() {
    const isClient = ref(false);
    const patient = ref([30, 40, 20, 10]);
    const patientByAge = ref({
      chart: {
        height: 298,
        type: "pie",
      },
      labels: ["0-18 Years", "19-40 Years", "41-60 Years", "60+ Years"],
      colors: ["#AD63F6", "#605DFF", "#25B003", "#3584FC"],
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        dropShadow: {
          enabled: false,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
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
        formatter: function (seriesName: any, opts: any) {
          return [
            seriesName,
            ":",
            opts.w.globals.series[opts.seriesIndex],
            "%",
          ];
        },
        onItemClick: {
          toggleDataSeries: false,
        },
        onItemHover: {
          highlightDataSeries: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      patient,
      patientByAge,
    };
  },
});
</script>
