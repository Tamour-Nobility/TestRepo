<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <form class="position-relative default-src-form mb-3 pb-1">
        <input
          type="text"
          class="form-control rounded-1"
          placeholder="Search"
        />
        <i
          class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y fs-18"
        >
          search
        </i>
      </form>
      <RouterLink
        to="/apps/email/compose"
        class="btn btn-primary fs-16 fw-medium text-center d-block py-2 mb-4"
      >
        <div class="d-flex align-items-center justify-content-center py-lg-1">
          <i class="material-symbols-outlined fs-18 me-2">edit</i>
          <span>Compose</span>
        </div>
      </RouterLink>

      <ul class="ps-0 mb-4 list-unstyled sidebar">
        <li class="mb-3 pb-1 d-flex justify-content-between align-items-center">
          <RouterLink
            to="/apps/email/inbox"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              inbox
            </i>
            <span class="fw-semibold">Inbox</span>
          </RouterLink>
          <span class="fs-13">10</span>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/starred"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              star_rate
            </i>
            <span class="fw-medium">Started</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/snoozed"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              alarm
            </i>
            <span class="fw-medium">Snoozed</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/sent-mail"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              send
            </i>
            <span class="fw-medium">Sent</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/draft"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              draft
            </i>
            <span class="fw-medium">Drafts</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/important"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              bookmark
            </i>
            <span class="fw-medium">Important</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/chat"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              auto_read_pause
            </i>
            <span class="fw-medium">Chats</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              schedule_send
            </i>
            <span class="fw-medium">Scheduled</span>
          </a>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/inbox"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              forward_to_inbox
            </i>
            <span class="fw-medium">All Mail</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/spam"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              live_help
            </i>
            <span class="fw-medium">Spam</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <RouterLink
            to="/apps/email/trash-email"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              delete
            </i>
            <span class="fw-medium">Trash</span>
          </RouterLink>
        </li>
        <li class="mb-3 pb-1">
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              account_circle
            </i>
            <span class="fw-medium">Personal</span>
          </a>
        </li>
        <li class="mb-0">
          <a
            href="javascript:void(0);"
            class="d-flex align-items-center text-decoration-none"
          >
            <i
              class="material-symbols-outlined fs-18 position-relative top-1 me-2"
            >
              trip
            </i>
            <span class="fw-medium">Company</span>
          </a>
        </li>
      </ul>

      <button
        class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        data-bs-toggle="offcanvas"
        data-bs-target="#addNewLabelModal"
        aria-controls="addNewLabelModal"
      >
        <span class="py-sm-1 d-block">
          <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
          <span>Add New Label</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailSidebar",
});
</script>

<style lang="scss" scoped>
.sidebar {
  li {
    a {
      &.active,
      &.router-link-active {
        --bs-text-opacity: 1;
        color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
      }
    }
  }
}
</style>
