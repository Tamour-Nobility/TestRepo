<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4 pb-0">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h3 class="mb-0">Card</h3>
        <button
          class="btn btn-outline-primary hover-bg fs-14 fw-medium"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="ri-add-line me-1"></i>
          <span>Add Card</span>
        </button>
      </div>

      <div class="row">
        <div class="col-sm-6 mb-4">
          <div
            class="bg-img p-4 rounded-3"
            :style="{
              backgroundImage: `url(${image})`,
            }"
          >
            <div
              class="d-flex align-content-center justify-content-between mb-4"
            >
              <span class="text-white fs-12 fw-medium">Debit Card</span>
              <img src="@/assets/images/debit.svg" alt="debit" />
            </div>
            <img class="mb-4" src="@/assets/images/board-1.png" alt="board" />
            <h3 class="fw-semibold text-white mb-5 pb-md-4 d-flex gap-3">
              <span>5322</span><span>0520</span><span>0744</span
              ><span>1794</span>
            </h3>
            <div class="d-flex align-content-center justify-content-between">
              <span class="text-white">David Farrior</span>
              <span class="text-white fs-12 fw-medium">EXP : 12/30</span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-4">
          <div
            class="bg-img p-4 rounded-3"
            :style="{
              backgroundImage: `url(${image2})`,
            }"
          >
            <div
              class="d-flex align-content-center justify-content-between mb-4"
            >
              <span class="text-white fs-12 fw-medium">Debit Card</span>
              <img src="@/assets/images/virtual.svg" alt="debit" />
            </div>
            <img class="mb-4" src="@/assets/images/board-1.png" alt="board" />
            <h3 class="fw-semibold text-white mb-5 pb-md-4 d-flex gap-3">
              <span>....</span><span>....</span><span>....</span>
              <span>1794</span>
            </h3>
            <div class="d-flex align-content-center justify-content-between">
              <span class="text-white">David Farrior</span>
              <span class="text-white fs-12 fw-medium">EXP : 12/30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DebitCard",
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const image = require("@/assets/images/debit-card.png");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const image2 = require("@/assets/images/virtual-card.png");
    return {
      image,
      image2,
    };
  },
});
</script>
