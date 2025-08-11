<template>
  <PageTitle pageTitle="Compose" subTitle="Apps" />
  <Compose />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Compose from "../../../components/Apps/Email/Compose/index.vue";

export default defineComponent({
  name: "ComposePage",
  components: {
    PageTitle,
    Compose,
  },
});
</script>
