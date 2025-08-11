<template>
  <div>
    <PagesProfileCover />

    <PagesProfileMenu />

    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-7">
        <PagesProfileUserProfileAboutMe />
      </div>
      <div class="col-lg-4 col-md-5">
        <PagesProfileUserProfileFollowers />
      </div>
    </div>

    <PagesProfileUserProfileMyProjects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
});
</script>
