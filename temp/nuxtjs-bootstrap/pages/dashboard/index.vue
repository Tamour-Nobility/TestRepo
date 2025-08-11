<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <dashboard-e-commerce-welcome-dashboard />
        <dashboard-e-commerce-total-sales-chart />
      </div>
      <div class="col-lg-4">
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-12">
            <dashboard-e-commerce-total-orders-chart />
          </div>
          <div class="col-md-4 col-lg-12">
            <dashboard-e-commerce-total-customers-chart />
          </div>
          <div class="col-md-4 col-lg-12">
            <dashboard-e-commerce-total-revenue-chart />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-5">
        <dashboard-e-commerce-sales-by-locations />
      </div>
      <div class="col-lg-7">
        <dashboard-e-commerce-top-selling-products />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-7 col-xxl-8 col-lg-7">
        <dashboard-e-commerce-recent-orders />
      </div>
      <div class="col-xl-5 col-xxl-4 col-lg-5">
        <dashboard-e-commerce-order-summary-chart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-5 col-xxl-4 col-lg-5">
        <dashboard-e-commerce-recent-transactions />
      </div>

      <div class="col-xl-7 col-xxl-8 col-lg-7">
        <dashboard-e-commerce-returning-customer-rate-chart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EcommercePage",
});
</script>
