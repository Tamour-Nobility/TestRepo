<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Blank Page" subTitle="Extra Pages" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";

export default defineComponent({
  name: "BlankPage",
  components: {
    PageTitle,
  },
});
</script>
