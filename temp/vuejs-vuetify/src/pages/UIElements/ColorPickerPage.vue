<template>
  <PageTitle pageTitle="Color Picker" subTitle="UI Elements" />
  <ColorPicker />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ColorPicker from "@/components/Modules/UIElements/ColorPicker/index.vue";

export default defineComponent({
  name: "ColorPickerPage",
  components: {
    PageTitle,
    ColorPicker,
  },
});
</script>
