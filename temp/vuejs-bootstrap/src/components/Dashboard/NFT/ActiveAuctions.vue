<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">Active Auctions</h3>
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
                  <span class="fs-12">ITEM</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">OPEN PRICE</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">YOUR OFFER</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">RECENT OFFER</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">TIME LEFT</span>
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
                        src="@/assets/images/nft-5.gif"
                        class="rounded-3"
                        style="width: 50px; height: 50px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                      <span class="fs-12">by John Lira</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                <td class="fs-12 fw-semibold text-body">10.00 ETH</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-80.png"
                      style="width: 22px"
                      class="border border-1 box-shadow border-color-white rounded-circle"
                      alt="user"
                    />
                    <span class="text-body fs-12 fw-semibold ms-2">
                      10.08 ETH
                    </span>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">2h : 43m : 21s</td>
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
                        src="@/assets/images/nft-6.gif"
                        class="rounded-3"
                        style="width: 50px; height: 50px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Rotating Flower</h4>
                      <span class="fs-12">by WalterW.</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">9.25 ETH</td>
                <td class="fs-12 fw-semibold text-body">6.10 ETH</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-81.png"
                      style="width: 22px"
                      class="border border-1 box-shadow border-color-white rounded-circle"
                      alt="user"
                    />
                    <span class="text-body fs-12 fw-semibold ms-2">
                      7.15 ETH
                    </span>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">1h : 21m : 12s</td>
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
                        src="@/assets/images/nft-7.png"
                        class="rounded-3"
                        style="width: 50px; height: 50px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Windows Art</h4>
                      <span class="fs-12">by Christino</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">17.24 ETH</td>
                <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-82.png"
                      style="width: 22px"
                      class="border border-1 box-shadow border-color-white rounded-circle"
                      alt="user"
                    />
                    <span class="text-body fs-12 fw-semibold ms-2">
                      14.11 ETH
                    </span>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">43m : 21s</td>
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
                        src="@/assets/images/nft-8.png"
                        class="rounded-3"
                        style="width: 50px; height: 50px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">3D Logo</h4>
                      <span class="fs-12">by Hater</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-83.png"
                      style="width: 22px"
                      class="border border-1 box-shadow border-color-white rounded-circle"
                      alt="user"
                    />
                    <span class="text-body fs-12 fw-semibold ms-2">
                      12.08 ETH
                    </span>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">1h : 23m : 17s</td>
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
                        src="@/assets/images/nft-9.png"
                        class="rounded-3"
                        style="width: 50px; height: 50px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                      <span class="fs-12">by Liveslong</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">8.15 ETH</td>
                <td class="fs-12 fw-semibold text-body">7.15 ETH</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="@/assets/images/user-84.png"
                      style="width: 22px"
                      class="border border-1 box-shadow border-color-white rounded-circle"
                      alt="user"
                    />
                    <span class="text-body fs-12 fw-semibold ms-2">
                      8.08 ETH
                    </span>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">4h : 14m : 54s</td>
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
  name: "ActiveAuctions",
  components: {
    Pagination,
  },
});
</script>
