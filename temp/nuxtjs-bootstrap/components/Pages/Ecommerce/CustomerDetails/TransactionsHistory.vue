<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Transactions History</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last Week</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <div class="default-table-area recent-orders">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col">Rewards</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>${{ item.amount }}</td>
                <td>${{ item.rewards }}</td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPaginationTwo items="10" :total="items.length" />
      </div>
    </div>
  </div>
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
        amount: "6,855.00",
        rewards: "12.00",
        date: "14 Jan 2024",
      },
      {
        id: "#JAN-120",
        status: "Successful",
        amount: "258.00",
        rewards: "9.00",
        date: "13 Jan 2024",
      },
      {
        id: "#JAN-119",
        status: "Rejected",
        amount: "3,890.00",
        rewards: "11.00",
        date: "12 Jan 2024",
      },
      {
        id: "#JAN-118",
        status: "Successful",
        amount: "2,500.00",
        rewards: "23.42",
        date: "11 Jan 2024",
      },
      {
        id: "#JAN-117",
        status: "Successful",
        amount: "8,200.00",
        rewards: "10.84",
        date: "10 Jan 2024",
      },
      {
        id: "#JAN-116",
        status: "Rejected",
        amount: "640.00",
        rewards: "3.21",
        date: "09 Jan 2024",
      },
      {
        id: "#JAN-115",
        status: "Successful",
        amount: "9,100.00",
        rewards: "43.21",
        date: "08 Jan 2024",
      },
      {
        id: "#JAN-114",
        status: "Pending",
        amount: "7,300.00",
        rewards: "42.42",
        date: "07 Jan 2024",
      },
      {
        id: "#JAN-113",
        status: "Successful",
        amount: "2,800.00",
        rewards: "11.21",
        date: "06 Jan 2024",
      },
      {
        id: "#JAN-112",
        status: "Successful",
        amount: "6,600.00",
        rewards: "14.32",
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
