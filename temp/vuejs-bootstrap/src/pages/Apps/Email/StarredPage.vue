<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Starred" subTitle="Apps" />
    <Starred />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Starred from "../../../components/Apps/Email/Starred/index.vue";

export default defineComponent({
  name: "StarredPage",
  components: {
    PageTitle,
    Starred,
  },
});
</script>
