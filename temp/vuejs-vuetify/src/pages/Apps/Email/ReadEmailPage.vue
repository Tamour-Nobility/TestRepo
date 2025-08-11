<template>
  <PageTitle pageTitle="Read Email" subTitle="Apps" />
  <Read />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Read from "../../../components/Apps/Email/Read/index.vue";

export default defineComponent({
  name: "ReadEmailPage",
  components: {
    PageTitle,
    Read,
  },
});
</script>
