<template>
  <div>
    <PagesEcommerceSellerDetailsSellerOverview />

    <div class="row">
      <div class="col-xxl-3 col-lg-4">
        <PagesEcommerceSellerDetailsSellerID />
      </div>
      <div class="col-xxl-9 col-lg-8">
        <PagesEcommerceSellerDetailsRevenueChart />
      </div>
    </div>

    <PagesEcommerceSellerDetailsProductsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellerDetails",
});
</script>
