<template>
  <v-card
    class="sales-welcome-card mb-25 border-radius d-block bg-primary border-0 shadow-none z-1"
  >
    <div class="sales-welcome-card-content">
      <div class="row">
        <div class="col-sm-7">
          <div class="content">
            <h3 class="text-white">Hi, <span>Dr. Olivia!</span></h3>
            <p class="text-white">Your schedule today</p>
            <div class="info d-flex align-items-center">
              <div class="item d-flex align-items-center">
                <div
                  class="icon text-orange bg-orange-100 border-radius d-flex align-items-center justify-content-center"
                >
                  <i class="material-symbols-outlined"> airplay </i>
                </div>
                <div>
                  <span class="title d-block fw-semibold text-white">
                    320
                  </span>
                  <span class="d-block"> Patients </span>
                </div>
              </div>
              <div class="item d-flex align-items-center">
                <div
                  class="icon text-purple bg-purple-100 border-radius d-flex align-items-center justify-content-center"
                >
                  <i class="material-symbols-outlined"> local_library </i>
                </div>
                <div>
                  <span class="title d-block fw-semibold text-white"> 18 </span>
                  <span class="d-block"> Surgeries </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="image text-center">
            <img src="~/assets/images/female-doctor.png" alt="female-doctor" />
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YourScheduleToday",
});
</script>

<style lang="scss" scoped>
.sales-welcome-card {
  --primaryColor: #4936f5;

  .sales-welcome-card-content {
    .content {
      h3 {
        font-size: 20px;
        margin-bottom: 3px;

        span {
          color: #ffe8d4;
        }
      }
      .info {
        margin-top: 65px;

        .item {
          margin-right: 30px;

          .icon {
            width: 42px;
            height: 42px;
            margin-right: 12px;
            &.text-orange {
              color: var(--orangeColor) !important;
            }
          }
          .title {
            font-size: 18px;
            line-height: 1.2;
          }
          span {
            color: #d5d9e2;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  &::before {
    top: 0;
    right: 0;
    z-index: -1;
    content: "";
    width: 147px;
    height: 89px;
    position: absolute;
    background: {
      image: url("~/assets/images/vector1.png");
      position: center center;
      repeat: no-repeat;
      size: contain;
    }
  }
  &::after {
    right: 0;
    top: auto;
    bottom: 0;
    left: auto;
    z-index: -1;
    content: "";
    width: 170px;
    height: 84px;
    border-width: 0;
    border-radius: 0;
    position: absolute;
    background: {
      image: url("~/assets/images/vector2.png");
      position: center center;
      repeat: no-repeat;
      size: contain;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-welcome-card {
    .sales-welcome-card-content {
      .content {
        h3 {
          font-size: 18px;
        }
        .info {
          margin-top: 17px;

          .item {
            margin-right: 20px;

            .title {
              font-size: 16px;
            }
          }
        }
      }
      .image {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sales-welcome-card {
    .sales-welcome-card-content {
      .content {
        .info {
          margin-top: 75px;
        }
      }
      .image {
        margin-top: 0;
      }
    }
  }
}
</style>
