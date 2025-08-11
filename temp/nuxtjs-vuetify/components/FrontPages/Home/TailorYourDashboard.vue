<template>
  <div class="widgets-area pb-150">
    <div class="container position-relative z-1">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="widgets-image position-relative">
            <div class="image">
              <v-img
                src="~/assets/images/front-pages/order-summary.png"
                alt="order-summary-image"
              />
            </div>
            <div class="image2">
              <v-img
                src="~/assets/images/front-pages/courses-sales.jpg"
                alt="courses-sales-image"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="widgets-content">
            <h2>
              Tailor Your Dashboard: Unleash the Power of Customizable Widgets
            </h2>
            <ul class="mb-0 features-list list-unstyled">
              <li class="position-relative">
                <i class="material-symbols-outlined"> done_outline </i>
                <h3 class="fw-semibold">Tailored Display</h3>
                <p>
                  Easily arrange, resize, and configure widgets to showcase the
                  data most relevant to your workflow.
                </p>
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> done_outline </i>
                <h3 class="fw-semibold">Personalized Insights</h3>
                <p>
                  Customize widget content and visualization options to match
                  your specific preferences and priorities.
                </p>
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> done_outline </i>
                <h3 class="fw-semibold">Flexibility and Versatility</h3>
                <p>
                  Adapt widgets to evolving business needs by adjusting layouts,
                  styles, and data sources with ease.
                </p>
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> done_outline </i>
                <h3 class="fw-semibold">Seamless Integration</h3>
                <p>
                  Integrate widgets seamlessly with other dashboard components
                  and external systems for a cohesive user experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shape1">
        <v-img src="~/assets/images/front-pages/shape1.png" alt="shape1" />
      </div>
      <div class="shape2">
        <v-img src="~/assets/images/front-pages/shape2.png" alt="shape2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TailorYourDashboard",
});
</script>

<style lang="scss" scoped>
.widgets-area {
  .widgets-image {
    .image {
      max-width: 509px;
      padding: 27px 34px;
      border-radius: 7px;
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(5.400000095367432px);
      border: 1px solid rgba(255, 255, 255, 0.1);

      .v-img {
        margin-bottom: -4px;
      }
    }
    .image2 {
      top: 50%;
      right: 30px;
      max-width: 219px;
      margin-top: -17px;
      position: absolute;
      border-radius: 4.294px;
      transform: translateY(-50%);
      filter: drop-shadow(0px 6px 13px rgba(125, 125, 125, 0.1))
        drop-shadow(0px 24px 24px rgba(125, 125, 125, 0.09))
        drop-shadow(0px 54px 33px rgba(125, 125, 125, 0.05))
        drop-shadow(0px 96px 39px rgba(125, 125, 125, 0.01))
        drop-shadow(0px 151px 42px rgba(125, 125, 125, 0));

      .v-img {
        border-radius: 4.294px;
        animation: upDownMover 1s infinite alternate;
      }
    }
  }
  .widgets-content {
    h2 {
      font-size: 36px;
      margin-bottom: 15px;
      letter-spacing: -1px;
    }
    .features-list {
      padding: 0 0 0 18px;
      margin-top: 65px;

      li {
        padding-left: 30px;
        margin-bottom: 32px;

        i {
          color: var(--primaryColor);
          position: absolute;
          font-size: 20px;
          left: 0;
          top: 0;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        p {
          max-width: 458px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .shape1 {
    top: -60px;
    left: 65px;
    z-index: -1;
    position: absolute;
    filter: blur(150px);
  }
  .shape2 {
    right: 20px;
    z-index: -1;
    bottom: -30px;
    position: absolute;
    filter: blur(125px);
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .widgets-area {
    .widgets-image {
      .image {
        max-width: 100%;
        padding: 15px;
      }
      .image2 {
        right: 0;
        max-width: 120px;
        margin-top: -15px;
      }
    }
    .widgets-content {
      margin-top: 30px;

      h2 {
        font-size: 24px;
        letter-spacing: -0.5px;
      }
      .features-list {
        padding-left: 0;
        margin-top: 25px;

        li {
          padding-left: 25px;
          margin-bottom: 25px;

          i {
            font-size: 17px;
          }
          h3 {
            font-size: 15px;
            margin-bottom: 8px;
          }
          p {
            max-width: 100%;
          }
        }
      }
    }
    .shape1 {
      left: 0;
      right: 0;
      text-align: center;
      margin: {
        left: auto;
        right: auto;
      }
    }
    .shape2 {
      left: 0;
      right: 0;
      text-align: center;
      margin: {
        left: auto;
        right: auto;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .widgets-area {
    .widgets-image {
      .image {
        padding: 25px;
        max-width: 92%;
      }
      .image2 {
        max-width: 180px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .widgets-area {
    .widgets-image {
      .image {
        max-width: 600px;
        padding: 25px;
      }
      .image2 {
        right: 0;
        max-width: 200px;
      }
    }
    .widgets-content {
      margin-top: 35px;

      h2 {
        font-size: 28px;
        letter-spacing: -0.6px;
      }
      .features-list {
        padding-left: 0;
        margin-top: 30px;

        li {
          padding-left: 28px;
          margin-bottom: 25px;

          i {
            font-size: 18px;
          }
          h3 {
            font-size: 16px;
          }
        }
      }
    }
    .shape1 {
      left: 0;
      right: 0;
      text-align: center;
      margin: {
        left: auto;
        right: auto;
      }
    }
    .shape2 {
      left: 0;
      right: 0;
      text-align: center;
      margin: {
        left: auto;
        right: auto;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .widgets-area {
    .widgets-image {
      .image {
        max-width: 400px;
        padding: 30px;
      }
      .image2 {
        right: 15px;
        max-width: 200px;
      }
    }
    .widgets-content {
      h2 {
        font-size: 34px;
        letter-spacing: -0.8px;
      }
      .features-list {
        padding-left: 0;
        margin-top: 35px;

        li {
          margin-bottom: 25px;

          i {
            font-size: 20px;
          }
          h3 {
            font-size: 17px;
          }
          p {
            max-width: 100%;
          }
        }
      }
    }
    .shape1 {
      left: 0;
    }
    .shape2 {
      right: 0;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .widgets-area {
    .widgets-image {
      .image {
        max-width: 460px;
      }
      .image2 {
        right: 15px;
      }
    }
    .widgets-content {
      .features-list {
        padding-left: 15px;
        margin-top: 45px;

        li {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
