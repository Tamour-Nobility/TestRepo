<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Basic Table" subTitle="Tables" />

    <BasicTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import BasicTable from "@/components/Modules/Tables/BasicTable/index.vue";

export default defineComponent({
  name: "ListPage",
  components: {
    PageTitle,
    BasicTable,
  },
});
</script>
