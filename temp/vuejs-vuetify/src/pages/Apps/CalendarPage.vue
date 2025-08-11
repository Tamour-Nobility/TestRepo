<template>
  <PageTitle pageTitle="Calendar" subTitle="Apps" />

  <v-row>
    <v-col cols="12" lg="8">
      <CalendarContent />
    </v-col>
    <v-col cols="12" lg="4">
      <WorkingSchedule />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import CalendarContent from "../../components/Apps/Calendar/CalendarContent.vue";
import WorkingSchedule from "../../components/Apps/Calendar/WorkingSchedule.vue";

export default defineComponent({
  name: "CalendarPage",
  components: {
    PageTitle,
    CalendarContent,
    WorkingSchedule,
  },
});
</script>
