<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Dismissing Alerts</h5>
    </div>
    <div class="example-alerts">
      <v-alert
        class="alert alert-trezo d-flex justify-space-between align-items-center"
        v-model="alert"
        closable
        close-label="Close Alert"
      >
        A simple trezo alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-primary d-flex justify-space-between align-items-center"
        v-model="alert2"
        closable
        close-label="Close Alert"
      >
        A simple primary alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-secondary d-flex justify-space-between align-items-center"
        v-model="alert3"
        closable
        close-label="Close Alert"
      >
        A simple secondary alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-success d-flex justify-space-between align-items-center"
        v-model="alert4"
        closable
        close-label="Close Alert"
      >
        A simple success alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-danger d-flex justify-space-between align-items-center"
        v-model="alert5"
        closable
        close-label="Close Alert"
      >
        A simple danger alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-warning d-flex justify-space-between align-items-center"
        v-model="alert6"
        closable
        close-label="Close Alert"
      >
        A simple warning alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-info d-flex justify-space-between align-items-center"
        v-model="alert7"
        closable
        close-label="Close Alert"
      >
        A simple info alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-light d-flex justify-space-between align-items-center"
        v-model="alert8"
        closable
        close-label="Close Alert"
      >
        A simple light alert—check it out!
      </v-alert>
      <v-alert
        class="alert alert-dark d-flex justify-space-between align-items-center"
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
  name: "DismissingAlerts",
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
