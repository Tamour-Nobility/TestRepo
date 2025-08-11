<template>
  <div
    class="border-0 rounded-3 mb-4 text-center"
    style="background: linear-gradient(150deg, #827cd8 0.57%, #2d2761 95.93%)"
  >
    <div class="card-body p-4 text-center">
      <span class="fs-24 d-block text-white">Have You Tried Our</span>
      <h3 class="fs-24 text-white">New Mobile App?</h3>
      <div class="py-4 mb-3">
        <img src="@/assets/images/app.png" alt="app" />
      </div>
      <a href="#" class="d-inline-block py-2 px-3 btn btn-primary">
        Download Mobile App
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
