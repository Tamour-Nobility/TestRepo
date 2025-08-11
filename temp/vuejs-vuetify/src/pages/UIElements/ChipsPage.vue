<template>
  <PageTitle pageTitle="Chips" subTitle="UI Elements" />
  <Chips />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Chips from "@/components/Modules/UIElements/Chips/index.vue";

export default defineComponent({
  name: "ChipsPage",
  components: {
    PageTitle,
    Chips,
  },
});
</script>
