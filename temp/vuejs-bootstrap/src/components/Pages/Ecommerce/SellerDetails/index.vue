<template>
  <div>
    <SellerOverview />

    <div class="row">
      <div class="col-xxl-3 col-lg-4">
        <SellerID />
      </div>
      <div class="col-xxl-9 col-lg-8">
        <RevenueChart />
      </div>
    </div>

    <ProductsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SellerOverview from "./SellerOverview.vue";
import SellerID from "./SellerID.vue";
import RevenueChart from "./RevenueChart.vue";
import ProductsList from "./ProductsList.vue";

export default defineComponent({
  name: "SellerDetails",
  components: {
    SellerOverview,
    SellerID,
    RevenueChart,
    ProductsList,
  },
});
</script>
