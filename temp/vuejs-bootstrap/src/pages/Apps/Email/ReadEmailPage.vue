<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Read Email" subTitle="Apps" />
    <ReadEmail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import ReadEmail from "../../../components/Apps/Email/ReadEmail/index.vue";

export default defineComponent({
  name: "ReadEmailPage",
  components: {
    PageTitle,
    ReadEmail,
  },
});
</script>
