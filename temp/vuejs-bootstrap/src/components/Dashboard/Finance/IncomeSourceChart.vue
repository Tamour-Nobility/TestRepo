<template>
  <div
    class="card border-0 rounded-3 mb-4"
    style="background: linear-gradient(120deg, #343a46 0%, #23272e 99.29%)"
  >
    <div class="card-body p-4">
      <div class="d-flex justify-content-between flex-wrap gap-2 mb-4">
        <h3 class="fs-18 mb-0 text-white">Income Source</h3>
        <span class="fs-12 text-white">Last 30 days</span>
      </div>

      <div style="margin: -51px 0 -5px 0">
        <div
          ref="incomeSource"
          style="width: 300px; height: 250px"
          class="mx-auto"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "IncomeSourceChart",
  setup() {
    const incomeSource = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (incomeSource.value) {
        const chartInstance = echarts.init(incomeSource.value);

        const options = {
          legend: {
            bottom: "0",
            left: "center",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
          },
          toolbox: {
            show: false,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          color: ["#3584FC", "#FD5812", "#3584FC", "#FD5812"],
          series: [
            {
              name: "Income Source",
              type: "pie",
              radius: [15, 70],
              center: ["50%", "50%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 8,
              },
              data: [
                { value: 40, name: "Product Sales" },
                { value: 15, name: "Investments" },
                { value: 35, name: "Salary" },
                { value: 20, name: "Consulting" },
              ],
            },
          ],
        };

        chartInstance.setOption(options);
      }
    });

    return {
      incomeSource,
    };
  },
});
</script>
