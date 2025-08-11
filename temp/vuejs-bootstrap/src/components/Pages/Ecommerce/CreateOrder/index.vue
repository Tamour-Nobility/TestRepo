<template>
  <div class="row">
    <div class="col-xxl-8 col-lg-7">
      <BillingInformation />
    </div>

    <div class="col-xxl-4 col-lg-5">
      <YourOrder />

      <PaymentMethod />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BillingInformation from "./BillingInformation.vue";
import YourOrder from "./YourOrder.vue";
import PaymentMethod from "./PaymentMethod.vue";

export default defineComponent({
  name: "CreateOrder",
  components: {
    BillingInformation,
    YourOrder,
    PaymentMethod,
  },
});
</script>
