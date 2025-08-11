<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Basic Bar Area</h3>
      <div id="basic_bar"></div>
      <apexchart
        v-if="isClient"
        type="bar"
        height="350"
        :options="basicBarArea"
        :series="basic"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicBarAreaChart",
  setup() {
    const isClient = ref(false);
    const basic = ref([
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ]);
    const basicBarArea = ref({
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      basic,
      basicBarArea,
    };
  },
});
</script>
