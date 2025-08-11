<template>
  <div class="change-password-card">
    <div class="row">
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Old Password
          </v-label>
          <v-text-field label="Enter old password"></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            New Password
          </v-label>
          <v-text-field label="Enter new password"></v-text-field>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Confirm Password
          </v-label>
          <v-text-field label="Enter confirm password"></v-text-field>
        </div>
      </div>
    </div>
    <div class="form-btn-box">
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> check </i>
        Change Password
      </button>
      <NuxtLink
        to="/authentication/forgot-password"
        class="p-0 h-auto fs-14 text-danger"
      >
        Forgot Password?
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",
});
</script>

<style lang="scss" scoped>
.fs-14 {
  margin-left: 3px;
  font: {
    size: 14px !important;
    weight: normal !important;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .fs-14 {
    margin-left: 0;
    font-size: 13px !important;
  }
}
</style>
