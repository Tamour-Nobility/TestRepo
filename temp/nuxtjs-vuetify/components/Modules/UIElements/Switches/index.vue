<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Switches</h5>
        </div>
        <v-switch label="Slide me!" color="primary"></v-switch>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Switches Colors</h5>
        </div>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="red"
              color="red"
              value="red"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="red-darken-3"
              color="red-darken-3"
              value="red-darken-3"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="indigo"
              color="indigo"
              value="indigo"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="indigo-darken-3"
              color="indigo-darken-3"
              value="indigo-darken-3"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="orange"
              color="orange"
              value="orange"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="orange-darken-3"
              color="orange-darken-3"
              value="orange-darken-3"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="primary"
              color="primary"
              value="primary"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="secondary"
              color="secondary"
              value="secondary"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="success"
              color="success"
              value="success"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="info"
              color="info"
              value="info"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="warning"
              color="warning"
              value="warning"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="error"
              color="error"
              value="error"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Inset Switches</h5>
        </div>
        <v-switch
          v-model="model"
          hide-details
          inset
          :label="`Switch: ${model.toString()}`"
        ></v-switch>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Model as array Switches</h5>
        </div>
        <p>{{ people }}</p>
        <v-switch
          v-model="people"
          color="primary"
          label="John"
          value="John"
          hide-details
        ></v-switch>
        <v-switch
          v-model="people"
          color="primary"
          label="Jacob"
          value="Jacob"
          hide-details
        ></v-switch>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Switches",
  data() {
    return {
      ex11: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red-darken-3",
        "indigo-darken-3",
        "orange-darken-3",
      ],
      model: true,
      people: ["John"],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card-header {
  margin-bottom: 0;
}
</style>
