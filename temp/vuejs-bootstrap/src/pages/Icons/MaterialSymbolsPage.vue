<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Material Symbols" subTitle="Icons" />

    <MaterialSymbolsIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MaterialSymbolsIcon from "@/components/Modules/Icons/MaterialSymbolsIcon/index.vue";

export default defineComponent({
  name: "UserTeamPage",
  components: {
    PageTitle,
    MaterialSymbolsIcon,
  },
});
</script>
