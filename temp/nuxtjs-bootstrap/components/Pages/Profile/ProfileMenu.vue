<template>
  <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
    <NuxtLink
      to="/profile/user-profile"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Profile
    </NuxtLink>
    <NuxtLink
      to="/profile/teams"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Team
    </NuxtLink>
    <NuxtLink
      to="/profile/my-projects"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Projects
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileMenu",
});
</script>

<style lang="scss" scoped>
.btn {
  &.router-link-active {
    --bs-btn-color: #fff;
    --bs-btn-disabled-bg: #605dff;
    --bs-btn-border-color: #605dff;
    background-color: #605dff;
  }
  &:hover {
    color: var(--bs-btn-hover-color);
    background-color: #605dff;
    border-color: #605dff;
  }
}
</style>
