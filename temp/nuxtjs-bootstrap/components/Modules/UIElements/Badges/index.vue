<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <ModulesUIElementsBadgesDefaultBadges />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesSoftBadges />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesRoundedPillBadges />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesRoundedPillBadgesTwo />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesHeadingsBadges />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesOtherBadges />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsBadgesBadgesWithIcons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Badges",
});
</script>
