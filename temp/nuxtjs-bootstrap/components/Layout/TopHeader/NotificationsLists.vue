<template>
  <div class="dropdown notifications noti">
    <button
      class="btn btn-secondary border-0 p-0 position-relative badge"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-symbols-outlined">notifications</span>
    </button>

    <div class="dropdown-menu dropdown-lg p-0 border-0 p-0 dropdown-menu-end">
      <div class="d-flex justify-content-between align-items-center title">
        <span class="fw-semibold fs-15 text-secondary">
          Notifications
          <span class="fw-normal text-body fs-14">(03)</span>
        </span>
        <button class="p-0 m-0 bg-transparent border-0 fs-14 text-primary">
          Clear All
        </button>
      </div>

      <div class="max-h-217 scroll-bar">
        <div class="notification-menu">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-primary">sms</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  You have requested to
                  <span class="fw-semibold">withdrawal</span>
                </p>
                <span class="fs-13">2 hrs ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="notification-menu unseen">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-info">person</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>A new user added in Trezo</p>
                <span class="fs-13">3 hrs ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="notification-menu">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-success">
                  mark_email_unread
                </i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  You have requested to
                  <span class="fw-semibold">withdrawal</span>
                </p>
                <span class="fs-13">1 day ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="notification-menu">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-primary">sms</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  You have requested to
                  <span class="fw-semibold">withdrawal</span>
                </p>
                <span class="fs-13">2 hrs ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="notification-menu unseen">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-info">person</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>A new user added in Trezo</p>
                <span class="fs-13">3 hrs ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="notification-menu">
          <NuxtLink to="/notification" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined text-success">
                  mark_email_unread
                </i>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  You have requested to
                  <span class="fw-semibold">withdrawal</span>
                </p>
                <span class="fs-13">1 day ago</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink
        to="/notification"
        class="dropdown-item text-center text-primary d-block view-all fw-medium rounded-bottom-3"
      >
        <span>See All Notifications </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationsLists",
};
</script>
