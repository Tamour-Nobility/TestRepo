<template>
  <v-card
    class="sales-transaction-history-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Transaction History</h5>
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

    <div class="transaction-history-card-content">
      <ul class="p-0 mt-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-primary bg-primary-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> credit_card </i>
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
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-100 rounded-circle d-flex align-items-center justify-content-center"
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
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-purple bg-purple-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> account_balance </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Wise </span>
              <span class="date d-block"> 14 Jun 2024 - 4:21 pm </span>
            </div>
          </div>
          <span class="d-block text-success"> +3,560 </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-secondary bg-secondary-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> currency_ruble </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Payoneer </span>
              <span class="date d-block"> 13 Jun 2024 - 2:42 am </span>
            </div>
          </div>
          <span class="d-block text-success"> +6,500 </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
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
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-purple bg-purple-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> account_balance </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Wise </span>
              <span class="date d-block"> 16 Dec 2024 - 1:23 pm </span>
            </div>
          </div>
          <span class="d-block text-success"> +5,432 </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-100 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> redeem </i>
            </div>
            <div>
              <span class="title d-block fw-medium text-black"> Paypal </span>
              <span class="date d-block"> 23 Dec 2024 - 3:20 pm </span>
            </div>
          </div>
          <span class="d-block text-success"> +1,820 </span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionHistory",
});
</script>

<style lang="scss" scoped>
.sales-transaction-history-card {
  .transaction-history-card-content {
    ul {
      li {
        margin-bottom: 26px;

        .icon {
          width: 41px;
          height: 41px;
          margin-right: 12px;
        }
        .title {
          font-size: 16px;
          margin-bottom: 2px;
        }
        .date {
          font-size: 13px;
          padding: 0;
          color: var(--bodyColor);
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
  .sales-transaction-history-card {
    .transaction-history-card-content {
      ul {
        li {
          margin-bottom: 20px;

          .icon {
            margin-right: 10px;
          }
          .title {
            font-size: 14px;
            margin-bottom: 6px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-transaction-history-card {
    .transaction-history-card-content {
      ul {
        li {
          margin-bottom: 22px;

          .title {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sales-transaction-history-card {
    .transaction-history-card-content {
      ul {
        li {
          margin-bottom: 29px;

          .icon {
            margin-right: 9px;
          }
        }
      }
    }
  }
}
</style>
