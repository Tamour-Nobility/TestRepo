<template>
  <ProfileCard />
  <div class="tab-center">
    <v-tabs class="profile-tab" v-model="tab" bg-color="white">
      <v-tab value="one">Profile</v-tab>
      <v-tab value="two">Teams</v-tab>
      <v-tab value="three">Projects</v-tab>
    </v-tabs>
  </div>
  <v-card-text>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <ProfileContent />
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        <Teams />
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        <Projects />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileContent from "./ProfileContent/index.vue";
import Teams from "./Teams/index.vue";
import Projects from "./Projects/index.vue";

export default {
  name: "UserProfile",
  components: {
    ProfileCard,
    ProfileContent,
    Teams,
    Projects,
  },
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
