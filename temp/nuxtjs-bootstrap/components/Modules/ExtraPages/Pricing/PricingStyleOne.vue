<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4 position-relative">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <span class="border py-2 px-3 rounded-3 d-inline-block mb-3">
                Standard
              </span>
              <h2 class="fs-36 fw-medium mb-2 mb-lg-3">
                $89.<sub class="fs-24 fw-normal bottom-0">99</sub>
              </h2>
              <p class="fw-medium mb-2 mb-lg-4 pb-lg-1">For individual user</p>
              <a
                href="#"
                class="btn btn-primary fs-16 fw-medium pe-3 rounded-3"
              >
                <i
                  class="ri-arrow-right-s-line fs-20 position-relative top-1"
                ></i>
                <span>Buy Now</span>
              </a>
            </div>

            <div class="col-lg-6">
              <ul class="ps-0 mb-0 mt-3 mt-lg-0 list-unstyled priceing-border">
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Advanced Dashboard</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Task Management</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">File Storage (5GB)</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Email Integration</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Mobile App Access</span>
                </li>
                <li>
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Custom Branding</span>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="btn btn-danger p-2 d-inline-block text-white position-absolute popular-tag fs-12"
          >
            Most Popular
          </span>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4 position-relative">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <span class="border py-2 px-3 rounded-3 d-inline-block mb-3">
                Premium
              </span>
              <h2 class="fs-36 fw-medium mb-2 mb-lg-3">
                $119.<sub class="fs-24 fw-normal bottom-0">99</sub>
              </h2>
              <p class="fw-medium mb-2 mb-lg-4 pb-lg-1">For team of 10 users</p>
              <a
                href="#"
                class="btn btn-primary fs-16 fw-medium pe-3 rounded-3"
              >
                <i
                  class="ri-arrow-right-s-line fs-20 position-relative top-1"
                ></i>
                <span>Buy Now</span>
              </a>
            </div>

            <div class="col-lg-6">
              <ul class="ps-0 mb-0 mt-3 mt-lg-0 list-unstyled priceing-border">
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Advanced Dashboard</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Task Management</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">File Storage (Unlimited)</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">Custom Reporting</span>
                </li>
                <li class="mb-2">
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">24/7 Premium Support</span>
                </li>
                <li>
                  <i
                    class="ri-check-line fs-20 text-success position-relative top-2"
                  ></i>
                  <span class="ms-2">White-label Solution</span>
                </li>
              </ul>
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
  name: "PricingStyleOne",
});
</script>
