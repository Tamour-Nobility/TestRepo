<template>
  <v-card
    class="support-overview-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0 fw-semibold">Support Overview</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last 7 Days
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="tickets-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="pie"
          height="388"
          :options="supportOverview"
          :series="overview"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SupportOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([55, 44, 30, 12]);
    const supportOverview = ref({
      chart: {
        height: 388,
        type: "pie",
      },
      labels: ["Solved", "In Progress", "Pending", "Unassigned"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#FD5812"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          radius: 2,
          height: 9,
          offsetX: -2,
          offsetY: -0.1,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      overview,
      supportOverview,
    };
  },
});
</script>
