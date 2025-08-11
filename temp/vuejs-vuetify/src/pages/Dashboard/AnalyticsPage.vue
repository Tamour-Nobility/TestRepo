<template>
  <v-row>
    <v-col cols="12" lg="8">
      <AnalyticsOverviewChart />

      <Stats />
    </v-col>
    <v-col cols="12" lg="4">
      <RealtimeActiveUsersChart />
    </v-col>
    <v-col cols="12" lg="7">
      <BrowserUsedByUsers />
    </v-col>
    <v-col cols="12" lg="5">
      <DeviceSessionsChart />
    </v-col>
    <v-col cols="12" lg="4">
      <ClicksChart />
    </v-col>
    <v-col cols="12" lg="4">
      <ImpressionsChart />
    </v-col>
    <v-col cols="12" lg="4">
      <SessionsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <SessionsByChannelChart />
    </v-col>
    <v-col cols="12" lg="7">
      <ClicksImpressionsByKeywords />
    </v-col>
    <v-col cols="12" lg="8">
      <TopBrowsingPagesToday />
    </v-col>
    <v-col cols="12" lg="4">
      <UsersByCountry />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnalyticsOverviewChart from "../../components/Dashboard/Analytics/AnalyticsOverviewChart.vue";
import Stats from "../../components/Dashboard/Analytics/Stats.vue";
import RealtimeActiveUsersChart from "../../components/Dashboard/Analytics/RealtimeActiveUsersChart.vue";
import BrowserUsedByUsers from "../../components/Dashboard/Analytics/BrowserUsedByUsers.vue";
import DeviceSessionsChart from "../../components/Dashboard/Analytics/DeviceSessionsChart.vue";
import ClicksChart from "../../components/Dashboard/Analytics/ClicksChart.vue";
import ImpressionsChart from "../../components/Dashboard/Analytics/ImpressionsChart.vue";
import SessionsChart from "../../components/Dashboard/Analytics/SessionsChart.vue";
import SessionsByChannelChart from "../../components/Dashboard/Analytics/SessionsByChannelChart.vue";
import ClicksImpressionsByKeywords from "../../components/Dashboard/Analytics/ClicksImpressionsByKeywords.vue";
import TopBrowsingPagesToday from "../../components/Dashboard/Analytics/TopBrowsingPagesToday.vue";
import UsersByCountry from "../../components/Dashboard/Analytics/UsersByCountry.vue";

export default defineComponent({
  name: "AnalyticsPage",
  components: {
    AnalyticsOverviewChart,
    Stats,
    RealtimeActiveUsersChart,
    BrowserUsedByUsers,
    DeviceSessionsChart,
    ClicksChart,
    ImpressionsChart,
    SessionsChart,
    SessionsByChannelChart,
    ClicksImpressionsByKeywords,
    TopBrowsingPagesToday,
    UsersByCountry,
  },
});
</script>
