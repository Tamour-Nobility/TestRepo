<template>
  <PageTitle pageTitle="Testimonials" subTitle="Extra Pages" />
  <Testimonials />
  <TestimonialsStyleTwo />
  <TestimonialsStyleThree />
  <TestimonialsStyleFour />
  <TestimonialsStyleFive />
  <TestimonialsStyleSix />
  <TestimonialsStyleSeven />
  <TestimonialsStyleEight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Testimonials from "@/components/Modules/ExtraPages/Testimonials/index.vue";
import TestimonialsStyleTwo from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleTwo.vue";
import TestimonialsStyleThree from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleThree.vue";
import TestimonialsStyleFour from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleFour.vue";
import TestimonialsStyleFive from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleFive.vue";
import TestimonialsStyleSix from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleSix.vue";
import TestimonialsStyleSeven from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleSeven.vue";
import TestimonialsStyleEight from "@/components/Modules/ExtraPages/Testimonials/TestimonialsStyleEight.vue";

export default defineComponent({
  name: "TestimonialsPage",
  components: {
    PageTitle,
    Testimonials,
    TestimonialsStyleTwo,
    TestimonialsStyleThree,
    TestimonialsStyleFour,
    TestimonialsStyleFive,
    TestimonialsStyleSix,
    TestimonialsStyleSeven,
    TestimonialsStyleEight,
  },
});
</script>
