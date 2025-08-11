<template>
  <div class="page-banner-area" id="home">
    <div class="container position-relative z-1">
      <div class="banner-content text-center mb-0">
        <h1 class="fs-60 mb-0">
          {{ pageTitle }}
        </h1>
      </div>

      <img
        src="~/assets/images/landing/shape-5.png"
        class="shape-5"
        alt="shape"
      />
      <img
        src="~/assets/images/landing/shape-6.png"
        class="shape-6"
        alt="shape"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: ["pageTitle"],
});
</script>
