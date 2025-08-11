<template>
  <BasicTabs />
  <AlignTabs />
  <AlignTabsWithTitle />
  <CenterActiveTabs />
  <VerticalTabs />
  <DynamicTabs />
</template>

<script>
import BasicTabs from "./BasicTabs.vue";
import AlignTabs from "./AlignTabs.vue";
import AlignTabsWithTitle from "./AlignTabsWithTitle.vue";
import CenterActiveTabs from "./CenterActiveTabs.vue";
import VerticalTabs from "./VerticalTabs.vue";
import DynamicTabs from "./DynamicTabs.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tabs",
  components: {
    BasicTabs,
    AlignTabs,
    AlignTabsWithTitle,
    CenterActiveTabs,
    VerticalTabs,
    DynamicTabs,
  },
};
</script>
