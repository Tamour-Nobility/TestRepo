<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Calendar" subTitle="Apps" />

    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-6">
        <CalendarContent />
      </div>

      <div class="col-lg-4 col-md-6">
        <WorkingSchedule />
      </div>
    </div>
  </div>
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
