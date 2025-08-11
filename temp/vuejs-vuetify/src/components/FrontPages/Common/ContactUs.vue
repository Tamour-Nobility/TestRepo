<template>
  <div class="contact-area pt-150">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="contact-image border-radius">
            <v-img
              src="@/assets/images/front-pages/contact.jpg"
              class="border-radius"
              alt="contact-image"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="contact-content">
            <div class="section-title">
              <div class="sub-title d-inline-block position-relative">
                <span class="d-inline-block position-relative text-purple">
                  Contact Us
                </span>
              </div>
              <h2 class="mb-0">
                How Can We Help? We Love to Hear From You. Send Us a Message!
              </h2>
            </div>
            <form>
              <div class="trezo-form-group">
                <v-label class="main-label d-block fw-medium text-black">
                  Full Name
                </v-label>
                <v-text-field label="Your full name"> </v-text-field>
              </div>
              <div class="trezo-form-group">
                <v-label class="main-label d-block fw-medium text-black">
                  Email Address
                </v-label>
                <v-text-field label="Your email address"> </v-text-field>
              </div>
              <div class="trezo-form-group">
                <v-label class="main-label d-block fw-medium text-black">
                  Phone Number
                </v-label>
                <v-text-field label="Your phone number"> </v-text-field>
              </div>
              <div class="trezo-form-group">
                <v-label class="main-label d-block fw-medium text-black">
                  Message
                </v-label>
                <v-textarea label="Write your message..."> </v-textarea>
              </div>
              <button type="button">
                <i class="material-symbols-outlined"> autorenew </i>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style lang="scss" scoped>
.contact-image {
  padding: 30px 20px;
  margin-right: 52px;
  background: rgba(255, 255, 255, 0.31);
  backdrop-filter: blur(5.099999904632568px);
  border: 1px solid rgba(255, 255, 255, 0.13);
}
.contact-content {
  .section-title {
    max-width: 100%;
    margin-bottom: 40px;
  }
  .form-group {
    margin-bottom: 25px;

    .v-label {
      margin-bottom: 12px;
    }
  }
  button {
    width: 100%;
    height: auto;
    min-width: auto;
    padding: 12px 25px;
    border-radius: 7px;
    color: var(--whiteColor);
    background-color: var(--primaryColor);
    font: {
      size: 16px;
      weight: 500;
    }
  }
  form {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        margin-right: 5px;
      }
    }
  }
}
.trezo-form-group {
  .v-field--center-affix {
    .v-label {
      &.v-field-label {
        left: 0 !important;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .contact-image {
    padding: 15px;
    margin-right: 0;
  }
  .contact-content {
    margin-top: 30px;

    .section-title {
      margin-bottom: 25px;
    }
    .trezo-form-group {
      margin-bottom: 20px;

      .v-label {
        margin-bottom: 10px;
      }
    }
    form {
      button {
        i {
          font-size: 20px;
        }
      }
    }
    button {
      font-size: 14px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-image {
    padding: 20px;
    margin-right: 0;
  }
  .contact-content {
    margin-top: 35px;

    .section-title {
      max-width: 540px;
      margin-bottom: 30px;
    }
    button {
      font-size: 15px;
    }
    form {
      button {
        i {
          font-size: 22px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .contact-image {
    padding: 25px 20px;
    margin-right: 0;
  }
  .contact-content {
    .section-title {
      margin-bottom: 35px;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .contact-image {
    margin-right: 15px;
  }
}
</style>
