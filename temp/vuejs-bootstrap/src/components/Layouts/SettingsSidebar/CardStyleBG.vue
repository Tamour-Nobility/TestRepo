<template>
  <button
    class="card-bg settings-btn card-bg-style-btn"
    id="card-bg"
    @click="toggleCardStyleBG"
  >
    Click To <span class="white">White</span>
    <span class="gray">Gray</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardStyleBG",
  setup() {
    const isDarkMode = ref(false);

    const toggleCardStyleBG = () => {
      isDarkMode.value = !isDarkMode.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("card-bg-gray", isDarkMode.value);
      }

      localStorage.setItem("card-bg-gray", isDarkMode.value.toString());
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("card-bg-gray");
      if (storedDarkMode) {
        isDarkMode.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("card-bg-gray", isDarkMode.value);
        }
      }
    });

    return {
      isDarkMode,
      toggleCardStyleBG,
    };
  },
});
</script>
