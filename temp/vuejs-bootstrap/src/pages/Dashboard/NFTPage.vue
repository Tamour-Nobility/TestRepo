<template>
  <div class="main-content-container overflow-hidden">
    <ManageYourNFT />

    <div class="px-2 px-sm-5 position-relative mb-4">
      <NFTSlideItem />
    </div>

    <div class="row">
      <div class="col-xxl-4 col-lg-4">
        <EthereumRateTab />
      </div>
      <div class="col-xxl-8 col-lg-8">
        <ActiveAuctions />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 col-xxl-9">
        <FeaturedNFTArtworks />
      </div>
      <div class="col-lg-4 col-xxl-3">
        <NewMobileApp />
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <MostPopularSellers />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <WorldwideTopCreators />
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-3 col-sm-6 order-2 order-xxl-1">
        <TopCollections />
      </div>
      <div class="col-xxl-6 col-lg-12 order-1 order-xxl-2">
        <TopNFTs />
      </div>
      <div class="col-xxl-3 col-sm-6 order-3 order-xxl-3">
        <HistoryOfBids />
      </div>
    </div>
  </div>
  <CreateNFT />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ManageYourNFT from "../../components/Dashboard/NFT/ManageYourNFT.vue";
import CreateNFT from "../../components/Dashboard/NFT/CreateNFT.vue";
import NFTSlideItem from "../../components/Dashboard/NFT/NFTSlideItem.vue";
import EthereumRateTab from "../../components/Dashboard/NFT/EthereumRateTab.vue";
import ActiveAuctions from "../../components/Dashboard/NFT/ActiveAuctions.vue";
import FeaturedNFTArtworks from "../../components/Dashboard/NFT/FeaturedNFTArtworks.vue";
import NewMobileApp from "../../components/Dashboard/NFT/NewMobileApp.vue";
import MostPopularSellers from "../../components/Dashboard/NFT/MostPopularSellers.vue";
import WorldwideTopCreators from "../../components/Dashboard/NFT/WorldwideTopCreators.vue";
import TopCollections from "../../components/Dashboard/NFT/TopCollections.vue";
import TopNFTs from "../../components/Dashboard/NFT/TopNFTs.vue";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids.vue";

export default defineComponent({
  name: "NFTPage",
  components: {
    ManageYourNFT,
    CreateNFT,
    NFTSlideItem,
    EthereumRateTab,
    ActiveAuctions,
    FeaturedNFTArtworks,
    NewMobileApp,
    MostPopularSellers,
    WorldwideTopCreators,
    TopCollections,
    TopNFTs,
    HistoryOfBids,
  },
});
</script>
