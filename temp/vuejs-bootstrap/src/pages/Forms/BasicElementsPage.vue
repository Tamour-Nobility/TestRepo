<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Basic Elements" subTitle="Forms" />

    <BasicElements />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import BasicElements from "@/components/Modules/Forms/BasicElements/index.vue";

export default defineComponent({
  name: "BasicElementsPage",
  components: {
    PageTitle,
    BasicElements,
  },
});
</script>
