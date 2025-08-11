<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Customers" subTitle="Real Estate" />

    <AddNewCustomer />
    <RealEstateCustomers />
    <AddNewCustomerModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AddNewCustomer from "@/components/Pages/RealEstate/RealEstateCustomers/AddNewCustomer.vue";
import RealEstateCustomers from "@/components/Pages/RealEstate/RealEstateCustomers/index.vue";
import AddNewCustomerModal from "@/components/Pages/RealEstate/RealEstateCustomers/AddNewCustomerModal.vue";

export default defineComponent({
  name: "RealEstateCustomersPage",
  components: {
    PageTitle,
    AddNewCustomer,
    RealEstateCustomers,
    AddNewCustomerModal,
  },
});
</script>
