<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <BasicAlerts />
    </div>
    <div class="col-lg-6">
      <BGBasicAlerts />
    </div>
    <div class="col-lg-6">
      <OutlineAlerts />
    </div>
    <div class="col-lg-6">
      <BGOutlineAlerts />
    </div>
    <div class="col-lg-6">
      <AlertsWithIcon />
    </div>
    <div class="col-lg-6">
      <BGAlertsWithIcon />
    </div>
    <div class="col-lg-6">
      <DismissingAlerts />
    </div>
    <div class="col-lg-6">
      <AdditionalContentAlerts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicAlerts from "./BasicAlerts.vue";
import BGBasicAlerts from "./BGBasicAlerts.vue";
import OutlineAlerts from "./OutlineAlerts.vue";
import BGOutlineAlerts from "./BGOutlineAlerts.vue";
import AlertsWithIcon from "./AlertsWithIcon.vue";
import BGAlertsWithIcon from "./BGAlertsWithIcon.vue";
import DismissingAlerts from "./DismissingAlerts.vue";
import AdditionalContentAlerts from "./AdditionalContentAlerts.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Alerts",
  components: {
    BasicAlerts,
    BGBasicAlerts,
    OutlineAlerts,
    BGOutlineAlerts,
    AlertsWithIcon,
    BGAlertsWithIcon,
    DismissingAlerts,
    AdditionalContentAlerts,
  },
});
</script>
