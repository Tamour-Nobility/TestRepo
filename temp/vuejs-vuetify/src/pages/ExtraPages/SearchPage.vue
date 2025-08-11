<template>
  <PageTitle pageTitle="Search" subTitle="Extra Pages" />
  <Search />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Search from "@/components/Modules/ExtraPages/Search/index.vue";

export default defineComponent({
  name: "SearchPage",
  components: {
    PageTitle,
    Search,
  },
});
</script>
