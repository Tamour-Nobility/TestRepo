<template>
  <div class="dropdown notifications language">
    <button
      class="btn btn-secondary dropdown-toggle border-0 p-0 position-relative"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-symbols-outlined">translate</span>
    </button>
    <div class="dropdown-menu dropdown-lg p-0 border-0 dropdown-menu-end">
      <span class="fw-semibold fs-15 text-secondary title">
        Choose Language
      </span>
      <div class="max-h-275">
        <div class="notification-menu">
          <a href="javascript:void(0);" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/usa.svg"
                  class="wh-30 rounded-circle"
                  alt="united-states"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">English</span>
              </div>
            </div>
          </a>
        </div>
        <div class="notification-menu">
          <a href="javascript:void(0);" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/canada.svg"
                  class="wh-30 rounded-circle"
                  alt="spain"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">Canada</span>
              </div>
            </div>
          </a>
        </div>
        <div class="notification-menu">
          <a href="javascript:void(0);" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/germany.svg"
                  class="wh-30 rounded-circle"
                  alt="spain"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">Germany</span>
              </div>
            </div>
          </a>
        </div>
        <div class="notification-menu">
          <a href="javascript:void(0);" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/portugal.svg"
                  class="wh-30 rounded-circle"
                  alt="portugal"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14">Portugal</span>
              </div>
            </div>
          </a>
        </div>
        <div class="notification-menu mb-0">
          <a href="javascript:void(0);" class="dropdown-item">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/spain.svg"
                  class="wh-30 rounded-circle"
                  alt="spain"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <span class="text-secondary fw-medium fs-14"> Spain </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageMenu",
};
</script>
