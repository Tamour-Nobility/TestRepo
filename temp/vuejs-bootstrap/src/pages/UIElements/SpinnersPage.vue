<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Spinners" subTitle="UI Elements" />

    <Spinners />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Spinners from "@/components/Modules/UIElements/Spinners/index.vue";

export default defineComponent({
  name: "SpinnersPage",
  components: {
    PageTitle,
    Spinners,
  },
});
</script>
