<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Strocked Circular Gauge RadialBar Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="370"
        :options="strockedCircular"
        :series="strocked"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "StrockedCircularGaugeRadialBarChart",
  setup() {
    const isClient = ref(false);
    const strocked = ref([67]);
    const strockedCircular = ref({
      chart: {
        height: 370,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function (val: string) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [0, 50, 65, 91]
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Median Ratio"],
      colors: ["#605DFF"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      strocked,
      strockedCircular,
    };
  },
});
</script>
