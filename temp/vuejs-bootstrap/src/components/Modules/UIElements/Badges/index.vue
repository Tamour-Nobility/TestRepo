<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <DefaultBadges />
    </div>
    <div class="col-lg-6">
      <SoftBadges />
    </div>
    <div class="col-lg-6">
      <RoundedPillBadges />
    </div>
    <div class="col-lg-6">
      <RoundedPillBadgesTwo />
    </div>
    <div class="col-lg-6">
      <HeadingsBadges />
    </div>
    <div class="col-lg-6">
      <OtherBadges />
    </div>
    <div class="col-lg-6">
      <BadgesWithIcons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultBadges from "./DefaultBadges.vue";
import SoftBadges from "./SoftBadges.vue";
import RoundedPillBadges from "./RoundedPillBadges.vue";
import RoundedPillBadgesTwo from "./RoundedPillBadgesTwo.vue";
import HeadingsBadges from "./HeadingsBadges.vue";
import OtherBadges from "./OtherBadges.vue";
import BadgesWithIcons from "./BadgesWithIcons.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Badges",
  components: {
    DefaultBadges,
    SoftBadges,
    RoundedPillBadges,
    RoundedPillBadgesTwo,
    HeadingsBadges,
    OtherBadges,
    BadgesWithIcons,
  },
});
</script>
