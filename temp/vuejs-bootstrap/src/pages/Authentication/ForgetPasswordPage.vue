<template>
  <ForgetPassword />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import ForgetPassword from "@/components/Modules/Authentication/ForgetPassword/index.vue";

export default defineComponent({
  name: "ForgetPasswordPage",
  components: {
    ForgetPassword,
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
