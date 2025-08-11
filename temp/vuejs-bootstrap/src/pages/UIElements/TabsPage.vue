<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Tabs" subTitle="UI Elements" />

    <Tabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Tabs from "@/components/Modules/UIElements/Tabs/index.vue";

export default defineComponent({
  name: "TabsPage",
  components: {
    PageTitle,
    Tabs,
  },
});
</script>
