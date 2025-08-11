<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Spam" subTitle="Apps" />
    <Spam />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Spam from "../../../components/Apps/Email/Spam/index.vue";

export default defineComponent({
  name: "SpamPage",
  components: {
    PageTitle,
    Spam,
  },
});
</script>
