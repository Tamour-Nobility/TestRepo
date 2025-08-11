<template>
  <v-card
    class="sales-stats-card trezo-card p-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0 fw-normal d-flex align-items-center">
        Welcome Back, <span class="text-primary fw-medium">Olivia!</span>
        <img src="~/assets/images/icons/dog.svg" alt="dog" />
      </h5>
      <div class="stats-list d-sm-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius me-3"
            >
              Oct 01 - Oct 31, 2024
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Sep 01 - Sep 30, 2024
            </button>
            <button type="button" class="bg-transparent border-none">
              Aug 01 - Aug 31, 2024
            </button>
            <button type="button" class="bg-transparent border-none">
              Jul 01 - Jul 31, 2024
            </button>
          </v-list>
        </v-menu>
        <button type="button" class="stats-button">
          <i class="ri-download-2-line"></i>
          Export CSV
        </button>
      </div>
    </div>
    <div class="sales-stats-card-content">
      <div class="row">
        <div class="col-xxl-3 col-sm-6">
          <DashboardSalesTotalSalesChart />
        </div>
        <div class="col-xxl-3 col-sm-6">
          <DashboardSalesTotalOrdersChart />
        </div>
        <div class="col-xxl-3 col-sm-6">
          <DashboardSalesTotalProfitChart />
        </div>
        <div class="col-xxl-3 col-sm-6">
          <DashboardSalesTotalRevenueChart />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Stats",
  setup() {
    const dates = ref<{ start: string | null; end: string | null }>({
      start: null,
      end: null,
    });
    const menu = ref(false);
    const formattedDate = ref("");

    const updateFormattedDate = () => {
      const { start, end } = dates.value;
      if (start && end) {
        formattedDate.value = `${start} - ${end}`;
        menu.value = false;
      }
    };

    return {
      dates,
      menu,
      formattedDate,
      updateFormattedDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-stats-card {
  .v-card-header {
    h5 {
      font-size: 24px;

      span {
        margin-left: 3px;
      }
      img {
        margin-left: 5px;
      }
    }
    .stats-list {
      .stats-button {
        padding: 7px 17px;
        color: var(--whiteColor);
        background-color: var(--primaryColor);
        border-radius: 7px;
        position: relative;
        padding-left: 36px;

        i {
          left: 10px;
          top: 50%;
          font-size: 18px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-stats-card {
    .v-card-header {
      display: block;
      h5 {
        font-size: 18px;
      }
      .stats-list {
        margin-top: 8px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sales-stats-card {
    .v-card-header {
      .stats-list {
        margin-top: 12px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-stats-card {
    .v-card-header {
      h5 {
        font-size: 20px;
      }
    }
  }
}
</style>
