<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Dismissing BG Alerts</h5>
    </div>
    <div class="example-alerts">
      <v-alert
        class="alert alert-bg-trezo d-flex justify-space-between align-items-center"
        v-model="alert"
        closable
        close-label="Close Alert"
      >
        A simple trezo alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-primary d-flex justify-space-between align-items-center"
        v-model="alert2"
        closable
        close-label="Close Alert"
      >
        A simple primary alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-secondary d-flex justify-space-between align-items-center"
        v-model="alert3"
        closable
        close-label="Close Alert"
      >
        A simple secondary alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-success d-flex justify-space-between align-items-center"
        v-model="alert4"
        closable
        close-label="Close Alert"
      >
        A simple success alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-danger d-flex justify-space-between align-items-center"
        v-model="alert5"
        closable
        close-label="Close Alert"
      >
        A simple danger alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-warning d-flex justify-space-between align-items-center"
        v-model="alert6"
        closable
        close-label="Close Alert"
      >
        A simple warning alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-info d-flex justify-space-between align-items-center"
        v-model="alert7"
        closable
        close-label="Close Alert"
      >
        A simple info alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-light d-flex justify-space-between align-items-center"
        v-model="alert8"
        closable
        close-label="Close Alert"
      >
        A simple light alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-bg-dark d-flex justify-space-between align-items-center"
        v-model="alert9"
        closable
        close-label="Close Alert"
      >
        A simple dark alert—check it out!
      </v-alert>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "DismissingBgAlerts",
  data: () => ({
    alert: true,
    alert2: true,
    alert3: true,
    alert4: true,
    alert5: true,
    alert6: true,
    alert7: true,
    alert8: true,
    alert9: true,
  }),
};
</script>
