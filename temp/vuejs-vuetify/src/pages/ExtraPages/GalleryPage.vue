<template>
  <PageTitle pageTitle="Gallery" subTitle="Extra Pages" />
  <Gallery />
  <GalleryStyleTwo />
  <GalleryStyleThree />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Gallery from "@/components/Modules/ExtraPages/Gallery/index.vue";
import GalleryStyleTwo from "@/components/Modules/ExtraPages/Gallery/GalleryStyleTwo.vue";
import GalleryStyleThree from "@/components/Modules/ExtraPages/Gallery/GalleryStyleThree.vue";

export default defineComponent({
  name: "GalleryPage",
  components: {
    PageTitle,
    Gallery,
    GalleryStyleTwo,
    GalleryStyleThree,
  },
});
</script>
