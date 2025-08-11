<template>
  <v-card
    class="mb-25 trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Textual Inputs</h5>
    </div>
    <form>
      <div class="row">
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="First Name"
              placeholder="Ex. Olivia"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="Last Name"
              placeholder="Ex. John"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="Email Address"
              placeholder="Ex. hello@trezo.com"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="Phone"
              placeholder="Ex. +098765432"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="Address"
              placeholder="Ex. Amsterdam"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="trezo-form-group">
            <v-text-field
              label="Country"
              placeholder="Ex. Netherlands"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="trezo-form-group">
            <v-select
              label="Town/City"
              :items="['New York', 'Amsterdam', 'Nalchity', 'Beijing']"
            >
            </v-select>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="trezo-form-group">
            <v-select
              label="State"
              :items="['Washington', 'Utah', 'Nebraska', 'Florida']"
            >
            </v-select>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="trezo-form-group">
            <v-text-field
              label="Zip Code"
              placeholder="Ex. 0986"
            ></v-text-field>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="trezo-form-group">
            <v-textarea
              label="Description"
              placeholder="Ex. It makes me feel..."
            ></v-textarea>
          </div>
        </div>
      </div>
    </form>
  </v-card>
  <ModulesFormsBasicElementsBasicForm />
</template>

<script>
export default {
  name: "BasicElements",
};
</script>
