<template>
  <div class="card border-0 rounded-2 p-4 bg-white mb-4">
    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0 position-relative">
        <img
          src="@/assets/images/nft-21.png"
          class="rounded-circle"
          style="width: 65px; height: 65px"
          alt="nft"
        />
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-24 fw-semibold mb-1">Angela Carter</h4>
        <span class="fs-12">ID: 35246</span>
      </div>
    </div>
    <div
      class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4"
    >
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0 position-relative">
          <img
            src="@/assets/images/schedule2.png"
            style="width: 30px; height: 30px"
            alt="schedule2"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fs-12">Published</span>
          <h4 class="fs-14 fw-semibold mb-0">23 June 2024</h4>
        </div>
      </div>
      <button class="btn btn-primary py-2 px-3">Follow</button>
    </div>

    <div
      class="d-flex flex-wrap justify-content-between gap-3 rounded-3 bg-body-bg p-3 px-sm-4 mb-4"
    >
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Total NFT</span>
        <h3 class="mb-0 fw-semibold fs-14">156</h3>
      </div>
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Total Earned</span>
        <h3 class="mb-0 fw-semibold fs-14">1234ETH</h3>
      </div>
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Auction</span>
        <h3 class="mb-0 fw-semibold fs-14">45</h3>
      </div>
    </div>

    <h3 class="fs-18 mb-3">Description</h3>
    <p>
      This NFT captures the essence of boundless potential, symbolized by a
      surreal landscape where the sky meets the earth in a dazzling fusion of
      colors. The intricate design features flowing lines that blend together,
      representing the limitless paths we can take in life.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarterID",
});
</script>
