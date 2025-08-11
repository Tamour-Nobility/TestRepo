<template>
  <PageTitle pageTitle="Editors" subTitle="Forms" />

  <Editors />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Editors from "@/components/Modules/Forms/Editors/index.vue";

export default defineComponent({
  name: "EditorsPage",
  components: {
    PageTitle,
    Editors,
  },
});
</script>
