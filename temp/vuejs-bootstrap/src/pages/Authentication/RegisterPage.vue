<template>
  <Register />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Register from "@/components/Modules/Authentication/Register/index.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    Register,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>
