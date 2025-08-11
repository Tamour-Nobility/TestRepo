<template>
  <PageTitle pageTitle="Stepper" subTitle="UI Elements" />
  <Stepper />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Stepper from "@/components/Modules/UIElements/Stepper/index.vue";

export default defineComponent({
  name: "StepperPage",
  components: {
    PageTitle,
    Stepper,
  },
});
</script>
