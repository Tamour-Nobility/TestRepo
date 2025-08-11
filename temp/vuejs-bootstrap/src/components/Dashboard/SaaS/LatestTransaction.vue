<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">Latest Transaction</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color"
          aria-label="Default select example"
        >
          <option selected>Monthly</option>
          <option value="1">Yearly</option>
        </select>
      </div>
      <div
        class="default-table-area style-two campaigns-table latest-transaction-table"
      >
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">ID</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">CLIENT</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">AMOUNT</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">SUBSCRIPTION PLAN</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">PAYMENT METHOD</span>
                </th>
                <th
                  scope="col"
                  class="text-end bg-transparent text-body fw-medium"
                >
                  <span class="fs-12">STATUS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fs-12 fw-semibold text-body">#001</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-81.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
                      <span class="fs-12">loren123@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">$6240</td>
                <td class="fs-12 fw-semibold text-body">Pro</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/images/paypal.png" alt="paypal" />
                    <span class="ms-2">Paypal</span>
                  </div>
                </td>
                <td class="text-end">
                  <span
                    class="d-inline-block px-2 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
                  >
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="fs-12 fw-semibold text-body">#002</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-82.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Skyler White</h4>
                      <span class="fs-12">skyqueen@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">$5135</td>
                <td class="fs-12 fw-semibold text-body">Enterprise</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/images/wise.png" alt="paypal" />
                    <span class="ms-2">Wise</span>
                  </div>
                </td>
                <td class="text-end">
                  <span
                    class="d-inline-block px-2 bg-primary-div bg-opacity-10 text-primary-div border border-primary-div rounded-pill fs-12 fw-medium"
                  >
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td class="fs-12 fw-semibold text-body">#003</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-83.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Jonathon Watson</h4>
                      <span class="fs-12">jona2134@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">$4321</td>
                <td class="fs-12 fw-semibold text-body">Startup</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/images/bank.png" alt="bank" />
                    <span class="ms-2">Bank</span>
                  </div>
                </td>
                <td class="text-end">
                  <span
                    class="d-inline-block px-2 bg-danger bg-opacity-10 text-danger border border-danger rounded-pill fs-12 fw-medium"
                  >
                    Failed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="fs-12 fw-semibold text-body">#004</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-84.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Walter White</h4>
                      <span class="fs-12">Puzzleworld</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">$3124</td>
                <td class="fs-12 fw-semibold text-body">Pro</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/images/skrill.png" alt="skrill" />
                    <span class="ms-2">Skrill</span>
                  </div>
                </td>
                <td class="text-end">
                  <span
                    class="d-inline-block px-2 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
                  >
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="fs-12 fw-semibold text-body">#005</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">David Carlen</h4>
                      <span class="fs-12">Liveslong</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">$2137</td>
                <td class="fs-12 fw-semibold text-body">Basic</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/images/paypal.png" alt="paypal" />
                    <span class="ms-2">Paypal</span>
                  </div>
                </td>
                <td class="text-end">
                  <span
                    class="d-inline-block px-2 bg-primary-div bg-opacity-10 text-primary-div border border-primary-div rounded-pill fs-12 fw-medium"
                  >
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination items="05" total="30" class="mt-4" />
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
