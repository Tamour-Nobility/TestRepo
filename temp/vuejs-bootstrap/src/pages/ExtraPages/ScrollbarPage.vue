<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Scrollbar" subTitle="Extra Pages" />

    <Scrollbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Scrollbar from "@/components/Modules/ExtraPages/Scrollbar/index.vue";

export default defineComponent({
  name: "ScrollbarPage",
  components: {
    PageTitle,
    Scrollbar,
  },
});
</script>
