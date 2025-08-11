<template>
  <v-row>
    <v-col cols="12" lg="8">
      <PagesProfileUserProfileProfileContentAboutMe />
    </v-col>
    <v-col cols="12" lg="4">
      <PagesProfileUserProfileProfileContentFollowers />
    </v-col>
    <v-col cols="12" lg="12">
      <PagesProfileUserProfileProfileContentMyProjects />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProfileContent",
};
</script>
