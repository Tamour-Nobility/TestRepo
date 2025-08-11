<template>
  <div class="row">
    <div class="col-xxl-8 col-lg-7">
      <TrackingID />

      <RecentOrders />
    </div>

    <div class="col-xxl-4 col-lg-5">
      <OrderSummary />
    </div>

    <div class="col-xxl-4 col-xl-6 col-md-6">
      <BillingDetails />
    </div>
    <div class="col-xxl-4 col-xl-6 col-md-6">
      <ShippingDetails />
    </div>
    <div class="col-xxl-4 col-xl-6 col-md-6">
      <DeliveryDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrackingID from "./TrackingID.vue";
import RecentOrders from "./RecentOrders.vue";
import OrderSummary from "./OrderSummary.vue";
import BillingDetails from "./BillingDetails.vue";
import ShippingDetails from "./ShippingDetails.vue";
import DeliveryDetails from "./DeliveryDetails.vue";

export default defineComponent({
  name: "OrderDetails",
  components: {
    TrackingID,
    RecentOrders,
    OrderSummary,
    BillingDetails,
    ShippingDetails,
    DeliveryDetails,
  },
});
</script>
