<template>
  <v-row>
    <v-col cols="12" lg="8">
      <DashboardAnalyticsOverviewChart />

      <DashboardAnalyticsStats />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardAnalyticsRealtimeActiveUsersChart />
    </v-col>
    <v-col cols="12" lg="7">
      <DashboardAnalyticsBrowserUsedByUsers />
    </v-col>
    <v-col cols="12" lg="5">
      <DashboardAnalyticsDeviceSessionsChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardAnalyticsClicksChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardAnalyticsImpressionsChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardAnalyticsSessionsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <DashboardAnalyticsSessionsByChannelChart />
    </v-col>
    <v-col cols="12" lg="7">
      <DashboardAnalyticsClicksImpressionsByKeywords />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardAnalyticsTopBrowsingPagesToday />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardAnalyticsUsersByCountry />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnalyticsPage",
});
</script>
