<template>
  <PageTitle pageTitle="Internal Error" subTitle="Error" />

  <InternalError />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import InternalError from "@/components/Modules/Errors/InternalError/index.vue";

export default defineComponent({
  name: "InternalErrorPage",
  components: {
    PageTitle,
    InternalError,
  },
});
</script>
