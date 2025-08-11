<template>
  <v-row class="justify-content-center">
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn class="text-black">Basic</v-btn>
          <v-btn class="text-blue">trezo</v-btn>
          <v-btn class="text-indigo">Primary</v-btn>
          <v-btn class="text-pink">Accent</v-btn>
          <v-btn class="text-red">Warn</v-btn>
          <v-btn disabled>Disabled</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Raised Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn color="white">Basic</v-btn>
          <v-btn color="blue">Trezo</v-btn>
          <v-btn color="indigo">Primary</v-btn>
          <v-btn color="pink">Accent</v-btn>
          <v-btn color="red">Warn</v-btn>
          <v-btn disabled>Disabled</v-btn>
          <v-btn color="grey">Gray</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Rounded Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn class="text-black" rounded="0" size="x-large">Rounded 0</v-btn>
          <v-btn class="text-blue" rounded="xs" size="x-large"
            >Rounded xs</v-btn
          >
          <v-btn class="text-indigo" rounded="sm" size="x-large"
            >Rounded sm</v-btn
          >
          <v-btn class="text-pink" size="x-large">Button</v-btn>
          <v-btn class="text-red" rounded="lg" size="x-large">Rounded lg</v-btn>
          <v-btn class="text-purple" rounded="xl" size="x-large"
            >Rounded xl</v-btn
          >
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Elevation Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn color="white" size="x-large">Default Elevation (2)</v-btn>

          <v-btn color="blue" elevation="4" size="x-large">Elevation 4</v-btn>

          <v-btn color="indigo" elevation="8" size="x-large">Elevation 8</v-btn>

          <v-btn color="pink" elevation="12" size="x-large">Elevation 12</v-btn>

          <v-btn color="red" elevation="16" size="x-large">Elevation 16</v-btn>

          <v-btn color="green" elevation="20" size="x-large"
            >Elevation 20</v-btn
          >

          <v-btn color="grey" elevation="24" size="x-large">Elevation 24</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Ripple Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn> With Ripple </v-btn>
          <v-btn :ripple="false"> Without Ripple </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="mx-auto trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Loaders Buttons</h5>
        </div>
        <div class="example-buttons">
          <v-btn :loading="loading" @click="load"> Take Checkup </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Inside of bars Buttons</h5>
        </div>
        <v-toolbar>
          <template v-slot:prepend>
            <v-btn icon="mdi-arrow-left"></v-btn>
          </template>

          <v-btn icon="mdi-archive-plus-outline" class="ms-5"></v-btn>

          <v-btn icon="mdi-alert-circle-outline"></v-btn>

          <v-btn icon="mdi-delete-outline"></v-btn>

          <template v-if="$vuetify.display.smAndUp">
            <v-divider
              class="mx-3 align-self-center"
              length="24"
              thickness="2"
              vertical
            ></v-divider>

            <v-btn icon="mdi-folder-outline"></v-btn>

            <v-btn icon="mdi-tag-outline"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-toolbar>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Icon color Button</h5>
        </div>
        <div class="text-center">
          <v-btn
            prepend-icon="mdi-check-circle"
            class="mr-5"
            style="padding: 14px 35px; height: auto; width: auto"
          >
            <template v-slot:prepend>
              <v-icon color="success"></v-icon>
            </template>

            Button
          </v-btn>
          <v-btn
            append-icon="mdi-account-circle"
            style="padding: 14px 35px; height: auto; width: auto"
          >
            Button

            <template v-slot:append>
              <v-icon color="warning"></v-icon>
            </template>
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Custom loader Buttons</h5>
        </div>
        <div class="example-buttons">
          <div class="text-center">
            <v-btn :loading="loading" @click="loading = !loading">
              Custom loader

              <template v-slot:loader>
                <v-progress-linear indeterminate></v-progress-linear>
              </template>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Buttons",
  data: () => ({ loading: false }),

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    },
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
});
</script>

<style lang="scss" scoped>
.example-buttons {
  margin-bottom: -15px;

  button,
  a {
    margin: {
      right: 15px;
      bottom: 15px;
    }
    display: inline-block !important;
    padding: 14px 35px !important;
    // border-radius: 5px !important;
    // border: 1px solid rgba(0, 0, 0, 0.12);
    width: auto;
    height: auto;
    font: {
      size: var(--fontSize) !important;
      weight: 500 !important;
    }
    &.v-btn--icon {
      width: 56px;
      height: 56px;
      padding: 0 !important;
      color: var(--whiteColor);
    }
    &.trezo {
      color: var(--primaryColor);
    }
    &.fw-bold {
      font-weight: 700 !important;
    }
    &.fw-semibold {
      font-weight: 600 !important;
    }
    &.d-block {
      text-align: center !important;
      display: block !important;
      width: 100% !important;
    }
  }
}
</style>
