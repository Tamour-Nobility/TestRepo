<template>
  <v-card
    class="customer-satisfaction-card trezo-card border-radius d-block bg-primary border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0 fw-semibold text-white">Customer Satisfaction</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none text-white d-inline-block border-radius"
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
    <div class="satisfaction-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="donut"
          height="180"
          :options="customerSatisfaction"
          :series="satisfaction"
        ></apexchart>

        <div class="text text-center">
          <span class="d-block text-white"> Overall </span>
          <h6 class="mb-0 fw-semibold text-white">98%</h6>
        </div>
      </div>
      <div class="image ml-auto mr-auto text-center">
        <v-img
          src="~/assets/images/man-with-tablet.png"
          alt="man-with-tablet-image"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CustomerSatisfactionChart",
  setup() {
    const isClient = ref(false);
    const satisfaction = ref([50, 15, 75, 50]);
    const customerSatisfaction = ref({
      chart: {
        height: 180,
        type: "donut",
      },
      labels: ["Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"],
      colors: ["#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"],
      stroke: {
        width: 1,
        show: true,
        colors: ["transparent"],
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
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "73%",
            labels: {
              show: false,
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
        enabled: true,
        y: {
          formatter: function (val: string) {
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
      satisfaction,
      customerSatisfaction,
    };
  },
});
</script>

<style lang="scss" scoped>
.customer-satisfaction-card {
  .v-card-header {
    margin-bottom: 20px;
  }
  .satisfaction-card-content {
    position: relative;
    max-width: 315px;
    margin: {
      left: auto;
      right: auto;
    }
    .chart {
      left: -80px;
      position: relative;
      margin: {
        top: -5px;
        bottom: -10px;
      }
      .text {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translateY(-50%) translateX(-50%);

        h6 {
          font-size: 20px;
          margin-top: 5px;
        }
      }
    }
    .image {
      right: 0;
      top: 50%;
      max-width: 120px;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .customer-satisfaction-card {
    .v-card-header {
      margin-bottom: 17px;
    }
    .satisfaction-card-content {
      max-width: 100%;

      .chart {
        left: 0;

        .text {
          h6 {
            font-size: 18px;
          }
        }
      }
      .image {
        top: 0;
        margin-top: 17px;
        position: relative;
        transform: translateY(0);
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .customer-satisfaction-card {
    .v-card-header {
      margin-bottom: 20px;
    }
    .satisfaction-card-content {
      max-width: 315px;

      .chart {
        left: -80px;
      }
      .image {
        top: 50%;
        margin-top: 0;
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .customer-satisfaction-card {
    .satisfaction-card-content {
      .chart {
        .text {
          h6 {
            font-size: 19px;
          }
        }
      }
    }
  }
}
</style>
