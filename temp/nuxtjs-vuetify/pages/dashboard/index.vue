<template>
  <v-row>
    <v-col cols="12" lg="8" md="12">
      <dashboard-e-commerce-welcome-dashboard />
      <dashboard-e-commerce-total-sales-chart />
    </v-col>
    <v-col cols="12" lg="4">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="12" md="4">
          <dashboard-e-commerce-total-orders-chart />
        </v-col>
        <v-col cols="12" lg="12" md="4">
          <dashboard-e-commerce-total-customers-chart />
        </v-col>
        <v-col cols="12" lg="12" md="4">
          <dashboard-e-commerce-total-revenue-chart />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="5">
      <dashboard-e-commerce-sales-by-locations />
    </v-col>
    <v-col cols="12" lg="7">
      <dashboard-e-commerce-top-selling-products />
    </v-col>
    <v-col cols="12" lg="8">
      <dashboard-e-commerce-recent-orders />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <dashboard-e-commerce-order-summary-chart />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <dashboard-e-commerce-recent-transactions />
    </v-col>
    <v-col cols="12" lg="8">
      <dashboard-e-commerce-returning-customer-rate-chart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EcommercePage",
});
</script>
