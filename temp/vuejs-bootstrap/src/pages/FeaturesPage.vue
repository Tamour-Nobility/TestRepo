<template>
  <div>
    <Navbar class="bg-transparent" />
    <PageTitle pageTitle="Features" />
    <KeyFeatures />
    <OurTeam />
    <CTA />
    <Footer />
    <CopyRight />
    <BackToUp />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Navbar from "../components/FrontPages/Common/Navbar.vue";
import PageTitle from "../components/FrontPages/Common/PageTitle.vue";
import KeyFeatures from "../components/FrontPages/Common/KeyFeatures.vue";
import OurTeam from "../components/FrontPages/Common/OurTeam.vue";
import CTA from "../components/FrontPages/Common/CTA.vue";
import Footer from "../components/FrontPages/Common/Footer.vue";
import CopyRight from "../components/FrontPages/Common/CopyRight.vue";
import BackToUp from "../components/FrontPages/Common/BackToUp.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Navbar,
    PageTitle,
    KeyFeatures,
    OurTeam,
    CTA,
    Footer,
    CopyRight,
    BackToUp,
  },
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
