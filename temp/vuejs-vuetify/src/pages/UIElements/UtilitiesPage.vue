<template>
  <PageTitle pageTitle="Utilities" subTitle="UI Elements" />
  <Utilities />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Utilities from "@/components/Modules/UIElements/Utilities/index.vue";

export default defineComponent({
  name: "UtilitiesPage",
  components: {
    PageTitle,
    Utilities,
  },
});
</script>
