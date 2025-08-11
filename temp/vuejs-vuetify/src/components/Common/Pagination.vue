<template>
  <div class="items-per-page d-flex justify-space-between">
    <div class="d-flex align-items-center justify-content-center">
      <div class="mr-5">Showing {{ items }} of 30 Results</div>
    </div>
    <v-pagination :length="4"></v-pagination>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  data() {
    return {
      page: 1,
    };
  },
  props: ["items"],
};
</script>
