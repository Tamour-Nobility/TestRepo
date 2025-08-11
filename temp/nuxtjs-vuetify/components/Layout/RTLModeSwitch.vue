<template>
  <v-switch @click="toggleRTL" v-model="rtlMode"></v-switch>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RTLModeSwitch",
  setup() {
    const rtlMode = ref(false);

    const toggleRTL = () => {
      const body = document.body;
      const rtlClass = "rtl-enabled";

      if (body.classList.contains(rtlClass)) {
        body.classList.remove(rtlClass);
        rtlMode.value = false;
        localStorage.setItem("rtlMode", "false");
      } else {
        body.classList.add(rtlClass);
        rtlMode.value = true;
        localStorage.setItem("rtlMode", "true");
      }
    };

    onMounted(() => {
      const savedMode = localStorage.getItem("rtlMode");
      if (savedMode === "true") {
        document.body.classList.add("rtl-enabled");
        rtlMode.value = true;
      } else {
        rtlMode.value = false;
      }
    });

    return {
      rtlMode,
      toggleRTL,
    };
  },
});
</script>
