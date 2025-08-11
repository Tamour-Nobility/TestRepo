<template>
  <v-card
    class="overall-visitors-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div class="overall-visitors-card-content">
      <span class="d-block text-body"> Overall Visitors </span>
      <h3 class="mb-0 fw-medium d-flex align-items-center">
        45,745
        <span class="info-badge fw-medium d-inline-block position-relative">
          <i class="ri-arrow-up-fill"></i>
          7%
        </span>
      </h3>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="160"
          :options="overallVisitors"
          :series="visitors"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OverallVisitorsChart",
  setup() {
    const isClient = ref(false);
    const visitors = ref([
      {
        name: "Visitors",
        data: [30, 70, 50, 75, 40, 80, 50, 100],
      },
    ]);
    const overallVisitors = ref({
      chart: {
        type: "area",
        height: 160,
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
      colors: ["#9747FF"],
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
        max: 100,
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
      visitors,
      overallVisitors,
    };
  },
});
</script>

<style lang="scss" scoped>
.overall-visitors-card {
  background: #e9d5ff;

  .overall-visitors-card-content {
    padding-bottom: 85px !important;

    h3 {
      font-size: 24px;
      margin-top: 10px;

      .info-badge {
        font-size: 12px;
        color: #1e8308;
        margin-left: 10px;
        border-radius: 30px;
        padding: 3px 10px 1px 22px;
        background-color: #d8ffc8;
        border: 1px solid #82fc5a;

        i {
          top: 50%;
          left: 6px;
          font-size: 14px;
          position: absolute;
          transform: translateY(-50%);
        }
        &.down {
          border-color: #ffa294;
          background: #ffc8c0;
          color: #ee3e08;
        }
      }
    }
    .chart {
      left: -12px;
      right: -10px;
      bottom: -37px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .overall-visitors-card {
    .overall-visitors-card-content {
      h3 {
        font-size: 20px;
        margin-top: 10px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .overall-visitors-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .overall-visitors-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}
</style>
