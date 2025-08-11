<template>
  <PageTitle pageTitle="Chat" subTitle="Apps" />

  <Chat />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Chat from "../../components/Apps/Chat/index.vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    PageTitle,
    Chat,
  },
});
</script>
