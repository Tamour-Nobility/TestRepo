<template>
  <div>
    <ul
      class="nav nav-tabs review-tabs gap-3 border-0 bg-transparent"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link border-0 fs-16 fw-medium active"
          id="description-tab"
          data-bs-toggle="tab"
          data-bs-target="#description-tab-pane"
          type="button"
          role="tab"
          aria-controls="description-tab-pane"
          aria-selected="true"
        >
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link border-0 fs-16 fw-medium"
          id="specification-tab"
          data-bs-toggle="tab"
          data-bs-target="#specification-tab-pane"
          type="button"
          role="tab"
          aria-controls="specification-tab-pane"
          aria-selected="false"
        >
          Specification
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link border-0 fs-16 fw-medium"
          id="reviews-tab"
          data-bs-toggle="tab"
          data-bs-target="#reviews-tab-pane"
          type="button"
          role="tab"
          aria-controls="reviews-tab-pane"
          aria-selected="false"
        >
          Reviews
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="description-tab-pane"
        role="tabpanel"
        aria-labelledby="description-tab"
        tabindex="0"
      >
        <div class="card bg-white border-0 rounded-3 mb-4 rounded-top-0">
          <div class="card-body p-4">
            <p>
              The Apple MacBook Pro 16.2 is a cutting-edge laptop designed to
              deliver exceptional performance and advanced features for
              professionals and creative enthusiasts. With its sleek aluminum
              body and precision engineering, this MacBook Pro represents the
              pinnacle of Apple's laptop technology.
            </p>
            <p>
              Stay connected with a variety of ports, including Thunderbolt 3,
              USB-C, and audio jacks. These versatile ports support high-speed
              data transfer and external device connections. Enjoy a rich audio
              experience with high-fidelity speakers that deliver clear and
              immersive sound. Perfect for content creators and multimedia
              enthusiasts.
            </p>
            <p>
              Equipped with the latest processors, ample RAM, and
              high-performance graphics, the MacBook Pro 16.2 ensures smooth
              multitasking, fast rendering, and efficient handling of
              resource-intensive tasks. Seamlessly integrate with the macOS
              ecosystem, benefiting from features like iCloud, Siri, and a vast
              selection of applications available on the App Store.
            </p>
          </div>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="specification-tab-pane"
        role="tabpanel"
        aria-labelledby="specification-tab"
        tabindex="0"
      >
        <div class="card bg-white border-0 rounded-3 mb-4 rounded-top-0">
          <div class="card-body p-4">
            <div class="default-table-area style-two">
              <div class="table-responsive p-0">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td class="title text-dark">Brand</td>
                      <td class="price">Apple</td>
                    </tr>
                    <tr>
                      <td class="title text-dark">Categories</td>
                      <td class="price">Brond New</td>
                    </tr>
                    <tr>
                      <td class="title text-dark">SKU</td>
                      <td class="price">01</td>
                    </tr>
                    <tr>
                      <td class="title text-dark">Price</td>
                      <td class="price">$399</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="reviews-tab-pane"
        role="tabpanel"
        aria-labelledby="reviews-tab"
        tabindex="0"
      >
        <div class="card bg-white border-0 rounded-3 mb-4 rounded-top-0">
          <div class="card-body p-4">
            <div class="mw-480 text-center m-auto mb-4">
              <h3 class="fs-24">Feedback</h3>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-4 col-sm-6 col-md-6">
                <div class="card bg-body-bg border-0 rounded-3 mb-4">
                  <div class="card-body p-4">
                    <ul class="ps-0 mb-2 list-unstyled d-flex gap-2">
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-line text-light fs-20"></i>
                      </li>
                    </ul>
                    <p class="fw-medium">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit.
                    </p>

                    <div class="d-flex align-items-center mt-3">
                      <div class="flex-shrink-0">
                        <img
                          src="~/assets/images/user-34.jpg"
                          class="rounded-circle wh-35"
                          alt="user"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="mb-0 fs-16 fw-medium">Alvarado Turner</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6 col-md-6">
                <div class="card bg-body-bg border-0 rounded-3 mb-4">
                  <div class="card-body p-4">
                    <ul class="ps-0 mb-2 list-unstyled d-flex gap-2">
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-line text-light fs-20"></i>
                      </li>
                    </ul>
                    <p class="fw-medium">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit.
                    </p>

                    <div class="d-flex align-items-center mt-3">
                      <div class="flex-shrink-0">
                        <img
                          src="~/assets/images/user-35.jpg"
                          class="rounded-circle wh-35"
                          alt="user"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="mb-0 fs-16 fw-medium">Eddie Bryan</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6 col-md-6">
                <div class="card bg-body-bg border-0 rounded-3 mb-4">
                  <div class="card-body p-4">
                    <ul class="ps-0 mb-2 list-unstyled d-flex gap-2">
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                      <li>
                        <i class="ri-star-fill text-warning fs-20"></i>
                      </li>
                    </ul>
                    <p class="fw-medium">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit.
                    </p>

                    <div class="d-flex align-items-center mt-3">
                      <div class="flex-shrink-0">
                        <img
                          src="~/assets/images/user-36.jpg"
                          class="rounded-circle wh-35"
                          alt="user"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="mb-0 fs-16 fw-medium">Thomas Albart</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="fs-18 fw-semibold mb-4">Customers Feedback :</h3>
            <div class="card bg-body-bg border-0 rounded-3 mb-4">
              <div class="card-body p-4">
                <div class="row align-items-center">
                  <div class="col-lg-8">
                    <div class="d-flex align-items-center mb-3">
                      <ul class="pe-4 mb-0 list-unstyled d-flex gap-2">
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                      </ul>
                      <div
                        class="progress w-100 rounded-pill"
                        role="progressbar"
                        aria-label="Example 5px high"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 5px; background-color: #eff2ff"
                      >
                        <div
                          class="progress-bar rounded-pill"
                          style="width: 100%"
                        ></div>
                      </div>
                      <span class="ms-4">359</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <ul class="pe-4 mb-0 list-unstyled d-flex gap-2">
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                      </ul>
                      <div
                        class="progress w-100 rounded-pill"
                        role="progressbar"
                        aria-label="Example 5px high"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 5px; background-color: #eff2ff"
                      >
                        <div
                          class="progress-bar rounded-pill"
                          style="width: 90%"
                        ></div>
                      </div>
                      <span class="ms-4">208</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <ul class="pe-4 mb-0 list-unstyled d-flex gap-2">
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                      </ul>

                      <div
                        class="progress w-100 rounded-pill"
                        role="progressbar"
                        aria-label="Example 5px high"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 5px; background-color: #eff2ff"
                      >
                        <div
                          class="progress-bar rounded-pill"
                          style="width: 80%"
                        ></div>
                      </div>
                      <span class="ms-4">124</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <ul class="pe-4 mb-0 list-unstyled d-flex gap-2">
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                      </ul>

                      <div
                        class="progress w-100 rounded-pill"
                        role="progressbar"
                        aria-label="Example 5px high"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 5px; background-color: #eff2ff"
                      >
                        <div
                          class="progress-bar rounded-pill"
                          style="width: 70%"
                        ></div>
                      </div>
                      <span class="ms-4">89</span>
                    </div>
                    <div class="d-flex align-items-center mb-0">
                      <ul class="pe-4 mb-0 list-unstyled d-flex gap-2">
                        <li>
                          <i class="ri-star-fill text-warning fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-gray-light fs-20"></i>
                        </li>
                      </ul>

                      <div
                        class="progress w-100 rounded-pill"
                        role="progressbar"
                        aria-label="Example 5px high"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 5px; background-color: #eff2ff"
                      >
                        <div
                          class="progress-bar rounded-pill"
                          style="width: 60%"
                        ></div>
                      </div>
                      <span class="ms-4">4</span>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="text-center mt-4 mt-lg-0">
                      <h1 class="fs-40 mb-2">4.28</h1>
                      <ul
                        class="ps-0 mb-3 list-unstyled d-flex gap-2 justify-content-center"
                      >
                        <li>
                          <i class="ri-star-fill text-warning fs-30"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-30"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-30"></i>
                        </li>
                        <li>
                          <i class="ri-star-fill text-warning fs-30"></i>
                        </li>
                        <li>
                          <i class="ri-star-line text-light fs-30"></i>
                        </li>
                      </ul>
                      <span class="ms-4">of 3250 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-sm-flex justify-content-between align-items-center mb-4"
            >
              <h3 class="fs-18 fw-semibold text-center">
                Write Feedback Here:
              </h3>
              <ul
                class="ps-0 mb-0 list-unstyled d-flex gap-2 justify-content-center ratings"
              >
                <li class="rating">
                  <i class="ri-star-fill fs-20"></i>
                </li>
                <li class="rating">
                  <i class="ri-star-fill fs-20"></i>
                </li>
                <li class="rating">
                  <i class="ri-star-fill fs-20"></i>
                </li>
                <li class="rating">
                  <i class="ri-star-fill fs-20"></i>
                </li>
                <li class="rating">
                  <i class="ri-star-fill fs-20"></i>
                </li>
              </ul>
            </div>
            <div class="card bg-body-bg border-0 rounded-3 mb-4">
              <div class="card-body p-4">
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mb-4">
                        <label class="label text-secondary">Your Name</label>
                        <input
                          type="text"
                          class="form-control h-55 text-dark"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-4">
                        <label class="label text-secondary">Your Email</label>
                        <input
                          type="email"
                          class="form-control h-55 text-dark"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-4">
                        <label class="label text-secondary"
                          >Your Phone No</label
                        >
                        <input
                          type="number"
                          class="form-control h-55 text-dark"
                          placeholder="Your Phone No"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-4">
                        <label class="label text-secondary">Your Subject</label>
                        <input
                          type="email"
                          class="form-control h-55 text-dark"
                          placeholder="Your Subject"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mb-4">
                        <label class="label text-secondary">
                          Write Comment
                        </label>
                        <textarea
                          class="form-control"
                          placeholder="Write Comment"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mb-0">
                        <button
                          type="submit"
                          class="btn btn-primary text-white fw-semibold py-3 px-5"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
  name: "ProductsDetailsTabs",
});
</script>
