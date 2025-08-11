<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps">
        <i class="material-symbols-outlined">edit</i>
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Deal</h5>
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
                <v-label class="d-block fw-medium text-black">
                  Company Name
                </v-label>
                <v-text-field
                  label="Enter company Name"
                  placeholder="E.g. Tech Solutions"
                  v-model="companyName"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Contact Person
                </v-label>
                <v-text-field
                  label="Enter contact person"
                  placeholder="E.g. Shawn Kennedy"
                  v-model="contactPerson"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Amount </v-label>
                <v-text-field
                  label="Enter amount"
                  placeholder="E.g. $65,000.00"
                  v-model="amount"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Stage </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Proposal',
                    'Presentation',
                    'Negotiation',
                    'Discovery',
                    'Acma Industries',
                    'Contract Sent',
                  ]"
                  v-model="stage"
                ></v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Close Date
                </v-label>
                <v-text-field
                  type="date"
                  class="date-input"
                  v-model="closeDate"
                ></v-text-field>
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
  name: "AddNewDeal",
  setup() {
    const companyName = ref("Default Company Name");
    const contactPerson = ref("Default Contact Person");
    const amount = ref("Default Amount");
    const stage = ref("Proposal");
    const closeDate = ref("2024-07-01");

    return {
      companyName,
      contactPerson,
      amount,
      stage,
      closeDate,
    };
  },
});
</script>
