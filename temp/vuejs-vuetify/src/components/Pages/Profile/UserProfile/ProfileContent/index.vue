<template>
  <v-row>
    <v-col cols="12" lg="8">
      <AboutMe />
    </v-col>
    <v-col cols="12" lg="4">
      <Followers />
    </v-col>
    <v-col cols="12" lg="12">
      <MyProjects />
    </v-col>
  </v-row>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import Followers from "./Followers.vue";
import MyProjects from "./MyProjects.vue";

export default {
  name: "ProfileContent",
  components: {
    AboutMe,
    Followers,
    MyProjects,
  },
};
</script>
