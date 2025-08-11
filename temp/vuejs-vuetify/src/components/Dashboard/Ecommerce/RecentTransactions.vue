<template>
  <v-card
    class="recent-transactions-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Transactions</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
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
    <div class="transactions-card-content">
      <ul class="pl-0 mt-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-primary bg-primary-50 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined">credit_card </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Master Card
              </span>
              <span class="date d-block"> 16 Jun 2024 - 7:12 pm </span>
            </div>
          </div>
          <span class="d-block text-success"> +1,520 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-50 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> redeem </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Paypal </span>
              <span class="date d-block"> 15 Jun 2024 - 1:42 am </span>
            </div>
          </div>
          <span class="d-block text-danger"> -2,250 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-purple bg-purple-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> account_balance </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Wise </span
              ><span class="date d-block"> 14 Jun 2024 - 4:21 pm </span>
            </div>
          </div>
          <span class="d-block text-success"> +3,560 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-secondary bg-secondary-50 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> currency_ruble </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Payoneer </span
              ><span class="date d-block"> 13 Jun 2024 - 2:42 am </span>
            </div>
          </div>
          <span class="d-block text-success"> +6,500 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-success bg-success-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> credit_score </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Credit Card
              </span>
              <span class="date d-block"> 12 Jun 2024 - 3:20 pm </span>
            </div>
          </div>
          <span class="d-block text-danger"> -4,320 </span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "RecentTransactions",
};
</script>

<style lang="scss" scoped>
.recent-transactions-card {
  .transactions-card-content {
    ul {
      li {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          width: 41px;
          height: 41px;
          margin-right: 12px;
        }
        .title {
          font-size: 16px;
        }
        .date {
          font-size: 13px;
          padding: 0;
          color: var(--bodyColor);
        }
      }
    }
  }
}
</style>
