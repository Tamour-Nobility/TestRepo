<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-btn">
        <i class="material-symbols-outlined">edit</i>
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Lead</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Name </v-label>
                <v-text-field
                  v-model="form.name"
                  label="Enter name"
                  placeholder="E.g. Olivia"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Email </v-label>
                <v-text-field
                  v-model="form.email"
                  label="Enter email address"
                  placeholder="E.g. olivia@trezo.com"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Phone </v-label>
                <v-text-field
                  v-model="form.phone"
                  label="Enter phone number"
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
                  v-model="form.company"
                  label="Select"
                  :items="[
                    'ABC Corporation',
                    'XYZ Ltd',
                    'Tech Solutions',
                    'Global Solutions',
                    'Acma Industries',
                    'Synergy Ltd',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Lead Source
                </v-label>
                <v-select
                  v-model="form.leadSource"
                  label="Select"
                  :items="['Organic', 'Social', 'Website', 'Paid', 'Others']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Status </v-label>
                <v-select
                  v-model="form.status"
                  label="Select"
                  :items="['Confirmed', 'In Progress', 'Pending', 'Rejected']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Image </v-label>
                <FileUploader v-model="form.image" />
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button type="submit" class="primary">
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
import { defineComponent, reactive } from "vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddNewLead",
  components: {
    FileUploader,
  },
  setup() {
    const form = reactive({
      name: "Olivia",
      email: "olivia@trezo.com",
      phone: "+023-244-1342",
      company: "ABC Corporation",
      leadSource: "Organic",
      status: "In Progress",
      image: null,
    });

    const handleSubmit = () => {
      console.log("Form submitted:", form);
    };

    return {
      form,
      handleSubmit,
    };
  },
});
</script>
