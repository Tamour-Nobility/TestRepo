<template>
  <v-card
    class="email-sidebar-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="sidebar-card-content">
      <form class="search-box position-relative">
        <label>
          <i class="material-symbols-outlined"> search </i>
        </label>
        <input type="text" class="input-search" placeholder="Search" />
      </form>
      <RouterLink to="/apps/email/compose" class="btn">
        <i class="material-symbols-outlined"> edit </i>
        Compose
      </RouterLink>
      <ul class="sidebar-list pl-0 list-unstyled">
        <li>
          <RouterLink
            to="/apps/email/inbox"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> inbox </i>
            Inbox
            <span class="d-block text-body"> 10 </span>
          </RouterLink>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> star_rate </i>
            Starred
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> alarm </i>
            Snoozed
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> send </i>
            Sent
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> draft </i>
            Drafts
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> bookmark </i>
            Important
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> auto_read_pause </i>
            Chats
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> schedule_send </i>
            Scheduled
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> forward_to_inbox </i>
            All Mail
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> live_help </i>
            Spam
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> delete </i>
            Trash
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> account_circle </i>
            Personal
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center justify-space-between position-relative"
          >
            <i class="material-symbols-outlined"> trip </i>
            Company
          </a>
        </li>
      </ul>
      <button class="add-btn" type="button">
        <i class="material-symbols-outlined"> add </i>
        Add New Label
      </button>
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
.email-sidebar-card {
  .sidebar-card-content {
    .search-box {
      margin-bottom: 20px;

      i {
        top: 50%;
        left: 13px;
        font-size: 18px;
        position: absolute;
        color: var(--blackColor);
        transform: translateY(-50%);
      }
      .input-search {
        height: 40px;
        font-size: 12px;
        padding-left: 38px;
      }
    }
    .sidebar-list {
      margin: {
        top: 25px;
        bottom: 25px;
      }
      li {
        margin-bottom: 15px;

        a {
          padding-left: 30px;
          color: #526077;

          i {
            transform: translateY(-50%);
            position: absolute;
            font-size: 18px;
            top: 50%;
            left: 0;
          }
          span {
            font: {
              size: 12px;
              weight: normal;
            }
          }
          &:hover {
            color: var(--blackColor);
          }
          &.router-link-active {
            font-weight: 600;
            color: var(--primaryColor) !important;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    button,
    a {
      &.btn {
        width: 100%;
        height: auto;
        display: block;
        min-width: auto;
        text-align: center;
        border-radius: 7px;
        padding: 12px 22px;
        color: var(--whiteColor);
        background-color: var(--primaryColor);
        font: {
          size: 16px;
          weight: 500;
        }

        i {
          font-size: 20px;
          position: relative;
          top: 4px;
        }
      }
      &.add-btn {
        height: auto;
        min-width: auto;
        font-weight: 500;
        padding: 8px 13px;
        border-radius: 7px;
        display: inline-block;
        color: var(--primaryColor);
        border: 1px solid var(--primaryColor);
        padding-left: 35px;
        position: relative;

        i {
          top: 50%;
          left: 8px;
          font-size: 22px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .email-sidebar-card {
    .sidebar-card-content {
      .search-box {
        margin-bottom: 17px;
      }
      .sidebar-list {
        margin: {
          top: 17px;
          bottom: 20px;
        }
        li {
          margin-bottom: 16px;

          a {
            padding-left: 26px;

            i {
              font-size: 16px;
            }
          }
        }
      }
      button {
        &.btn {
          font-size: 13px;
          padding-left: 25px;

          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .email-sidebar-card {
    .sidebar-card-content {
      .search-box {
        margin-bottom: 20px;
      }
      .sidebar-list {
        margin: {
          top: 20px;
          bottom: 20px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .email-sidebar-card {
    .sidebar-card-content {
      button {
        &.btn {
          font-size: 14px;
          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .email-sidebar-card {
    .sidebar-card-content {
      button {
        &.btn {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
