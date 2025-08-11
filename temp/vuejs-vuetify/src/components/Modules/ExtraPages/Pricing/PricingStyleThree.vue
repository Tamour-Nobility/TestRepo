<template>
  <v-card
    class="pricing-style-3-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="pricing-card-content">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6">
          <div class="single-pricing-box text-center position-relative mb-25">
            <div class="title">
              <span class="d-inline-block"> Basic </span>
            </div>
            <div class="price text-black fw-medium lh-1">
              $29 <span class="text-body fw-normal">/ per month</span>
            </div>
            <p class="fw-medium">For individual user</p>
            <button type="button">
              <i class="material-symbols-outlined"> arrow_forward_ios </i>
              Buy Now
            </button>
            <ul class="features-list text-start p-0 mb-0 list-unstyled">
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Basic Dashboard
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
                Basic Reporting
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Email Integration
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Basic Support
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="single-pricing-box text-center position-relative mb-25">
            <div class="title">
              <span class="d-inline-block"> Standard </span>
            </div>
            <div class="price text-black fw-medium lh-1">
              $49 <span class="text-body fw-normal">/ per month</span>
            </div>
            <p class="fw-medium">For team of 10 users</p>
            <button type="button">
              <i class="material-symbols-outlined"> arrow_forward_ios </i>
              Buy Now
            </button>
            <ul class="features-list text-start p-0 mb-0 list-unstyled">
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
                File Storage (10GB)
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Advanced Reporting
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Email Integration
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Priority Support
              </li>
            </ul>
            <div class="popular">
              <v-img
                src="@/assets/images/icons/star-popular.svg"
                alt="popular-image"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="single-pricing-box text-center position-relative mb-25">
            <div class="title">
              <span class="d-inline-block"> Premium </span>
            </div>
            <div class="price text-black fw-medium lh-1">
              $79 <span class="text-body fw-normal">/ per month</span>
            </div>
            <p class="fw-medium">For team of 15 users</p>
            <button type="button">
              <i class="material-symbols-outlined"> arrow_forward_ios </i>
              Buy Now
            </button>
            <ul class="features-list text-start p-0 mb-0 list-unstyled">
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
                Email Integration
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                24/7 Premium Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "PricingStyleThree",
};
</script>

<style lang="scss" scoped>
.pricing-style-3-card {
  padding-top: 55px;

  .pricing-card-content {
    .single-pricing-box {
      padding: {
        left: 23px;
        right: 23px;
      }
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
          top: 17px;
          bottom: 17px;
        }
        span {
          font-size: 16px;
          letter-spacing: normal;
        }
      }
      button {
        width: 100%;
        height: auto;
        display: block;
        min-width: auto;
        margin-top: 20px;
        padding: 14px 25px;
        border-radius: 7px;
        color: var(--whiteColor);
        background-color: var(--primaryColor);
        display: inline-block;
        font: {
          size: 16px;
          weight: 500;
        }

        i {
          font-size: 16px;
        }
      }
      .features-list {
        margin-top: 28px;

        li {
          padding-left: 39px;
          margin-bottom: 21px;

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
      .popular {
        top: -20px;
        right: 10px;
        position: absolute;
      }
      &::before {
        top: 0;
        bottom: 0;
        content: "";
        right: -11px;
        position: absolute;
        border-right: 1px dashed var(--borderColor);
      }
    }
    .col-sm-6 {
      &:last-child {
        .single-pricing-box {
          &::before {
            display: none;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .pricing-style-3-card {
    padding-top: 17px;

    .pricing-card-content {
      .single-pricing-box {
        padding: {
          left: 0;
          right: 0;
          bottom: 25px;
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
            bottom: 13px;
          }
          span {
            font-size: 13px;
          }
        }
        button {
          padding: 13px 25px;
          margin-top: 17px;
          font-size: 13px;

          i {
            font-size: 15px;
          }
        }
        .features-list {
          margin-top: 20px;

          li {
            padding-left: 27px;
            margin-bottom: 15px;

            i {
              font-size: 20px;
            }
          }
        }
        .popular {
          top: -10px;
          right: 7px;
          width: 55px;
        }
        &::before {
          left: 0;
          right: 0;
          top: auto;
          bottom: 0;
          border-right-width: 0;
          border-bottom: 1px dashed var(--borderColor);
        }
      }
      .col-sm-6 {
        &:last-child {
          .single-pricing-box {
            margin-bottom: 0 !important;
            padding-bottom: 0;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .pricing-style-3-card {
    padding-top: 20px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .pricing-style-3-card {
    padding-top: 55px;

    .pricing-card-content {
      .single-pricing-box {
        padding: {
          left: 15px;
          right: 15px;
        }
        .price {
          font-size: 30px;
          letter-spacing: -0.5px;
          margin: {
            top: 15px;
            bottom: 15px;
          }
          span {
            font-size: 14px;
          }
        }
        button {
          font-size: 14px;
        }
        .features-list {
          margin-top: 25px;

          li {
            padding-left: 35px;
            margin-bottom: 17px;
          }
        }
      }
      .col-sm-6 {
        &:nth-child(2) {
          .single-pricing-box {
            &::before {
              display: none;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .pricing-style-3-card {
    .pricing-card-content {
      .single-pricing-box {
        padding: {
          left: 10px;
          right: 10px;
        }
        .price {
          margin-bottom: 15px;

          span {
            font-size: 15px;
          }
        }
        button {
          font-size: 15px;
        }
        .features-list {
          margin-top: 25px;

          li {
            padding-left: 35px;
            margin-bottom: 18px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .pricing-style-3-card {
    .pricing-card-content {
      .single-pricing-box {
        padding: {
          left: 10px;
          right: 10px;
        }
        .price {
          margin-bottom: 15px;
        }
        .features-list {
          margin-top: 25px;

          li {
            padding-left: 35px;
            margin-bottom: 18px;
          }
        }
      }
    }
  }
}
</style>
