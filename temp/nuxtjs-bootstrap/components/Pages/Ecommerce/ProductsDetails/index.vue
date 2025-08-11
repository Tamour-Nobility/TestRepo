<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="tab-content position-relative bg-body-bg product-for-dark text-center p-5 rounded-3 mb-4"
            id="myTabContent"
          >
            <div
              class="tab-pane product-details-img fade show active"
              id="product1-tab-pane"
              role="tabpanel"
              aria-labelledby="product1-tab"
              tabindex="0"
            >
              <img src="~/assets/images/product-15.png" alt="product" />
            </div>
            <div
              class="tab-pane product-details-img fade"
              id="product2-tab-pane"
              role="tabpanel"
              aria-labelledby="product2-tab"
              tabindex="0"
            >
              <img src="~/assets/images/product-16.png" alt="product" />
            </div>
            <div
              class="tab-pane product-details-img fade"
              id="product3-tab-pane"
              role="tabpanel"
              aria-labelledby="product3-tab"
              tabindex="0"
            >
              <img src="~/assets/images/product-17.png" alt="product" />
            </div>
          </div>
          <ul
            class="nav nav-tabs products-tabs justify-content-center gap-3 gap-sm-4 border-0"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link bg-body-bg product-for-dark rounded-3 active"
                id="product1-tab"
                data-bs-toggle="tab"
                data-bs-target="#product1-tab-pane"
                type="button"
                role="tab"
                aria-controls="product1-tab-pane"
                aria-selected="true"
              >
                <img
                  src="~/assets/images/product-15.png"
                  class="mw-123"
                  alt="product"
                />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link bg-body-bg product-for-dark rounded-3"
                id="product2-tab"
                data-bs-toggle="tab"
                data-bs-target="#product2-tab-pane"
                type="button"
                role="tab"
                aria-controls="product2-tab-pane"
                aria-selected="false"
              >
                <img
                  src="~/assets/images/product-16.png"
                  class="mw-123"
                  alt="product"
                />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link bg-body-bg product-for-dark rounded-3"
                id="product3-tab"
                data-bs-toggle="tab"
                data-bs-target="#product3-tab-pane"
                type="button"
                role="tab"
                aria-controls="product3-tab-pane"
                aria-selected="false"
              >
                <img
                  src="~/assets/images/product-17.png"
                  class="mw-123"
                  alt="product"
                />
              </button>
            </li>
          </ul>
        </div>

        <div class="col-lg-6">
          <div
            class="product-details-content ms-lg-4 ms-xl-3 ms-xxl-5 mt-4 mt-lg-0"
          >
            <span
              class="bg-success bg-opacity-10 text-success d-inline-block py-1 px-3 rounded-3 mb-3"
            >
              <i class="ri-check-line fs-16 position-relative top-1"></i>
              in stock
            </span>
            <h3 class="fs-18 fw-medium lh-base lh-sm mb-3">
              Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max
              Chip with 12-Core CPU
            </h3>
            <div class="d-flex gap-1 mb-3 pb-3 border-bottom">
              <i class="ri-star-fill fs-16 text-warning"></i>
              <i class="ri-star-fill fs-16 text-warning"></i>
              <i class="ri-star-fill fs-16 text-warning"></i>
              <i class="ri-star-fill fs-16 text-warning"></i>
              <i class="ri-star-fill fs-16 text-warning"></i>
              <span class="position-relative top-2 ms-2">(5 Reviews)</span>
            </div>
            <h2 class="fs-18 mb-3">
              $3,499 <del class="fw-normal fs-16 ms-2">$3,799</del>
            </h2>
            <div class="d-flex style-select mb-2 align-items-center">
              <span>Style:</span>
              <h5 class="mb-0 fw-medium fs-14 position-relative top-2 ms-1">
                Apple M1 Pro Chip
              </h5>
            </div>
            <div class="select-style mb-4 d-flex flex-wrap gap-3">
              <div>
                <input
                  type="radio"
                  class="btn-check"
                  name="options-base"
                  id="option5"
                  autocomplete="off"
                />
                <label class="btn mb-2 mb-sm-0 border" for="option5">
                  Apple M1 Max Chip
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  class="btn-check"
                  name="options-base"
                  id="option6"
                  autocomplete="off"
                  checked
                />
                <label class="btn mb-2 mb-sm-0 border" for="option6">
                  Apple M1 Pro Chip
                </label>
              </div>
            </div>
            <div class="d-flex style-select mb-2 align-items-center">
              <span>Capacity:</span>
              <h5 class="mb-0 fw-medium fs-14 position-relative top-2 ms-1">
                1 TB
              </h5>
            </div>
            <div class="select-style mb-4 d-flex flex-wrap gap-3">
              <div>
                <input
                  type="radio"
                  class="btn-check"
                  name="options-outlined"
                  id="success-outlined"
                  autocomplete="off"
                  checked
                />
                <label class="btn mb-2 mb-sm-0 border" for="success-outlined">
                  512 GB
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  class="btn-check"
                  name="options-outlined"
                  id="danger-outlined"
                  autocomplete="off"
                />
                <label class="btn mb-2 mb-sm-0 border" for="danger-outlined">
                  1 TB
                </label>
              </div>
            </div>
            <div class="d-flex style-select mb-2 align-items-center">
              <span>Color:</span>
              <h5 class="mb-0 fw-medium fs-14 position-relative top-2 ms-1">
                Silver
              </h5>
            </div>
            <ul class="d-flex ps-0 mb-0 list-unstyled select-color gap-2 mb-4">
              <li class="color1 active"></li>
              <li class="color2"></li>
            </ul>
            <div class="d-flex align-items-center mb-4 gap-3">
              <div class="product-quantity">
                <div class="add-to-cart-counter">
                  <input
                    @click="decrement"
                    type="button"
                    class="minusBtn"
                    value="-"
                  />
                  <input
                    type="text"
                    size="25"
                    v-model="internalValue"
                    class="count"
                  />
                  <input
                    @click="increment"
                    type="button"
                    class="plusBtn"
                    value="+"
                  />
                </div>
              </div>
              <button class="btn btn-primary rounded-3 py-2">
                <i class="ri-shopping-cart-line text-white"></i>
                <span>Add To Cart</span>
              </button>
            </div>
            <button
              class="d-flex align-items-center gap-2 mb-2 border-0 bg-transparent"
            >
              <i
                class="ri-heart-line wh-30 lh-30 d-inline-block bg-border-color fs-16 rounded-pill text-body"
              ></i>
              <span class="fs-14 fw-medium">Add to wishlist</span>
            </button>
            <button
              class="d-flex align-items-center gap-2 border-0 bg-transparent"
            >
              <i
                class="ri-eye-line wh-30 lh-30 d-inline-block bg-border-color fs-16 rounded-pill text-body"
              ></i>
              <span class="fs-14">565 people are viewing the products</span>
            </button>
            <ul class="ps-0 list-unstyled border-top border-bottom py-3 my-3">
              <li class="d-flex align-items-center mb-2">
                <i
                  class="ri-check-line fs-18 position-relative top-2 text-success me-2"
                ></i>
                <span class="text-secondary">Free delivery today</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i
                  class="ri-check-line fs-18 position-relative top-2 text-success me-2"
                ></i>
                <span class="text-secondary">100% money back Guarantee</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i
                  class="ri-check-line fs-18 position-relative top-2 text-success me-2"
                ></i>
                <span class="text-secondary">7 days product return policy</span>
              </li>
            </ul>
            <ul class="ps-0 mb-3 list-unstyled">
              <li class="d-flex align-items-center mb-2">
                <span>SKU:</span>
                <span class="fw-medium text-secondary ms-1">SMTGS6T45</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <span>Category:</span>
                <span class="fw-medium text-secondary ms-1">Computer</span>
              </li>
              <li class="d-flex align-items-center">
                <span>Tags:</span>
                <span class="fw-medium text-secondary ms-1">
                  laptop, macbook, PC
                </span>
              </li>
            </ul>
            <ul class="ps-0 mb-0 list-unstyled d-flex gap-2 flex-wrap">
              <li class="d-flex align-items-center me-2">
                <span>Share:</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a
                  href="https://facebook.com/"
                  class="wh-30 lh-30 bg-body text-center text-decoration-none rounded-pill hover-bg"
                  target="_blank"
                >
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a
                  href="https://twitter.com/"
                  class="wh-30 lh-30 bg-body text-center text-decoration-none rounded-pill hover-bg"
                  target="_blank"
                >
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a
                  href="https://linkedin.com/"
                  class="wh-30 lh-30 bg-body text-center text-decoration-none rounded-pill hover-bg"
                  target="_blank"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a
                  href="https://whatsapp.com/"
                  class="wh-30 lh-30 bg-body text-center text-decoration-none rounded-pill hover-bg"
                  target="_blank"
                >
                  <i class="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductsDetails",
  setup() {
    const internalValue = ref(1);

    const increment = () => {
      internalValue.value++;
    };

    const decrement = () => {
      if (internalValue.value > 0) {
        internalValue.value--;
      }
    };
    return {
      internalValue,
      increment,
      decrement,
    };
  },
});
</script>
