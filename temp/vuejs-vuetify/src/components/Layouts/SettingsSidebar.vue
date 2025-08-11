<template>
  <div
    :class="[
      'settings-sidebar bg-white transition',
      { active: stateStoreInstance.settings },
    ]"
  >
    <div
      class="settings-header bg-gray d-flex align-items-center justify-space-between"
    >
      <div class="logo d-flex align-items-center">
        <v-img src="@/assets/images/logo-icon.png" alt="logo-icon" />
        <h4 class="m-0 lh-1">Trezo</h4>
      </div>
      <button
        type="button"
        class="close-btn"
        @click="stateStoreInstance.settingsBtn"
      >
        <i class="material-symbols-outlined"> close </i>
      </button>
    </div>
    <div class="settings-body">
      <div class="p-20">
        <span class="title d-block text-black fw-medium"> RTL Mode </span>
        <RTLModeSwitch />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium"> Dark Mode </span>
        <DarkModeSwitch />
      </div>
      <v-divider></v-divider>
      <div class="p-20 hide-sidebar">
        <span class="title d-block text-black fw-medium"> Hide Sidebar </span>
        <v-switch
          :class="[{ active: stateStoreInstance.open }]"
          @click="stateStoreInstance.onChange"
        >
        </v-switch>
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Only Sidebar Dark
        </span>
        <OnlySidebarDark />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <span class="title d-block text-black fw-medium">
          Only Header Dark
        </span>
        <OnlyHeaderDark />
      </div>
      <v-divider></v-divider>
      <div class="p-20">
        <a href="#" class="buy-trezo-btn bg-primary"> Buy Trezo </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";

import RTLModeSwitch from "./RTLModeSwitch.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import OnlySidebarDark from "./OnlySidebarDark.vue";
import OnlyHeaderDark from "./OnlyHeaderDark.vue";

export default defineComponent({
  name: "SettingsSidebar",
  components: {
    RTLModeSwitch,
    DarkModeSwitch,
    OnlySidebarDark,
    OnlyHeaderDark,
  },
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>

<style lang="scss" scoped>
.settings-sidebar {
  bottom: 0;
  z-index: 99999;
  right: -100%;
  width: 300px;
  height: 100%;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  box-shadow: #959da51f 0 8px 24px;
  .settings-body {
    padding-top: 80px;
    height: 100vh;
    overflow-y: scroll;
    .title {
      margin-bottom: 12px;
    }
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 5px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      background: var(--whiteColor);
    }
    .buy-trezo-btn {
      padding: 10px 24px;
      border-radius: 30px;
      display: inline-block;
    }
  }
  .settings-header {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 20px;
    position: absolute;
    justify-content: space-between;
    .logo {
      .v-img {
        margin-right: 8px;
      }
    }
    .close-btn {
      padding: 0;
      height: auto;
      min-width: auto;
      border-radius: 0;
      color: var(--blackColor);
    }
  }
  &.active {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
}
</style>
