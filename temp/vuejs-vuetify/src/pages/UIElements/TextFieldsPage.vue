<template>
  <PageTitle pageTitle="Text Fields" subTitle="UI Elements" />
  <TextFields />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import TextFields from "@/components/Modules/UIElements/TextFields/index.vue";

export default defineComponent({
  name: "TextFieldsPage",
  components: {
    PageTitle,
    TextFields,
  },
});
</script>
