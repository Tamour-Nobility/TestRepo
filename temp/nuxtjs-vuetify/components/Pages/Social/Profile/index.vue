<template>
  <div class="row">
    <div class="col-xxxl-9 col-md-12">
      <PagesSocialProfileCard />
      <div class="tab-center">
        <v-tabs class="profile-tab" v-model="tab" bg-color="white">
          <v-tab value="one">Timeline</v-tab>
          <v-tab value="two">About</v-tab>
          <v-tab value="three">Activity</v-tab>
        </v-tabs>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 order-2 order-lg-1">
          <PagesSocialProfileFriends />
        </div>
        <div class="col-lg-8 col-md-12 order-1 order-lg-2">
          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <PagesSocialProfileCreatePost />
                <PagesSocialProfileTimeline />
              </v-tabs-window-item>
              <v-tabs-window-item value="two">
                <PagesSocialProfileAbout />
              </v-tabs-window-item>
              <v-tabs-window-item value="three">
                <PagesSocialProfileActivity />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </div>
      </div>
    </div>
    <div class="col-xxxl-3 col-md-12">
      <div class="row">
        <div class="col-lg-6 col-xxxl-12">
          <PagesSocialProfileIntro />
        </div>
        <div class="col-lg-6 col-xxxl-12">
          <PagesSocialProfileFollowers />
        </div>
        <div class="col-lg-6 col-xxxl-12">
          <PagesSocialProfileFollowing />
        </div>
        <div class="col-lg-6 col-xxxl-12">
          <PagesSocialProfilePhotos />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped>
.tab-center {
  justify-content: center;
  display: flex;
}
.profile-tab {
  &.v-slide-group {
    background-color: transparent !important;
    margin-bottom: 25px;

    .v-slide-group__container {
      .v-slide-group__content {
        .v-btn {
          margin-right: 10px;
          height: 45px;
          padding: 0 15px;
          text-transform: initial;
          color: var(--primaryColor);
          font-weight: 500;
          letter-spacing: 0;
          background-color: transparent;
          border: 1px solid var(--primaryColor);
          border-radius: 5px;
          &:last-child {
            margin-right: 0;
          }
          &.v-tab-item--selected {
            color: var(--whiteColor);
            background-color: var(--primaryColor);
          }
        }
      }
    }
  }
}
.v-tabs--density-default {
  --v-tabs-height: auto !important;
}
.v-card-text {
  padding: 0;
}
</style>
