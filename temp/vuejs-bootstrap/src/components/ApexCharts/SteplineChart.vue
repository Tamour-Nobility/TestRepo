<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Stepline Chart</h3>
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="steplineChart"
        :series="stepline"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SteplineChart",
  setup() {
    const isClient = ref(false);
    const stepline = ref([
      {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ]);
    const steplineChart = ref({
      chart: {
        type: "line",
        height: 350,
      },
      stroke: {
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Stepline Chart",
        align: "left",
        style: {
          fontSize: "14px",
          fontWeight: "500",
          color: "#64748B",
        },
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      stepline,
      steplineChart,
    };
  },
});
</script>
