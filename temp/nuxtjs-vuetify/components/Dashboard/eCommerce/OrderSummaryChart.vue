<template>
  <v-card
    class="order-summary-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Order Summary</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
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
    <div class="order-summary-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="donut"
          height="278"
          :options="orderSummary"
          :series="summary"
        ></apexchart>
      </div>
      <ul class="mb-0 pl-0 list-unstyled">
        <li class="completed-order">
          <span class="d-block fw-medium"> Completed Order </span>
          <div class="progressbar d-flex align-items-center">
            <v-progress-linear
              bg-color="deep-purple-lighten-2"
              class="light-green-accent-3"
              model-value="60"
            >
            </v-progress-linear>
            <span class="d-block percentage"> 60% </span>
          </div>
        </li>
        <li class="new-order">
          <span class="d-block fw-medium"> New Order </span>
          <div class="progressbar d-flex align-items-center">
            <v-progress-linear
              bg-color="deep-purple-lighten-2"
              class="blue-accent-3"
              model-value="30"
            >
            </v-progress-linear>
            <span class="d-block percentage"> 30% </span>
          </div>
        </li>
        <li class="pending-order">
          <span class="d-block fw-medium"> Pending Order </span>
          <div class="progressbar d-flex align-items-center">
            <v-progress-linear
              bg-color="deep-purple-lighten-2"
              class="deep-purple-lighten-2"
              model-value="10"
            >
            </v-progress-linear>
            <span class="d-block percentage"> 10% </span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OrderSummaryChart",
  setup() {
    const isClient = ref(false);
    const summary = ref([60, 30, 10]);
    const orderSummary = ref({
      chart: {
        height: 278,
        type: "donut",
      },
      labels: ["Completed", "New Order", "Pending"],
      colors: ["#37D80A", "#605DFF", "#AD63F6"],
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
          shape: "diamond",
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      summary,
      orderSummary,
    };
  },
});
</script>

<style lang="scss" scoped>
.order-summary-card {
  .order-summary-card-content {
    ul {
      li {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        span {
          color: var(--bodyColor);
        }
        .percentage {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
