<template>
  <div class="settings-btn" @click="stateStoreInstance.settingsBtn">
    <i class="material-symbols-outlined">settings</i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "SettingsBtn",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
