<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <div class="">
          <h3 class="mb-0">Bed Occupancy Rate</h3>
          <p>Currently occupied vs. available.</p>
        </div>
        <select
          class="form-select month-select form-control w-135"
          aria-label="Default select example"
        >
          <option selected>Todays</option>
          <option value="1">Last 60 Days</option>
          <option value="2">Last 90 Days</option>
        </select>
      </div>

      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="d-flex align-items-center welcome-status-item mb-4">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-bg bg-primary bg-opacity-25 text-primary"
              >
                airplay
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mb-0 fs-18">1,275</h5>
              <p>Total Beds</p>
            </div>
          </div>
          <div class="d-flex align-items-center welcome-status-item mb-4">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-bg bg-primary-div bg-opacity-25 text-primary-div"
              >
                bed
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mb-0 fs-18">825</h5>
              <p>Occupied Beds</p>
            </div>
          </div>
          <div class="d-flex align-items-center welcome-status-item mb-0">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-bg bg-success bg-opacity-25 text-success"
              >
                featured_seasonal_and_gifts
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mb-0 fs-18">450</h5>
              <p>Available Beds</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mt-3 mt-sm-0">
          <div class="text-center" style="margin-top: -8px">
            <apexchart
              v-if="isClient"
              type="donut"
              height="160"
              :options="bedOccupancyRate"
              :series="bedOccupancy"
            ></apexchart>
            <p class="fs-12 lh-16">
              The donut or pie chart representing the occupancy rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BedOccupancyRateChart",
  setup() {
    const isClient = ref(false);
    const bedOccupancy = ref([1275, 825, 450]);
    const bedOccupancyRate = ref({
      chart: {
        height: 160,
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
      bedOccupancy,
      bedOccupancyRate,
    };
  },
});
</script>
