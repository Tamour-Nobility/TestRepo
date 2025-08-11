<template>
  <v-card
    class="leads-by-source-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Leads by Source</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Current Year
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Current Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Current Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Current Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="source-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="donut"
          height="260"
          :options="leadsBySource"
          :series="source"
        ></apexchart>
      </div>
      <ul class="list pl-0 list-unstyled mb-0 d-flex flex-wrap">
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-primary"></span>
            Organic
          </span>
          <h6 class="mb-0 fw-medium lh-1">320</h6>
        </li>
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-secondary"></span>
            Paid
          </span>
          <h6 class="mb-0 fw-medium lh-1">60</h6>
        </li>
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-purple"></span>
            Direct
          </span>
          <h6 class="mb-0 fw-medium lh-1">30</h6>
        </li>
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-info"></span>
            Social
          </span>
          <h6 class="mb-0 fw-medium lh-1">160</h6>
        </li>
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-success"></span>
            Referrals
          </span>
          <h6 class="mb-0 fw-medium lh-1">279</h6>
        </li>
        <li>
          <span class="d-block title d-flex align-items-center text-body">
            <span class="dot d-block bg-orange"></span>
            Others
          </span>
          <h6 class="mb-0 fw-medium lh-1">19</h6>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LeadsBySourceChart",
  setup() {
    const isClient = ref(false);
    const source = ref([320, 60, 30, 160, 279, 19]);
    const leadsBySource = ref({
      chart: {
        height: 260,
        type: "donut",
      },
      labels: ["Organic", "Paid", "Direct", "Social", "Referrals", "Others"],
      colors: [
        "#605DFF",
        "#3584FC",
        "#AD63F6",
        "#0dcaf0",
        "#25B003",
        "#FD5812",
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
          width: 9,
          height: 9,
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
      source,
      leadsBySource,
    };
  },
});
</script>

<style lang="scss" scoped>
.leads-by-source-card {
  .source-card-content {
    .chart {
      margin-top: -10px;
    }
    .list {
      margin: {
        top: -4px;
        left: -5px;
        right: -5px;
      }
      li {
        flex: 0 0 auto;
        margin-top: 24px;
        width: 33.33333333%;
        padding: {
          left: 5px;
          right: 5px;
        }
        .title {
          font-size: 13px;
          margin-bottom: 8px;

          .dot {
            width: 11px;
            height: 11px;
            margin-right: 8px;
            border-radius: 3px;
          }
        }
        h6 {
          font-size: 18px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .leads-by-source-card {
    .source-card-content {
      .chart {
        margin-top: -5px;
      }
      .list {
        li {
          margin-top: 15px;

          .title {
            margin-bottom: 7px;

            .dot {
              width: 10px;
              height: 10px;
            }
          }
          h6 {
            font-size: 16px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .leads-by-source-card {
    .source-card-content {
      .list {
        li {
          margin-top: 20px;
          width: 16.6666666667%;

          h6 {
            font-size: 17px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
