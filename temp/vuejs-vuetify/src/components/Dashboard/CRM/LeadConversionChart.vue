<template>
  <v-card
    class="lead-conversion-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="conversion-card-content">
      <div class="title">
        <span class="d-block text-body"> Lead Conversion </span>
        <h5 class="mb-0">48.79%</h5>
      </div>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="95"
          :options="leadConversion"
          :series="conversion"
        ></apexchart>
      </div>
      <div class="d-flex align-items-center justify-space-between">
        <span class="info-badge down d-inline-block"> -15% </span>
        <span class="days d-block text-body"> Last 30 days </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LeadConversionChart",
  setup() {
    const isClient = ref(false);
    const conversion = ref([
      {
        name: "Lead Conversion",
        data: [3, 6, 7, 6, 9, 10, 7],
      },
    ]);
    const leadConversion = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
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
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
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
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      conversion,
      leadConversion,
    };
  },
});
</script>

<style lang="scss" scoped>
.lead-conversion-card {
  .conversion-card-content {
    position: relative;

    .title {
      margin-bottom: 35px;

      h5 {
        margin-top: 5px;
        font-size: 20px;
      }
    }
    .chart {
      top: -28px;
      right: -9px;
      max-width: 120px;
      position: absolute;
    }
    .info-badge {
      font-size: 13px;
      color: #1e8308;
      padding: 3px 8.3px;
      border-radius: 100px;
      border: 1px solid #82fc5a;
      background-color: #d8ffc8;

      &.down {
        border-color: #ffcea9;
        color: var(--dangerColor);
        background-color: #ffe1dd;
      }
    }
    .days {
      font-size: 13px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .lead-conversion-card {
    .conversion-card-content {
      position: relative;

      .title {
        margin-bottom: 20px;

        h5 {
          font-size: 18px;
        }
      }
      .chart {
        top: -30px;
        right: -7px;
      }
      .info-badge {
        font-size: 12px;
        padding: 3px 8px;
      }
      .days {
        font-size: 12px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .lead-conversion-card {
    .conversion-card-content {
      .title {
        margin-bottom: 25px;

        h5 {
          margin-top: 8px;
          font-size: 18px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .lead-conversion-card {
    .conversion-card-content {
      .chart {
        top: -30px;
        right: -10px;
        max-width: 100px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
