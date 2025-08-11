<template>
  <CommonPageTitle pageTitle="Calendar" subTitle="Apps" />
  <v-row>
    <v-col cols="12" lg="8">
      <AppsCalendarContent />
    </v-col>
    <v-col cols="12" lg="4">
      <AppsCalendarWorkingSchedule />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarPage",
});
</script>
