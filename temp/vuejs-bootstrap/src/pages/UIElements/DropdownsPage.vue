<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Dropdowns" subTitle="UI Elements" />

    <Dropdowns />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Dropdowns from "@/components/Modules/UIElements/Dropdowns/index.vue";

export default defineComponent({
  name: "DropdownsPage",
  components: {
    PageTitle,
    Dropdowns,
  },
});
</script>
