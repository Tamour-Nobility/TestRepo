<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Popover Tooltips" subTitle="UI Elements" />

    <PopoverTooltips />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PopoverTooltips from "@/components/Modules/UIElements/PopoverTooltips/index.vue";

export default defineComponent({
  name: "PopoverTooltipsPage",
  components: {
    PageTitle,
    PopoverTooltips,
  },
});
</script>
