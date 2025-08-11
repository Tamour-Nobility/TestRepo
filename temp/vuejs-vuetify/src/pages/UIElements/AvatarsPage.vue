<template>
  <PageTitle pageTitle="Avatars" subTitle="UI Elements" />
  <Avatars />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Avatars from "@/components/Modules/UIElements/Avatars/index.vue";

export default defineComponent({
  name: "AvatarsPage",
  components: {
    PageTitle,
    Avatars,
  },
});
</script>
