<template>
  <PageTitle pageTitle="Radio" subTitle="UI Elements" />
  <Radio />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Radio from "@/components/Modules/UIElements/Radio/index.vue";

export default defineComponent({
  name: "RadioPage",
  components: {
    PageTitle,
    Radio,
  },
});
</script>
