<template>
  <PageTitle pageTitle="Divider" subTitle="UI Elements" />
  <Divider />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Divider from "@/components/Modules/UIElements/Divider/index.vue";

export default defineComponent({
  name: "DividerPage",
  components: {
    PageTitle,
    Divider,
  },
});
</script>
