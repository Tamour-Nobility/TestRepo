<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <OthersMyProfileWelcomeBack />
      </div>
      <div class="col-lg-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <OthersMyProfileTotalProjects />
          </div>
          <div class="col-lg-4 col-sm-4">
            <OthersMyProfileTotalOrders />
          </div>
          <div class="col-lg-4 col-sm-4">
            <OthersMyProfileTotalRevenue />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-3">
        <div class="row">
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <OthersMyProfileIntro />
          </div>
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <OthersMyProfileInformation />
          </div>
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <OthersMyProfileAdditionalInformation />
          </div>
        </div>
      </div>
      <div class="col-xxl-9">
        <OthersMyProfileProjectsAnalysisChart />

        <OthersMyProfileToDoList />

        <OthersMyProfileRecentActivity />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyProfile",
});
</script>
