<template>
  <v-card
    class="welcome-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="welcome-card-content">
      <div class="content">
        <h5 class="fw-semibold text-white">
          Welcome Back, <span>Olivia!</span>
        </h5>
        <p class="text-white">Your progress this week is Awesome.</p>
        <div class="extra-space"></div>
        <div class="d-md-flex align-items-center">
          <div class="item d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-200 border-radius d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> airplay </i>
            </div>
            <div>
              <span class="title d-block fw-semibold text-white"> 75h </span>
              <span class="d-block"> Hours Spent </span>
            </div>
          </div>
          <div class="item d-flex align-items-center">
            <div
              class="icon text-success bg-success-100 border-radius d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> local_library </i>
            </div>
            <div>
              <span class="title d-block fw-semibold text-white"> 15 </span>
              <span class="d-block"> Course Completed </span>
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <v-img
          src="@/assets/images/online-learning.gif"
          alt="online-learning-image"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "WelcomeDashboard",
};
</script>

<style lang="scss" scoped>
.welcome-card {
  background: linear-gradient(81deg, #605dff 3.39%, #9747ff 93.3%);

  .welcome-card-content {
    padding-right: 130px;
    position: relative;

    .content {
      padding: {
        top: 25px;
        bottom: 25px;
      }
      h5 {
        margin-bottom: 2px;

        span {
          color: #ffe8d4;
        }
      }
      .extra-space {
        margin: {
          top: 35px;
          bottom: 35px;
        }
      }
      .item {
        margin-right: 27px;

        .icon {
          width: 42px;
          height: 42px;
          margin-right: 12px;
        }
        .title {
          font-size: 16px;
        }
        span {
          color: #d5d9e2;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .image {
      top: 50%;
      right: -35px;
      max-width: 285px;
      margin-top: -8px;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 0;

      .content {
        padding: {
          top: 0;
          bottom: 0;
        }
        h5 {
          margin-bottom: 4px;
        }
        .extra-space {
          margin: {
            top: 15px;
            bottom: 17px;
          }
        }
        .item {
          margin: {
            right: 0;
            bottom: 20px;
          }
          .icon {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
          .title {
            font-size: 14px;
            margin-bottom: 5px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .image {
        top: 0;
        right: 0;
        margin-top: 0;
        max-width: 100%;
        position: relative;
        transform: translateY(0);
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 185px;

      .image {
        top: 50%;
        right: -20px;
        max-width: 280px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 220px;

      .content {
        padding: {
          top: 20px;
          bottom: 20px;
        }
        .extra-space {
          margin: {
            top: 22px;
            bottom: 22px;
          }
        }
        .item {
          margin-right: 25px;

          .title {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 250px;

      .image {
        right: -25px;
        max-width: 300px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .welcome-card {
    .welcome-card-content {
      .image {
        right: -25px;
        max-width: 300px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 250px;

      .content {
        .item {
          margin-right: 35px;
        }
      }
      .image {
        right: -15px;
      }
    }
  }
}
</style>
