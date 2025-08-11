<template>
  <Logout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logout from "@/components/Modules/Authentication/Logout/index.vue";

export default defineComponent({
  name: "LogoutPage",
  components: {
    Logout,
  },
});
</script>
