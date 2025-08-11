<template>
  <PageTitle pageTitle="Inbox" subTitle="Apps" />
  <Inbox />
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
