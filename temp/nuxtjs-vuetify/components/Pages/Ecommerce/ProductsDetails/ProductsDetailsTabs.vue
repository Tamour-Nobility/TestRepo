<template>
  <div class="product-details-tabs">
    <v-tabs v-model="tab" bg-color="white">
      <v-tab value="one">Description</v-tab>
      <v-tab value="two">Specifications</v-tab>
      <v-tab value="three">Reviews</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <PagesEcommerceProductsDetailsDescription />
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          <PagesEcommerceProductsDetailsSpecifications />
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          <PagesEcommerceProductsDetailsOverallReviews />
          <PagesEcommerceProductsDetailsManageReviews />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "ProductsDetailsTabs",
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped>
.product-details-tabs {
  &.card-without-border-radius {
    .v-slide-group {
      .v-slide-group__container {
        .v-slide-group__content {
          .v-btn {
            border-radius: 0;
          }
        }
      }
    }
  }
  .v-slide-group {
    background-color: transparent !important;

    .v-slide-group__container {
      .v-slide-group__content {
        .v-btn {
          margin-right: 33px;
          padding: 0 20px 0;
          height: 45px;
          text-transform: initial;
          color: var(--bodyColor) !important;
          font-weight: 500;
          font-size: 16px !important;
          letter-spacing: 0;
          border-radius: 5px;
          &:last-child {
            margin-right: 0;
          }
          &.v-tab-item--selected {
            color: var(--blackColor) !important;
            background-color: var(--whiteColor) !important;
          }
        }
      }
    }
  }
  .v-tabs--density-default {
    --v-tabs-height: auto !important;
  }
  .v-card-text {
    padding: 0;
    margin-right: -25px;
  }
}
</style>
