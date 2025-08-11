<template>
  <ConfirmEmail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmEmail from "@/components/Modules/Authentication/ConfirmEmail/index.vue";

export default defineComponent({
  name: "ConfirmEmailPage",
  components: {
    ConfirmEmail,
  },
});
</script>
