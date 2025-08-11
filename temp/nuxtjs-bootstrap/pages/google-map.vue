<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Google Map" />

    <ModulesGoogleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoogleMapPage",
});
</script>
