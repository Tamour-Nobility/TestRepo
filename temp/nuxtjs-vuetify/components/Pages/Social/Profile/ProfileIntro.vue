<template>
  <v-card
    class="profile-intro-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Profile Intro</h5>
    </div>
    <div class="profile-intro-content">
      <div class="user d-flex align-items-center">
        <div class="image">
          <v-img
            src="~/assets/images/profile.jpg"
            class="rounded-circle"
            alt="profile-image"
          />
        </div>
        <div class="title">
          <span class="d-block text-black fw-semibold"> Alice Johnson </span>
          <span class="d-block"> johnson&#64;trezo.com </span>
        </div>
      </div>
      <span class="sub-title d-block fw-semibold text-black"> About Me </span>
      <p>
        Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
        mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc
        tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec
        adipiscing.
      </p>
      <h6 class="fw-semibold">Social Profile</h6>
      <div class="socials-link">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="facebook d-inline-block text-center position-relative rounded-circle"
        >
          <i class="ri-facebook-fill"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          class="x d-inline-block text-center position-relative rounded-circle"
        >
          <i class="ri-twitter-x-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          class="linkedin d-inline-block text-center position-relative rounded-circle"
        >
          <i class="ri-linkedin-fill"></i>
        </a>
        <a
          href="mailto:micheal@gmail.com"
          class="mail d-inline-block text-center position-relative rounded-circle"
        >
          <i class="ri-mail-fill"></i>
        </a>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProfileIntro",
};
</script>

<style lang="scss" scoped>
.profile-intro-card {
  .profile-intro-content {
    .user {
      margin-bottom: 18px;

      .image {
        .v-img {
          width: 75px;
          margin-bottom: -3px;
        }
      }
      .title {
        margin-left: 15px;

        span {
          font-size: 17px;

          &:not(:first-child) {
            font-size: var(--fontSize);
          }
        }
      }
    }
    .sub-title {
      margin-bottom: 7px;
    }
    h6 {
      font-size: var(--fontSize);
      margin: {
        bottom: 12px;
        top: 18px;
      }
    }
    .socials-link {
      a {
        width: 28px;
        height: 28px;
        margin-right: 7px;
        text-align: center;
        color: var(--whiteColor);
        background-color: var(--primaryColor);

        i {
          left: 0;
          right: 0;
          top: 50%;
          position: absolute;
          transform: translateY(-50%);
        }
        &.facebook {
          background-color: #3a559f;
        }
        &.x {
          background-color: #03a9f4;
        }
        &.linkedin {
          background-color: #007ab9;
        }
        &.mail {
          background-color: #2196f3;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .profile-intro-card {
    .profile-intro-content {
      .user {
        margin-bottom: 15px;

        .image {
          .v-mg {
            width: 60px;
          }
        }
        .title {
          margin-left: 12px;

          span {
            font-size: 15px;

            &:not(:first-child) {
              font-size: 13px;
            }
          }
        }
      }
      .sub-title {
        margin-bottom: 8px;
      }
      h6 {
        font-size: 13px;
        margin: {
          bottom: 12px;
          top: 15px;
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
  .profile-intro-card {
    .profile-intro-content {
      .user {
        .title {
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
