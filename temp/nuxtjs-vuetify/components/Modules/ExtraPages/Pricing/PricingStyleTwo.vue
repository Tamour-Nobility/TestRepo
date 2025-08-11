<template>
  <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-6">
      <v-card
        class="pricing-style-2-card text-center mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="pricing-card-content">
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
      </v-card>
    </div>
    <div class="col-lg-4 col-sm-6">
      <v-card
        class="pricing-style-2-card text-center mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="pricing-card-content">
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
              src="~/assets/images/icons/star-popular.svg"
              alt="popular-image"
            />
          </div>
        </div>
      </v-card>
    </div>
    <div class="col-lg-4 col-sm-6">
      <v-card
        class="pricing-style-2-card text-center mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="pricing-card-content">
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
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingStyleTwo",
};
</script>

<style lang="scss" scoped>
.pricing-style-2-card {
  padding: {
    left: 35px;
    right: 35px;
  }
  .pricing-card-content {
    position: relative;
    padding: {
      top: 10px;
      bottom: 10px;
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
      top: -9px;
      right: -17px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .pricing-style-2-card {
    padding: {
      left: 17px;
      right: 17px;
    }
    .pricing-card-content {
      padding: {
        top: 5px;
        bottom: 5px;
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
        top: -5px;
        right: -5px;
        width: 55px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .pricing-style-2-card {
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .pricing-style-2-card {
    padding: {
      left: 30px;
      right: 30px;
    }
    .pricing-card-content {
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
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .pricing-style-2-card {
    padding: {
      left: 30px;
      right: 30px;
    }
    .pricing-card-content {
      .price {
        margin-bottom: 15px;

        span {
          font-size: 15px;
        }
      }
      .features-list {
        margin-top: 25px;

        li {
          padding-left: 35px;
          margin-bottom: 18px;
        }
      }
      .popular {
        top: -8px;
        width: 55px;
        right: -15px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .pricing-style-2-card {
    .pricing-card-content {
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
      .popular {
        top: -8px;
        width: 55px;
        right: -15px;
      }
    }
  }
}
</style>
