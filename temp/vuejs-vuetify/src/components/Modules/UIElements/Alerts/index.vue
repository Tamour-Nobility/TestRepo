<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <BasicAlerts />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <BgColorAlerts />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <AlertsWithIcon />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <BgColorAlertsWithIcon />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <OutlineAlerts />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <LinkColorAlerts />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <DismissingAlerts />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <DismissingBgAlerts />
    </v-col>
  </v-row>
</template>

<script>
import BasicAlerts from "./BasicAlerts.vue";
import BgColorAlerts from "./BgColorAlerts.vue";
import AlertsWithIcon from "./AlertsWithIcon.vue";
import BgColorAlertsWithIcon from "./BgColorAlertsWithIcon.vue";
import OutlineAlerts from "./OutlineAlerts.vue";
import LinkColorAlerts from "./LinkColorAlerts.vue";
import DismissingAlerts from "./DismissingAlerts.vue";
import DismissingBgAlerts from "./DismissingBgAlerts.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Alerts",
  components: {
    BasicAlerts,
    BgColorAlerts,
    AlertsWithIcon,
    BgColorAlertsWithIcon,
    OutlineAlerts,
    LinkColorAlerts,
    DismissingAlerts,
    DismissingBgAlerts,
  },
};
</script>
