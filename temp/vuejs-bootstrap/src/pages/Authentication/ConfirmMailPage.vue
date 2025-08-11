<template>
  <ConfirmMail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmMail from "@/components/Modules/Authentication/ConfirmMail/index.vue";

export default defineComponent({
  name: "ConfirmMailPage",
  components: {
    ConfirmMail,
  },
});
</script>
