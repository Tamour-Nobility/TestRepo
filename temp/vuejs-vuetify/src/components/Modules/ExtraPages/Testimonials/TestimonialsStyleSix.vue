<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Testimonials Style - 6</h5>
    </div>
    <div class="row justify-content-center testimonials-list">
      <div class="col-lg-4 col-sm-6 col-md-6">
        <div class="testimonial-item p-0 text-center mb-25">
          <v-img
            src="@/assets/images/users/user9.jpg"
            width="100"
            alt="user-image"
            class="rounded-circle"
          />
          <h5>Jason Lee</h5>
          <span class="designation d-block"> Physician Assistant </span>
          <div class="ratings lh-1">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 col-md-6">
        <div class="testimonial-item p-0 text-center mb-25">
          <v-img
            src="@/assets/images/users/user10.jpg"
            width="100"
            alt="user-image"
            class="rounded-circle"
          />
          <h5>Ashley Davis</h5>
          <span class="designation d-block"> Data Scientist </span>
          <div class="ratings lh-1">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 col-md-6">
        <div class="testimonial-item p-0 text-center mb-25">
          <v-img
            src="@/assets/images/users/user11.jpg"
            width="100"
            alt="user-image"
            class="rounded-circle"
          />
          <h5>Alex Rocky</h5>
          <span class="designation d-block"> Marketing Manager </span>
          <div class="ratings lh-1">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-line"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TestimonialsStyleSix",
};
</script>

<style lang="scss" scoped>
.testimonial-item {
  padding: 25px;

  h5 {
    margin: {
      top: 13px;
      bottom: 9px;
    }
  }
  .ratings {
    color: #fe7a36;
    margin: {
      top: 18px;
      bottom: 15px;
    }
    i {
      font-size: 16px;
      margin: {
        left: 1px;
        right: 1px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .user {
    margin-bottom: 18px;

    .img {
      .v-img {
        margin-bottom: -3px;
      }
    }
    .title {
      margin-left: 15px;

      h5 {
        margin-top: 0;
      }
      .ratings {
        margin: {
          bottom: 0;
          top: 13px;
        }
      }
    }
  }
}
.testimonials-list {
  margin-bottom: -25px !important;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .testimonial-item {
    padding: 17px;

    h5 {
      margin: {
        top: 12px;
        bottom: 8px;
      }
    }
    .ratings {
      margin: {
        top: 15px;
        bottom: 13px;
      }
      i {
        font-size: 14px;
      }
    }
    .user {
      margin-bottom: 15px;

      .title {
        .ratings {
          margin: {
            top: 12px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .testimonial-item {
    padding: 20px;
  }
}
</style>
