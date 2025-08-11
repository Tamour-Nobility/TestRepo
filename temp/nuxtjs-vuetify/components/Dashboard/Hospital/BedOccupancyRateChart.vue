<template>
  <v-card
    class="bed-occupancy-rate-card trezo-card mb-25 border-radius d-block bg-white shadow-none"
  >
    <div class="v-card-header">
      <div class="subtitle">
        <h5 class="mb-0">Bed Occupancy Rate</h5>
        <p class="fw-normal text-body">Currently occupied vs. available.</p>
      </div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none p-0 d-inline-block border-radius"
          >
            Today
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
    <div class="bed-occupancy-card-content">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <ul class="content m-0 p-0 list-unstyled">
            <li class="d-flex align-items-center">
              <div
                class="icon d-flex align-items-center justify-content-center border-radius text-secondary bg-secondary-100"
              >
                <i class="material-symbols-outlined"> airplay </i>
              </div>
              <div>
                <h3>1,275</h3>
                <span class="d-block text-body"> Total Beds </span>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <div
                class="icon d-flex align-items-center justify-content-center border-radius text-purple bg-purple-100"
              >
                <i class="material-symbols-outlined"> bed </i>
              </div>
              <div>
                <h3>825</h3>
                <span class="d-block text-body"> Occupied Beds </span>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <div
                class="icon d-flex align-items-center justify-content-center border-radius text-success bg-success-100"
              >
                <i class="material-symbols-outlined">
                  featured_seasonal_and_gifts
                </i>
              </div>
              <div>
                <h3>450</h3>
                <span class="d-block text-body"> Available Beds </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          <div class="chart text-center">
            <apexchart
              v-if="isClient"
              type="donut"
              height="141"
              :options="bedOccupancyRate"
              :series="occupancyRate"
            ></apexchart>
            <p class="ml-auto mr-auto">
              The donut or pie chart representing the occupancy rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BedOccupancyRateChart",
  setup() {
    const isClient = ref(false);
    const occupancyRate = ref([1275, 825, 450]);
    const bedOccupancyRate = ref({
      chart: {
        height: 141,
        type: "donut",
      },
      labels: ["Total Beds", "Occupied Beds", "Available Beds"],
      colors: ["#1F64F1", "#BF85FB", "#37D80A"],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "22px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
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
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      occupancyRate,
      bedOccupancyRate,
    };
  },
});
</script>

<style lang="scss" scoped>
.bed-occupancy-rate-card {
  .v-card-header {
    p {
      font-size: var(--fontSize);
      margin-top: 2px;
    }
  }
  .bed-occupancy-card-content {
    .content {
      li {
        margin-bottom: 25px;

        .icon {
          width: 42px;
          height: 42px;
          margin-right: 10px;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 3px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .chart {
      p {
        font-size: 12px;
        line-height: 1.6;
        max-width: 189px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .bed-occupancy-rate-card {
    .v-card-header {
      display: block;

      .subtitle {
        margin-bottom: 5px;
      }
    }
    .bed-occupancy-card-content {
      .content {
        li {
          margin-bottom: 15px;

          h3 {
            font-size: 16px;
          }
        }
      }
      .chart {
        margin-top: 15px;

        p {
          max-width: 100%;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .bed-occupancy-rate-card {
    .v-card-header {
      display: flex;

      .subtitle {
        margin-bottom: 0;
      }
    }
  }
}
</style>
