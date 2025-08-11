<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Contacts" subTitle="CRM" />

    <Contacts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Contacts from "@/components/Pages/CRM/Contacts/index.vue";

export default defineComponent({
  name: "CRMContactsPage",
  components: {
    PageTitle,
    Contacts,
  },
});
</script>
