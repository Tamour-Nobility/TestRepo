<template>
  <div class="front-pages">
    <Navbar />
    <PageTitle pageTitle="Contact Us" />
    <ContactUs />
    <CTA />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/FrontPages/Common/Navbar.vue";
import PageTitle from "../components/FrontPages/Common/PageTitle.vue";
import ContactUs from "../components/FrontPages/Common/ContactUs.vue";
import CTA from "../components/FrontPages/Common/CTA.vue";
import Footer from "../components/FrontPages/Common/Footer.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    Navbar,
    PageTitle,
    ContactUs,
    CTA,
    Footer,
  },
});
</script>
