<template>
  <v-card class="returning-customer-rate-card trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Returning Customer Rate</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Monthly
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Weekly
          </button>
          <button type="button" class="bg-transparent border-none">
            Monthly
          </button>
          <button type="button" class="bg-transparent border-none">
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="line"
        height="305"
        :options="returningCustomerRate"
        :series="rates"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ReturningCustomerRateChart",
  setup() {
    const isClient = ref(false);
    const rates = ref([
      {
        name: "Fifth Time",
        data: [70, 23, 40, 30, 62, 52, 90, 20, 60, 53],
      },
      {
        name: "Fourth Time",
        data: [15, 58, 45, 38, 70, 50, 55, 60, 78, 40],
      },
    ]);
    const returningCustomerRate = ref({
      chart: {
        height: 305,
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
      colors: ["#605DFF", "#AD63F6"],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      markers: {
        size: 4,
        strokeWidth: 0,
        shape: ["circle", "square"],
        hover: {
          size: 5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
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
          width: 12,
          height: 12,
          offsetX: -2,
          offsetY: -0.2,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rates,
      returningCustomerRate,
    };
  },
});
</script>

<style lang="scss" scoped>
.returning-customer-rate-card {
  .chart {
    margin-bottom: -15px;
    margin-left: -10px;
    margin-top: -22px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .returning-customer-rate-card {
    .chart {
      margin-top: 0;
    }
  }
}
</style>
