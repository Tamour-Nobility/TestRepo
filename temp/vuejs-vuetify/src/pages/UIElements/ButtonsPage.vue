<template>
  <PageTitle pageTitle="Buttons" subTitle="UI Elements" />
  <Buttons />
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
