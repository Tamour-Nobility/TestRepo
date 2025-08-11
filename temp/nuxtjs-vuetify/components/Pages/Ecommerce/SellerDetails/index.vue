<template>
  <PagesEcommerceSellerDetailsSellerOverview />
  <v-row>
    <v-col cols="12" xl="3" lg="4">
      <PagesEcommerceSellerDetailsSeller />
    </v-col>
    <v-col cols="12" xl="9" lg="8">
      <PagesEcommerceSellerDetailsRevenueChart />
    </v-col>
  </v-row>
  <PagesEcommerceSellerDetailsProductsList />
</template>

<script>
export default {
  name: "SellerDetails",
};
</script>
