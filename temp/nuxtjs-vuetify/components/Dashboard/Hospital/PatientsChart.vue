<template>
  <v-card
    class="patients-last-7-days-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div class="patients-last-7-days-card-content">
      <span class="d-block text-body"> Patients last 7 days </span>
      <h3 class="mb-0 fw-medium d-flex align-items-center">
        768
        <span
          class="info-badge down fw-medium d-inline-block position-relative"
        >
          <i class="ri-arrow-down-fill"></i>
          3%
        </span>
      </h3>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="100"
          :options="patientsChart"
          :series="patients"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PatientsChart",
  setup() {
    const isClient = ref(false);
    const patients = ref([
      {
        name: "Patients",
        data: [60, 50, 40, 50, 45, 40, 60],
      },
    ]);
    const patientsChart = ref({
      chart: {
        type: "bar",
        height: 100,
        toolbar: {
          show: false,
        },
      },
      colors: ["#FE7A36"],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "9px",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
        max: 60,
        min: 0,
        labels: {
          show: false,
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
      fill: {
        opacity: 1,
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      patients,
      patientsChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.patients-last-7-days-card {
  background: #ffe8d4;

  .patients-last-7-days-card-content {
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
      left: 0;
      right: 0;
      bottom: -5px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .patients-last-7-days-card {
    .patients-last-7-days-card-content {
      h3 {
        font-size: 20px;
        margin-top: 10px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .patients-last-7-days-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .patients-last-7-days-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}
</style>
