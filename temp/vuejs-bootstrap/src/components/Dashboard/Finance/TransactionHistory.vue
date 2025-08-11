<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4"
      >
        <h3 class="mb-0">Transaction History</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
          aria-label="Default select example"
        >
          <option selected>Last 30 days</option>
          <option value="1">Last 90 days</option>
          <option value="1">Last 1 year</option>
        </select>
      </div>

      <div class="default-table-area style-two transaction-history">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <span class="ms-1"
                      ><span class="fs-12 fw-bold">Transaction</span> ID</span
                    >
                  </div>
                </th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TID0015</span>
                  </div>
                </td>
                <td>2024-10-01</td>
                <td>Payment from Client</td>
                <td class="text-primary">$5,000</td>
                <td>Income</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TID0099</span>
                  </div>
                </td>
                <td>2024-09-28</td>
                <td>Office Supplies</td>
                <td class="text-primary">$10,000</td>
                <td>Expense</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TID0145</span>
                  </div>
                </td>
                <td>2024-09-25</td>
                <td>Website Maintenance</td>
                <td class="text-primary">$35,000</td>
                <td>Expense</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TID0247</span>
                  </div>
                </td>
                <td>2024-09-22</td>
                <td>Payment from Client</td>
                <td class="text-primary">$2,000</td>
                <td>Income</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TID0299</span>
                  </div>
                </td>
                <td>2024-09-20</td>
                <td>Advertising Campaign</td>
                <td class="text-primary">$15,500</td>
                <td>Expense</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination items="05" total="30" class="p-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "TransactionHistory",
  components: {
    Pagination,
  },
});
</script>
