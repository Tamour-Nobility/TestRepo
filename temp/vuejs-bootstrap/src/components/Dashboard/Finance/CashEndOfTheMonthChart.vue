<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <span class="d-block mb-3">Cash at End of the Month</span>
      <div style="margin: -37px 0 -5px 0">
        <div
          ref="cashAtEndOfTheMonthChart"
          style="width: 300px; height: 166px"
          class="m-auto"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "CashAtEndOfTheMonthChart",
  setup() {
    const cashAtEndOfTheMonthChart = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (cashAtEndOfTheMonthChart.value) {
        const chartInstance = echarts.init(cashAtEndOfTheMonthChart.value);

        const options = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            bottom: "0",
            left: "center",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: "#64748B",
            },
          },
          color: ["#37D80A", "#FD5812", "#605DFF"],
          series: [
            {
              name: "Cash at End of the Month",
              type: "pie",
              radius: ["40%", "70%"],
              center: ["50%", "70%"],
              startAngle: 180,
              endAngle: 360,
              data: [
                { value: 1048, name: "42.9%" },
                { value: 735, name: "20.0%" },
                { value: 580, name: "37.1%" },
              ],
            },
          ],
        };

        chartInstance.setOption(options);
      }
    });

    return {
      cashAtEndOfTheMonthChart,
    };
  },
});
</script>
