<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Compose" subTitle="Apps" />
    <Compose />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Compose from "../../../components/Apps/Email/Compose/index.vue";

export default defineComponent({
  name: "ComposePage",
  components: {
    PageTitle,
    Compose,
  },
});
</script>
