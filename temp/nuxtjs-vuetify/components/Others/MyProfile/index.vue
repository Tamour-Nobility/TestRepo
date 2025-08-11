<template>
  <div class="row">
    <div class="col-xxl-6">
      <OthersMyProfileWelcomeBack />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <OthersMyProfileTotalProjects />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <OthersMyProfileTotalOrders />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <OthersMyProfileTotalRevenue />
    </div>
    <div class="col-xxl-4 col-xxxl-3">
      <OthersMyProfileIntro />

      <OthersMyProfileInformation />

      <OthersMyProfileAdditionalInformation />
    </div>
    <div class="col-xxl-8 col-xxxl-9">
      <OthersMyProfileProjectsAnalysisChart />

      <OthersMyProfileToDoList />

      <OthersMyProfileRecentActivity />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
};
</script>
