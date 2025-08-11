<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Contacts List" subTitle="Apps" />

    <AppsContactsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactsPage",
});
</script>
