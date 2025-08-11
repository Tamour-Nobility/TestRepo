<template>
  <v-card
    class="impressions-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="impressions-card-content">
      <span class="sub-title d-block text-body"> Impressions </span>
      <div class="d-flex align-items-center">
        <h6 class="mb-0">12,000</h6>
        <span
          class="info-badge down fw-medium position-relative d-inline-block"
        >
          <i class="ri-arrow-down-s-fill"></i>
          10.5%
        </span>
      </div>
      <span class="days d-block text-body"> Last 30 days </span>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="150"
          :options="impressionsChart"
          :series="impressions"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ImpressionsChart",
  setup() {
    const isClient = ref(false);
    const impressions = ref([
      {
        name: "Impressions",
        data: [
          100, 110, 90, 160, 125, 105, 130, 145, 120, 150, 155, 220, 165, 100,
          130, 115, 170, 110, 120, 85, 140, 150,
        ],
      },
    ]);
    const impressionsChart = ref({
      chart: {
        type: "area",
        height: 150,
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
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#EE3E08"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
          "21 Jan",
          "22 Jan",
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
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        show: false,
        max: 250,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      impressions,
      impressionsChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.impressions-card {
  .impressions-card-content {
    position: relative;

    .sub-title {
      margin-bottom: 5px;
    }
    h6 {
      font-size: 20px;
    }
    .info-badge {
      font-size: 10px;
      margin-left: 11px;
      border-radius: 2px;
      background: #d8ffc8;
      color: var(--successColor);
      padding: 1.5px 7px 1.5px 25px;

      i {
        top: 50%;
        left: 2px;
        font-size: 22px;
        position: absolute;
        transform: translateY(-50%);
      }
      &.down {
        background: #ffc8c0;
        color: var(--dangerColor);
      }
    }
    .days {
      font-size: 12px;
      margin-top: 30px;
    }
    .chart {
      transform: translateY(-50%);
      position: absolute;
      max-width: 160px;
      right: -9px;
      top: 50%;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .impressions-card {
    .impressions-card-content {
      h6 {
        font-size: 18px;
      }
      .info-badge {
        margin-left: 7px;
      }
      .days {
        margin-top: 25px;
      }
      .chart {
        max-width: 140px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .impressions-card {
    .impressions-card-content {
      h6 {
        font-size: 19px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .impressions-card {
    .impressions-card-content {
      .chart {
        max-width: 115px;
      }
    }
  }
}
</style>
