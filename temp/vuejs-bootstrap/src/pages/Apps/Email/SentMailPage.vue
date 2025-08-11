<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Sent Mail" subTitle="Apps" />
    <SentMail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import SentMail from "../../../components/Apps/Email/SentMail/index.vue";

export default defineComponent({
  name: "SentMailPage",
  components: {
    PageTitle,
    SentMail,
  },
});
</script>
