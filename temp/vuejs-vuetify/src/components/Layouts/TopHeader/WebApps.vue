<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        class="web-apps-menu menu-btn rounded-circle p-0 border-none position-relative"
        v-bind="props"
      >
        <i class="material-symbols-outlined">apps</i>
      </v-btn>
    </template>
    <v-list class="menu-dropdown p-0">
      <div class="menu-body">
        <ul class="p-0 mt-0 mb-0 list-unstyled text-center">
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/figma.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Figma</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/dribbble.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/spotify.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Spotify</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/gitlab.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Gitlab</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/google-drive.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">GDrive</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/trello.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Trello</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/slack.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Slack</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/pinterest.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Pinterest</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/facebook.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-item" target="_blank">
              <v-img src="@/assets/images/icons/linkedin.svg" alt="image" />
              <span class="d-block mb-0 fw-medium">Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "WebApps",
};
</script>

<style lang="scss" scoped>
.web-apps-menu {
  &.menu-btn {
    margin-left: 25px;
    i {
      font-weight: 600;
      color: var(--bodyColor);
    }
    &.v-btn--size-default {
      min-width: 0;
      padding: 0;
    }
  }
}
.menu-dropdown {
  &.v-list {
    height: auto;
    top: 16px;
    width: 240px;
    max-width: 240px;
    min-width: unset;
    max-width: unset;
    overflow: hidden;
    border-radius: 7px;
    background: var(--whiteColor);
    box-shadow: 0 4px 45px #0000001a;
    .menu-body {
      padding: 25px 15px 8px;
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-left: -5px;
        margin-right: -5px;
        li {
          flex-shrink: 0;
          width: 33.333333%;
          max-width: 33.333333%;
          padding-left: 5px;
          padding-right: 5px;
          border-bottom: none;
          padding: initial;
          &:hover {
            background-color: transparent;
          }
          a {
            font-size: 12px;
            margin-bottom: 17px;
            display: block;
            color: var(--bodyColor);
            .v-responsive {
              justify-content: center;
              margin-bottom: 7px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .web-apps-menu {
    &.menu-btn {
      margin-left: 13px;
    }
  }
}
</style>
