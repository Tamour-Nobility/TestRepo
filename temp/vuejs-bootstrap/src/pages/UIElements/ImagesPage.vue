<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Images" subTitle="UI Elements" />

    <Images />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Images from "@/components/Modules/UIElements/Images/index.vue";

export default defineComponent({
  name: "ImagesPage",
  components: {
    PageTitle,
    Images,
  },
});
</script>
