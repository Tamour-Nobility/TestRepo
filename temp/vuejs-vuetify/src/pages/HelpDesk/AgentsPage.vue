<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Agents" subTitle="HelpDesk" />

    <Agents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Agents from "@/components/Pages/HelpDesk/Agents/index.vue";

export default defineComponent({
  name: "AgentsPage",
  components: {
    PageTitle,
    Agents,
  },
});
</script>
