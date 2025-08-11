<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <InteractiveRating />
    </div>

    <div class="col-lg-6">
      <SettingGettingValues />
    </div>

    <div class="col-lg-6">
      <RTLSupport />
    </div>

    <div class="col-lg-6">
      <ReadOnlyPresetValue />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InteractiveRating from "./InteractiveRating.vue";
import SettingGettingValues from "./SettingGettingValues.vue";
import RTLSupport from "./RTLSupport.vue";
import ReadOnlyPresetValue from "./ReadOnlyPresetValue.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Ratings",
  components: {
    InteractiveRating,
    SettingGettingValues,
    RTLSupport,
    ReadOnlyPresetValue,
  },
});
</script>
