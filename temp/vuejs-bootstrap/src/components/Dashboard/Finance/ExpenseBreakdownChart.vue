<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <h3 class="mb-4">Expense Breakdown</h3>
      <div style="margin: -70px 0 0 0">
        <div
          ref="expenseBreakdown"
          style="width: 376px; height: 345px"
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
  name: "ExpenseBreakdownChart",
  setup() {
    const expenseBreakdown = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (expenseBreakdown.value) {
        const chartInstance = echarts.init(expenseBreakdown.value);

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
          color: ["#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF"],
          series: [
            {
              name: "Expense Breakdown",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "Marketing" },
                { value: 735, name: "Sales" },
                { value: 580, name: "Salaries" },
                { value: 484, name: "Miscellaneous" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };

        chartInstance.setOption(options);
      }
    });

    return {
      expenseBreakdown,
    };
  },
});
</script>
