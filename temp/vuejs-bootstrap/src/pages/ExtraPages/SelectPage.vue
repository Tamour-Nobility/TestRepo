<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Select" subTitle="Extra Pages" />

    <Select />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Select from "@/components/Modules/ExtraPages/Select/index.vue";

export default defineComponent({
  name: "SelectPage",
  components: {
    PageTitle,
    Select,
  },
});
</script>
