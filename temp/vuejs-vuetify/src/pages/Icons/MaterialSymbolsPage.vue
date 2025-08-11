<template>
  <PageTitle pageTitle="Material Symbols" subTitle="Icons" />

  <MaterialSymbols />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MaterialSymbols from "@/components/Modules/Icons/MaterialSymbols/index.vue";

export default defineComponent({
  name: "UserTeamPage",
  components: {
    PageTitle,
    MaterialSymbols,
  },
});
</script>
