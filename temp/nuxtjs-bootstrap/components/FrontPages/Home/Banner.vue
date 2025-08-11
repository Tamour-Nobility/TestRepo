<template>
  <div class="banner-area bg-img pb-0" id="home">
    <div class="container position-relative z-1">
      <div class="banner-content text-center pb-75">
        <h1 class="fs-60 mb-3 pb-md-3">
          Insights On-the-Go: Access Your Dashboard Anywhere, Anytime
        </h1>
        <p class="fs-18 m-auto mb-3 pb-md-3 mw-740">
          Our intuitive interface transforms complex data into actionable
          insights, empowering you to make informed decisions with confidence.
        </p>
        <NuxtLink
          to="/contact"
          class="btn btn-primary py-2 px-4 fs-16 fw-medium rounded-3"
        >
          <i class="ri-user-line fs-18"></i>
          <span class="ms-1">Get started - It is free</span>
        </NuxtLink>
      </div>
      <div class="banner-img-wrap text-center">
        <img src="~/assets/images/landing/banner-img.png" alt="banner-img" />
      </div>

      <img
        src="~/assets/images/landing/shape-3.png"
        class="shape shape-7"
        alt="shape"
      />
      <img
        src="~/assets/images/landing/shape-4.png"
        class="shape shape-8"
        alt="shape"
      />
      <img
        src="~/assets/images/landing/shape-5.png"
        class="shape shape-9"
        alt="shape"
      />
      <img
        src="~/assets/images/landing/shape-6.png"
        class="shape shape-10"
        alt="shape"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
});
</script>
