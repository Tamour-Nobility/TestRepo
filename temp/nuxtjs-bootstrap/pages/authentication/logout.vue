<template>
  <ModulesAuthenticationLogOut />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogOutPage",
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
