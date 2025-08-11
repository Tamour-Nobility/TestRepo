<template>
  <PageTitle pageTitle="Navigation Drawers" subTitle="UI Elements" />
  <NavigationDrawers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import NavigationDrawers from "@/components/Modules/UIElements/NavigationDrawers/index.vue";

export default defineComponent({
  name: "NavigationDrawersPage",
  components: {
    PageTitle,
    NavigationDrawers,
  },
});
</script>
