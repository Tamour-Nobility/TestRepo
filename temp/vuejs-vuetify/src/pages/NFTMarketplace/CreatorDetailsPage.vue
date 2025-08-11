<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Creator Details" subTitle="NFT Marketplace" />

    <CreatorDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreatorDetails from "@/components/Pages/NFTMarketplace/CreatorDetails/index.vue";

export default defineComponent({
  name: "CreatorDetailsPage",
  components: {
    PageTitle,
    CreatorDetails,
  },
});
</script>
