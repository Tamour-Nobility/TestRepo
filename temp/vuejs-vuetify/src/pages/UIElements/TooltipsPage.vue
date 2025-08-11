<template>
  <PageTitle pageTitle="Tooltips" subTitle="UI Elements" />
  <Tooltips />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Tooltips from "@/components/Modules/UIElements/Tooltips/index.vue";

export default defineComponent({
  name: "TooltipsPage",
  components: {
    PageTitle,
    Tooltips,
  },
});
</script>
