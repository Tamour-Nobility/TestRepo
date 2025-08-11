<template>
  <PageTitle pageTitle="Tabs" subTitle="UI Elements" />
  <Tabs />
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
