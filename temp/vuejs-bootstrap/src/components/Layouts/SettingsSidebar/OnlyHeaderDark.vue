<template>
  <button
    class="header-light-dark settings-btn header-dark-btn"
    id="header-light-dark"
    @click="toggleOnlyHeaderDarkMode"
  >
    Click To <span class="dark2">Dark</span>
    <span class="light2">Light</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnlyHeaderDark",
  setup() {
    const isDarkMode = ref(false);

    const toggleOnlyHeaderDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("header-dark", isDarkMode.value);
      }

      localStorage.setItem("header-dark", isDarkMode.value.toString());
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("header-dark");
      if (storedDarkMode) {
        isDarkMode.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("header-dark", isDarkMode.value);
        }
      }
    });

    return {
      isDarkMode,
      toggleOnlyHeaderDarkMode,
    };
  },
});
</script>
