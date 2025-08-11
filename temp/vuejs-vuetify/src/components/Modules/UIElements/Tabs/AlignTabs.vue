<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Align Tabs</h5>
    </div>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="center"
      class="mb-30"
    >
      <v-tab :value="1">Landscape</v-tab>
      <v-tab :value="2">City</v-tab>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <!-- Item{{ n }} -->
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <!-- <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img> -->
              <div class="p-15 mb-15 bg-grey">Item{{ i }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="end"
      class="mb-30"
    >
      <v-tab :value="1">Landscape</v-tab>
      <v-tab :value="2">City</v-tab>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <!-- Item{{ n }} -->
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <!-- <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img> -->
              <div class="p-15 mb-15 bg-grey">Item{{ i }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlignTabs",
  data: () => ({
    tab: null,
  }),
});
</script>

<style lang="scss" scoped>
.v-card-header {
  margin-bottom: 0 !important;
}
</style>
