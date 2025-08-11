<template>
  <PageTitle pageTitle="Switches" subTitle="UI Elements" />
  <Switches />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Switches from "@/components/Modules/UIElements/Switches/index.vue";

export default defineComponent({
  name: "SwitchesPage",
  components: {
    PageTitle,
    Switches,
  },
});
</script>
