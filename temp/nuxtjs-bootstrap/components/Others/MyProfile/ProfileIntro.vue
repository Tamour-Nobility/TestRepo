<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Profile Intro</h3>

      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="~/assets/images/user-70.png"
            class="rounded-circle border border-2 wh-75"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-17 mb-1 fw-semibold">Olivia John</h4>
          <span class="fs-14">Marketing Manager</span>
        </div>
      </div>

      <h4 class="fw-semibold fs-14 mb-2">About Me</h4>
      <p>
        Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
        mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc
        tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec
        adipiscing.
      </p>
      <h4 class="fw-semibold fs-14 mb-2 pb-1">Social Profile</h4>
      <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2">
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="text-decoration-none wh-30 d-inline-block lh-30 text-center rounded-circle text-white transition-y"
            style="background-color: #3a559f"
          >
            <i class="ri-facebook-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            class="text-decoration-none wh-30 d-inline-block lh-30 text-center rounded-circle text-white transition-y"
            style="background-color: #03a9f4"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="text-decoration-none wh-30 d-inline-block lh-30 text-center rounded-circle text-white transition-y"
            style="background-color: #007ab9"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/"
            target="_blank"
            class="text-decoration-none wh-30 d-inline-block lh-30 text-center rounded-circle text-white transition-y"
            style="background-color: #2196f3"
          >
            <i class="ri-mail-line"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileIntro",
});
</script>
