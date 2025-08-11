<template>
  <div>
    <ProfileCover />

    <ProfileMenu />

    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-7">
        <AboutMe />
      </div>
      <div class="col-lg-4 col-md-5">
        <Followers />
      </div>
    </div>

    <MyProjects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileCover from "../ProfileCover.vue";
import ProfileMenu from "../ProfileMenu.vue";
import AboutMe from "./AboutMe.vue";
import Followers from "./Followers.vue";
import MyProjects from "./MyProjects.vue";

export default defineComponent({
  name: "UserProfile",
  components: {
    ProfileCover,
    ProfileMenu,
    AboutMe,
    Followers,
    MyProjects,
  },
});
</script>
