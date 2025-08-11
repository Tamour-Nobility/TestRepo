<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Leads" subTitle="CRM" />

    <Leads />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Leads from "@/components/Pages/CRM/Leads/index.vue";

export default defineComponent({
  name: "LeadsPage",
  components: {
    PageTitle,
    Leads,
  },
});
</script>
