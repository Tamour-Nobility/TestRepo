<template>
  <div>
    <FrontPagesCommonNavbar class="bg-transparent" />
    <FrontPagesCommonPageTitle pageTitle="Features" />
    <FrontPagesCommonKeyFeatures />
    <FrontPagesCommonOurTeam />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonCopyRight />
    <FrontPagesCommonBackToUp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturesPage",
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
