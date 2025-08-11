<template>
  <div>
    <FrontPagesCommonNavbar class="bg-transparent" />
    <FrontPagesCommonPageTitle pageTitle="Contact Us" />
    <FrontPagesCommonContactUs />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonCopyRight />
    <FrontPagesCommonBackToUp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("padding-0");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("padding-0");
    });
  },
});
</script>
