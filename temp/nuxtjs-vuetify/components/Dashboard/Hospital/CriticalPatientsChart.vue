<template>
  <v-card
    class="critical-patients-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <p class="fw-normal text-body">Critical Patients</p>
      <h5 class="mb-0">780</h5>
    </div>
    <div class="critical-patients-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="120"
          :options="criticalPatients"
          :series="patients"
        ></apexchart>
      </div>
      <ul class="list mb-0 p-0 list-unstyled">
        <li class="position-relative text-body">
          Cardiology: <span class="fw-semibold text-black">280</span>
        </li>
        <li class="position-relative text-body">
          Orthopedics: <span class="fw-semibold text-black">600</span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CriticalPatientsChart",
  setup() {
    const isClient = ref(false);
    const patients = ref([
      {
        name: "Orthopedics",
        data: [
          10, 15, 21, 25, 19, 15, 25, 20, 20, 15, 21, 25, 17, 18, 15, 20, 15,
          20, 18, 13,
        ],
      },
      {
        name: "Cardiology",
        data: [3, 7, 7, 10, 9, 7, 15, 3, 7, 7, 10, 9, 7, 13, 3, 7, 7, 10, 9, 7],
      },
    ]);
    const criticalPatients = ref({
      chart: {
        type: "area",
        height: 120,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#FD5812", "#796DF6"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 2,
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
        // tickAmount: 6,
        show: false,
        max: 25,
        min: 0,
        labels: {
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
      patients,
      criticalPatients,
    };
  },
});
</script>

<style lang="scss" scoped>
.critical-patients-card {
  padding: {
    left: 20px;
    right: 20px;
  }
  .v-card-header {
    p {
      font-size: var(--fontSize);
      margin-bottom: 2px;
    }
  }
  .critical-patients-card-content {
    .chart {
      top: 100px;
      left: 10px;
      right: 10px;
      position: absolute;
    }
    .list {
      margin-top: 160px;

      li {
        font-size: 13px;
        padding-left: 18px;
        margin-bottom: 10px;

        &::before {
          left: 0;
          top: 50%;
          width: 12px;
          content: "";
          height: 2px;
          position: absolute;
          transform: translateY(-50%);
          background: var(--primaryColor);
        }
        &:nth-child(2) {
          &::before {
            background: var(--orangeColor);
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .critical-patients-card {
    padding: {
      left: 17px;
      right: 17px;
    }
    .critical-patients-card-content {
      .chart {
        top: 57px;
      }
      .list {
        margin-top: 120px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .critical-patients-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}
</style>
