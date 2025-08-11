<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Picker</h5>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h6>Date Picker</h6>
        <div class="trezo-form-group">
          <v-text-field type="date" class="date-input"> </v-text-field>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Time Picker 12h</h6>
        <div class="trezo-form-group">
          <v-text-field
            v-model="time"
            :active="menu2"
            :focus="menu2"
            label="Picker in menu"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
          >
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              activator="parent"
              transition="scale-transition"
            >
              <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
              ></v-time-picker>
            </v-menu>
          </v-text-field>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Time Picker 24h</h6>
        <div class="trezo-form-group">
          <v-text-field
            v-model="time"
            :active="modal2"
            :focused="modal2"
            label="Picker in dialog"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
          >
            <v-dialog v-model="modal2" activator="parent" width="auto">
              <v-time-picker v-if="modal2" v-model="time"></v-time-picker>
            </v-dialog>
          </v-text-field>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Picker",
  data() {
    return {
      time: null,
      menu2: false,
      modal2: false,
    };
  },
};
</script>
