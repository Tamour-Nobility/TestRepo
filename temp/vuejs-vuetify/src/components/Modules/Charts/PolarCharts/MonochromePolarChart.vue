<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Monochrome Polar Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="polarArea"
        height="500"
        :options="monochromePolar"
        :series="monochrome"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MonochromePolarChart",
  setup() {
    const isClient = ref(false);
    const monochrome = ref([42, 39, 35, 29, 26]);
    const monochromePolar = ref({
      chart: {
        height: 500,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
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
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          // enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      monochrome,
      monochromePolar,
    };
  },
});
</script>
