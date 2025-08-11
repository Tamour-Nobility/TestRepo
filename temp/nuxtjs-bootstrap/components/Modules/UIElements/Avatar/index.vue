<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarSingleUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarGroupUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarSingleUserWithBadgeExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <LazyModulesUIElementsAvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <LazyModulesUIElementsAvatarSizeSimpleRoundedExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <LazyModulesUIElementsAvatarTextAvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <LazyModulesUIElementsAvatarTextAvatarSizeSimpleRoundedExample />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
});
</script>
