<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Range Slider" subTitle="Extra Pages" />

    <RangeSlider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RangeSlider from "@/components/Modules/ExtraPages/RangeSlider/index.vue";

export default defineComponent({
  name: "RangeSliderPage",
  components: {
    PageTitle,
    RangeSlider,
  },
});
</script>
