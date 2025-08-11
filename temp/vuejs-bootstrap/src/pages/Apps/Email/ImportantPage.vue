<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Important" subTitle="Apps" />
    <Important />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Important from "../../../components/Apps/Email/Important/index.vue";

export default defineComponent({
  name: "ImportantPage",
  components: {
    PageTitle,
    Important,
  },
});
</script>
