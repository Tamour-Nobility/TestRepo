<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Cards" subTitle="UI Elements" />

    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Cards from "@/components/Modules/UIElements/Cards/index.vue";

export default defineComponent({
  name: "CardsPage",
  components: {
    PageTitle,
    Cards,
  },
});
</script>
