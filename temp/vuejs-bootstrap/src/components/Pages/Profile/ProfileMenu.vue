<template>
  <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
    <RouterLink
      to="/profile/user-profile"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Profile
    </RouterLink>
    <RouterLink
      to="/profile/teams"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Team
    </RouterLink>
    <RouterLink
      to="/profile/my-projects"
      class="btn btn-outline-primary py-2 px-3 fw-medium"
    >
      Projects
    </RouterLink>
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
