<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import Login from "@/components/Modules/Authentication/Login/index.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    Login,
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
