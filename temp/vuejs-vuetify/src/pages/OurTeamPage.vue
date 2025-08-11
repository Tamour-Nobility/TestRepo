<template>
  <div class="front-pages">
    <Navbar />
    <PageTitle pageTitle="Our Team" />
    <OurTeam />
    <CTA />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/FrontPages/Common/Navbar.vue";
import PageTitle from "../components/FrontPages/Common/PageTitle.vue";
import OurTeam from "../components/FrontPages/Common/OurTeam.vue";
import CTA from "../components/FrontPages/Common/CTA.vue";
import Footer from "../components/FrontPages/Common/Footer.vue";

export default defineComponent({
  name: "OurTeamPage",
  components: {
    Navbar,
    PageTitle,
    OurTeam,
    CTA,
    Footer,
  },
});
</script>
