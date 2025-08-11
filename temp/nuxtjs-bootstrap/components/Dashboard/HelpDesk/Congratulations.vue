<template>
  <div class="card bg-white border-0 rounded-3 mb-4 position-relative">
    <div class="card-body p-4">
      <h3 class="mb-0">
        Congratulations, <span class="text-primary">Olivia!</span>
      </h3>
      <p>Best agent of the month</p>
      <h3 class="mb-0 fs-20 text-primary">1.5k+</h3>
      <p>Ticket Solved</p>
      <NuxtLink to="/my-profile" class="btn btn-primary fw-medium">
        View Profile
      </NuxtLink>
    </div>
    <img
      src="~/assets/images/congratulations.gif"
      class="congratulations wh-150 position-absolute"
      alt="congratulations"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Congratulations",
});
</script>
