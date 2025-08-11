<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Recent Orders</h3>
        <div class="d-flex">
          <form class="position-relative table-src-form">
            <input type="text" class="form-control" placeholder="Search here" />
            <i
              class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
            >
              search
            </i>
          </form>
          <select
            class="form-select month-select form-control"
            aria-label="Default select example"
          >
            <option selected>Show All</option>
            <option value="1">Weekly</option>
            <option value="2">Monthly</option>
            <option value="3">Yearly</option>
          </select>
        </div>
      </div>

      <div class="default-table-area recent-orders recent-style-two">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Created</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#JAN-2345</td>
                <td>
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="@/assets/images/user-1.jpg"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Sarah Johnson</h6>
                    </div>
                  </RouterLink>
                </td>
                <td>12 Jan, 2024</td>
                <td>$10,490</td>
                <td>
                  <span
                    class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                  >
                    Shipped
                  </span>
                </td>
              </tr>
              <tr>
                <td>#JAN-1323</td>
                <td>
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="@/assets/images/user-2.jpg"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Michael Smith</h6>
                    </div>
                  </RouterLink>
                </td>
                <td>08 Jan, 2024</td>
                <td>$6,575</td>
                <td>
                  <span
                    class="badge bg-info bg-opacity-10 text-info p-2 fs-12 fw-normal"
                  >
                    Confirmed
                  </span>
                </td>
              </tr>
              <tr>
                <td>#DEC-1234</td>
                <td>
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="@/assets/images/user-3.jpg"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Emily Brown</h6>
                    </div>
                  </RouterLink>
                </td>
                <td>13 Dec, 2023</td>
                <td>$12,870</td>
                <td>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                  >
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>#DEC-3567</td>
                <td>
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="@/assets/images/user-4.jpg"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Jason Lee</h6>
                    </div>
                  </RouterLink>
                </td>
                <td>05 Dec, 2023</td>
                <td>$7,895</td>
                <td>
                  <span
                    class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                  >
                    Shipped
                  </span>
                </td>
              </tr>
              <tr>
                <td>#DEC-1098</td>
                <td>
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="@/assets/images/user-5.jpg"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Ashley Davis</h6>
                    </div>
                  </RouterLink>
                </td>
                <td>01 Dec, 2023</td>
                <td>$4,680</td>
                <td>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                  >
                    Rejected
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination items="8" total="30" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "RecentOrders",
  components: {
    Pagination,
  },
});
</script>
