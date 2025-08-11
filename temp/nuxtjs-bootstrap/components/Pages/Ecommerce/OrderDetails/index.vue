<template>
  <div class="row">
    <div class="col-xxl-8 col-lg-7">
      <PagesEcommerceOrderDetailsTrackingID />

      <PagesEcommerceOrderDetailsRecentOrders />
    </div>

    <div class="col-xxl-4 col-lg-5">
      <PagesEcommerceOrderDetailsOrderSummary />
    </div>

    <div class="col-xxl-4 col-xl-6 col-md-6">
      <PagesEcommerceOrderDetailsBillingDetails />
    </div>
    <div class="col-xxl-4 col-xl-6 col-md-6">
      <PagesEcommerceOrderDetailsShippingDetails />
    </div>
    <div class="col-xxl-4 col-xl-6 col-md-6">
      <PagesEcommerceOrderDetailsDeliveryDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderDetails",
});
</script>
