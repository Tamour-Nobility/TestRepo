<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <ModulesExtraPagesRatingsInteractiveRating />
    </div>

    <div class="col-lg-6">
      <ModulesExtraPagesRatingsSettingGettingValues />
    </div>

    <div class="col-lg-6">
      <ModulesExtraPagesRatingsRTLSupport />
    </div>

    <div class="col-lg-6">
      <ModulesExtraPagesRatingsReadOnlyPresetValue />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ratings",
});
</script>
