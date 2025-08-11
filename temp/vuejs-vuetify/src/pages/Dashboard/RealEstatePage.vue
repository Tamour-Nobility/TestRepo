<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <ActiveTotalProperty />
          </div>
          <div class="col-md-6 col-xxl-12">
            <RevenueChart />
          </div>
        </div>
      </div>
      <div class="col-xxl-8">
        <NewListingsSoldPropertiesChart />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <PropertiesForSaleChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <PropertiesForRentChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <NewCustomers />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-5">
        <MostSalesLocation />

        <RecentProperty />
      </div>
      <div class="col-xxl-7">
        <RentalIncomeChart />
        <div class="row">
          <div class="col-lg-6">
            <SocialSearchChart />

            <TopProperty />
          </div>
          <div class="col-lg-6">
            <CustomerReviews />
          </div>
        </div>
      </div>
    </div>

    <LatestTransaction />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActiveTotalProperty from "../../components/Dashboard/RealEstate/ActiveTotalProperty.vue";
import RevenueChart from "../../components/Dashboard/RealEstate/RevenueChart.vue";
import NewListingsSoldPropertiesChart from "../../components/Dashboard/RealEstate/NewListingsSoldPropertiesChart.vue";
import PropertiesForSaleChart from "../../components/Dashboard/RealEstate/PropertiesForSaleChart.vue";
import PropertiesForRentChart from "../../components/Dashboard/RealEstate/PropertiesForRentChart.vue";
import NewCustomers from "../../components/Dashboard/RealEstate/NewCustomers.vue";
import MostSalesLocation from "../../components/Dashboard/RealEstate/MostSalesLocation.vue";
import RecentProperty from "../../components/Dashboard/RealEstate/RecentProperty.vue";
import RentalIncomeChart from "../../components/Dashboard/RealEstate/RentalIncomeChart.vue";
import SocialSearchChart from "../../components/Dashboard/RealEstate/SocialSearchChart.vue";
import TopProperty from "../../components/Dashboard/RealEstate/TopProperty.vue";
import CustomerReviews from "../../components/Dashboard/RealEstate/CustomerReviews.vue";
import LatestTransaction from "../../components/Dashboard/RealEstate/LatestTransaction.vue";

export default defineComponent({
  name: "RealEstatePage",
  components: {
    ActiveTotalProperty,
    RevenueChart,
    NewListingsSoldPropertiesChart,
    PropertiesForSaleChart,
    PropertiesForRentChart,
    NewCustomers,
    MostSalesLocation,
    RecentProperty,
    RentalIncomeChart,
    SocialSearchChart,
    TopProperty,
    CustomerReviews,
    LatestTransaction,
  },
});
</script>
