<template>
  <BasicToolbar />
  <CollapseToolbar />
  <ExtendedToolbar />
  <FloatingWithSearch />
  <VariationsToolbar />
</template>

<script>
import BasicToolbar from "./BasicToolbar.vue";
import CollapseToolbar from "./CollapseToolbar.vue";
import ExtendedToolbar from "./ExtendedToolbar.vue";
import FloatingWithSearch from "./FloatingWithSearch.vue";
import VariationsToolbar from "./VariationsToolbar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Toolbar",
  components: {
    BasicToolbar,
    CollapseToolbar,
    ExtendedToolbar,
    FloatingWithSearch,
    VariationsToolbar,
  },
};
</script>
