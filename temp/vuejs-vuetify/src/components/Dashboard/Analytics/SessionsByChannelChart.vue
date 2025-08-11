<template>
  <v-card
    class="sessions-by-channel-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sessions by Channel</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last 30 Day
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
    <div class="sessions-by-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="donut"
          height="250"
          :options="sessionsByChannel"
          :series="sessions"
        ></apexchart>
      </div>
      <ul class="list p-0 list-unstyled">
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block email"></span>
            Email
          </span>
          <h6 class="mb-0 fw-medium lh-1">976</h6>
        </li>
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block organic-search"></span>
            Organic Search
          </span>
          <h6 class="mb-0 fw-medium lh-1">651</h6>
        </li>
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block direct-browse"></span>
            Direct Browse
          </span>
          <h6 class="mb-0 fw-medium lh-1">818</h6>
        </li>
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block paid-search"></span>
            Paid Search
          </span>
          <h6 class="mb-0 fw-medium lh-1">459</h6>
        </li>
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block social"></span>
            Social
          </span>
          <h6 class="mb-0 fw-medium lh-1">320</h6>
        </li>
        <li>
          <span
            class="d-block title text-body d-flex align-items-center justify-content-center"
          >
            <span class="dot d-block referral"></span>
            Referral
          </span>
          <h6 class="mb-0 fw-medium lh-1">209</h6>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SessionsByChannelChart",
  setup() {
    const isClient = ref(false);
    const sessions = ref([976, 651, 818, 459, 320, 209]);
    const sessionsByChannel = ref({
      chart: {
        height: 250,
        type: "donut",
      },
      labels: [
        "Email",
        "Organic Search",
        "Direct Browse",
        "Paid Search",
        "Social",
        "Referral",
      ],
      colors: [
        "#3584FC",
        "#37D80A",
        "#BF85FB",
        "#90C7FF",
        "#605DFF",
        "#FE7A36",
      ],
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
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
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
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sessions,
      sessionsByChannel,
    };
  },
});
</script>

<style lang="scss" scoped>
.sessions-by-channel-card {
  .sessions-by-card-content {
    .list {
      text-align: center;
      margin: {
        top: 10px;
        bottom: 10px;
      }
      li {
        display: inline-block;
        text-align: start;
        margin: {
          top: 15px;
          left: 15px;
          right: 15px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 8px;

          .dot {
            width: 11px;
            height: 11px;
            margin-right: 8px;
            border-radius: 3px;

            &.email {
              background: #3584fc;
            }
            &.direct-browse {
              background: #ad63f6;
            }
            &.organic-search {
              background: #37d80a;
            }
            &.paid-search {
              background: #90c7ff;
            }
            &.social {
              background: #605dff;
            }
            &.referral {
              background: #fd5812;
            }
          }
        }
        h6 {
          font-size: 18px;
          margin-left: 19px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sessions-by-channel-card {
    .sessions-by-card-content {
      .list {
        margin: {
          top: 0;
          bottom: 0;
        }
        li {
          margin: {
            top: 10px;
            left: 10px;
            right: 10px;
          }
          .title {
            .dot {
              margin-right: 5px;
            }
          }
          h6 {
            font-size: 17px;
            margin-left: 16px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sessions-by-channel-card {
    .sessions-by-card-content {
      .list {
        li {
          margin: {
            left: 10px;
            right: 10px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sessions-by-channel-card {
    .sessions-by-card-content {
      .list {
        li {
          margin: {
            left: 9px;
            right: 9px;
          }
        }
      }
    }
  }
}
</style>
