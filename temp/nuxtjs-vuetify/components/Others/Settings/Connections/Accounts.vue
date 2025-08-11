<template>
  <div class="connections-card">
    <h5>Connected Accounts</h5>
    <ul class="p-0 mb-0 mt-0 list-unstyled">
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/google.svg" alt="google" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Google </span>
            <span class="d-block"> Calendar and Contacts </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/slack.svg" alt="slack" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Slack </span>
            <span class="d-block"> Communications </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/github.svg" alt="github" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> GitHub </span>
            <span class="d-block"> Manage your Git repositories </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img
              src="~/assets/images/socials/mailchimp.svg"
              alt="mailchimp"
            />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Mailchimp </span>
            <span class="d-block"> Email marketing service </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/figma.svg" alt="figma" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Figma </span>
            <span class="d-block"> Design </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
    </ul>
    <v-divider></v-divider>
    <h5>Social Accounts</h5>
    <ul class="p-0 mb-0 mt-0 list-unstyled">
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/facebook.svg" alt="facebook" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Facebook </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/twitter.svg" alt="twitter" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> X </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img
              src="~/assets/images/socials/instagram.svg"
              alt="instagram"
            />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Instagram </span>
          </div>
        </div>
        <button class="text-body pointer-none">Not Connected</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/dribbble.svg" alt="dribbble" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Dribbble </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
      <li class="d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="~/assets/images/socials/behance.svg" alt="behance" />
          </div>
          <div class="title">
            <span class="fw-semibold text-black d-block"> Behance </span>
          </div>
        </div>
        <button>Click to Disconnect</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Accounts",
});
</script>

<style lang="scss" scoped>
.connections-card {
  h5 {
    margin-bottom: 25px;
  }
  ul {
    li {
      margin-bottom: 25px;

      .icon {
        .v-img {
          width: 40px;
          margin-bottom: -3px;
        }
      }
      .title {
        margin-left: 15px;

        span {
          &:not(:first-child) {
            margin-top: 7px;
          }
        }
      }
      button {
        padding: 0;
        height: auto;
        min-width: auto;
        border-radius: 0;
        color: var(--primaryColor);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .v-divider {
    margin: {
      top: 25px;
      bottom: 25px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .connections-card {
    h5 {
      margin-bottom: 17px;
    }
    ul {
      li {
        margin-bottom: 17px;

        .title {
          margin-left: 12px;
        }
      }
    }
    .v-divider {
      margin: {
        top: 17px;
        bottom: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .connections-card {
    h5 {
      margin-bottom: 20px;
    }
    ul {
      li {
        margin-bottom: 20px;
      }
    }
    .v-divider {
      margin: {
        top: 20px;
        bottom: 20px;
      }
    }
  }
}
</style>
