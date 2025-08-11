<template>
  <div
    class="border-0 rounded-3 position-relative mb-4 overflow-hidden"
    style="background: linear-gradient(101deg, #fe7a36 0%, #fd5812 100%)"
  >
    <div class="row">
      <div class="col-sm-7">
        <div class="p-4 pe-0">
          <span class="text-white d-block mb-2">Active Total Property</span>
          <h3 class="fs-20 text-white">507,020</h3>
        </div>
      </div>
      <div class="col-sm-5 mt-md-3 mt-xxl-0">
        <div class="pt-sm-4 mt-sm-3 text-end">
          <img
            src="@/assets/images/real-property.png"
            style="width: 188px; height: 125px"
            alt="real-property"
          />
          <img
            src="@/assets/images/shape-9.png"
            class="position-absolute bottom-0 start-0"
            alt="shape"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveTotalProperty",
});
</script>
