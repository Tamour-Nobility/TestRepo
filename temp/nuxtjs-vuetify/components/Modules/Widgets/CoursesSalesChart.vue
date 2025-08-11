<template>
  <v-card
    class="courses-sales-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Courses Sales</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              This Month
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
    </div>
    <div class="sales-card-content">
      <div class="info position-relative z-2 d-flex align-items-center">
        <h5 class="mb-0">$57.2k</h5>
        <span class="info-badge d-inline-block"> +10% </span>
      </div>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="area"
          height="280"
          :options="coursesSales"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CoursesSalesChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [
          100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125,
          105, 130, 145, 120, 150, 155, 220, 165,
        ],
      },
    ]);
    const coursesSales = ref({
      chart: {
        type: "area",
        height: 280,
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
      colors: ["#605DFF"],
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
          formatter: (val: string) => {
            return "$" + val + "K";
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
      sales,
      coursesSales,
    };
  },
});
</script>

<style lang="scss" scoped>
.courses-sales-card {
  .sales-card-content {
    position: relative;
    padding-top: 20px;
    height: 235px;

    .info {
      h5 {
        font-size: 20px;
      }
      .info-badge {
        font-size: 13px;
        color: #1e8308;
        margin-left: 15px;
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
    }
    .chart {
      left: 0;
      right: 0;
      bottom: -61px;
      position: absolute;
      margin: {
        left: -37px;
        right: -35px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .courses-sales-card {
    .sales-card-content {
      padding-top: 0;
      height: 200px;

      .info {
        h5 {
          font-size: 18px;
        }
      }
      .chart {
        bottom: -53px;
        margin: {
          left: -29px;
          right: -27px;
        }
      }
    }
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .courses-sales-card {
    .sales-card-content {
      padding-top: 5px;

      .info {
        h5 {
          font-size: 19px;
        }
      }
    }
  }
}
</style>
