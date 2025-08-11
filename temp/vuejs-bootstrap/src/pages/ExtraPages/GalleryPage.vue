<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Gallery" subTitle="Extra Pages" />

    <Gallery />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Gallery from "@/components/Modules/ExtraPages/Gallery/index.vue";

export default defineComponent({
  name: "GalleryPage",
  components: {
    PageTitle,
    Gallery,
  },
});
</script>
