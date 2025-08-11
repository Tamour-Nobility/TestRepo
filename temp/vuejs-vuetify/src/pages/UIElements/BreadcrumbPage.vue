<template>
  <PageTitle pageTitle="Breadcrumb" subTitle="UI Elements" />
  <Breadcrumb />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Breadcrumb from "@/components/Modules/UIElements/Breadcrumb/index.vue";

export default defineComponent({
  name: "BreadcrumbPage",
  components: {
    PageTitle,
    Breadcrumb,
  },
});
</script>
