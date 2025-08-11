<template>
  <div class="front-pages">
    <Navbar />
    <Banner />
    <KeyFeatures />
    <TailorYourDashboard />
    <Testimonials />
    <OurTeam />
    <FAQ />
    <ContactUs />
    <CTA />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/FrontPages/Common/Navbar.vue";
import Banner from "../components/FrontPages/Home/Banner.vue";
import KeyFeatures from "../components/FrontPages/Common/KeyFeatures.vue";
import TailorYourDashboard from "../components/FrontPages/Home/TailorYourDashboard.vue";
import Testimonials from "../components/FrontPages/Home/Testimonials.vue";
import OurTeam from "../components/FrontPages/Common/OurTeam.vue";
import FAQ from "../components/FrontPages/Common/FAQ.vue";
import ContactUs from "../components/FrontPages/Common/ContactUs.vue";
import CTA from "../components/FrontPages/Common/CTA.vue";
import Footer from "../components/FrontPages/Common/Footer.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Navbar,
    Banner,
    KeyFeatures,
    TailorYourDashboard,
    Testimonials,
    OurTeam,
    FAQ,
    ContactUs,
    CTA,
    Footer,
  },
});
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
