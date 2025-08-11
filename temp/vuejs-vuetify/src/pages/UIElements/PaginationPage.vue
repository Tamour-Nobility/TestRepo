<template>
  <PageTitle pageTitle="Pagination" subTitle="UI Elements" />
  <Pagination />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Pagination from "@/components/Modules/UIElements/Pagination/index.vue";

export default defineComponent({
  name: "PaginationPage",
  components: {
    PageTitle,
    Pagination,
  },
});
</script>
