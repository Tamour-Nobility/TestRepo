<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Grids" subTitle="UI Elements" />

    <Grids />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Grids from "@/components/Modules/UIElements/Grids/index.vue";

export default defineComponent({
  name: "GridsPage",
  components: {
    PageTitle,
    Grids,
  },
});
</script>
