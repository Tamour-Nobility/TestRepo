<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Members" />

    <Members />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Members from "@/components/Modules/Members/index.vue";

export default defineComponent({
  name: "MemberPage",
  components: {
    PageTitle,
    Members,
  },
});
</script>
