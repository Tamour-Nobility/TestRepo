<template>
  <PageTitle pageTitle="Typography" subTitle="UI Elements" />
  <Typography />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Typography from "@/components/Modules/UIElements/Typography/index.vue";

export default defineComponent({
  name: "TypographyPage",
  components: {
    PageTitle,
    Typography,
  },
});
</script>
