<template>
  <PageTitle pageTitle="List" subTitle="UI Elements" />
  <List />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import List from "@/components/Modules/UIElements/List/index.vue";

export default defineComponent({
  name: "ListPage",
  components: {
    PageTitle,
    List,
  },
});
</script>
