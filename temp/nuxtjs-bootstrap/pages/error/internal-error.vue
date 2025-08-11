<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Internal Error" subTitle="Error" />

    <ModulesInternalError />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InternalErrorPage",
});
</script>
