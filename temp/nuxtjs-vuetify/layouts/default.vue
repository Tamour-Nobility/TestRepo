<template>
  <LayoutPreloader v-if="isLoading" />
  <LayoutLeftSidebar v-if="shouldShowSidebar" />
  <div
    :class="[
      'main-content d-flex flex-column',
      { active: stateStoreInstance.open },
      { 'padding-minus': shouldShowPaddingLeftZero },
    ]"
  >
    <LayoutTopHeader v-if="shouldShowHeader" />
    <div :class="containerClass">
      <NuxtPage />
    </div>
    <div class="flex-grow-1"></div>
    <LayoutMainFooter v-if="shouldShowFooter" />
    <LayoutSettingsSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import stateStore from "~/utils/store";

export default defineComponent({
  setup() {
    const isLoading = ref(true);
    const stateStoreInstance = stateStore;
    const route = useRoute();

    const hiddenRoutes = [
      "/",
      "/features",
      "/team",
      "/faq",
      "/contact",
      "/errors/not-found",
      "/extra-pages/coming-soon",
      "/authentication/sign-in",
      "/authentication/sign-up",
      "/authentication/logout",
      "/authentication/forgot-password",
      "/authentication/reset-password",
      "/authentication/confirm-email",
      "/authentication/lock-screen",
    ];

    const shouldShowSidebar = computed(
      () => !hiddenRoutes.includes(route.path)
    );
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowPaddingLeftZero = computed(() =>
      hiddenRoutes.includes(route.path)
    );

    const containerClass = computed(() => ({
      "main-content-container": ![
        "/",
        "/features",
        "/team",
        "/faq",
        "/contact",
      ].includes(route.path),
    }));

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);

      watchEffect(() => {
        if (stateStoreInstance.open) {
          document.body.classList.remove("sidebar-show");
          document.body.classList.add("sidebar-hide");
        } else {
          document.body.classList.remove("sidebar-hide");
          document.body.classList.add("sidebar-show");
        }
      });
    });

    return {
      isLoading,
      stateStoreInstance,
      shouldShowSidebar,
      shouldShowHeader,
      shouldShowFooter,
      shouldShowPaddingLeftZero,
      containerClass,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-content {
  overflow: hidden;
  min-height: 100vh;
  transition: var(--transition);
  padding: {
    top: 95px;
    left: 285px;
    right: 25px;
  }
  &.active {
    padding-left: 85px;
  }
  &.right-sidebar {
    padding: {
      left: 25px;
      right: 285px;
    }
    &.active {
      padding-right: 85px;
    }
  }
  &.hide-sidebar {
    padding-left: 85px;

    &.right-sidebar {
      padding: {
        left: 25px;
        right: 85px;
      }
    }
  }
  &.padding-minus {
    padding-left: 25px;
    padding-top: 0;
  }
}
.main-content-container {
  //max-width: 1120px;
  //margin: auto;
  //width: 100%;
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: {
      top: 0;
      left: 15px;
      right: 15px;
    }
    &.active {
      padding-left: 15px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .main-content {
    padding: {
      top: 0;
      left: 25px;
      right: 25px;
    }
    &.active {
      padding-left: 25px;
    }
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .main-content {
    padding: {
      top: 0;
      left: 25px;
      right: 25px;
    }
    &.active {
      padding-left: 25px;
    }
  }
}
</style>
