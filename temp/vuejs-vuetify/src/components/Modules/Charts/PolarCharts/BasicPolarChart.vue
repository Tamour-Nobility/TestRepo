<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Basic Polar Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="polarArea"
        height="500"
        :options="basicPolar"
        :series="bsic"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicPolarChart",
  setup() {
    const isClient = ref(false);
    const bsic = ref([14, 23, 21, 17, 15, 10, 12, 17, 21]);
    const basicPolar = ref({
      chart: {
        height: 500,
        type: "polarArea",
      },
      stroke: {
        colors: ["#ffffff"],
      },
      fill: {
        opacity: 0.8,
      },
      labels: [
        "Bananas",
        "Apples",
        "Grapes",
        "Papayas",
        "Mangos",
        "Blueberrys",
        "Cherrys",
        "Oranges",
        "Pineapples",
      ],
      grid: {
        show: true,
        borderColor: "#ECEEF2",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      bsic,
      basicPolar,
    };
  },
});
</script>
