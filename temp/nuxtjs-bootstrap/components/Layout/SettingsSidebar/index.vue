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
        <LayoutSettingsSidebarRTLModeSwitch />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Container Style Fluid / Boxed
        </h4>
        <LayoutSettingsSidebarContainerStyleBtn />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Sidebar Light / Dark
        </h4>
        <LayoutSettingsSidebarOnlySidebarDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Header Light / Dark
        </h4>
        <LayoutSettingsSidebarOnlyHeaderDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Only Footer Light / Dark
        </h4>
        <LayoutSettingsSidebarOnlyFooterDark />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Card Style Radius / Square
        </h4>
        <LayoutSettingsSidebarCardStyleRadius />
      </div>
      <div class="mb-4 pb-2">
        <h4 class="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Card Style BG White / Gray
        </h4>
        <LayoutSettingsSidebarCardStyleBG />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingsSidebar",
});
</script>
