<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Patient by Age</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last Week</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <div style="margin-top: -9px">
        <apexchart
          v-if="isClient"
          type="pie"
          height="331"
          :options="patientByAge"
          :series="patient"
        ></apexchart>
      </div>
    </div>
  </div>
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
        height: 331,
        type: "pie",
      },
      labels: ["0-18 Years", "19-40 Years", "41-60 Years", "60+ Years"],
      colors: ["#AD63F6", "#605DFF", "#25B003", "#3584FC"],
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
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
        formatter: function (
          seriesName: any,
          opts: {
            w: { globals: { series: { [x: string]: any } } };
            seriesIndex: string | number;
          }
        ) {
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
          formatter: function (val: string) {
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
