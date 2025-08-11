<template>
  <v-row>
    <v-col cols="12" lg="6">
      <v-card
        class="pricing-style-1-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="pricing-card-content">
          <div class="row">
            <div class="col-sm-6">
              <div class="info position-relative">
                <div class="title">
                  <span class="d-inline-block"> Standard </span>
                </div>
                <div class="price text-black fw-medium lh-1">
                  $89<span class="fw-normal">.99</span>
                </div>
                <p class="fw-medium">For individual user</p>
                <button type="button">
                  <i class="material-symbols-outlined"> arrow_forward_ios </i>
                  Buy Now
                </button>
                <div class="popular">Most Popular</div>
              </div>
            </div>
            <div class="col-sm-6">
              <ul class="features-list mt-0 p-0 mb-0 list-unstyled">
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Advanced Dashboard
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Task Management
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  File Storage (5GB)
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Email Integration
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Mobile App Access
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Custom Branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card
        class="pricing-style-1-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="pricing-card-content">
          <div class="row">
            <div class="col-sm-6">
              <div class="info position-relative">
                <div class="title">
                  <span class="d-inline-block"> Premium </span>
                </div>
                <div class="price text-black fw-medium lh-1">
                  $119<span class="fw-normal">.99</span>
                </div>
                <p class="fw-medium">For team of 10 users</p>
                <button type="button">
                  <i class="material-symbols-outlined"> arrow_forward_ios </i>
                  Buy Now
                </button>
              </div>
            </div>
            <div class="col-sm-6">
              <ul class="features-list mt-0 p-0 mb-0 list-unstyled">
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Customizable Dashboard
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Task Management
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  File Storage (Unlimited)
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  Custom Reporting
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  24/7 Premium Support
                </li>
                <li class="position-relative">
                  <i class="material-symbols-outlined"> check </i>
                  White-label Solution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pricing",
};
</script>

<style lang="scss" scoped>
.pricing-style-1-card {
  .pricing-card-content {
    padding: 10px;
    max-width: 500px;

    .info {
      margin-right: 45px;
      border-right: 1px dashed var(--borderColor);

      .title {
        span {
          color: #8695aa;
          border-radius: 7px;
          padding: 8.5px 17.3px;
          border: 1px solid var(--borderColor);
        }
      }
      .price {
        font-size: 36px;
        letter-spacing: -1px;
        margin: {
          top: 14px;
          bottom: 24px;
        }
        span {
          font-size: 24px;
          letter-spacing: normal;
        }
      }
      .popular {
        top: -20px;
        right: -35px;
        font-size: 12px;
        border-radius: 7px;
        position: absolute;
        padding: 7.5px 14px;
        display: inline-block;
        color: var(--whiteColor);
        background-color: #ee3e08;
        transform: rotate(-10.156deg);
      }
      button {
        height: auto;
        min-width: auto;
        margin-top: 6px;
        padding: 14px 25px;
        border-radius: 7px;
        color: var(--whiteColor);
        background-color: var(--primaryColor);
        padding-left: 45px;
        display: inline-block;
        position: relative;

        font: {
          size: 16px;
          weight: 500;
        }

        i {
          left: 15px;
          top: 50%;
          font-size: 16px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
    .features-list {
      margin-left: -25px;

      li {
        padding-left: 38px;
        margin-bottom: 20px;

        i {
          left: 0;
          top: 50%;
          position: absolute;
          color: var(--successColor);
          transform: translateY(-50%);
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .pricing-style-1-card {
    .pricing-card-content {
      padding: 3px;
      max-width: 100%;

      .info {
        border-right-width: 0;
        margin: {
          right: 0;
          bottom: 17px;
        }
        .title {
          span {
            padding: 6px 15px;
          }
        }
        .price {
          font-size: 26px;
          letter-spacing: -0.5px;
          margin: {
            top: 15px;
            bottom: 11px;
          }
          span {
            font-size: 20px;
          }
        }
        .popular {
          top: 0;
          right: 0;
        }
        button {
          margin-top: -2px;
          font-size: 13px;
          padding: {
            top: 13px;
            bottom: 13px;
          }
          .mdc-button__label {
            padding-left: 23px;

            i {
              font-size: 15px;
            }
          }
        }
      }
      .features-list {
        margin-left: 0;

        li {
          padding-left: 27px;
          margin-bottom: 15px;

          i {
            font-size: 20px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .pricing-style-1-card {
    .pricing-card-content {
      padding: 5px;
      .info {
        button {
          margin-top: 0;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .pricing-style-1-card {
    .pricing-card-content {
      padding: 5px;
      max-width: 500px;

      .info {
        .price {
          font-size: 30px;
          letter-spacing: -0.5px;

          span {
            font-size: 22px;
          }
        }
        .popular {
          top: -10px;
        }
        button {
          font-size: 14px;
          margin-top: 0;
        }
      }
      .features-list {
        li {
          padding-left: 35px;
          margin-bottom: 17px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .pricing-style-1-card {
    .pricing-card-content {
      max-width: 408px;

      .info {
        margin-right: 20px;

        .price {
          margin-bottom: 15px;
        }
      }
      .features-list {
        margin-left: -20px;

        li {
          padding-left: 35px;
          margin-bottom: 18px;
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .pricing-style-1-card {
    .pricing-card-content {
      padding: 0;
      max-width: 392px;

      .info {
        margin-right: 19px;

        .price {
          margin-bottom: 15px;
        }
        .popular {
          top: -15px;
          right: -35px;
          font-size: 11px;
          padding: 7px 14px;
        }
      }
      .features-list {
        margin-left: -18px;

        li {
          padding-left: 35px;
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>
