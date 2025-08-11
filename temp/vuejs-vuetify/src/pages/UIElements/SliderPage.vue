<template>
  <PageTitle pageTitle="Slider" subTitle="UI Elements" />
  <Slider />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Slider from "@/components/Modules/UIElements/Slider/index.vue";

export default defineComponent({
  name: "SliderPage",
  components: {
    PageTitle,
    Slider,
  },
});
</script>
