<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Calendar" subTitle="Apps" />

    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-6">
        <AppsCalendarContent />
      </div>

      <div class="col-lg-4 col-md-6">
        <AppsCalendarWorkingSchedule />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarPage",
});
</script>
