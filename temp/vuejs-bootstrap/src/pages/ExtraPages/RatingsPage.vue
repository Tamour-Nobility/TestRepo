<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Ratings" subTitle="Extra Pages" />

    <Ratings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Ratings from "@/components/Modules/ExtraPages/Ratings/index.vue";

export default defineComponent({
  name: "RatingsPage",
  components: {
    PageTitle,
    Ratings,
  },
});
</script>
