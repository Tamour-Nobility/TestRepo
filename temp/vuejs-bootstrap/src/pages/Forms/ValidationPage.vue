<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Validation" subTitle="Forms" />

    <Validation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Validation from "@/components/Modules/Forms/Validation/index.vue";

export default defineComponent({
  name: "ValidationPage",
  components: {
    PageTitle,
    Validation,
  },
});
</script>
