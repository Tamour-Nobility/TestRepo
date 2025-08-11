<template>
  <nav
    :class="[
      'navbar navbar-expand-lg bg-opacity-25 fixed-top',
      { sticky: isSticky },
    ]"
    id="navbar"
  >
    <div class="container">
      <RouterLink class="navbar-brand me-xl-5 me-3" to="/">
        <img src="@/assets/images/landing/logo.svg" alt="logo" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="/"
            >
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="/features"
            >
              Features
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="our-team"
            >
              Our Team
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="/faq"
            >
              FAQ’s
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="/contact"
            >
              Contact
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link fs-16 fw-medium text-body hover px-0 px-md-2 mx-1 mx-xl-0 px-xl-4"
              to="/dashboard"
            >
              Admin
            </RouterLink>
          </li>
        </ul>
        <div class="othres">
          <RouterLink
            to="/authentication/login"
            class="btn btn-outline-primary-div py-2 px-4 fw-medium fs-16 rounded-3"
          >
            <i class="ri-login-box-line fs-18 position-relative top-2"></i>
            <span class="ms-1">Login</span>
          </RouterLink>
          <RouterLink
            to="/authentication/register"
            class="btn btn-primary-div py-2 px-4 fw-medium fs-16 text-white ms-3 rounded-3"
          >
            <i class="ri-user-line fs-18"></i>
            <span class="ms-1">Register</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  setup() {
    const isSticky = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
    };
  },
});
</script>
