<template>
  <div
    class="rounded-3 position-relative z-1 mb-4"
    style="
      background: linear-gradient(92deg, #23272e 7.31%, #3f5272 97.89%);
      padding: 60px 40px;
    "
  >
    <img
      src="@/assets/images/shape-8.png"
      class="position-absolute top-0 end-0"
      alt="shape"
    />
    <div
      class="d-flex flex-wrap gap-2 align-items-center justify-content-between"
    >
      <div>
        <h3 class="fs-28 text-white">Manage Your NFT From One Place</h3>
        <p style="color: #b1bbc8">
          The world’s first and largest digital marketplace for discover,
          collect, sell and create your own NFTs.
        </p>
      </div>
      <button
        class="btn btn-primary py-2 p-4 position-relative z-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create NFT
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageYourNFT",
});
</script>
