<template>
  <div class="front-pages">
    <FrontPagesCommonNavbar />
    <FrontPagesHomeBanner />
    <FrontPagesCommonKeyFeatures />
    <FrontPagesHomeTailorYourDashboard />
    <FrontPagesHomeTestimonials />
    <FrontPagesCommonOurTeam />
    <FrontPagesCommonFAQ />
    <FrontPagesCommonContactUs />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss">
.front-pages {
  --primaryColor: #4936f5;
  --purpleColor: #9135e8;
  overflow: hidden;

  p {
    line-height: 1.6;
  }
}
</style>
