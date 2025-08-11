<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="mb-4">
        <CarterID />
      </div>
    </div>
    <div class="col-lg-8">
      <CarterNFTs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarterID from "./CarterID.vue";
import CarterNFTs from "./CarterNFTs.vue";

export default defineComponent({
  name: "CreatorDetails",
  components: {
    CarterID,
    CarterNFTs,
  },
});
</script>
