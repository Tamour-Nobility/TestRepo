<template>
  <PageTitle pageTitle="Toolbar" subTitle="UI Elements" />
  <Toolbar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Toolbar from "@/components/Modules/UIElements/Toolbar/index.vue";

export default defineComponent({
  name: "ToolbarPage",
  components: {
    PageTitle,
    Toolbar,
  },
});
</script>
