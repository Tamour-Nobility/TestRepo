<template>
  <v-card
    class="followers-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Followers</h5>
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
    <div class="followers-content">
      <div class="follower d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="image">
            <v-img
              src="~/assets/images/users/user6.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Salvatore Dewall </span>
            <span class="d-block"> dewall&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="follower d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="image">
            <v-img
              src="~/assets/images/users/user7.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Alina Smith </span>
            <span class="d-block"> smith&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="follower d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="image">
            <v-img
              src="~/assets/images/users/user8.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Russell Colon </span>
            <span class="d-block"> colon&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="follower d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="image">
            <v-img
              src="~/assets/images/users/user9.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Leslie Shadle </span>
            <span class="d-block"> shadle&#64;trezo.com </span>
          </div>
        </div>
        <a
          href="#"
          class="link-btn d-inline-block rounded-circle position-relative"
        >
          <i class="material-symbols-outlined"> arrow_outward </i>
        </a>
      </div>
      <div class="follower d-flex align-items-center justify-space-between">
        <div class="d-flex align-items-center">
          <div class="image">
            <v-img
              src="~/assets/images/users/user10.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
          <div class="title">
            <span class="d-block text-black fw-medium"> Raymond Nguyen </span>
            <span class="d-block"> nguyen&#64;trezo.com </span>
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
  name: "Followers",
};
</script>

<style lang="scss" scoped>
.followers-card {
  .followers-content {
    .follower {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--borderColor);

      .image {
        .v-img {
          width: 42px;
          margin-bottom: -3px;
        }
      }
      .title {
        margin-left: 12px;

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
</style>
