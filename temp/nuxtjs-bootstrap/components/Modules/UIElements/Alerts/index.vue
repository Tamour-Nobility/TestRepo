<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <ModulesUIElementsAlertsBasicAlerts />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsBGBasicAlerts />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsOutlineAlerts />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsBGOutlineAlerts />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsWithIcon />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsBGAlertsWithIcon />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsDismissingAlerts />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsAlertsAdditionalContentAlerts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alerts",
});
</script>
