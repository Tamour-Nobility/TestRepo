<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Typography" subTitle="Extra Pages" />

    <Typography />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Typography from "@/components/Modules/ExtraPages/Typography/index.vue";

export default defineComponent({
  name: "TypographyPage",
  components: {
    PageTitle,
    Typography,
  },
});
</script>
