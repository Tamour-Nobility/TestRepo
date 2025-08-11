<template>
  <div :class="['navbar-area transition', { sticky: isSticky }]">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <RouterLink class="navbar-brand" to="/">
          <v-img src="@/assets/images/logo-big.svg" alt="logo" />
          <v-img
            src="@/assets/images/white-logo-big.svg"
            class="d-none"
            alt="logo"
          />
        </RouterLink>
        <button
          :class="['navbar-toggler', { active: stateStoreInstance.active }]"
          @click="stateStoreInstance.activeBtn"
        >
          <span class="burger-menu">
            <span class="top-bar"></span>
            <span class="middle-bar"></span>
            <span class="bottom-bar"></span>
          </span>
        </button>
        <div
          :class="[
            'collapse navbar-collapse',
            { show: stateStoreInstance.active },
          ]"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link"> Home </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/features" class="nav-link">
                Features
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/team" class="nav-link"> Our Team </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/faq" class="nav-link"> FAQ's </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link"> Contact </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/dashboard" class="nav-link"> Admin </RouterLink>
            </li>
          </ul>
          <div class="other-options d-flex align-items-center">
            <RouterLink class="btn" to="/authentication/sign-in">
              <i class="material-symbols-outlined"> login </i>
              Login
            </RouterLink>
            <RouterLink class="btn" to="/authentication/sign-up">
              <i class="material-symbols-outlined"> person </i>
              Register
            </RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  setup() {
    const isSticky = ref(false);
    const stateStoreInstance = stateStore;

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-area {
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  position: fixed;
  padding: {
    top: 20px;
    bottom: 20px;
  }
  .navbar {
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    display: flex;

    .navbar-brand {
      line-height: 1;
      max-width: 132px;
      margin-right: 15px;
      white-space: nowrap;
    }
    .navbar-collapse {
      flex-grow: 1;
      flex-basis: 100%;
      align-items: center;
    }
    ul {
      padding-left: 0;
      list-style-type: none;
      margin: {
        top: 0;
        bottom: 0;
      }
    }
    .navbar-nav {
      display: flex;
      margin-left: 50px;
      flex-direction: column;

      .nav-item {
        margin: {
          left: 25px;
          right: 25px;
        }
        .nav-link {
          color: var(--bodyColor);
          font: {
            weight: 500;
            size: 16px;
          }
          &:hover,
          &.router-link-active {
            color: var(--primaryColor);
          }
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .other-options {
      margin-left: auto;

      .btn {
        height: auto;
        min-width: auto;
        border-radius: 7px;
        padding: 12px 18px;
        position: relative;
        display: flex;
        color: var(--whiteColor);
        background-color: var(--purpleColor);
        font: {
          size: 16px;
          weight: 500;
        }
        i {
          margin-right: 5px;
        }
        &:not(:disabled) {
          color: var(--whiteColor);
        }
        &::before {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          border-radius: 7px;
          position: absolute;
          transition: var(--transition);
          border: 1px solid var(--purpleColor);
        }
        &:hover {
          background-color: var(--primaryColor);

          &::before {
            border-color: var(--primaryColor);
          }
        }
        &:nth-child(1) {
          margin-right: 15px;
          color: var(--purpleColor);
          background-color: transparent;

          &:not(:disabled) {
            color: var(--purpleColor);
          }
          &::before {
            border-color: var(--purpleColor);
          }
        }
      }
    }
    .navbar-toggler {
      background-color: transparent;
      color: var(--blackColor);
      border: none;
      padding: 0;

      .burger-menu {
        cursor: pointer;

        span {
          height: 3px;
          width: 30px;
          margin: 5px 0;
          display: block;
          background: var(--blackColor);
        }
      }
    }
  }
  &.sticky {
    z-index: 999;
    background-color: var(--whiteColor);
  }
}
.collapse {
  &:not(.show) {
    display: none;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .navbar-area {
    .navbar {
      .navbar-nav {
        padding: 20px;
        display: block;
        max-height: 50vh;
        flex-direction: unset;
        background-color: #f8f8f8;
        overflow: {
          y: scroll;
          x: hidden;
        }
        margin: {
          top: 15px;
          left: 0 !important;
          right: 0 !important;
        }
        .nav-item {
          margin: {
            left: 0;
            right: 0;
            top: 18px;
            bottom: 18px;
          }
          .nav-link {
            font-size: 14px;
          }
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .other-options {
        border-top: 1px solid var(--borderColor);
        background-color: #f8f8f8;
        margin-left: 0;
        padding: 20px;

        .btn {
          padding: 13px 18px;
          font-size: 13px;
        }
      }
      .navbar-toggler {
        &.active {
          .burger-menu {
            span {
              &.top-bar {
                transform: rotate(45deg);
                transform-origin: 10% 10%;
              }
              &.middle-bar {
                opacity: 0;
              }
              &.bottom-bar {
                transform: rotate(-45deg);
                transform-origin: 10% 90%;
                margin-top: 5px;
              }
            }
          }
        }
      }
      .navbar-collapse {
        &.active {
          .collapse:not(.show) {
            display: block;
          }
        }
      }
    }
    &.sticky {
      padding: {
        top: 15px;
        bottom: 15px;
      }
    }
  }
  .navbar-area {
    .navbar {
      .other-options {
        .btn {
          padding-left: 25px;

          i {
            font-size: 20px;
          }
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
  .navbar-area {
    .navbar {
      .navbar-nav {
        padding: 25px;
        display: block;
        max-height: 50vh;
        flex-direction: unset;
        background-color: #f8f8f8;
        overflow: {
          y: scroll;
          x: hidden;
        }
        margin: {
          top: 15px;
          left: 0 !important;
          right: 0 !important;
        }
        .nav-item {
          margin: {
            left: 0;
            right: 0;
            top: 20px;
            bottom: 20px;
          }
          .nav-link {
            font-size: 14px;
          }
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .other-options {
        border-top: 1px solid var(--borderColor);
        background-color: #f8f8f8;
        padding: 20px 25px;
        margin-left: 0;

        .btn {
          font-size: 14px;
        }
      }
      &.active {
        .navbar-toggler {
          &.active {
            .burger-menu {
              span {
                &.top-bar {
                  transform: rotate(45deg);
                  transform-origin: 10% 10%;
                }
                &.middle-bar {
                  opacity: 0;
                }
                &.bottom-bar {
                  transform: rotate(-45deg);
                  transform-origin: 10% 90%;
                  margin-top: 5px;
                }
              }
            }
          }
        }
        &.active {
          .collapse:not(.show) {
            display: block;
          }
        }
      }
    }
  }
  .navbar-area {
    .navbar {
      .other-options {
        .btn {
          padding-left: 28px;

          i {
            font-size: 22px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .navbar-area {
    .navbar {
      .navbar-nav {
        margin-left: 20px;

        .nav-item {
          margin: {
            left: 16px;
            right: 16px;
          }
          .nav-link {
            font-size: 15px;
          }
        }
      }
      .other-options {
        .btn {
          font-size: 15px;
        }
      }
    }
  }
}

/* Min width 992px */
@media (min-width: 992px) {
  .navbar-area {
    .navbar-expand-lg {
      flex-wrap: nowrap;
      justify-content: flex-start;

      .navbar-toggler {
        display: none;
      }
      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
      }
      .navbar-nav {
        flex-direction: row;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .navbar-area {
    .navbar {
      .navbar-nav {
        margin-left: 40px;

        .nav-item {
          margin: {
            left: 20px;
            right: 20px;
          }
        }
      }
    }
  }
}
</style>
