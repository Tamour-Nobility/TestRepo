<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Videos" subTitle="UI Elements" />

    <Videos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Videos from "@/components/Modules/UIElements/Videos/index.vue";

export default defineComponent({
  name: "VideosPage",
  components: {
    PageTitle,
    Videos,
  },
});
</script>
