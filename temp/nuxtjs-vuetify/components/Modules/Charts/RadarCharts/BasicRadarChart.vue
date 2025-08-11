<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Basic Radar Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="radar"
        height="350"
        :options="bsicRadar"
        :series="bsic"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicRadarChart",
  setup() {
    const isClient = ref(false);
    const bsic = ref([
      {
        name: "Trezo",
        data: [80, 50, 30, 40, 100, 20],
      },
    ]);
    const bsicRadar = ref({
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: true,
        },
      },
      title: {
        text: "Basic Radar Chart",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
      colors: ["#605DFF"],
      yaxis: {
        show: true,
        tickAmount: 4,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      bsic,
      bsicRadar,
    };
  },
});
</script>
