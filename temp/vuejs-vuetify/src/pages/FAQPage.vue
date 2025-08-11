<template>
  <div class="front-pages">
    <Navbar />
    <PageTitle pageTitle="Frequently Asked Questions" />
    <FAQ />
    <CTA />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/FrontPages/Common/Navbar.vue";
import PageTitle from "../components/FrontPages/Common/PageTitle.vue";
import FAQ from "../components/FrontPages/Common/FAQ.vue";
import CTA from "../components/FrontPages/Common/CTA.vue";
import Footer from "../components/FrontPages/Common/Footer.vue";

export default defineComponent({
  name: "FAQPage",
  components: {
    Navbar,
    PageTitle,
    FAQ,
    CTA,
    Footer,
  },
});
</script>
