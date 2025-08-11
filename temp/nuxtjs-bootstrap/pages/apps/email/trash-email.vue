<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Trash" subTitle="Apps" />
    <AppsEmailTrash />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrashPage",
});
</script>
