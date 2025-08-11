<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Modals" subTitle="UI Elements" />

    <Modals />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Modals from "@/components/Modules/UIElements/Modals/index.vue";

export default defineComponent({
  name: "ImagesPage",
  components: {
    PageTitle,
    Modals,
  },
});
</script>
