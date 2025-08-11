<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Trash" subTitle="Apps" />
    <Trash />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Trash from "../../../components/Apps/Email/Trash/index.vue";

export default defineComponent({
  name: "TrashPage",
  components: {
    PageTitle,
    Trash,
  },
});
</script>
