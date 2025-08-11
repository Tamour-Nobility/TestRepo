<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Internal Error" subTitle="Error" />

    <InternalError />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import InternalError from "@/components/Modules/InternalError/index.vue";

export default defineComponent({
  name: "InternalErrorPage",
  components: {
    PageTitle,
    InternalError,
  },
});
</script>
