<template>
  <v-card
    class="products-list-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <v-tabs v-model="tab" bg-color="white">
      <v-tab value="one">All Products</v-tab>
      <v-tab value="two">Published Products</v-tab>
      <v-tab value="three">Draft Products</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <AllProducts />
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <PublishedProducts />
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <DraftProducts />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
import AllProducts from "./AllProducts/index.vue";
import PublishedProducts from "./PublishedProducts/index.vue";
import DraftProducts from "./DraftProducts/index.vue";

export default {
  name: "ProductsList",
  components: {
    AllProducts,
    PublishedProducts,
    DraftProducts,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped>
.products-list-card {
  .v-tabs {
    margin-bottom: 25px;
  }
  .v-tabs--density-default {
    --v-tabs-height: auto !important;
  }
  .v-tab.v-tab.v-btn.v-btn--size-default {
    height: 45px;
    border-radius: 7px;
    background-color: #f6f7f9;
    padding: 0 30px;
    color: var(--blackColor);
    font-size: 14px !important;
    font-weight: 600;
    text-transform: initial;
    margin-right: 10px;
    letter-spacing: 0;
    &:last-child {
      margin-right: 0;
    }
    &::after {
      display: none;
    }
    &.v-tab-item--selected {
      background-color: var(--primaryColor) !important;
      color: var(--whiteColor);
    }
  }
  .v-card-text {
    padding: 0 !important;
  }
}
</style>
