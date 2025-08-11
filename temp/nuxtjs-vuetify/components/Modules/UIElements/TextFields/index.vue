<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Simple Text Field</h5>
        </div>
        <v-text-field label="Label"></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Text Field Placeholders</h5>
        </div>
        <v-text-field
          label="Email address"
          placeholder="johndoe@gmail.com"
          type="email"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Hints & Messages Text Field</h5>
        </div>
        <v-text-field
          label="Password"
          type="input"
          hint="Enter your password to access this website"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Clearable Text Field</h5>
        </div>
        <ModulesUIElementsTextFieldsClearableTextField />
      </v-card>

      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Forms Text Field</h5>
        </div>
        <ModulesUIElementsTextFieldsFormsTextField />
      </v-card>
    </v-col>
    <v-col cols="12" lg="8" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Icons Text Field</h5>
        </div>
        <ModulesUIElementsTextFieldsIconsTextField />
      </v-card>
    </v-col>
  </v-row>
  <ModulesUIElementsTextFieldsSimpleTextField />
</template>

<script>
export default {
  name: "TextFields",
};
</script>
