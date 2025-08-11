<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">Campaigns</h3>
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add Campaigns</span>
          </span>
        </button>
      </div>

      <ul
        class="nav nav-tabs bg-transparent border-bottom gap-2 gap-sm-5 pb-4"
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
            ALL (05)
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
            id="pending-tab"
            data-bs-toggle="tab"
            data-bs-target="#pending-tab-pane"
            type="button"
            role="tab"
            aria-controls="pending-tab-pane"
            aria-selected="false"
          >
            PENDING(05)
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
            id="completed-tab"
            data-bs-toggle="tab"
            data-bs-target="#completed-tab-pane"
            type="button"
            role="tab"
            aria-controls="completed-tab-pane"
            aria-selected="false"
          >
            COMPLETED(07)
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
          <div class="default-table-area style-two campaigns-table">
            <div class="table-responsive">
              <table class="table align-middle border-0">
                <tbody>
                  <tr>
                    <td>
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-19.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a
                            href="users-list.html"
                            class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                            style="background-color: #3a4252"
                            >+3</a
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                        <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-26.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-27.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-primary ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                        <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-primary bg-opacity-10 rounded-2 text-primary"
                        >Paused</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-28.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-primary-div ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                        <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-30.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-31.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-32.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-success ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1 text-secondary">
                          Halloween
                        </h4>
                        <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pending-tab-pane"
          role="tabpanel"
          aria-labelledby="pending-tab"
          tabindex="0"
        >
          <div class="default-table-area style-two campaigns-table">
            <div class="table-responsive">
              <table class="table align-middle border-0">
                <tbody>
                  <tr>
                    <td>
                      <div
                        class="border-start border-2 border-primary ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                        <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-28.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-primary-div ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                        <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-30.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-31.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-32.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-success ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1 text-secondary">
                          Halloween
                        </h4>
                        <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-19.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a
                            href="users-list.html"
                            class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                            style="background-color: #3a4252"
                            >+3</a
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                        <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                        >Reviewing</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-26.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-27.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="completed-tab-pane"
          role="tabpanel"
          aria-labelledby="completed-tab"
          tabindex="0"
        >
          <div class="default-table-area style-two campaigns-table">
            <div class="table-responsive">
              <table class="table align-middle border-0">
                <tbody>
                  <tr>
                    <td>
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-19.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a
                            href="users-list.html"
                            class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                            style="background-color: #3a4252"
                            >+3</a
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-danger ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                        <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-26.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-27.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-primary ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                        <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-25.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-28.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-primary-div ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                        <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-30.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-31.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-32.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
                      <div
                        class="border-start border-2 border-success ps-3 py-2"
                      >
                        <h4 class="fs-14 fw-semibold mb-1 text-secondary">
                          Halloween
                        </h4>
                        <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
                        <img
                          src="@/assets/images/facebook4.svg"
                          alt="facebook"
                        />
                        <img
                          src="@/assets/images/instagram2.svg"
                          alt="instagram"
                        />
                        <img src="@/assets/images/google3.svg" alt="facebook" />
                        <img
                          src="@/assets/images/linkedin2.svg"
                          alt="facebook"
                        />
                      </div>
                    </td>
                    <td>
                      <span
                        class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                        >Live Now</span
                      >
                    </td>
                    <td>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex align-items-center"
                      >
                        <li>
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-16.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-17.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                        <li class="ms-m-15">
                          <a href="my-profile.html">
                            <img
                              src="@/assets/images/user-18.jpg"
                              class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                              alt="user"
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        href="nft-details.html"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CampaignsContent",
});
</script>

<style lang="scss" scoped>
.nav-tabs {
  .nav-item {
    .nav-link {
      &.active {
        color: #4936f5 !important;
      }
    }
  }
}
</style>
