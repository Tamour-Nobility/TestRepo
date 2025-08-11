<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Date Time Picker" subTitle="UI Elements" />

    <DateTimePicker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import DateTimePicker from "@/components/Modules/UIElements/DateTimePicker/index.vue";

export default defineComponent({
  name: "DateTimePickerPage",
  components: {
    PageTitle,
    DateTimePicker,
  },
});
</script>
