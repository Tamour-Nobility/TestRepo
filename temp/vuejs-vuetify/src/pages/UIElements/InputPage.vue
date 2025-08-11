<template>
  <PageTitle pageTitle="Input" subTitle="UI Elements" />
  <Input />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Input from "@/components/Modules/UIElements/Input/index.vue";

export default defineComponent({
  name: "InputPage",
  components: {
    PageTitle,
    Input,
  },
});
</script>
