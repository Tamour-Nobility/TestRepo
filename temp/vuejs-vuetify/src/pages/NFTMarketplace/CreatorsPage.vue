<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Creators" subTitle="NFT Marketplace" />

    <FilterContent />
    <Creators />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import FilterContent from "@/components/Pages/NFTMarketplace/Creators/FilterContent.vue";
import Creators from "@/components/Pages/NFTMarketplace/Creators/index.vue";

export default defineComponent({
  name: "CreatorsPage",
  components: {
    PageTitle,
    FilterContent,
    Creators,
  },
});
</script>
