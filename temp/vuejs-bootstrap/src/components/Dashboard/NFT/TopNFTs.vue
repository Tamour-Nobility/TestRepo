<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">Top NFTs</h3>
        <select
          class="form-select month-select form-control w-135 bg-border-color border-color"
          aria-label="Default select example"
        >
          <option selected>Monthly</option>
          <option value="1">Yearly</option>
        </select>
      </div>

      <div class="default-table-area style-two top-nfts-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">SELLERS</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">VOLUME</span>
                </th>
                <th scope="col" class="bg-transparent text-body fw-medium">
                  <span class="fs-12">FLOW PRICE</span>
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
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/sellers-1.gif"
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
                <td class="text-end">
                  <span
                    class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                  >
                    +5.4%
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/sellers-2.gif"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Walking Brain</h4>
                      <span class="fs-12">@neverdies</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">5135</td>
                <td class="fs-12 fw-semibold text-body">597 ETH</td>
                <td class="text-end">
                  <span
                    class="bg-danger text-danger py-1 px-3 border border-danger rounded-pill bg-opacity-10 fs-12"
                  >
                    -3.2%
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/sellers-3.gif"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Flying Flower</h4>
                      <span class="fs-12">@emoticons</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">4321</td>
                <td class="fs-12 fw-semibold text-body">413 ETH</td>
                <td class="text-end">
                  <span
                    class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                  >
                    +2.5%
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/sellers-4.gif"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Living Robot</h4>
                      <span class="fs-12">@puzzleworld</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">3124</td>
                <td class="fs-12 fw-semibold text-body">321 ETH</td>
                <td class="text-end">
                  <span
                    class="bg-danger text-danger py-1 px-3 border border-danger rounded-pill bg-opacity-10 fs-12"
                  >
                    -1.5%
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/sellers-5.gif"
                        class="rounded-circle"
                        style="width: 40px; height: 40px"
                        alt="nft"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-1">Thumbs Up</h4>
                      <span class="fs-12">@liveslong</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">2137</td>
                <td class="fs-12 fw-semibold text-body">246 ETH</td>
                <td class="text-end">
                  <span
                    class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                  >
                    +5.4%
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
  name: "TopNFTs",
  components: {
    Pagination,
  },
});
</script>
