<template>
  <v-card
    class="settings-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="settings-card-content">
      <ul class="nav-links p-0 mt-0 list-unstyled">
        <li class="d-inline-block">
          <RouterLink to="/settings/account-settings">
            Account Settings
          </RouterLink>
        </li>
        <li class="d-inline-block">
          <RouterLink to="/settings/change-password">
            Change Password
          </RouterLink>
        </li>
        <li class="d-inline-block">
          <RouterLink to="/settings/connections"> Connections </RouterLink>
        </li>
        <li class="d-inline-block">
          <RouterLink to="/settings/privacy-policy">
            Privacy Policy
          </RouterLink>
        </li>
        <li class="d-inline-block">
          <RouterLink to="/settings/terms-conditions">
            Terms & Conditions
          </RouterLink>
        </li>
      </ul>
      <Content />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";

export default defineComponent({
  name: "TermsConditions",
  components: {
    Content,
  },
});
</script>

<style lang="scss" scoped>
.settings-card {
  .settings-card-content {
    .nav-links {
      margin-bottom: 10px;

      li {
        margin: {
          right: 15px;
          bottom: 15px;
        }
        a {
          height: auto;
          min-width: auto;
          font-weight: 500;
          border-radius: 7px;
          padding: 10.5px 15px;
          color: var(--primaryColor);
          background-color: transparent;
          border: 1px solid var(--primaryColor);
          display: inline-block;

          &.router-link-active,
          &:hover {
            color: var(--whiteColor);
            background-color: var(--primaryColor);
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .settings-card {
    .settings-card-content {
      .nav-links {
        margin-bottom: 7px;

        li {
          margin: {
            right: 10px;
            bottom: 10px;
          }
          button {
            padding: 10px 15px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .settings-card {
    .settings-card-content {
      .nav-links {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
