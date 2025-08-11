<template>
  <SignUp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUp from "@/components/Modules/Authentication/SignUp/index.vue";

export default defineComponent({
  name: "ResetPasswordPage",
  components: {
    SignUp,
  },
});
</script>
