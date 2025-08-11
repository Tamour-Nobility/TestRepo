<template>
  <PageTitle pageTitle="Icon" subTitle="UI Elements" />
  <Icon />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Icon from "@/components/Modules/UIElements/Icon/index.vue";

export default defineComponent({
  name: "IconPage",
  components: {
    PageTitle,
    Icon,
  },
});
</script>
