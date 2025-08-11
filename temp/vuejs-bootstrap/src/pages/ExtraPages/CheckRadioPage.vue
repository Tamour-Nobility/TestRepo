<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Check & Radio" subTitle="Extra Pages" />

    <CheckRadio />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CheckRadio from "@/components/Modules/ExtraPages/CheckRadio/index.vue";

export default defineComponent({
  name: "CheckRadioPage",
  components: {
    PageTitle,
    CheckRadio,
  },
});
</script>
