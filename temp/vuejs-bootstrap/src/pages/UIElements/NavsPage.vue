<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Navs" subTitle="UI Elements" />

    <Navs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Navs from "@/components/Modules/UIElements/Navs/index.vue";

export default defineComponent({
  name: "NavsPage",
  components: {
    PageTitle,
    Navs,
  },
});
</script>
