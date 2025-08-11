<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Marketplace" subTitle="NFT Marketplace" />

    <ManageYourNFT />

    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h3 class="mb-0">Featured NFT Artworks</h3>
      <RouterLink
        to="/nft-marketplace/creators"
        class="d-flex text-decoration-none"
      >
        <span>Browse All</span>
        <i class="ri-arrow-right-s-line fs-15"></i>
      </RouterLink>
    </div>

    <FeaturedNFTArtworks />

    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h3 class="mb-0">Top Creators</h3>
      <RouterLink
        to="/nft-marketplace/creators"
        class="d-flex text-decoration-none"
      >
        <span>Browse All</span>
        <i class="ri-arrow-right-s-line fs-15"></i>
      </RouterLink>
    </div>

    <TopCreators />
  </div>
  <CreateNFT />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ManageYourNFT from "@/components/Pages/NFTMarketplace/Marketplace/ManageYourNFT.vue";
import FeaturedNFTArtworks from "@/components/Pages/NFTMarketplace/Marketplace/FeaturedNFTArtworks.vue";
import TopCreators from "@/components/Pages/NFTMarketplace/Marketplace/TopCreators.vue";
import CreateNFT from "@/components/Pages/NFTMarketplace/Marketplace/CreateNFT.vue";

export default defineComponent({
  name: "MarketplacePage",
  components: {
    PageTitle,
    ManageYourNFT,
    FeaturedNFTArtworks,
    TopCreators,
    CreateNFT,
  },
});
</script>
