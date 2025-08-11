<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Badges" subTitle="UI Elements" />

    <Badges />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Badges from "@/components/Modules/UIElements/Badges/index.vue";

export default defineComponent({
  name: "BadgesPage",
  components: {
    PageTitle,
    Badges,
  },
});
</script>
