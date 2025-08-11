<template>
  <CommonPageTitle pageTitle="File Manager" subTitle="Apps" />
  <v-row>
    <v-col cols="12" lg="3" md="12">
      <AppsFileManagerSidebar />
    </v-col>
    <v-col cols="12" lg="9" md="12">
      <AppsFileManagerRecents />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentsPage",
});
</script>
