<template>
  <div class="row">
    <div class="col-lg-8 col-xxl-9">
      <div class="card border-0 bg-white p-4 mb-4">
        <div
          class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
        >
          <h3 class="mb-0 fs-18">Live Auction</h3>

          <ul
            class="nav nav-tabs live-auction gap-2 gap-md-4 border-0 bg-transparent"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0 active"
                id="all-items-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-items-tab-pane"
                type="button"
                role="tab"
                aria-controls="all-items-tab-pane"
                aria-selected="true"
              >
                ALL ITEMS (12)
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                id="up-to-tab"
                data-bs-toggle="tab"
                data-bs-target="#up-to-tab-pane"
                type="button"
                role="tab"
                aria-controls="up-to-tab-pane"
                aria-selected="false"
              >
                UP TO 15%(05)
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                id="up-to-two-tab"
                data-bs-toggle="tab"
                data-bs-target="#up-to-two-tab-pane"
                type="button"
                role="tab"
                aria-controls="up-to-two-tab-pane"
                aria-selected="false"
              >
                UP TO 30%(07)
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                id="up-to-three-tab"
                data-bs-toggle="tab"
                data-bs-target="#up-to-three-tab-pane"
                type="button"
                role="tab"
                aria-controls="up-to-three-tab-pane"
                aria-selected="false"
              >
                UP TO 50%(05)
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="all-items-tab-pane"
          role="tabpanel"
          aria-labelledby="all-items-tab"
          tabindex="0"
        >
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >9.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >8.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >1.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >3.95 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4"
              >
                <span class="fs-12 fw-medium">Showing 6 of 30 Results</span>

                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0 justify-content-center">
                    <li class="page-item">
                      <a
                        class="page-link icon"
                        href="live-auction.html"
                        aria-label="Previous"
                      >
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_left</i
                        >
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="live-auction.html">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="live-auction.html">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="live-auction.html">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="live-auction.html">4</a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link icon"
                        href="live-auction.html"
                        aria-label="Next"
                      >
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_right</i
                        >
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="up-to-tab-pane"
          role="tabpanel"
          aria-labelledby="up-to-tab"
          tabindex="0"
        >
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >1.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >3.95 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >9.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >8.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4"
              >
                <span class="fs-12 fw-medium">Showing 6 of 30 Results</span>

                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0 justify-content-center">
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Previous">
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_left</i
                        >
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Next">
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_right</i
                        >
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="up-to-two-tab-pane"
          role="tabpanel"
          aria-labelledby="up-to-two-tab"
          tabindex="0"
        >
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >9.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >8.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >1.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >3.95 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4"
              >
                <span class="fs-12 fw-medium">Showing 6 of 30 Results</span>

                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0 justify-content-center">
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Previous">
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_left</i
                        >
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Next">
                        <i class="material-symbols-outlined"
                          >keyboard_arrow_right</i
                        >
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="up-to-three-tab-pane"
          role="tabpanel"
          aria-labelledby="up-to-three-tab"
          tabindex="0"
        >
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >1.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >3.95 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >9.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold text-secondary"
                          >10.75 ETH</span
                        ></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />
                  <span
                    class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
                  >
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1">
                        Highest Bid:
                        <span class="fw-semibold text-secondary">
                          8.75 ETH
                        </span>
                      </span>
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="text-secondary fs-12 fw-semibold">
                      9.7<span class="text-body">/10</span>
                    </span>
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-12">Sold: 130</span>
                  <span class="fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4"
              >
                <span class="fs-12 fw-medium">Showing 6 of 30 Results</span>

                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0 justify-content-center">
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Previous">
                        <i class="material-symbols-outlined">
                          keyboard_arrow_left
                        </i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Next">
                        <i class="material-symbols-outlined">
                          keyboard_arrow_right
                        </i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xxl-3">
      <NewMobileApp />

      <HistoryOfBids />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewMobileApp from "./NewMobileApp.vue";
import HistoryOfBids from "./HistoryOfBids.vue";
import CountdownTimer from "./CountdownTimer.vue";

export default defineComponent({
  name: "LiveAuction",
  components: {
    NewMobileApp,
    HistoryOfBids,
    CountdownTimer,
  },
});
</script>
