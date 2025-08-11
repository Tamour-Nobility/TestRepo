<template>
  <PageTitle pageTitle="Button Toggle" subTitle="UI Elements" />
  <ButtonToggle />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ButtonToggle from "@/components/Modules/UIElements/ButtonToggle/index.vue";

export default defineComponent({
  name: "ButtonTogglePage",
  components: {
    PageTitle,
    ButtonToggle,
  },
});
</script>
