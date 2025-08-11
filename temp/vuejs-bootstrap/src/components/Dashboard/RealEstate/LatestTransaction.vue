<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4"
      >
        <h3 class="mb-0">Latest Transaction</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
          aria-label="Default select example"
        >
          <option selected="">Last 30 days</option>
          <option value="1">Last 90 days</option>
          <option value="1">Last 1 year</option>
        </select>
      </div>

      <div class="default-table-area style-two latest-transaction">
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
                    <span class="ms-1">Customer ID</span>
                  </div>
                </th>
                <th scope="col">Customer Name</th>
                <th scope="col">Property</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Payment</th>
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
                    <span class="ms-1 text-secondary">#TRE0015</span>
                  </div>
                </td>
                <td>
                  <a href="my-profile.html" class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-1.jpg"
                      class="wh-44 rounded-2"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Sarah Johnson</h6>
                    </div>
                  </a>
                </td>
                <td>Industrial</td>
                <td>2024-10-01</td>
                <td>$500,000</td>
                <td>
                  <span
                    class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                    >Completed</span
                  >
                </td>
                <td>Master Card</td>
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
                        id="flexCheckDefault3"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TRE0099</span>
                  </div>
                </td>
                <td>
                  <a href="my-profile.html" class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-2.jpg"
                      class="wh-44 rounded-2"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Michael Smith</h6>
                    </div>
                  </a>
                </td>
                <td>Office</td>
                <td>2024-09-28</td>
                <td>$1,200,000</td>
                <td>
                  <span
                    class="badge bg-warning bg-opacity-10 text-warning p-2 fs-12 fw-normal"
                    >Pending</span
                  >
                </td>
                <td>Paypal</td>
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
                        id="flexCheckDefault4"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TRE0145</span>
                  </div>
                </td>
                <td>
                  <a href="my-profile.html" class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-3.jpg"
                      class="wh-44 rounded-2"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Emily Brown</h6>
                    </div>
                  </a>
                </td>
                <td>Multi-Family</td>
                <td>2024-09-25</td>
                <td>$350,000</td>
                <td>
                  <span
                    class="badge bg-danger bg-opacity-25 text-danger p-2 fs-12 fw-normal"
                    >Cancel</span
                  >
                </td>
                <td>Wise</td>
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
                        id="flexCheckDefault5"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TRE0247</span>
                  </div>
                </td>
                <td>
                  <a href="my-profile.html" class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-4.jpg"
                      class="wh-44 rounded-2"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Jason Lee</h6>
                    </div>
                  </a>
                </td>
                <td>Residential</td>
                <td>2024-09-22</td>
                <td>$220,000</td>
                <td>
                  <span
                    class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                    >Completed</span
                  >
                </td>
                <td>Payoneer</td>
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
                        id="flexCheckDefault6"
                      />
                    </div>
                    <span class="ms-1 text-secondary">#TRE0299</span>
                  </div>
                </td>
                <td>
                  <a href="my-profile.html" class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-5.jpg"
                      class="wh-44 rounded-2"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Ashley Davis</h6>
                    </div>
                  </a>
                </td>
                <td>Commercial</td>
                <td>2024-09-20</td>
                <td>$1,500,000</td>
                <td>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                    >Rejected</span
                  >
                </td>
                <td>Credit Card</td>
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
  name: "LatestTransaction",
  components: {
    Pagination,
  },
});
</script>
