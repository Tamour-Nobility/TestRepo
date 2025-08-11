<template>
  <v-card
    class="realtime-active-users-card border-radius d-block bg-primary border-0 shadow-none"
  >
    <div class="realtime-active-users-card-content">
      <h6 class="text-white fw-light">Realtime Active Users</h6>
      <h2 class="fw-medium lh-1 text-white">4,890</h2>
      <span class="d-block sub-title text-white"> Page views per second </span>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="170"
          :options="realtimeActiveUsers"
          :series="users"
        ></apexchart>
      </div>
      <span class="d-block sub-title text-white fw-semibold">
        Top Active Pages
      </span>
      <ul class="p-0 list-unstyled">
        <li
          class="text-white d-flex align-items-center justify-content-between"
        >
          <span>
            /reports/trends-analysis
            <a href="#" class="text-white">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span> 1520 </span>
        </li>
        <li
          class="text-white d-flex align-items-center justify-content-between"
        >
          <span>
            /monitoring/user-activity
            <a href="#" class="text-white">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span> 980 </span>
        </li>
        <li
          class="text-white d-flex align-items-center justify-content-between"
        >
          <span>
            /specific/industry-comparisons
            <a href="#" class="text-white">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span> 856 </span>
        </li>
        <li
          class="text-white d-flex align-items-center justify-content-between"
        >
          <span>
            /global-reach-2023/statistics
            <a href="#" class="text-white">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span> 735 </span>
        </li>
        <li
          class="text-white d-flex align-items-center justify-content-between"
        >
          <span>
            /security-alerts/2024-update
            <a href="#" class="text-white">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span> 520 </span>
        </li>
      </ul>
      <div class="text-end">
        <a href="#" class="report-button">
          All Real-Time Report
          <i class="ri-arrow-right-s-line"></i>
        </a>
      </div>
      <div class="shape">
        <img src="~/assets/images/shape.png" alt="shape" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RealtimeActiveUsersChart",
  setup() {
    const isClient = ref(false);
    const users = ref([
      {
        name: "Users",
        data: [
          100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100,
          90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100,
        ],
      },
    ]);
    const realtimeActiveUsers = ref({
      chart: {
        type: "bar",
        height: 170,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          columnWidth: "100%",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
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
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
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
      users,
      realtimeActiveUsers,
    };
  },
});
</script>

<style lang="scss" scoped>
.realtime-active-users-card {
  --primaryColor: #4936f5;

  .realtime-active-users-card-content {
    position: relative;
    z-index: 1;

    h6 {
      font-size: 16px;
      margin-bottom: 6px;
    }
    h2 {
      font-size: 36px;
      margin-bottom: 47px;
      letter-spacing: -1px;
    }
    .sub-title {
      padding-bottom: 8px;
      border-bottom: 1px solid #605dff;
    }
    .chart {
      margin: {
        left: -29px;
        right: -17px;
      }
    }
    ul {
      margin: {
        top: 5px;
        bottom: 25px;
      }
      li {
        border-bottom: 1px solid #605dff;
        padding-bottom: 6px;
        margin-bottom: 6px;

        span {
          i {
            margin-left: 5px;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .report-button {
      padding: 6px 12px;
      border-radius: 4px;
      color: var(--whiteColor);
      border: 1px solid #757dff;
      padding-right: 30px;
      position: relative;
      font: {
        size: var(--fontSize);
        weight: 500;
      }
      i {
        top: 50%;
        right: 6px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
      &:hover {
        color: var(--blackColor);
        border-color: var(--whiteColor);
        background-color: var(--whiteColor);
      }
    }
    .shape {
      top: -25px;
      z-index: -1;
      right: -25px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .realtime-active-users-card {
    .mat-mdc-card-content {
      h6 {
        font-size: 14px;
        margin-bottom: 7px;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
        letter-spacing: -0.7px;
      }
      .sub-title {
        padding-bottom: 7px;
      }
      .chart {
        margin: {
          top: -5px;
          bottom: -10px;
        }
      }
      ul {
        margin: {
          top: 12px;
          bottom: 17px;
        }
        li {
          padding-bottom: 7px;
          margin-bottom: 7px;
        }
      }
      .mat-mdc-button {
        font-size: 13px;
      }
      .shape {
        top: -17px;
        right: -17px;
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .shape {
          right: auto;
          left: -17px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .realtime-active-users-card {
    .mat-mdc-card-content {
      .shape {
        top: -20px;
        right: -20px;
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .shape {
          right: auto;
          left: -20px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .realtime-active-users-card {
    .mat-mdc-card-content {
      h6 {
        font-size: 15px;
      }
      h2 {
        font-size: 34px;
        margin-bottom: 35px;
        letter-spacing: -0.9px;
      }
      ul {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
