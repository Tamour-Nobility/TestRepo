<template>
  <v-card
    class="friends-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Friends</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Month
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="friends-card-content">
      <form class="search-box position-relative">
        <label>
          <i class="material-symbols-outlined"> search </i>
        </label>
        <input type="text" class="input-search" placeholder="Search..." />
      </form>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user7.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Carolyn Barnes </span>
            <span class="d-block"> barnes&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user6.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Marcia Baker </span>
            <span class="d-block"> baker&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user8.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Donna Miller </span>
            <span class="d-block"> miller&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user9.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Barbara Cross </span>
            <span class="d-block"> cross&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user10.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Rebecca Block </span>
            <span class="d-block"> block&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user11.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Ramiro McCarty </span>
            <span class="d-block"> mccarty&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user12.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium">
              Robert Fairweather
            </span>
            <span class="d-block"> fairweather&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user13.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium">
              Marcelino Haddock
            </span>
            <span class="d-block"> haddock&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user14.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Thomas Wilson </span>
            <span class="d-block"> wilson&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="user d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="img position-relative">
            <v-img
              src="~/assets/images/users/user15.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <span class="active-status off"></span>
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Nathaniel Hulsey </span>
            <span class="d-block"> hulsey&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Friends",
};
</script>

<style lang="scss" scoped>
.friends-card {
  .friends-card-content {
    .search-box {
      margin-bottom: 20px;

      i {
        top: 50%;
        left: 13px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
      .input-search {
        padding-left: 38px;
      }
    }
    .user {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--borderColor);

      .img {
        margin-right: 13px;

        .v-img {
          width: 45px;
          margin-bottom: -3px;
        }
        .active-status {
          right: -2px;
          bottom: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          background: var(--successColor);
          border: 2px solid var(--whiteColor);

          &.off {
            background: var(--dangerColor);
          }
        }
      }
      .title {
        span {
          &:not(:first-child) {
            margin-top: 6px;
          }
        }
      }
      .link-btn {
        padding: 0;
        width: 36px;
        height: 36px;
        min-width: auto;
        transition: unset;
        text-align: center;
        color: var(--bodyColor);
        border: 1px solid var(--borderColor);

        i {
          font-size: 18px;
          left: 0;
          right: 0;
          top: 50%;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      &:last-child {
        border-bottom-width: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
  }
}
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .friends-card {
    .friends-card-content {
      .search-box {
        margin-bottom: 15px;

        i {
          left: 12px;
          font-size: 18px;
        }
        .input-search {
          padding-left: 35px;
        }
      }
    }
  }
}
</style>
