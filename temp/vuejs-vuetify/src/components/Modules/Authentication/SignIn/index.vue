<template>
  <div class="sign-in-area">
    <div class="trezo-form ml-auto mr-auto">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 order-2 order-lg-1">
          <div class="form-image">
            <v-img src="@/assets/images/sign-in.jpg" alt="sign-in-image" />
          </div>
        </div>
        <div class="col-lg-6 col-md-12 order-1 order-lg-2">
          <div class="form-content">
            <div class="logo">
              <v-img src="@/assets/images/logo-big.svg" alt="logo" />
              <v-img
                src="@/assets/images/white-logo-big.svg"
                class="d-none"
                alt="logo"
              />
            </div>
            <div class="title">
              <h1 class="fw-semibold">Welcome back to Trezo!</h1>
              <p class="fw-medium">
                Sign In with social account or enter your details
              </p>
            </div>
            <div
              class="with-socials d-flex align-items-center justify-content-between"
            >
              <div>
                <button type="button">
                  <v-img src="@/assets/images/icons/google.svg" alt="google" />
                </button>
              </div>
              <div>
                <button type="button">
                  <v-img
                    src="@/assets/images/icons/facebook2.svg"
                    alt="facebook"
                  />
                </button>
              </div>
              <div>
                <button type="button">
                  <v-img src="@/assets/images/icons/apple.svg" alt="apple" />
                </button>
              </div>
            </div>
            <form>
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Email Address
                </v-label>
                <v-text-field label="example@trezo.com"></v-text-field>
              </div>
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Password
                </v-label>
                <v-text-field label="Type password"></v-text-field>
              </div>
              <div class="forgot-password">
                <RouterLink
                  to="/authentication/forgot-password"
                  class="text-primary fw-semibold"
                >
                  Forgot Password?
                </RouterLink>
              </div>
              <button type="button">
                <i class="material-symbols-outlined"> login </i>
                Sign In
              </button>
              <p class="info">
                Don’t have an account.
                <RouterLink
                  to="/authentication/sign-up"
                  class="fw-semibold text-primary"
                >
                  Sign Up
                </RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
.sign-in-area {
  background-color: var(--whiteColor);
  padding: {
    top: 135px;
    bottom: 135px;
  }
  &.dark-theme {
    background-color: #0a0e19;
  }
  .trezo-form {
    max-width: 1255px;
    padding: {
      left: 12.5px;
      right: 12.5px;
    }
    .form-image {
      border-radius: 24px;
      margin-right: -25px;

      .v-img {
        border-radius: 24px;
        margin-bottom: -3px;
      }
    }
    .form-content {
      padding-left: 90px;

      .title {
        margin: {
          top: 23px;
          bottom: 23px;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 7px;
        }
        p {
          font-size: 16px;
          color: #445164;
        }
      }
      .with-socials {
        margin-bottom: 23px;

        div {
          flex-grow: 1;
          margin: {
            left: 6px;
            right: 6px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        button {
          width: 100%;
          height: auto;
          display: block;
          min-width: auto;
          padding: 10px 25px;
          border-radius: 8px;
          color: var(--blackColor);
          border: 1px solid #d6dae1;
          background: var(--whiteColor);
          box-shadow: 0px 4px 16px -2px rgba(27, 37, 51, 0.06);

          .v-responsive {
            justify-content: center !important;
          }
        }
      }
      form {
        .trezo-form-group {
          margin-bottom: 15px;

          .v-label {
            margin-bottom: 12px;
          }
        }
        .forgot-password {
          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
        button {
          width: 100%;
          height: auto;
          min-width: auto;
          margin-top: 24px;
          padding: 12px 25px;
          border-radius: 7px;
          color: var(--whiteColor);
          background-color: var(--primaryColor);
          display: flex;
          align-items: center;
          justify-content: center;

          & {
            font: {
              size: 16px;
              weight: 500;
            }
          }
          i {
            margin-right: 5px;
          }
        }
        .info {
          margin-top: 20px;

          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sign-in-area {
    padding: {
      top: 60px;
      bottom: 60px;
    }
    .trezo-form {
      max-width: 100%;

      .form-image {
        border-radius: 15px;
        margin: {
          right: 0;
          top: 25px;
        }
        img {
          border-radius: 15px;
        }
      }
      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 17px;
            bottom: 15px;
          }
          h1 {
            font-size: 22px;
          }
          p {
            font-size: 13px;
          }
        }
        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }
          button {
            padding: 8px 15px;
          }
        }
        form {
          .trezo-form-group {
            .v-label {
              margin-bottom: 10px;
            }
          }
          button {
            padding: 12px 25px;
            margin-top: 17px;
            font-size: 13px;
            i {
              font-size: 20px;
            }
          }
          .info {
            margin-top: 15px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sign-in-area {
    .trezo-form {
      max-width: 540px;

      .form-content {
        .title {
          margin: {
            top: 20px;
            bottom: 17px;
          }
        }
        form {
          button {
            margin-top: 20px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sign-in-area {
    padding: {
      top: 80px;
      bottom: 80px;
    }
    .trezo-form {
      max-width: 720px;

      .form-image {
        margin: {
          right: 0;
          top: 25px;
        }
      }
      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 20px;
            bottom: 20px;
          }
          h1 {
            font-size: 24px;
          }
          p {
            font-size: 14px;
          }
        }
        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }
        }
        form {
          button {
            font-size: 14px;
            margin-top: 20px;
            padding: 12px 25px;
            i {
              font-size: 22px;
            }
          }
          .info {
            margin-top: 15px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sign-in-area {
    padding: {
      top: 100px;
      bottom: 100px;
    }
    .trezo-form {
      max-width: 960px;

      .form-image {
        margin-right: 0;
      }
      .form-content {
        padding-left: 15px;

        .title {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 15px;
          }
        }
        form {
          button {
            margin-top: 20px;
            font-size: 15px;
          }
          .info {
            margin-top: 15px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sign-in-area {
    padding: {
      top: 120px;
      bottom: 120px;
    }
    .trezo-form {
      max-width: 1140px;

      .form-image {
        margin-right: 0;
      }
      .form-content {
        padding-left: 25px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .sign-in-area {
    .trezo-form {
      .form-image {
        margin-right: -45px;
      }
      .form-content {
        padding-left: 120px;
      }
    }
  }
}
</style>
