<template>
  <PageTitle pageTitle="Checkbox" subTitle="UI Elements" />
  <Checkbox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Checkbox from "@/components/Modules/UIElements/Checkbox/index.vue";

export default defineComponent({
  name: "CheckboxPage",
  components: {
    PageTitle,
    Checkbox,
  },
});
</script>
