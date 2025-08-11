<template>
  <PageTitle pageTitle="Select" subTitle="UI Elements" />
  <Select />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Select from "@/components/Modules/UIElements/Select/index.vue";

export default defineComponent({
  name: "SelectPage",
  components: {
    PageTitle,
    Select,
  },
});
</script>
