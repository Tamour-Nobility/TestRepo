<template>
  <div class="row">
    <div class="col-xxl-9 col-lg-8 col-md-7">
      <PagesEcommerceCustomerDetailsTransactionsHistory />
    </div>
    <div class="col-xxl-3 col-lg-4 col-md-5">
      <PagesEcommerceCustomerDetailsUserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerDetails",
});
</script>
