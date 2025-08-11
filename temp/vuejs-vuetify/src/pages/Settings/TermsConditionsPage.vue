<template>
  <PageTitle pageTitle="Terms & Conditions" subTitle="Settings" />

  <TermsConditions />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import TermsConditions from "@/components/Others/Settings/TermsConditions/index.vue";

export default defineComponent({
  name: "TermsConditionsPage",
  components: {
    PageTitle,
    TermsConditions,
  },
});
</script>
