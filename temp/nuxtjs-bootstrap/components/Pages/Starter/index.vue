<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 text-center">
      <img src="~/assets/images/starter.png" class="mb-4" alt="starter" />
      <h3 class="fs-4 mb-4 m-auto" style="max-width: 500px">
        Create something beautiful, like a masterpiece or a really good
        sandwich.
      </h3>
      <NuxtLink
        to="/dashboard"
        class="btn btn-primary text-decoration-none py-2 px-3 fs-16 fw-medium"
      >
        <span class="d-inline-block py-1">Getting Started</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Starter",
});
</script>
