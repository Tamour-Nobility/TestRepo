<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <ExpandHoverNavigationDrawers />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <RailVariantNavigationDrawers />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <BottomNavigationDrawers />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <TemporaryNavigationDrawers />
    </v-col>
  </v-row>
</template>

<script>
import ExpandHoverNavigationDrawers from "./ExpandHoverNavigationDrawers.vue";
import RailVariantNavigationDrawers from "./RailVariantNavigationDrawers.vue";
import BottomNavigationDrawers from "./BottomNavigationDrawers.vue";
import TemporaryNavigationDrawers from "./TemporaryNavigationDrawers.vue";

export default {
  name: "NavigationDrawers",
  components: {
    ExpandHoverNavigationDrawers,
    RailVariantNavigationDrawers,
    BottomNavigationDrawers,
    TemporaryNavigationDrawers,
  },
};
</script>
