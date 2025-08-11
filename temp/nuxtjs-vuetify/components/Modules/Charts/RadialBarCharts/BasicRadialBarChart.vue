<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Basic RadialBar Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="350"
        :options="basicRadialBar"
        :series="basic"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicRadialBarChart",
  setup() {
    const isClient = ref(false);
    const basic = ref([70]);
    const basicRadialBar = ref({
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["Cricket"],
      colors: ["#605DFF"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      basic,
      basicRadialBar,
    };
  },
});
</script>
