<template>
  <PageTitle pageTitle="Expansion" subTitle="UI Elements" />
  <Expansion />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Expansion from "@/components/Modules/UIElements/Expansion/index.vue";

export default defineComponent({
  name: "ExpansionPage",
  components: {
    PageTitle,
    Expansion,
  },
});
</script>
