<template>
  <PageTitle pageTitle="Menus" subTitle="UI Elements" />
  <Menus />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Menus from "@/components/Modules/UIElements/Menus/index.vue";

export default defineComponent({
  name: "MenusPage",
  components: {
    PageTitle,
    Menus,
  },
});
</script>
