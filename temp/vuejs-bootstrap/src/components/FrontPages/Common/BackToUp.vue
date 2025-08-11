<template>
  <button
    type="button"
    id="backtotop"
    :class="[{ active: isTop }]"
    @click="scrollToTop()"
  >
    <i class="ri-arrow-up-s-line"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackToUp",
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
});
</script>
