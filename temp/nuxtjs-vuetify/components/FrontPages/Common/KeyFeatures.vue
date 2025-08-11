<template>
  <div class="key-features-area position-relative z-1 pt-150 pb-120">
    <div class="container">
      <div class="section-title text-center ml-auto mr-auto">
        <div class="sub-title d-inline-block position-relative">
          <span class="d-inline-block position-relative text-purple">
            Key Features
          </span>
        </div>
        <h2 class="mb-0">
          Discover What Sets Us Apart: Highlighted Dashboard Functions
        </h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-6 col-lg-4">
          <div class="single-key-feature-box">
            <div class="icon d-flex align-items-center justify-content-center">
              <v-img
                src="~/assets/images/front-pages/stacks.svg"
                alt="stacks"
              />
            </div>
            <h3 class="fw-semibold">Real-Time Updates</h3>
            <p>
              Provide real-time updates and notifications to keep users informed
              about important events, changes, or updates within the system.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="single-key-feature-box">
            <div class="icon d-flex align-items-center justify-content-center">
              <v-img src="~/assets/images/front-pages/code.svg" alt="code" />
            </div>
            <h3 class="fw-semibold">Quality Code</h3>
            <p>
              These features include adherence to coding standards, robust error
              handling mechanisms, efficient algorithms, scalability,
              maintainability, and readability.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="single-key-feature-box">
            <div class="icon d-flex align-items-center justify-content-center">
              <v-img
                src="~/assets/images/front-pages/support_agent.svg"
                alt="support_agent"
              />
            </div>
            <h3 class="fw-semibold">24/7 Customer Support</h3>
            <p>
              Our 24/7 customer support is dedicated to providing
              round-the-clock assistance, ensuring that help is always available
              whenever our customers need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KeyFeatures",
});
</script>

<style lang="scss" scoped>
.single-key-feature-box {
  margin-bottom: 30px;

  .icon {
    width: 85px;
    height: 85px;
    border-radius: 17px;
    margin-bottom: 22px;
    background-color: #dde4ff;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 13px;
  }
  p {
    max-width: 375px;
  }
}
.col-lg-4 {
  &:nth-child(2) {
    .single-key-feature-box {
      .icon {
        background-color: #f3e8ff;
      }
    }
  }
  &:nth-child(3) {
    .single-key-feature-box {
      .icon {
        background-color: #ffe8d4;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .single-key-feature-box {
    text-align: center;

    .icon {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      margin: {
        left: auto;
        right: auto;
        bottom: 20px;
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      max-width: 100%;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-key-feature-box {
    text-align: center;

    .icon {
      margin: {
        left: auto;
        right: auto;
        bottom: 20px;
      }
    }
    h3 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    p {
      max-width: 100%;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-key-feature-box {
    h3 {
      font-size: 22px;
      margin-bottom: 12px;
    }
    p {
      max-width: 100%;
    }
  }
}
</style>
