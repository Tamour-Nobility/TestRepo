<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Snooozed" subTitle="Apps" />
    <Snoozed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Snoozed from "../../../components/Apps/Email/Snoozed/index.vue";

export default defineComponent({
  name: "SnoozedPage",
  components: {
    PageTitle,
    Snoozed,
  },
});
</script>
