<template>
  <PageTitle pageTitle="Dialog" subTitle="UI Elements" />
  <Dialog />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Dialog from "@/components/Modules/UIElements/Dialog/index.vue";

export default defineComponent({
  name: "DialogPage",
  components: {
    PageTitle,
    Dialog,
  },
});
</script>
