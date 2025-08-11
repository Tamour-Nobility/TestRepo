<template>
  <div class="unlock-area ptb-150 position-relative z-1" id="admin">
    <div class="container">
      <div class="border-bottom pb-150">
        <div class="row">
          <div class="unlock-content">
            <h2>Unlock a world of possibilities with Trezo Dashboard.</h2>
            <p>
              Experience the difference with Trezo Dashboard. Sign up for a free
              trial today and see how our intuitive platform can revolutionize
              your data analysis process.
            </p>
            <NuxtLink
              to="/contact"
              class="btn btn-primary-div py-2 px-4 fs-16 fw-medium rounded-3 text-white"
            >
              <i class="ri-user-line fs-18"></i>
              <span class="ms-1">Get started - It is free</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <img
      src="~/assets/images/landing/shape-1.png"
      class="shape shape-5"
      alt="shape"
    />
    <img
      src="~/assets/images/landing/shape-2.png"
      class="shape shape-6"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CTA",
});
</script>
