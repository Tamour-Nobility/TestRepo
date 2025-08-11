<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Google Map" />

    <GoogleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import GoogleMap from "@/components/Modules/GoogleMap/index.vue";

export default defineComponent({
  name: "GoogleMapPage",
  components: {
    PageTitle,
    GoogleMap,
  },
});
</script>
