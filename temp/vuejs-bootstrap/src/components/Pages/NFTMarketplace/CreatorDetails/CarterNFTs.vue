<template>
  <div class="card border-0 rounded-2 p-4 bg-white mb-4">
    <div class="card bg-white border-0 rounded-3">
      <div class="card-body p-0">
        <h3 class="mb-4">Angela’s NFTs</h3>

        <ul
          class="nav nav-tabs bg-transparent border-bottom gap-3 gap-sm-5 pb-4 live-auction"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all-tab-pane"
              type="button"
              role="tab"
              aria-controls="all-tab-pane"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
              id="in-auction-tab"
              data-bs-toggle="tab"
              data-bs-target="#in-auction-tab-pane"
              type="button"
              role="tab"
              aria-controls="in-auction-tab-pane"
              aria-selected="false"
            >
              IN AUCTION
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
              id="solid-tab"
              data-bs-toggle="tab"
              data-bs-target="#solid-tab-pane"
              type="button"
              role="tab"
              aria-controls="solid-tab-pane"
              aria-selected="false"
            >
              SOLD
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="all-tab-pane"
            role="tabpanel"
            aria-labelledby="all-tab"
            tabindex="0"
          >
            <div
              class="default-table-area style-two campaigns-table only-for-responsive-table"
            >
              <div class="table-responsive">
                <table class="table align-middle border-0 w-100">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-1.gif"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Christmas Eve
                            </h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.00 ETH</td>
                      <td class="fs-12 fw-semibold text-body">30 mins ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-2.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Rotating Flower
                            </h4>
                            <span class="fs-12">by WalterW.</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">9.25 ETH</td>
                      <td class="fs-12 fw-semibold text-body">6.10 ETH</td>
                      <td class="fs-12 fw-semibold text-body">1 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-3.gif"
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
                      <td class="fs-12 fw-semibold text-body">1.30 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-4.gif"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">35 mins ago</td>
                    </tr>
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
                            <h4 class="fs-14 fw-semibold mb-1">
                              Christmas Eve
                            </h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.00 ETH</td>
                      <td class="fs-12 fw-semibold text-body">30 mins ago</td>
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
                            <h4 class="fs-14 fw-semibold mb-1">
                              Rotating Flower
                            </h4>
                            <span class="fs-12">by WalterW.</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">9.25 ETH</td>
                      <td class="fs-12 fw-semibold text-body">6.10 ETH</td>
                      <td class="fs-12 fw-semibold text-body">1 hr ago</td>
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
                      <td class="fs-12 fw-semibold text-body">1.30 hr ago</td>
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
                            <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">35 mins ago</td>
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
                            <h4 class="fs-14 fw-semibold mb-1">Windows Art</h4>
                            <span class="fs-12">by Christino</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">17.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                      <td class="fs-12 fw-semibold text-body">1.30 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-10.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">35 mins ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Pagination total="30" items="10" class="mt-4" />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="in-auction-tab-pane"
            role="tabpanel"
            aria-labelledby="in-auction-tab"
            tabindex="0"
          >
            <div
              class="default-table-area style-two campaigns-table only-for-responsive-table"
            >
              <div class="table-responsive">
                <table class="table align-middle border-0 w-100">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-19.png"
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
                      <td class="fs-12 fw-semibold text-body">1.30 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-20.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">35 mins ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-17.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Christmas Eve
                            </h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.00 ETH</td>
                      <td class="fs-12 fw-semibold text-body">30 mins ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-18.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Rotating Flower
                            </h4>
                            <span class="fs-12">by WalterW.</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">9.25 ETH</td>
                      <td class="fs-12 fw-semibold text-body">6.10 ETH</td>
                      <td class="fs-12 fw-semibold text-body">1 hr ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination total="30" items="10" class="mt-4" />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="solid-tab-pane"
            role="tabpanel"
            aria-labelledby="solid-tab"
            tabindex="0"
          >
            <div
              class="default-table-area style-two campaigns-table only-for-responsive-table"
            >
              <div class="table-responsive">
                <table class="table align-middle border-0 w-100">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-17.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Christmas Eve
                            </h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.00 ETH</td>
                      <td class="fs-12 fw-semibold text-body">30 mins ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-18.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">
                              Rotating Flower
                            </h4>
                            <span class="fs-12">by WalterW.</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">9.25 ETH</td>
                      <td class="fs-12 fw-semibold text-body">6.10 ETH</td>
                      <td class="fs-12 fw-semibold text-body">1 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-19.png"
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
                      <td class="fs-12 fw-semibold text-body">1.30 hr ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/nft-20.png"
                              class="rounded-3"
                              style="width: 50px; height: 50px"
                              alt="nft"
                            />
                          </div>
                          <div class="flex-grow-1 ms-2">
                            <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                            <span class="fs-12">by John Lira</span>
                          </div>
                        </div>
                      </td>
                      <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                      <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                      <td class="fs-12 fw-semibold text-body">35 mins ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination total="30" items="10" class="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "CarterNFTs",
  components: {
    Pagination,
  },
});
</script>
