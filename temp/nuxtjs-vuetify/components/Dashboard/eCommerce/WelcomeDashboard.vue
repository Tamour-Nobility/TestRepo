<template>
  <v-card
    class="welcome-card trezo-card mb-25 border-radius d-block bg-primary-500 border-0 shadow-none"
  >
    <div class="welcome-card-content">
      <div class="content">
        <h5 class="fw-semibold text-white">
          Good Morning, <span>Olivia!</span>
        </h5>
        <p>Here's what's happening with your store today.</p>
        <v-divider></v-divider>
        <div class="d-md-flex align-items-center">
          <div class="item d-flex align-items-center">
            <div
              class="icon text-primary bg-primary-50 border-radius d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined">shopping_bag</i>
            </div>
            <div>
              <span class="title d-block fw-semibold text-white">
                86 New orders
              </span>
              <span class="d-block"> Awaiting processing </span>
            </div>
          </div>
          <div class="item d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-50 border-radius d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> chat_error </i>
            </div>
            <div>
              <span class="title d-block fw-semibold text-white">
                35 Products
              </span>
              <span class="d-block"> Out of stock </span>
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <v-img src="~/assets/images/welcome.png" alt="welcome-image" />
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
  .welcome-card-content {
    position: relative;
    padding-right: 235px;
    .content {
      padding-top: 5px;
      padding-bottom: 5px;
      h5 {
        margin-bottom: 3px;
        span {
          color: #ffcea9;
        }
      }
      p {
        color: #d5d9e2;
      }
      .v-divider {
        margin-top: 30px;
        margin-bottom: 35px;
        color: #fff;
      }
      .item {
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
        .icon {
          width: 42px;
          height: 42px;
          margin-right: 12px;
        }
        .title {
          font-size: 16px;
          margin-bottom: 4px;
        }
        span {
          color: #d5d9e2;
          line-height: 1.2;
        }
      }
    }
    .image {
      top: 50%;
      right: 0;
      position: absolute;
      max-width: 208.04px;
      transform: translateY(-50%);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .welcome-card {
    .welcome-card-content {
      position: relative;
      padding-right: 0;
      .content {
        .item {
          margin-right: 0;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .v-divider {
          margin-top: 15px;
          margin-bottom: 17px;
        }
      }
      .image {
        top: 0;
        max-width: 100%;
        margin-top: 20px;
        position: relative;
        transform: translateY(0);
      }
    }
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .welcome-card {
    .welcome-card-content {
      padding-right: 185px;
      .image {
        top: 50%;
        max-width: 180px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
