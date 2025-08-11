<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Buttons" subTitle="UI Elements" />

    <Buttons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Buttons from "@/components/Modules/UIElements/Buttons/index.vue";

export default defineComponent({
  name: "ButtonsPage",
  components: {
    PageTitle,
    Buttons,
  },
});
</script>
