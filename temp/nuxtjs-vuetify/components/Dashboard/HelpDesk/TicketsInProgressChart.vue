<template>
  <v-card
    class="tickets-in-progress-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="progress-card-content">
      <span class="d-block text-body"> Tickets In Progress </span>
      <h5 class="mb-0">1.35k</h5>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="130"
          :options="ticketsInProgress"
          :series="progress"
        ></apexchart>
      </div>
      <div class="info d-flex align-items-center justify-space-between">
        <span class="d-block text-body"> This Month </span>
        <span class="lh-1 text-danger">
          <i class="material-symbols-outlined"> trending_down </i>
        </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TicketsInProgressChart",
  setup() {
    const isClient = ref(false);
    const progress = ref([
      {
        name: "Tickets In Progress",
        data: [30, 65, 50, 85, 65, 75, 60],
      },
    ]);
    const ticketsInProgress = ref({
      chart: {
        type: "area",
        height: 130,
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
      colors: ["#FD5812"],
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
      progress,
      ticketsInProgress,
    };
  },
});
</script>

<style lang="scss" scoped>
.tickets-in-progress-card {
  .progress-card-content {
    h5 {
      font-size: 20px;
      margin-top: 5px;
    }
    .chart {
      margin: {
        top: -12px;
        bottom: -15px;
      }
    }
    .info {
      span {
        font-size: 13px;

        i {
          font-size: 20px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .tickets-in-progress-card {
    .progress-card-content {
      h5 {
        font-size: 18px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tickets-in-progress-card {
    .progress-card-content {
      h5 {
        font-size: 19px;
      }
      .chart {
        margin-top: -15px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .tickets-in-progress-card {
    .progress-card-content {
      .chart {
        margin: {
          top: -30px;
          bottom: -20px;
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .tickets-in-progress-card {
    .progress-card-content {
      .chart {
        margin: {
          top: -30px;
          bottom: -20px;
        }
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
