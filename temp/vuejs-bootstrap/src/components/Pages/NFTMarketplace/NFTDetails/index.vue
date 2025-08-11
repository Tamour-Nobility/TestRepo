<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="mb-4">
        <div
          class="tab-content mb-3 card border-0 bg-white p-3 rounded-2"
          id="myTabContent"
        >
          <div
            class="tab-pane fade show active"
            id="nft-details1-tab-pane"
            role="tabpanel"
            aria-labelledby="nft-details1-tab"
            tabindex="0"
          >
            <img
              src="@/assets/images/nft-details-1.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div
            class="tab-pane fade"
            id="nft-details2-tab-pane"
            role="tabpanel"
            aria-labelledby="nft-details2-tab"
            tabindex="0"
          >
            <img
              src="@/assets/images/nft-details-2.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div
            class="tab-pane fade"
            id="nft-details3-tab-pane"
            role="tabpanel"
            aria-labelledby="nft-details3-tab"
            tabindex="0"
          >
            <img
              src="@/assets/images/nft-details-3.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div
            class="tab-pane fade"
            id="nft-details4-tab-pane"
            role="tabpanel"
            aria-labelledby="nft-details4-tab"
            tabindex="0"
          >
            <img
              src="@/assets/images/nft-details-4.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
        </div>
        <ul
          class="nav nav-tabs gap-3 nft-detail-tabs border-0 justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 border-0 active"
              id="nft-details1-tab"
              data-bs-toggle="tab"
              data-bs-target="#nft-details1-tab-pane"
              type="button"
              role="tab"
              aria-controls="nft-details1-tab-pane"
              aria-selected="true"
            >
              <img
                src="@/assets/images/nft-details-1.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 border-0"
              id="nft-details2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nft-details2-tab-pane"
              type="button"
              role="tab"
              aria-controls="nft-details2-tab-pane"
              aria-selected="false"
            >
              <img
                src="@/assets/images/nft-details-2.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 border-0"
              id="nft-details3-tab"
              data-bs-toggle="tab"
              data-bs-target="#nft-details3-tab-pane"
              type="button"
              role="tab"
              aria-controls="nft-details3-tab-pane"
              aria-selected="false"
            >
              <img
                src="@/assets/images/nft-details-3.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link p-0 border-0"
              id="nft-details4-tab"
              data-bs-toggle="tab"
              data-bs-target="#nft-details4-tab-pane"
              type="button"
              role="tab"
              aria-controls="nft-details4-tab-pane"
              aria-selected="false"
            >
              <img
                src="@/assets/images/nft-details-4.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary py-2 px-4 w-100 mb-4">Place Bid</button>
    </div>

    <div class="col-lg-8">
      <div class="card border-0 rounded-2 p-4 bg-white mb-4">
        <div class="border-bottom mb-3 pb-3">
          <span class="fs-12 d-block mb-1">NFT ID: 35246</span>
          <h3 class="fs-24 mb-0">Christmas Eve</h3>
        </div>
        <div class="d-flex flex-wrap gap-2 gap-sm-5 mb-4">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/user-76.gif"
                class="rounded-circle"
                style="width: 30px; height: 30px"
                alt="user"
              />
              <img
                src="@/assets/images/verify.svg"
                class="position-absolute top-100 start-100 translate-middle"
                style="width: 18px; height: 18px"
                alt="verify"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span class="fs-12">Creator</span>
              <h4 class="fs-14 fw-semibold">Anan Loren</h4>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/schedule2.png"
                style="width: 30px; height: 30px"
                alt="schedule2"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span class="fs-12">Published</span>
              <h4 class="fs-14 fw-semibold">23 June 2024</h4>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-wrap justify-content-between gap-3 rounded-3 bg-body-bg p-3 mb-5"
        >
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Price:</span>
            <h3 class="mb-0 fw-semibold fs-14">5.50 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Highest Bid:</span>
            <h3 class="mb-0 fw-semibold fs-14">4.95 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Stock:</span>
            <h3 class="mb-0 fw-semibold fs-14">130/450</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Price:</span>
            <h3 class="mb-0 fw-semibold fs-14">5.50 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Auction End In:</span>
            <div
              class="clockdiv position-static bg-transparent p-0 m-0"
              data-date="December 14, 2024 21:14:01"
            >
              <ul
                class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-3 justify-content-center"
              >
                <li class="time">
                  <span class="days"></span>
                </li>
                <li class="time">
                  <span class="hours"></span>
                </li>
                <li class="time">
                  <span class="minutes"></span>
                </li>
                <li class="time">
                  <span class="seconds"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 class="fs-18 mb-3">Description</h3>
        <p class="mb-5">
          This NFT captures the essence of boundless potential, symbolized by a
          surreal landscape where the sky meets the earth in a dazzling fusion
          of colors. The intricate design features flowing lines that blend
          together, representing the limitless paths we can take in life.
        </p>

        <div class="card bg-white border-0 rounded-3">
          <div class="card-body p-0">
            <h3 class="mb-4">Product Description</h3>

            <ul
              class="nav nav-tabs bg-transparent border-bottom gap-3 gap-sm-5 pb-4 live-auction"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body active"
                  id="place-bids-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#place-bids-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="place-bids-tab-pane"
                  aria-selected="true"
                >
                  PLACE BIDS
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
                  id="additional-information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#additional-information-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="additional-information-tab-pane"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
                  id="details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#details-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="details-tab-pane"
                  aria-selected="false"
                >
                  DETAILS
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="place-bids-tab-pane"
                role="tabpanel"
                aria-labelledby="place-bids-tab"
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
                          <td class="fs-12 fw-semibold text-body">
                            30 mins ago
                          </td>
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Windows Art
                                </h4>
                                <span class="fs-12">by Christino</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">17.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            1.30 hr ago
                          </td>
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Awesome Bird
                                </h4>
                                <span class="fs-12">by John Lira</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                          <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            35 mins ago
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="additional-information-tab-pane"
                role="tabpanel"
                aria-labelledby="additional-information-tab"
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Windows Art
                                </h4>
                                <span class="fs-12">by Christino</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">17.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            1.30 hr ago
                          </td>
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Awesome Bird
                                </h4>
                                <span class="fs-12">by John Lira</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                          <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            35 mins ago
                          </td>
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
                          <td class="fs-12 fw-semibold text-body">
                            30 mins ago
                          </td>
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
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="details-tab-pane"
                role="tabpanel"
                aria-labelledby="details-tab"
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
                          <td class="fs-12 fw-semibold text-body">
                            30 mins ago
                          </td>
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Windows Art
                                </h4>
                                <span class="fs-12">by Christino</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">17.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">11.75 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            1.30 hr ago
                          </td>
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
                                <h4 class="fs-14 fw-semibold mb-1">
                                  Awesome Bird
                                </h4>
                                <span class="fs-12">by John Lira</span>
                              </div>
                            </div>
                          </td>
                          <td class="fs-12 fw-semibold text-body">12.12 ETH</td>
                          <td class="fs-12 fw-semibold text-body">10.24 ETH</td>
                          <td class="fs-12 fw-semibold text-body">
                            35 mins ago
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NFTDetails",
});
</script>
