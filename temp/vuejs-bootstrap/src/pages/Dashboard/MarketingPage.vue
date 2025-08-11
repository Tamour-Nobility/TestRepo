<template>
  <div class="main-content-container overflow-hidden">
    <StatusContent />
    <div class="row">
      <div class="col-lg-8">
        <PerformanceOverviewChart />
      </div>
      <div class="col-lg-4">
        <NewMobileApp />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <HighlightsContent />

        <ChannelsContent />
      </div>
      <div class="col-lg-8">
        <CampaignsContent />
        <div class="row">
          <div class="col-md-6">
            <ExternalLinks />
          </div>
          <div class="col-md-6">
            <InstagramCampaignsChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <NewMarketingTool />
      </div>
      <div class="col-lg-9 col-md-8">
        <InstagramSubscriberChart />
      </div>
    </div>
  </div>
  <CreateCampaignsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatusContent from "../../components/Dashboard/Marketing/StatusContent.vue";
import PerformanceOverviewChart from "../../components/Dashboard/Marketing/PerformanceOverviewChart.vue";
import NewMobileApp from "../../components/Dashboard/Marketing/NewMobileApp.vue";
import HighlightsContent from "../../components/Dashboard/Marketing/HighlightsContent.vue";
import ChannelsContent from "../../components/Dashboard/Marketing/ChannelsContent.vue";
import CampaignsContent from "../../components/Dashboard/Marketing/CampaignsContent.vue";
import CreateCampaignsModal from "../../components/Dashboard/Marketing/CreateCampaignsModal.vue";
import ExternalLinks from "../../components/Dashboard/Marketing/ExternalLinks.vue";
import InstagramCampaignsChart from "../../components/Dashboard/Marketing/InstagramCampaignsChart.vue";
import NewMarketingTool from "../../components/Dashboard/Marketing/NewMarketingTool.vue";
import InstagramSubscriberChart from "../../components/Dashboard/Marketing/InstagramSubscriberChart.vue";

export default defineComponent({
  name: "MarketingPage",
  components: {
    StatusContent,
    PerformanceOverviewChart,
    NewMobileApp,
    HighlightsContent,
    ChannelsContent,
    CampaignsContent,
    CreateCampaignsModal,
    ExternalLinks,
    InstagramCampaignsChart,
    NewMarketingTool,
    InstagramSubscriberChart,
  },
});
</script>
