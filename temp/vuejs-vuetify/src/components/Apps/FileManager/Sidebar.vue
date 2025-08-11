<template>
  <v-card
    class="sidebar-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="sidebar-card-content">
      <form class="search-box position-relative">
        <input
          type="text"
          class="input-search"
          placeholder="Search here....."
        />
        <button type="submit" class="bg-transparent p-0 border-none transition">
          <i class="material-symbols-outlined"> search </i>
        </button>
      </form>
      <ul class="sidebar-list mt-0 pl-0 list-unstyled">
        <li>
          <RouterLink
            to="/apps/file-manager/my-drive"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> drive_eta </i>
            My Drive
            <span class="d-block text-body"> 6 </span>
          </RouterLink>
          <ul class="list-unstyled">
            <li>
              <RouterLink
                to="/apps/file-manager/assets"
                class="d-inline-block position-relative"
              >
                Assets
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/apps/file-manager/projects"
                class="d-inline-block position-relative"
              >
                Projects
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/apps/file-manager/personal"
                class="d-inline-block position-relative"
              >
                Personal
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/apps/file-manager/applications"
                class="d-inline-block position-relative"
              >
                Applications
              </RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink
            to="/apps/file-manager/documents"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> description </i>
            Documents
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/apps/file-manager/media"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> perm_media </i>
            Media
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/apps/file-manager/recents"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> schedule </i>
            Recents
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/apps/file-manager/important"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> grade </i>
            Important
          </RouterLink>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> report_gmailerrorred </i>
            Spam
            <span class="d-block text-body"> 10 </span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> delete </i>
            Trash
            <span class="d-block text-body"> 15 </span>
          </a>
        </li>
      </ul>
      <div class="storage-status">
        <h6>Storage Status</h6>
        <span class="d-block text-body"> % 50 GB used of 100 GB </span>
        <v-progress-linear
          bg-color="deep-purple-lighten-2"
          class="blue-accent-3"
          model-value="50"
        >
        </v-progress-linear>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar-card {
  .sidebar-card-content {
    .search-box {
      margin-bottom: 25px;

      button {
        top: 50%;
        right: 15px;
        margin-top: 1px;
        position: absolute;
        color: var(--primaryColor) !important;
        transform: translateY(-50%);

        i {
          font-size: 20px;
        }
      }
    }
    .sidebar-list {
      margin-bottom: 30px;

      li {
        font-weight: 500;
        margin-bottom: 18px;

        a {
          padding-left: 28px;

          i {
            transform: translateY(-50%);
            color: var(--primaryColor);
            position: absolute;
            margin-top: -0.5px;
            font-size: 18px;
            top: 50%;
            left: 0;
          }
          &.router-link-active,
          &.active {
            color: var(--primaryColor);
          }
        }
        ul {
          padding-left: 28px;
          margin: {
            top: 15px;
            bottom: 20px;
          }
          li {
            margin-bottom: 15px;
            font-weight: normal;

            a {
              padding-left: 15px;
              color: var(--bodyColor);

              &::before {
                left: 0;
                top: 50%;
                width: 6px;
                content: "";
                height: 6px;
                border-radius: 50%;
                position: absolute;
                transform: translateY(-50%);
                transition: var(--transition);
                border: 1px solid var(--primaryColor);
              }
              &.router-link-active,
              &.active,
              &:hover {
                color: var(--primaryColor);

                &::before {
                  background: var(--primaryColor);
                }
              }
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        span {
          font: {
            size: 13px;
            weight: normal;
          }
        }
        &:nth-child(2) {
          a {
            i {
              color: var(--successColor);
            }
          }
        }
        &:nth-child(3) {
          a {
            i {
              color: var(--infoColor);
            }
          }
        }
        &:nth-child(4) {
          a {
            i {
              color: var(--purpleColor);
            }
          }
        }
        &:nth-child(5) {
          a {
            i {
              color: var(--warningColor);
            }
          }
        }
        &:nth-child(6) {
          a {
            i {
              color: var(--secondaryColor);
            }
          }
        }
        &:nth-child(7) {
          a {
            i {
              color: var(--dangerColor);
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .storage-status {
      border-top: 1px solid #eceef2;
      padding: {
        top: 30px;
        left: 30px;
        right: 30px;
      }
      margin: {
        left: -25px;
        right: -25px;
      }
      h6 {
        margin-bottom: 13px;
      }
      span {
        font-size: 13px;
      }
      .v-progress-linear {
        margin-top: 13px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sidebar-card {
    .sidebar-card-content {
      .search-box {
        margin-bottom: 20px;

        button {
          right: 13px;
        }
      }
      .sidebar-list {
        margin-bottom: 20px;

        li {
          margin-bottom: 19px;

          ul {
            margin: {
              top: 17px;
              bottom: 21px;
            }
            li {
              margin-bottom: 16px;
            }
          }
        }
      }
      .storage-status {
        padding: {
          top: 20px;
          left: 17px;
          right: 17px;
        }
        margin: {
          left: -17px;
          right: -17px;
        }
        h6 {
          margin-bottom: 10px;
        }
        .v-progress-linear {
          margin-top: 10px;
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
  .sidebar-card {
    .sidebar-card-content {
      .search-box {
        margin-bottom: 25px;
      }
      .sidebar-list {
        margin-bottom: 25px;

        li {
          margin-bottom: 22px;
        }
      }
      .storage-status {
        padding-top: 25px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
