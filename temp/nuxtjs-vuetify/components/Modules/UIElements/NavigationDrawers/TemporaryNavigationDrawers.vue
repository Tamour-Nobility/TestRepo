<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Rail Variant Navigation Drawers</h5>
    </div>
    <v-layout style="position: relative; border: 1px solid #eee">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        style="position: absolute"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <div class="d-flex justify-center align-center h-100">
          <v-btn color="primary" @click.stop="drawer = !drawer"> Toggle </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "TemporaryNavigationDrawers",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
