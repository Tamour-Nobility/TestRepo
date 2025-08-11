<template>
  <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap gap-2 gap-lg-3">
    <li>
      <NuxtLink
        to="/settings/account-settings"
        class="btn btn-primary border border-primary bg-transparent text-primary py-2 px-3 fw-semibold"
      >
        Account Settings
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/settings/change-password"
        class="btn btn-primary border border-primary bg-transparent text-primary py-2 px-3 fw-semibold"
      >
        Change Password
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/settings/connections"
        class="btn btn-primary border border-primary bg-transparent text-primary py-2 px-3 fw-semibold"
      >
        Connections
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/settings/privacy-policy"
        class="btn btn-primary border border-primary bg-transparent text-primary py-2 px-3 fw-semibold"
      >
        Privacy Policy
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/settings/terms-conditions"
        class="btn btn-primary border border-primary bg-transparent text-primary py-2 px-3 fw-semibold"
      >
        Terms & Conditions
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingsMenu",
});
</script>

<style lang="scss" scoped>
ul {
  li {
    .bg-transparent {
      &.router-link-active {
        color: #fff !important;
        background-color: #605dff !important;
      }
    }
  }
}
</style>
