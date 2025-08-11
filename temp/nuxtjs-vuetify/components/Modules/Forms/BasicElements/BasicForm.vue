<template>
  <div class="row">
    <div class="col-md-6">
      <v-card
        class="mb-25 trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Basic Form</h5>
        </div>
        <div class="basic-form">
          <form>
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black"> Name </v-label>
              <v-text-field label="Enter name"></v-text-field>
            </div>
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Email Address
              </v-label>
              <v-text-field label="Enter email address"></v-text-field>
            </div>
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black"> Password </v-label>
              <v-text-field label="Enter your password"></v-text-field>
            </div>
            <div class="info d-flex justify-content-between align-items-center">
              <v-checkbox label="Remember me"> </v-checkbox>
              <NuxtLink
                to="/authentication/forgot-password"
                class="d-inline-block text-primary"
              >
                Forgot Password?
              </NuxtLink>
            </div>
            <button class="btn" type="submit">Sign In</button>
          </form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicForm",
};
</script>

<style lang="scss" scoped>
.basic-form {
  form {
    .btn {
      width: 100%;
      height: auto;
      display: block;
      min-width: auto;
      margin-top: 25px;
      padding: 12px 25px;
      border-radius: 7px;
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      font: {
        size: 16px;
        weight: 500;
      }
    }
    .v-checkbox.v-input {
      margin: -18px -9px -40px -10px;
    }
    .v-input__details {
      display: none !important;
    }
    .v-selection-control__input {
      width: 0 !important;
      height: 0 !important;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .basic-form {
    form {
      .btn {
        padding: 12px 25px;
        margin-top: 17px;
        font-size: 13px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .basic-form {
    form {
      .btn {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .basic-form {
    form {
      .btn {
        font-size: 14px;
        padding: 12px 25px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .basic-form {
    form {
      .btn {
        font-size: 15px;
      }
    }
  }
}
</style>
