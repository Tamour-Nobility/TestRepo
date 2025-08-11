<template>
  <button
    class="boxed-style settings-btn fluid-boxed-btn"
    id="boxed-style"
    @click="toggleContainerStyleBtn"
  >
    Click To
    <span class="fluid">Fluid</span>
    <span class="boxed">Boxed</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ContainerStyleBtn",
  setup() {
    const isContainerStyle = ref(false);

    const toggleContainerStyleBtn = () => {
      isContainerStyle.value = !isContainerStyle.value;
      const body = document.body;

      if (body) {
        // Toggle the class on the element
        body.classList.toggle("boxed-style-boxed", isContainerStyle.value);
      }

      localStorage.setItem(
        "boxed-style-boxed",
        isContainerStyle.value.toString()
      );
    };

    onMounted(() => {
      const storedDarkMode = localStorage.getItem("boxed-style-boxed");
      if (storedDarkMode) {
        isContainerStyle.value = storedDarkMode === "true";
        const body = document.body;
        if (body) {
          // Toggle the class on the element
          body.classList.toggle("boxed-style-boxed", isContainerStyle.value);
        }
      }
    });

    return {
      isContainerStyle,
      toggleContainerStyleBtn,
    };
  },
});
</script>
