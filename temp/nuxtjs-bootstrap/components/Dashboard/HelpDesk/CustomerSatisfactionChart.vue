<template>
  <div class="card bg-primary border-0 rounded-3 position-relative mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0 text-white">Customer Satisfaction</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90 text-white bg-transparent"
          :style="{
            backgroundPosition: 'right 0 center',
            backgroundImage: `url(${image})`,
          }"
          aria-label="Default select example"
        >
          <option class="text-secondary" selected>Last Month</option>
          <option class="text-secondary" value="1">Last Year</option>
        </select>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <div style="margin-bottom: -16px">
          <apexchart
            v-if="isClient"
            type="donut"
            height="145"
            :options="customerSatisfaction"
            :series="satisfaction"
          ></apexchart>
        </div>
        <img src="~/assets/images/satisfaction.png" alt="satisfaction" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import downWhiteIcon from "~/assets/images/down-white.svg";

export default defineComponent({
  name: "CustomerSatisfactionChart",
  setup() {
    const isClient = ref(false);
    const satisfaction = ref([50, 15, 75, 50]);
    const image = downWhiteIcon;
    const customerSatisfaction = ref({
      chart: {
        height: 145,
        type: "donut",
      },
      labels: ["Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"],
      colors: ["#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"],
      stroke: {
        width: 1,
        show: true,
        colors: ["transparent"],
      },
      legend: {
        show: false,
        position: "top",
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
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "73%",
            labels: {
              show: true,
              name: {
                color: "#fff",
              },
              value: {
                show: true,
                color: "#fff",
                fontSize: "28px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#fff",
                label: "Overall",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      satisfaction,
      customerSatisfaction,
      image,
    };
  },
});
</script>
