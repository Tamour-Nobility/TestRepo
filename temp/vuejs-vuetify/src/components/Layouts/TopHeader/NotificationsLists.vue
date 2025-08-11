<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <button class="notification-btn" v-bind="props">
        <i class="material-symbols-outlined">notifications</i>
        <div class="dot rounded-circle"></div>
      </button>
    </template>
    <v-list class="notification-list">
      <div class="title d-flex align-items-center">
        <span class="fw-semibold text-black">
          Notifications
          <span class="text-body fw-normal">(03)</span>
        </span>
        <button type="button" class="text-primary">Clear All</button>
      </div>
      <ul class="menu-body p-0 mt-0 list-unstyled">
        <li class="position-relative">
          <div
            class="icon rounded-circle d-flex align-items-center justify-content-center position-absolute text-center transition"
          >
            <i class="material-symbols-outlined"> sms </i>
          </div>
          <span class="sub-title d-block text-black">
            You have requested to
            <strong class="fw-semibold"> withdrawal </strong>
          </span>
          <span class="time d-block"> 2 hrs ago </span>
          <RouterLink
            to="/notifications"
            class="d-block left-0 top-0 bottom-0 right-0 z-1 position-absolute"
          ></RouterLink>
        </li>
        <li class="position-relative">
          <div
            class="icon rounded-circle d-flex align-items-center justify-content-center position-absolute text-center transition"
          >
            <i class="material-symbols-outlined"> person </i>
          </div>
          <span class="sub-title d-block text-black">
            <strong class="fw-semibold"> A new user </strong>
            added in Trezo
          </span>
          <span class="time d-block"> 3 hrs ago </span>
          <RouterLink
            to="/notifications"
            class="d-block left-0 top-0 bottom-0 right-0 z-1 position-absolute"
          >
          </RouterLink>
          <span
            class="unread d-inline-block rounded-circle bg-primary position-absolute"
          >
          </span>
        </li>
        <li class="position-relative">
          <div
            class="icon rounded-circle d-flex align-items-center justify-content-center position-absolute text-center transition"
          >
            <i class="material-symbols-outlined"> mark_email_unread </i>
          </div>
          <span class="sub-title d-block text-black">
            You have requested to
            <strong class="fw-semibold">withdrawal</strong>
          </span>
          <span class="time d-block">1 day ago</span>
          <RouterLink
            to="/notifications"
            class="d-block left-0 top-0 bottom-0 right-0 z-1 position-absolute"
          ></RouterLink>
        </li>
      </ul>
      <div class="menu-footer text-center">
        <RouterLink
          to="/notifications"
          class="d-inline-block fw-medium position-relative text-primary"
        >
          See All Notifications <i class="flaticon-chevron"></i>
        </RouterLink>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "NotificationsLists",
};
</script>
