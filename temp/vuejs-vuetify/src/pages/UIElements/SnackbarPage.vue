<template>
  <PageTitle pageTitle="Snackbar" subTitle="UI Elements" />
  <Snackbar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Snackbar from "@/components/Modules/UIElements/Snackbar/index.vue";

export default defineComponent({
  name: "SnackbarPage",
  components: {
    PageTitle,
    Snackbar,
  },
});
</script>
