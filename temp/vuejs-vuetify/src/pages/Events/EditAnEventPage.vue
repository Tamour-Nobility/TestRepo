<template>
  <PageTitle pageTitle="Edit An Event" subTitle="Events" />

  <EditAnEvent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EditAnEvent from "@/components/Pages/Events/EditAnEvent/index.vue";

export default defineComponent({
  name: "EditAnEventPage",
  components: {
    PageTitle,
    EditAnEvent,
  },
});
</script>
