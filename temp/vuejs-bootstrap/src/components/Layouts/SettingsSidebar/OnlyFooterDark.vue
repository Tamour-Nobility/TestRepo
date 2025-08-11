<template>
  <button
    class="footer-light-dark settings-btn footer-dark-btn"
    id="footer-light-dark"
    @click="toggleOnlyFooterDarkMode"
  >
    Click To <span class="dark3">Dark</span>
    <span class="light3">Light</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnlyFooterDark",
  setup() {
    const isDarkMode = ref(false);

    const toggleOnlyFooterDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("footer-dark", isDarkMode.value);
      }

      localStorage.setItem("footer-dark", isDarkMode.value.toString());
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("footer-dark");
      if (storedDarkMode) {
        isDarkMode.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("footer-dark", isDarkMode.value);
        }
      }
    });

    return {
      isDarkMode,
      toggleOnlyFooterDarkMode,
    };
  },
});
</script>
