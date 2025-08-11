<template>
  <v-card
    class="emergency-room-visits-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <div class="subtitle">
        <h5 class="mb-0">Emergency Room Visits</h5>
        <p class="fw-normal text-body">ER based on patient visits</p>
      </div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Last Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Last Day
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="emergency-room-visits-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="heatmap"
          height="225"
          :options="emergencyRoomVisits"
          :series="visits"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "EmergencyRoomVisitsChart",
  setup() {
    const isClient = ref(false);
    const visits = ref([
      {
        name: "14 PM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "13 PM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "12 PM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "11 AM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "10 AM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "9 AM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "8 AM",
        data: generateData(14, {
          min: 0,
          max: 90,
        }),
      },
    ]);
    const emergencyRoomVisits = ref({
      chart: {
        height: 225,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF"],
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      xaxis: {
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
        labels: {
          show: true,
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
    });

    function generateData(count: number, yrange: { min: any; max: any }) {
      return Array.from({ length: count }, (_, i) => ({
        x: (i + 1).toString(),
        y:
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min,
      }));
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      visits,
      emergencyRoomVisits,
    };
  },
});
</script>

<style lang="scss" scoped>
.emergency-room-visits-card {
  .v-card-header {
    p {
      font-size: var(--fontSize);
      margin-top: 2px;
    }
  }
  .emergency-room-visits-card-content {
    .chart {
      margin: {
        top: -30px;
        left: -15px;
        bottom: -25px !important;
      }
    }
  }
  &.component-rtl-enabled {
    .emergency-room-visits-card-content {
      .chart {
        margin: {
          left: 0;
          right: -15px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .emergency-room-visits-card {
    .v-card-header {
      display: block;

      .subtitle {
        margin-bottom: 12px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .emergency-room-visits-card {
    .v-card-header {
      display: flex;

      .subtitle {
        margin-top: 0;
      }
    }
  }
}
</style>
