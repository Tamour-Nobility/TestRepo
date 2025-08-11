<template>
  <PageTitle pageTitle="RemixIcon" subTitle="Icons" />

  <RemixIcon />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RemixIcon from "@/components/Modules/Icons/RemixIcon/index.vue";

export default defineComponent({
  name: "RemixIconPage",
  components: {
    PageTitle,
    RemixIcon,
  },
});
</script>
