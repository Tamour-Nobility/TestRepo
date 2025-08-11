<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="FAQ’s" subTitle="Extra Pages" />

    <FAQ />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import FAQ from "@/components/Modules/ExtraPages/FAQ/index.vue";

export default defineComponent({
  name: "FAQsPage",
  components: {
    PageTitle,
    FAQ,
  },
});
</script>
