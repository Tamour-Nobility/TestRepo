<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Chat" subTitle="Apps" />
    <Chat />
  </div>
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
