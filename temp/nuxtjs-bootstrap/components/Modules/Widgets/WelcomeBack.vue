<template>
  <div
    class="card bg-primary border-0 rounded-3 welcome-box style-two mb-4 position-relative"
  >
    <div class="card-body py-38 px-4">
      <div class="mb-5">
        <h3 class="text-white fw-semibold">
          Welcome Back, <span class="text-danger-div">Olivia!</span>
        </h3>
        <p class="text-light">Your progress this week is Awesome.</p>
      </div>

      <div class="d-flex align-items-center flex-wrap gap-4 gap-xxl-5">
        <div class="d-flex align-items-center welcome-status-item style-two">
          <div class="flex-shrink-0">
            <i class="material-symbols-outlined">airplay</i>
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="text-white fw-semibold mb-0 fs-16">75h</h5>
            <p class="text-light">Hours Spent</p>
          </div>
        </div>

        <div class="d-flex align-items-center welcome-status-item style-two">
          <div class="flex-shrink-0">
            <i class="material-symbols-outlined icon-bg two">local_library</i>
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="text-white fw-semibold mb-0 fs-16">15</h5>
            <p class="text-light">Course Completed</p>
          </div>
        </div>
      </div>
    </div>
    <img
      src="~/assets/images/welcome-2.gif"
      class="welcome-2 d-none d-sm-block"
      alt="welcome"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeBack",
});
</script>
