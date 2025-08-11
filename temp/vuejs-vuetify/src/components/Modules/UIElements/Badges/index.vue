<template>
  <v-row>
    <v-col cols="12" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0 mr-5">Vuetify Material Badges</h5>
        </div>
        <v-badge class="d-inline-block"> Text with a badge </v-badge>
        <br />
        <br />
        <v-badge :content="4" class="d-inline-block">
          Text with large badge
        </v-badge>
        <br />
        <br />
        <div>
          Button with a badge on the Right
          <v-badge :content="15">
            <v-icon icon="$vuetify" size="x-large"></v-icon>
          </v-badge>
        </div>
        <br />
        <br />
        <div>
          <span class="cdk-visually-hidden">
            Example with a home icon with overlaid badge showing the number 15
          </span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Default Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge text-bg-trezo">trezo</span>
          <span class="badge text-bg-primary">Primary</span>
          <span class="badge text-bg-secondary">Secondary</span>
          <span class="badge text-bg-success">Success</span>
          <span class="badge text-bg-danger">Danger</span>
          <span class="badge text-bg-warning">Warning</span>
          <span class="badge text-bg-info">Info</span>
          <span class="badge text-bg-light">Light</span>
          <span class="badge text-bg-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Outline Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge text-outline-trezo">trezo</span>
          <span class="badge text-outline-primary">Primary</span>
          <span class="badge text-outline-secondary">Secondary</span>
          <span class="badge text-outline-success">Success</span>
          <span class="badge text-outline-danger">Danger</span>
          <span class="badge text-outline-warning">Warning</span>
          <span class="badge text-outline-info">Info</span>
          <span class="badge text-outline-light">Light</span>
          <span class="badge text-outline-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Soft Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge text-soft-trezo">trezo</span>
          <span class="badge text-soft-primary">Primary</span>
          <span class="badge text-soft-secondary">Secondary</span>
          <span class="badge text-soft-success">Success</span>
          <span class="badge text-soft-danger">Danger</span>
          <span class="badge text-soft-warning">Warning</span>
          <span class="badge text-soft-info">Info</span>
          <span class="badge text-soft-light">Light</span>
          <span class="badge text-soft-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Pill Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge rounded-pill text-bg-trezo">trezo</span>
          <span class="badge rounded-pill text-bg-primary">Primary</span>
          <span class="badge rounded-pill text-bg-secondary">Secondary</span>
          <span class="badge rounded-pill text-bg-success">Success</span>
          <span class="badge rounded-pill text-bg-danger">Danger</span>
          <span class="badge rounded-pill text-bg-warning">Warning</span>
          <span class="badge rounded-pill text-bg-info">Info</span>
          <span class="badge rounded-pill text-bg-light">Light</span>
          <span class="badge rounded-pill text-bg-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Soft Pill Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge rounded-pill text-soft-trezo">trezo</span>
          <span class="badge rounded-pill text-soft-primary">Primary</span>
          <span class="badge rounded-pill text-soft-secondary">Secondary</span>
          <span class="badge rounded-pill text-soft-success">Success</span>
          <span class="badge rounded-pill text-soft-danger">Danger</span>
          <span class="badge rounded-pill text-soft-warning">Warning</span>
          <span class="badge rounded-pill text-soft-info">Info</span>
          <span class="badge rounded-pill text-soft-light">Light</span>
          <span class="badge rounded-pill text-soft-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Outline Pill Badges</h5>
        </div>
        <div class="example-badges">
          <span class="badge rounded-pill text-outline-trezo">trezo</span>
          <span class="badge rounded-pill text-outline-primary">Primary</span>
          <span class="badge rounded-pill text-outline-secondary">
            Secondary
          </span>
          <span class="badge rounded-pill text-outline-success">Success</span>
          <span class="badge rounded-pill text-outline-danger">Danger</span>
          <span class="badge rounded-pill text-outline-warning">Warning</span>
          <span class="badge rounded-pill text-outline-info">Info</span>
          <span class="badge rounded-pill text-outline-light">Light</span>
          <span class="badge rounded-pill text-outline-dark">Dark</span>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Badges",
};
</script>

<style lang="scss" scoped>
.example-badges {
  margin-bottom: -15px;

  .badge {
    display: inline-block;
    margin: {
      right: 15px;
      bottom: 15px;
    }
  }
}
</style>
