<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Inbox" subTitle="Apps" />
    <Inbox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Inbox from "../../../components/Apps/Email/Inbox/index.vue";

export default defineComponent({
  name: "InboxPage",
  components: {
    PageTitle,
    Inbox,
  },
});
</script>
