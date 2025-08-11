<template>
  <button
    class="sidebar-light-dark settings-btn sidebar-dark-btn"
    id="sidebar-light-dark"
    @click="toggleOnlySidebarDarkMode"
  >
    Click To
    <span class="dark1">Dark</span>
    <span class="light1">Light</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnlySidebarDark",
  setup() {
    const isDarkMode = ref(false);

    const toggleOnlySidebarDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("sidebar-dark", isDarkMode.value);
      }

      localStorage.setItem("sidebar-dark", isDarkMode.value.toString());
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("sidebar-dark");
      if (storedDarkMode) {
        isDarkMode.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("sidebar-dark", isDarkMode.value);
        }
      }
    });

    return {
      isDarkMode,
      toggleOnlySidebarDarkMode,
    };
  },
});
</script>
