<template>
  <v-card
    class="overall-reviews-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="reviews-card-content">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="rating-item d-flex align-items-center position-relative">
            <div class="ratings d-flex align-items-center">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
            </div>
            <v-progress-linear
              bg-color="blue-lighten-2"
              color="blue-accent-3"
              model-value="85"
            ></v-progress-linear>
            <span class="number d-block"> 359 </span>
          </div>
          <div class="rating-item d-flex align-items-center position-relative">
            <div class="ratings d-flex align-items-center">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
            </div>
            <v-progress-linear
              bg-color="blue-lighten-2"
              color="blue-accent-3"
              model-value="50"
            ></v-progress-linear>
            <span class="number d-block"> 208 </span>
          </div>
          <div class="rating-item d-flex align-items-center position-relative">
            <div class="ratings d-flex align-items-center">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
            </div>
            <v-progress-linear
              bg-color="blue-lighten-2"
              color="blue-accent-3"
              model-value="35"
            ></v-progress-linear>
            <span class="number d-block"> 124 </span>
          </div>
          <div class="rating-item d-flex align-items-center position-relative">
            <div class="ratings d-flex align-items-center">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
            </div>
            <v-progress-linear
              bg-color="blue-lighten-2"
              color="blue-accent-3"
              model-value="15"
            ></v-progress-linear>
            <span class="number d-block"> 89 </span>
          </div>
          <div class="rating-item d-flex align-items-center position-relative">
            <div class="ratings d-flex align-items-center">
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
              <i class="ri-star-line"></i>
            </div>
            <v-progress-linear
              bg-color="blue-lighten-2"
              color="blue-accent-3"
              model-value="5"
            ></v-progress-linear>
            <span class="number d-block"> 4 </span>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="overall-reviews text-center">
            <h3 class="lh-1 fw-bold">4.28</h3>
            <div
              class="all-ratings d-flex align-items-center justify-content-center"
            >
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
            </div>
            <span class="d-block"> of 3250 Reviews </span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "OverallReviews",
};
</script>

<style lang="scss" scoped>
.overall-reviews-card {
  .reviews-card-content {
    .rating-item {
      margin-bottom: 25px;
      padding-right: 48px;

      .ratings {
        margin-right: 15px;

        i {
          font-size: 18px;
          color: #ee8336;
          margin-right: 5px;

          &.ri-star-line {
            color: #e2e8f0;
          }
        }
      }
      .number {
        right: 0;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .overall-reviews {
      h3 {
        margin-bottom: 15px;
        font-size: 40px;
      }
      .all-ratings {
        margin-bottom: 20px;

        i {
          font-size: 30px;
          color: #ee8336;
          margin: {
            left: 2px;
            right: 2px;
          }
          &.ri-star-line {
            color: #e2e8f0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .overall-reviews-card {
    .reviews-card-content {
      .rating-item {
        margin-bottom: 15px;
        padding-right: 35px;

        .ratings {
          margin-right: 7px;

          i {
            font-size: 15px;
            margin-right: 2px;
          }
        }
      }
      .overall-reviews {
        margin-top: 20px;

        h3 {
          margin-bottom: 10px;
          font-size: 25px;
        }
        .all-ratings {
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
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .overall-reviews-card {
    .reviews-card-content {
      .rating-item {
        margin-bottom: 20px;
      }
      .overall-reviews {
        margin-top: 25px;

        h3 {
          margin-bottom: 13px;
          font-size: 30px;
        }
        .all-ratings {
          margin-bottom: 15px;

          i {
            font-size: 22px;
          }
        }
      }
    }
  }
}
/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .overall-reviews-card {
    .reviews-card-content {
      .rating-item {
        margin-bottom: 20px;
      }
      .overall-reviews {
        h3 {
          font-size: 35px;
        }
        .all-ratings {
          i {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>
