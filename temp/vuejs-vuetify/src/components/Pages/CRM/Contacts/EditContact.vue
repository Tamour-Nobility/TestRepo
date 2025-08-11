<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" type="button">
        <i class="material-symbols-outlined">edit</i>
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Edit Contact</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <form>
          <div class="row">
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Name </v-label>
                <v-text-field
                  label="Enter name"
                  v-model="name"
                  placeholder="E.g. Olivia"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Email </v-label>
                <v-text-field
                  label="Enter email address"
                  v-model="email"
                  placeholder="E.g. olivia@trezo.com"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Phone </v-label>
                <v-text-field
                  label="Enter phone number"
                  v-model="phone"
                  placeholder="E.g. +023-244-1342"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Company
                </v-label>
                <v-select
                  label="Select"
                  v-model="company"
                  :items="[
                    'ABC Corporation',
                    'XYZ Ltd',
                    'Tech Solutions',
                    'Global Solutions',
                    'Acma Industries',
                    'Synergy Ltd',
                  ]"
                ></v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Status </v-label>
                <v-select
                  label="Select"
                  v-model="status"
                  :items="['Active', 'Deactive']"
                ></v-select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Image </v-label>
                <CommonFileUploader />
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Create
            </button>
          </div>
        </form>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EditContact",
  setup() {
    const name = ref("Olivia");
    const email = ref("olivia@trezo.com");
    const phone = ref("+023-244-1342");
    const company = ref("Tech Solutions");
    const status = ref("Active");

    return {
      name,
      email,
      phone,
      company,
      status,
    };
  },
});
</script>
