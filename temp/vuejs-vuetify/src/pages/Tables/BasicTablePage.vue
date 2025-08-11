<template>
  <PageTitle pageTitle="Basic Table" subTitle="Tables" />

  <BasicTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import BasicTable from "@/components/Modules/Tables/BasicTable/index.vue";

export default defineComponent({
  name: "BasicTablePage",
  components: {
    PageTitle,
    BasicTable,
  },
});
</script>
