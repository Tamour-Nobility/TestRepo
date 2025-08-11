<template>
  <PageTitle pageTitle="Members" />

  <Members />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Members from "@/components/Modules/Members/index.vue";

export default defineComponent({
  name: "MembersPage",
  components: {
    PageTitle,
    Members,
  },
});
</script>
