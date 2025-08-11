<template>
  <div
    class="for-dark rounded-3 p-4 text-center mb-4"
    style="background: linear-gradient(153deg, #fad2d2 0%, #6fa3ec 100%)"
  >
    <div class="py-2">
      <h3 class="fs-20 fw-normal">Have You Tried Our</h3>
      <h3 class="fs-20 mb-1">New Mobile App?</h3>
      <div class="py-5">
        <img src="@/assets/images/app-2.png" alt="app" />
      </div>
      <a href="#" class="btn btn-primary py-2 px-3 fs-16 fw-medium">
        Download App
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMobileApp",
});
</script>
