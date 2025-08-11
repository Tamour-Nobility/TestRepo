<template>
  <div
    class="border-0 rounded-3 mb-4 text-center"
    style="background: linear-gradient(162deg, #d7b5fd 3.82%, #9947f5 98.54%)"
  >
    <div class="card-body p-4 text-center">
      <span class="fs-24 d-block text-secondary">Want To Try</span>
      <h3 class="fs-24 text-secondary">
        New Marketing <br />
        Tool?
      </h3>
      <div class="py-4 mb-3">
        <img src="@/assets/images/marketing-tool.png" alt="marketing-tool" />
      </div>
      <RouterLink
        to="/contact"
        class="d-inline-block py-2 px-4 btn btn-primary border-0"
        style="background-color: #6a22a7"
      >
        Contact Us
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMarketingTool",
});
</script>
