<template>
  <div class="card bg-white border-0 rounded-3 mb-4 stats-box">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <div>
          <div class="d-flex">
            <span>Total Customers</span>
            <span class="count up">+5.4</span>
          </div>
          <h3 class="fs-20 mt-1 mb-0">1,528</h3>
        </div>
        <span class="fs-12">Last 7 days</span>
      </div>
      <div
        style="
          max-width: 290px;
          margin: auto;
          margin-top: -32px;
          margin-bottom: -19px;
        "
      >
        <apexchart
          v-if="isClient"
          type="line"
          height="140"
          :options="totalCustomers"
          :series="customers"
        ></apexchart>
      </div>
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <span class="fs-12">1 June</span>
        <span class="fs-12">7 June</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalCustomersChart",
  setup() {
    const isClient = ref(false);
    const customers = ref([
      {
        name: "Orders",
        data: [55, 50, 60, 45, 85, 80, 100],
      },
      {
        name: "Sales",
        data: [45, 38, 80, 65, 55, 75, 90],
      },
    ]);
    const totalCustomers = ref({
      chart: {
        height: 140,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#C2CDFF"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      grid: {
        borderColor: "#ffffff",
      },
      xaxis: {
        categories: [
          "01 Jun",
          "02 Jun",
          "03 Jun",
          "04 Jun",
          "05 Jun",
          "06 Jun",
          "07 Jun",
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      customers,
      totalCustomers,
    };
  },
});
</script>
