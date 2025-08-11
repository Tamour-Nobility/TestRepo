<template>
  <div>
    <FrontPagesCommonNavbar class="bg-white" />
    <FrontPagesHomeBanner />
    <FrontPagesCommonKeyFeatures />
    <FrontPagesHomeTailorYourDashboard />
    <FrontPagesHomeTestimonials />
    <FrontPagesCommonOurTeam />
    <FrontPagesCommonFAQ />
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
  name: "HomePage",
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
