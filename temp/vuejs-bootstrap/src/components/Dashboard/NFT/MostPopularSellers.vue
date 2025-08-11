<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">Most Popular Sellers</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color"
          aria-label="Default select example"
        >
          <option selected>Monthly</option>
          <option value="1">Yearly</option>
        </select>
      </div>

      <div class="default-table-area style-two campaigns-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">SELLERS</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">DELIVERIES</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">EARNINGS</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">RATINGS</span>
                </th>
                <th
                  scope="col"
                  class="text-end bg-transparent text-body fw-medium"
                >
                  <span class="fs-12">VIEW</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
                      <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                      <span class="fs-12">Queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">6240</td>
                <td class="fs-12 fw-semibold text-body">624 ETH</td>
                <td>
                  <div class="d-flex gap-1">
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <span class="text-body">5.0</span>
                  </div>
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-80.png"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Skyler White</h4>
                      <span class="fs-12">Neverdies</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">5135</td>
                <td class="fs-12 fw-semibold text-body">597 ETH</td>
                <td>
                  <div class="d-flex gap-1">
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-half-fill text-warning"></i>
                    <span class="text-body">4.9</span>
                  </div>
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </td>
              </tr>
              <tr>
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
                      <h4 class="fs-14 fw-semibold mb-1">Jonathon Watson</h4>
                      <span class="fs-12">Emoticons</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">4321</td>
                <td class="fs-12 fw-semibold text-body">413 ETH</td>
                <td>
                  <div class="d-flex gap-1">
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-half-fill text-warning"></i>
                    <span class="text-body">4.8</span>
                  </div>
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </td>
              </tr>
              <tr>
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
                      <h4 class="fs-14 fw-semibold mb-1">Walter White</h4>
                      <span class="fs-12">Puzzleworld</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">3124</td>
                <td class="fs-12 fw-semibold text-body">321 ETH</td>
                <td>
                  <div class="d-flex gap-1">
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-half-fill text-warning"></i>
                    <span class="text-body">4.0</span>
                  </div>
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </td>
              </tr>
              <tr>
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
                      <h4 class="fs-14 fw-semibold mb-1">David Carlen</h4>
                      <span class="fs-12">Liveslong</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">2137</td>
                <td class="fs-12 fw-semibold text-body">246 ETH</td>
                <td>
                  <div class="d-flex gap-1">
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-half-fill text-warning"></i>
                    <span class="text-body">4.5</span>
                  </div>
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </a>
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
  name: "MostPopularSellers",
  components: {
    Pagination,
  },
});
</script>
