<template>
  <div class="row">
    <div class="col-md-6">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Advanced Form</h5>
        </div>
        <div class="advanced-form">
          <form>
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Email Address
              </v-label>
              <v-text-field
                :rules="[rules.required]"
                label="Enter email address"
                clearable
              ></v-text-field>
            </div>
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Your Password
              </v-label>
              <v-text-field
                :rules1="[rules1.required]"
                label="Enter your password"
                clearable
              ></v-text-field>
            </div>
            <div class="info d-flex justify-content-between align-items-center">
              <v-checkbox label="Remember me"> </v-checkbox>
              <RouterLink
                to="/authentication/forgot-password"
                class="d-inline-block text-primary"
              >
                Forgot Password?
              </RouterLink>
            </div>
            <button class="btn">Sign In</button>
            <div class="signin-with-socials text-center">
              <div class="or z-1 position-relative">
                <span class="d-inline-block"> or sign in with </span>
              </div>
              <div class="socials">
                <button type="button" class="facebook">
                  <i class="ri-facebook-fill"></i>
                </button>
                <button type="button" class="twitter">
                  <i class="ri-twitter-x-fill"></i>
                </button>
                <button type="button" class="google">
                  <i class="ri-google-fill"></i>
                </button>
                <button type="button" class="linkedin">
                  <i class="ri-linkedin-fill"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvancedForm",
  data: () => ({
    rules: {
      required: (value) => !!value || "Email is required",
    },
    rules1: {
      required: (value) => !!value || "Password is required",
    },
  }),
};
</script>

<style lang="scss" scoped>
.advanced-form {
  form {
    .form-group {
      .error {
        font-size: 13px;
        margin-top: 7px;
      }
    }
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
    .signin-with-socials {
      margin-top: 25px;

      .or {
        span {
          background-color: var(--whiteColor);
          padding: {
            left: 25px;
            right: 25px;
          }
        }
        &::before {
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          content: "";
          z-index: -1;
          margin-top: 2px;
          position: absolute;
          transform: translateY(-50%);
          background: var(--borderColor);
        }
      }
      .socials {
        margin-top: 15px;

        button {
          padding: 0;
          width: 30px;
          height: 30px;
          min-width: auto;
          border-radius: 50%;
          display: inline-block;
          color: var(--whiteColor);
          background-color: var(--primaryColor);
          margin: {
            left: 5px;
            right: 5px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          &.facebook {
            background-color: #3a559f;
          }
          &.twitter {
            background-color: rgba(15, 20, 25, 1);
          }
          &.google {
            background-color: #e02f2f;
          }
          &.linkedin {
            background-color: #007ab9;
          }
        }
      }
    }
    .v-checkbox.v-input {
      margin: -10px -30px -32px -10px;
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
  .advanced-form {
    form {
      .btn {
        padding: 12px 25px;
        margin-top: 17px;
        font-size: 13px;
      }
      .signin-with-socials {
        margin-top: 17px;

        .or {
          span {
            padding: {
              left: 15px;
              right: 15px;
            }
          }
        }
        .socials {
          margin-top: 13px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .advanced-form {
    form {
      .btn {
        margin-top: 20px;
      }
      .signin-with-socials {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .advanced-form {
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
  .advanced-form {
    form {
      .btn {
        font-size: 15px;
      }
    }
  }
}
</style>
