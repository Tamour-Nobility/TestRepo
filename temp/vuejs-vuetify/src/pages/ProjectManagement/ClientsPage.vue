<template>
  <PageTitle pageTitle="Clients" subTitle="Project Management" />

  <Clients />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Clients from "@/components/Pages/ProjectManagement/Clients/index.vue";

export default defineComponent({
  name: "ClientsPage",
  components: {
    PageTitle,
    Clients,
  },
});
</script>
