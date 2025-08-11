<template>
  <v-row>
    <v-col cols="12" lg="8">
      <PagesEcommerceOrderDetailsTrackingID />
      <PagesEcommerceOrderDetailsRecentOrders />
    </v-col>
    <v-col cols="12" lg="4">
      <PagesEcommerceOrderDetailsOrderSummary />
    </v-col>
    <v-col cols="12" lg="4" md="4">
      <v-card
        class="order-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Billing Details</h5>
        </div>
        <ul class="pl-0 mb-0 mt-0 list-unstyled">
          <li><span class="text-black">Name:</span> Gary Fraser</li>
          <li><span class="text-black">Email:</span> example&#64;daxa.com</li>
          <li><span class="text-black">Phone:</span> +1 444 333 5566</li>
          <li>
            <span class="text-black">Address:</span> 715 Maple St, Hamletville,
            England
          </li>
        </ul>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="4">
      <v-card
        class="order-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Shipping Details</h5>
        </div>
        <ul class="pl-0 mb-0 mt-0 list-unstyled">
          <li>
            <span class="text-black">Shipping Date:</span> 25 Nov 2024 10:30 AM
          </li>
          <li><span class="text-black">Email:</span> example&#64;daxa.com</li>
          <li><span class="text-black">Phone:</span> +1 444 333 5566</li>
          <li>
            <span class="text-black">Address:</span> 789 Pine St, Villageton,
            England
          </li>
        </ul>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="4">
      <v-card
        class="order-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Delivery Details</h5>
        </div>
        <ul class="pl-0 mb-0 mt-0 list-unstyled">
          <li>
            <span class="text-black">XYZ Delivery</span>
          </li>
          <li><span class="text-black">Order ID:</span> XXXXXX1004</li>
          <li><span class="text-black">Payment Method:</span> Master Card</li>
          <li><span class="text-black">Email:</span> example&#64;daxa.com</li>
        </ul>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "OrderDetails",
};
</script>

<style lang="scss" scoped>
.order-details-card {
  ul {
    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
