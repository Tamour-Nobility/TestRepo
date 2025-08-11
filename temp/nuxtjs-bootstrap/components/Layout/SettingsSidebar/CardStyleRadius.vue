<template>
  <button
    class="card-radius-square settings-btn card-style-btn"
    id="card-radius-square"
    @click="toggleCardStyleRadius"
  >
    Click To <span class="square">Square</span>
    <span class="radius">Radius</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardStyleRadius",
  setup() {
    const isDarkMode = ref(false);

    const toggleCardStyleRadius = () => {
      isDarkMode.value = !isDarkMode.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("card-radius", isDarkMode.value);
      }

      localStorage.setItem("card-radius", isDarkMode.value.toString());
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("card-radius");
      if (storedDarkMode) {
        isDarkMode.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("card-radius", isDarkMode.value);
        }
      }
    });

    return {
      isDarkMode,
      toggleCardStyleRadius,
    };
  },
});
</script>
