<template>
  <PageTitle pageTitle="Datepicker" subTitle="UI Elements" />
  <Datepicker />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Datepicker from "@/components/Modules/UIElements/Datepicker/index.vue";

export default defineComponent({
  name: "DatepickerPage",
  components: {
    PageTitle,
    Datepicker,
  },
});
</script>
