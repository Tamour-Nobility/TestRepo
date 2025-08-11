<template>
  <PageTitle pageTitle="Grid" subTitle="UI Elements" />
  <Grid />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Grid from "@/components/Modules/UIElements/Grid/index.vue";

export default defineComponent({
  name: "GridPage",
  components: {
    PageTitle,
    Grid,
  },
});
</script>
