<template>
  <PageTitle pageTitle="Blank Page" subTitle="Extra Pages" />
  <Blank />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Blank from "@/components/Modules/ExtraPages/Blank/index.vue";

export default defineComponent({
  name: "SearchPage",
  components: {
    PageTitle,
    Blank,
  },
});
</script>
