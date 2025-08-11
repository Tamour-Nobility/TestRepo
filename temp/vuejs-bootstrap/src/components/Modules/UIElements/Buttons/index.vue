<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <DefaultButtons />
    </div>
    <div class="col-lg-6">
      <OutlineButtons />
    </div>
    <div class="col-lg-6">
      <SoftButtons />
    </div>
    <div class="col-lg-6">
      <ButtonsWithIcon />
    </div>
    <div class="col-lg-6">
      <RoundedButtons />
    </div>
    <div class="col-lg-6">
      <OutlineRoundedButtons />
    </div>
    <div class="col-lg-6">
      <BlockButtons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultButtons from "./DefaultButtons.vue";
import OutlineButtons from "./OutlineButtons.vue";
import SoftButtons from "./SoftButtons.vue";
import ButtonsWithIcon from "./ButtonsWithIcon.vue";
import RoundedButtons from "./RoundedButtons.vue";
import OutlineRoundedButtons from "./OutlineRoundedButtons.vue";
import BlockButtons from "./BlockButtons.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Buttons",
  components: {
    DefaultButtons,
    OutlineButtons,
    SoftButtons,
    ButtonsWithIcon,
    RoundedButtons,
    OutlineRoundedButtons,
    BlockButtons,
  },
});
</script>
