<template>
  <LogOut />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import LogOut from "@/components/Modules/Authentication/LogOut/index.vue";

export default defineComponent({
  name: "LogOutPage",
  components: {
    LogOut,
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
