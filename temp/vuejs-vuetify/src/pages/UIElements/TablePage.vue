<template>
  <PageTitle pageTitle="Table" subTitle="UI Elements" />
  <Table />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Table from "@/components/Modules/UIElements/Table/index.vue";

export default defineComponent({
  name: "TablePage",
  components: {
    PageTitle,
    Table,
  },
});
</script>
