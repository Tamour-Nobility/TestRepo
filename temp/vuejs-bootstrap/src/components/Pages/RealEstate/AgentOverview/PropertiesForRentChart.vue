<template>
  <apexchart
    v-if="isClient"
    type="radialBar"
    height="170"
    :options="propertiesForRent"
    :series="rent"
  ></apexchart>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PropertiesForRentChart",
  setup() {
    const isClient = ref(false);
    const rent = ref([35]);
    const propertiesForRent = ref({
      chart: {
        height: 170,
        width: 170,
        type: "radialBar",
      },
      colors: ["#605DFF"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "35%",
            background: "#F5F7F8",
            margin: 10,
          },
          track: {
            background: "#F5F7F8",
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false,
            },
            value: {
              show: true,
              offsetY: 5,
              color: "#3A4252",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "Inter",
            },
          },
        },
      },
      stroke: {
        lineCap: "0",
      },
      labels: ["Status"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rent,
      propertiesForRent,
    };
  },
});
</script>
