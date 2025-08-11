<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Feather Icon" subTitle="Icons" />

    <FeatherIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import FeatherIcon from "@/components/Modules/Icons/FeatherIcon/index.vue";

export default defineComponent({
  name: "FeatherIconPage",
  components: {
    PageTitle,
    FeatherIcon,
  },
});
</script>
