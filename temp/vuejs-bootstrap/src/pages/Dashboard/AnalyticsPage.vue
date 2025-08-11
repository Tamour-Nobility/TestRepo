<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-8">
        <AnalyticsOverviewChart />
        <div
          class="card border-0 p-4 bg-white rounded-3 mb-4 position-relative"
        >
          <div class="row">
            <div class="col-md-4 col-sm-6 pe-4">
              <WebsiteVisitsChart />
            </div>
            <div class="col-md-4 col-sm-6 border-start ps-lg-4">
              <NewRegistersChart />
            </div>
            <div class="col-lg-3 d-none d-md-block">
              <img
                src="@/assets/images/shape-2.png"
                class="position-absolute top-0 end-0 bottom-0 shape-2"
                alt="shape"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <RealtimeActiveUsersChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <BrowserUsedByUsers />
      </div>
      <div class="col-lg-5">
        <BrowserUsedByUsersChart />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-xl-4">
        <ClicksChart />
      </div>
      <div class="col-md-6 col-xl-4">
        <ImpressionsChart />
      </div>
      <div class="col-md-6 col-xl-4">
        <SessionsChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <SessionsByChannelChart />
      </div>
      <div class="col-lg-7">
        <ClicksImpressionsByKeywords />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <TopBrowsingPagesToday />
      </div>
      <div class="col-lg-5">
        <UsersByCountry />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnalyticsOverviewChart from "../../components/Dashboard/Analytics/AnalyticsOverviewChart.vue";
import WebsiteVisitsChart from "../../components/Dashboard/Analytics/WebsiteVisitsChart.vue";
import NewRegistersChart from "../../components/Dashboard/Analytics/NewRegistersChart.vue";
import RealtimeActiveUsersChart from "../../components/Dashboard/Analytics/RealtimeActiveUsersChart.vue";
import BrowserUsedByUsers from "../../components/Dashboard/Analytics/BrowserUsedByUsers.vue";
import BrowserUsedByUsersChart from "../../components/Dashboard/Analytics/BrowserUsedByUsersChart.vue";
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
    WebsiteVisitsChart,
    NewRegistersChart,
    RealtimeActiveUsersChart,
    BrowserUsedByUsers,
    BrowserUsedByUsersChart,
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
