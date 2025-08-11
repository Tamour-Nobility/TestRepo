<template>
  <PageTitle pageTitle="Listbox" subTitle="UI Elements" />
  <Listbox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Listbox from "@/components/Modules/UIElements/Listbox/index.vue";

export default defineComponent({
  name: "ListboxPage",
  components: {
    PageTitle,
    Listbox,
  },
});
</script>
