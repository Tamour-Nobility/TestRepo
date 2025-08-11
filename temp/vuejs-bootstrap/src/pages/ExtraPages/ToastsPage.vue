<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Toasts" subTitle="Extra Pages" />

    <Toasts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Toasts from "@/components/Modules/ExtraPages/Toasts/index.vue";

export default defineComponent({
  name: "ToastsPage",
  components: {
    PageTitle,
    Toasts,
  },
});
</script>
