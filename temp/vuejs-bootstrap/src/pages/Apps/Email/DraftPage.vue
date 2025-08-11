<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Draft" subTitle="Apps" />
    <Draft />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Draft from "../../../components/Apps/Email/Draft/index.vue";

export default defineComponent({
  name: "DraftPage",
  components: {
    PageTitle,
    Draft,
  },
});
</script>
