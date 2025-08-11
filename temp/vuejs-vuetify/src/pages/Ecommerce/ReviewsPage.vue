<template>
  <PageTitle pageTitle="Reviews" subTitle="eCommerce" />

  <Reviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Reviews from "@/components/Pages/Ecommerce/Reviews/index.vue";

export default defineComponent({
  name: "ReviewsPage",
  components: {
    PageTitle,
    Reviews,
  },
});
</script>
