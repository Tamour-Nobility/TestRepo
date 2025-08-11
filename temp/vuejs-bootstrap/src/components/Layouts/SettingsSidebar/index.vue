<template>
  <div
    class="offcanvas offcanvas-end bg-white"
    tabindex="-1"
    id="settingsSidebar"
    aria-labelledby="settingsSidebarLabel"
    style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  >
    <div class="offcanvas-header bg-body-bg py-3 px-4">
      <h5 class="offcanvas-title fs-18" id="settingsSidebarLabel">
        Theme Settings
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body p-4">
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">RTL / LTR</h4>
        <RTLModeSwitch />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Container Style Fluid / Boxed
        </h4>
        <ContainerStyleBtn />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Sidebar Light / Dark
        </h4>
        <OnlySidebarDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Header Light / Dark
        </h4>
        <OnlyHeaderDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Footer Light / Dark
        </h4>
        <OnlyFooterDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Card Style Radius / Square
        </h4>
        <CardStyleRadius />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Card Style BG White / Gray
        </h4>
        <CardStyleBG />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RTLModeSwitch from "./RTLModeSwitch.vue";
import ContainerStyleBtn from "./ContainerStyleBtn.vue";
import OnlySidebarDark from "./OnlySidebarDark.vue";
import OnlyHeaderDark from "./OnlyHeaderDark.vue";
import OnlyFooterDark from "./OnlyFooterDark.vue";
import CardStyleRadius from "./CardStyleRadius.vue";
import CardStyleBG from "./CardStyleBG.vue";

export default defineComponent({
  name: "SettingsSidebar",
  components: {
    RTLModeSwitch,
    ContainerStyleBtn,
    OnlySidebarDark,
    OnlyHeaderDark,
    OnlyFooterDark,
    CardStyleRadius,
    CardStyleBG,
  },
});
</script>
