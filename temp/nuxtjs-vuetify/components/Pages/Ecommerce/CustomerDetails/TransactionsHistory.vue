<template>
  <v-card
    class="transactions-history-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Transactions History</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Month
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
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Order ID</th>
              <th class="text-start">Status</th>
              <th class="text-start">Amount</th>
              <th class="text-start">Rewards</th>
              <th class="text-start">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>{{ item.amount }}</td>
              <td>{{ item.rewards }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </v-table>
        <CommonPaginationTwo items="10" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TransactionsHistory",
  setup() {
    const items = ref([
      {
        id: "#JAN-121",
        status: "Pending",
        amount: "$6,855.00",
        rewards: "$12.00",
        date: "14 Jan 2024",
      },
      {
        id: "#JAN-120",
        status: "Successful",
        amount: "$258.00",
        rewards: "$9.00",
        date: "13 Jan 2024",
      },
      {
        id: "#JAN-119",
        status: "Rejected",
        amount: "$3,890.00",
        rewards: "$11.00",
        date: "12 Jan 2024",
      },
      {
        id: "#JAN-118",
        status: "Successful",
        amount: "$2,500.00",
        rewards: "$23.42",
        date: "11 Jan 2024",
      },
      {
        id: "#JAN-117",
        status: "Successful",
        amount: "$8,200.00",
        rewards: "$10.84",
        date: "10 Jan 2024",
      },
      {
        id: "#JAN-116",
        status: "Rejected",
        amount: "$640.00",
        rewards: "$3.21",
        date: "09 Jan 2024",
      },
      {
        id: "#JAN-115",
        status: "Successful",
        amount: "$9,100.00",
        rewards: "$43.21",
        date: "08 Jan 2024",
      },
      {
        id: "#JAN-114",
        status: "Pending",
        amount: "$7,300.00",
        rewards: "$42.42",
        date: "07 Jan 2024",
      },
      {
        id: "#JAN-113",
        status: "Successful",
        amount: "$2,800.00",
        rewards: "$11.21",
        date: "06 Jan 2024",
      },
      {
        id: "#JAN-112",
        status: "Successful",
        amount: "$6,600.00",
        rewards: "$14.32",
        date: "05 Jan 2024",
      },
    ]);

    const wordSuccessful = ref("Successful");
    const wordPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        successful: wordSuccessful.value === classValue,
        pending: wordPending.value === classValue,
        rejected: wordRejected.value === classValue,
      };
    };

    return {
      items,
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.transactions-history-card {
  .trezo-table-content {
    .trezo-table {
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-left: 1px solid #eceef2;
        border-right: 1px solid #eceef2;
        border-bottom: 1px solid #eceef2;
      }
    }
  }
}
</style>
