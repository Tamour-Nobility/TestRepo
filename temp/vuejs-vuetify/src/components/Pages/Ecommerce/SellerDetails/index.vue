<template>
  <SellerOverview />
  <v-row>
    <v-col cols="12" xl="3" lg="4">
      <Seller />
    </v-col>
    <v-col cols="12" xl="9" lg="8">
      <RevenueChart />
    </v-col>
  </v-row>
  <ProductsList />
</template>

<script>
import SellerOverview from "./SellerOverview.vue";
import Seller from "./Seller.vue";
import RevenueChart from "./RevenueChart.vue";
import ProductsList from "./ProductsList/index.vue";

export default {
  name: "SellerDetails",
  components: {
    SellerOverview,
    Seller,
    RevenueChart,
    ProductsList,
  },
};
</script>
