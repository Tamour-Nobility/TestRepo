<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <BasicChips />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <Closable />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <Colored />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <DragDrop />
      <StackedChips />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <WithOutlined />
      <WithIcon />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <CustomList />
    </v-col>
  </v-row>
</template>

<script>
import BasicChips from "./BasicChips.vue";
import Closable from "./Closable.vue";
import Colored from "./Colored.vue";
import DragDrop from "./DragDrop.vue";
import StackedChips from "./StackedChips.vue";
import WithOutlined from "./WithOutlined.vue";
import WithIcon from "./WithIcon.vue";
import CustomList from "./CustomList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chips",
  components: {
    BasicChips,
    Closable,
    Colored,
    DragDrop,
    StackedChips,
    WithOutlined,
    WithIcon,
    CustomList,
  },
};
</script>
