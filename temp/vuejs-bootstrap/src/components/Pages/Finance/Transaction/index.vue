<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4"
      >
        <h3 class="mb-0">Transaction History</h3>
        <div class="d-flex flex-wrap gap-2">
          <button
            class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add Transaction</span>
          </button>
          <select
            class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
            aria-label="Default select example"
          >
            <option selected>Last 30 days</option>
            <option value="1">Last 90 days</option>
            <option value="1">Last 1 year</option>
          </select>
        </div>
      </div>

      <div class="default-table-area style-two transaction-history-large">
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
                <th scope="col">Status</th>
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
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                  <span
                    class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                  >
                    Pending
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                  <span
                    class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                  >
                    Pending
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                    <span class="ms-1 text-secondary">#TID0312</span>
                  </div>
                </td>
                <td>2024-09-12</td>
                <td>Office Renovation</td>
                <td class="text-primary">$4,000</td>
                <td>Expense</td>
                <td>
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                    <span class="ms-1 text-secondary">#TID0320</span>
                  </div>
                </td>
                <td>2024-09-10</td>
                <td>Payment from Client</td>
                <td class="text-primary">$3,000</td>
                <td>Income</td>
                <td>
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                    <span class="ms-1 text-secondary">#TID0351</span>
                  </div>
                </td>
                <td>2024-09-08</td>
                <td>Marketing Campaign</td>
                <td class="text-primary">$1,500</td>
                <td>Expense</td>
                <td>
                  <span
                    class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                  >
                    Pending
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                    <span class="ms-1 text-secondary">#TID0360</span>
                  </div>
                </td>
                <td>2024-09-05</td>
                <td>Payment from Client</td>
                <td class="text-primary">$6,500</td>
                <td>Income</td>
                <td>
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
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
                    <span class="ms-1 text-secondary">#TID0365</span>
                  </div>
                </td>
                <td>2024-09-01</td>
                <td>Software Subscription</td>
                <td class="text-primary">$400</td>
                <td>Expense</td>
                <td>
                  <span
                    class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                  >
                    Completed
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination total="30" items="10" class="p-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Transaction",
  components: {
    Pagination,
  },
});
</script>
