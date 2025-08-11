<template>
  <v-card
    class="device-sessions-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Device Sessions</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
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
    <div class="device-sessions-card-content">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="chart">
            <apexchart
              v-if="isClient"
              type="pie"
              height="213"
              :options="deviceSessions"
              :series="sessions"
            ></apexchart>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="content p-0 list-unstyled">
            <li class="d-flex justify-content-between position-relative">
              <div class="dot rounded-circle dekstop"></div>
              <div>
                <span class="d-block"> Desktop </span>
                <h6 class="mb-0 fw-semibold">45.2%</h6>
              </div>
              <div>
                <span class="d-block"> Sessions </span>
                <h6 class="mb-0 fw-semibold text-body">8,732</h6>
              </div>
            </li>
            <li class="d-flex justify-content-between position-relative">
              <div class="dot rounded-circle mobile"></div>
              <div>
                <span class="d-block"> Mobile </span>
                <h6 class="mb-0 fw-semibold">48.7%</h6>
              </div>
              <div>
                <span class="d-block"> Sessions </span>
                <h6 class="mb-0 fw-semibold text-body">9,416</h6>
              </div>
            </li>
            <li class="d-flex justify-content-between position-relative">
              <div class="dot rounded-circle tablet"></div>
              <div>
                <span class="d-block"> Tablet </span>
                <h6 class="mb-0 fw-semibold">32.3%</h6>
              </div>
              <div>
                <span class="d-block"> Sessions </span>
                <h6 class="mb-0 fw-semibold text-body">1,042</h6>
              </div>
            </li>
            <li class="d-flex justify-content-between position-relative">
              <div class="dot rounded-circle others"></div>
              <div>
                <span class="d-block"> Others </span>
                <h6 class="mb-0 fw-semibold">15.4%</h6>
              </div>
              <div>
                <span class="d-block"> Sessions </span>
                <h6 class="mb-0 fw-semibold text-body">135</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p class="info">
        This data helps you understand which devices are most commonly used and
        how engagement metrics vary between them.
      </p>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "DeviceSessionsChart",
  setup() {
    const isClient = ref(false);
    const sessions = ref([55, 44, 30, 12]);
    const deviceSessions = ref({
      chart: {
        height: 213,
        type: "pie",
      },
      labels: ["Desktop", "Mobile", "Tablet", "Others"],
      colors: ["#37D80A", "#605DFF", "#BF85FB", "#FE7A36"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
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
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sessions,
      deviceSessions,
    };
  },
});
</script>

<style lang="scss" scoped>
.device-sessions-card {
  .device-sessions-card-content {
    .chart {
      margin: {
        left: -35px;
        top: -25px;
      }
    }
    .content {
      margin: 0 0 25px -30px;

      li {
        padding-left: 22px;
        border-bottom: 1px solid var(--borderColor);
        padding: {
          top: 7px;
          bottom: 7px;
        }
        .dot {
          left: 0;
          top: 50%;
          width: 10px;
          height: 10px;
          position: absolute;
          transform: translateY(-50%);

          &.dekstop {
            background-color: #37d80a;
          }
          &.mobile {
            background-color: #757dff;
          }
          &.tablet {
            background-color: #bf85fb;
          }
          &.others {
            background-color: #fe7a36;
          }
        }
        span {
          font-size: 12px;
        }
        h6 {
          font-size: 16px;
        }
        div {
          &:last-child {
            h6 {
              font-size: 14px;
            }
          }
        }
        &:first-child {
          border-top: 1px solid var(--borderColor);
        }
      }
    }
    .info {
      font-size: 12px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .device-sessions-card {
    .device-sessions-card-content {
      .chart {
        margin: {
          left: 0;
          top: -7px;
        }
      }
      .content {
        margin: 5px 0 17px 0;

        li {
          h6 {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .device-sessions-card {
    .device-sessions-card-content {
      .chart {
        margin: {
          left: 0;
          top: -5px;
        }
      }
      .content {
        margin: 10px 0 20px 0;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .device-sessions-card {
    .device-sessions-card-content {
      .content {
        margin: 0 0 20px -30px;
      }
    }
  }
}
</style>
