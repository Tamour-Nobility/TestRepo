<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-8">
        <DashboardAnalyticsOverviewChart />
        <div
          class="card border-0 p-4 bg-white rounded-3 mb-4 position-relative"
        >
          <div class="row">
            <div class="col-md-4 col-sm-6 pe-4">
              <DashboardAnalyticsWebsiteVisitsChart />
            </div>
            <div class="col-md-4 col-sm-6 border-start ps-lg-4">
              <DashboardAnalyticsNewRegistersChart />
            </div>
            <div class="col-lg-3 d-none d-md-block">
              <img
                src="~/assets/images/shape-2.png"
                class="position-absolute top-0 end-0 bottom-0 shape-2"
                alt="shape"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <DashboardAnalyticsRealtimeActiveUsersChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <DashboardAnalyticsBrowserUsedByUsers />
      </div>
      <div class="col-lg-5">
        <DashboardAnalyticsBrowserUsedByUsersChart />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-xl-4">
        <DashboardAnalyticsClicksChart />
      </div>
      <div class="col-md-6 col-xl-4">
        <DashboardAnalyticsImpressionsChart />
      </div>
      <div class="col-md-6 col-xl-4">
        <DashboardAnalyticsSessionsChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <DashboardAnalyticsSessionsByChannelChart />
      </div>
      <div class="col-lg-7">
        <DashboardAnalyticsClicksImpressionsByKeywords />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <DashboardAnalyticsTopBrowsingPagesToday />
      </div>
      <div class="col-lg-5">
        <DashboardAnalyticsUsersByCountry />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnalyticsPage",
});
</script>
