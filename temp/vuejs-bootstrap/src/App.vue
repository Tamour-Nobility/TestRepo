<template>
  <div>
    <Preloader v-if="isLoading" />
    <LeftSidebar v-if="shouldShowSidebar && !isNotFound" />
    <div class="container-fluid">
      <div
        class="main-content d-flex flex-column"
        :class="{ 'p-0': shouldShowPaddingZero || isNotFound }"
      >
        <TopHeader v-if="shouldShowHeader && !isNotFound" />
        <router-view />
        <div class="flex-grow-1" v-if="shouldShowDiv && !isNotFound"></div>
        <MainFooter v-if="shouldShowFooter && !isNotFound" />
      </div>
    </div>
    <CreateTaskModal />
    <AddNewLabelModal />
    <AddNewCardModal />
    <AddNewFileModal />
    <AddNewOrderModal />
    <AddNewCategorieModal />
    <AddNewContactModal />
    <AddNewCustomerModal />
    <AddNewLeadModal />
    <AddNewDealsModal />
    <AddNewUserModal />
    <AddNewInstructorsModal />
    <SettingsSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import stateStore from "./utils/store";

import Preloader from "./components/Layouts/Preloader.vue";
import LeftSidebar from "./components/Layouts/LeftSidebar.vue";
import TopHeader from "./components/Layouts/TopHeader/index.vue";
import MainFooter from "./components/Layouts/MainFooter.vue";
import CreateTaskModal from "./components/Layouts/CreateTaskModal.vue";
import AddNewLabelModal from "./components/Layouts/AddNewLabelModal.vue";
import AddNewCardModal from "./components/Layouts/AddNewCardModal.vue";
import AddNewFileModal from "./components/Layouts/AddNewFileModal.vue";
import AddNewOrderModal from "./components/Layouts/AddNewOrderModal.vue";
import AddNewCategorieModal from "./components/Layouts/AddNewCategorieModal.vue";
import AddNewContactModal from "./components/Layouts/AddNewContactModal.vue";
import AddNewCustomerModal from "./components/Layouts/AddNewCustomerModal.vue";
import AddNewLeadModal from "./components/Layouts/AddNewLeadModal.vue";
import AddNewDealsModal from "./components/Layouts/AddNewDealsModal.vue";
import AddNewUserModal from "./components/Layouts/AddNewUserModal.vue";
import AddNewInstructorsModal from "./components/Layouts/AddNewInstructorsModal.vue";
import SettingsSidebar from "./components/Layouts/SettingsSidebar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Preloader,
    LeftSidebar,
    TopHeader,
    MainFooter,
    CreateTaskModal,
    AddNewLabelModal,
    AddNewCardModal,
    AddNewFileModal,
    AddNewOrderModal,
    AddNewCategorieModal,
    AddNewContactModal,
    AddNewCustomerModal,
    AddNewLeadModal,
    AddNewDealsModal,
    AddNewUserModal,
    AddNewInstructorsModal,
    SettingsSidebar,
  },
  setup() {
    const isLoading = ref(true);
    const route = useRoute();

    const hiddenRoutes = [
      "/",
      "/features",
      "/our-team",
      "/faq",
      "/contact",
      "/authentication/login",
      "/authentication/register",
      "/authentication/reset-password",
      "/authentication/forget-password",
      "/authentication/lock-screen",
      "/authentication/logout",
      "/authentication/confirm-mail",
    ];

    const shouldShowSidebar = computed(
      () => !hiddenRoutes.includes(route.path)
    );
    const shouldShowPaddingZero = computed(() =>
      hiddenRoutes.includes(route.path)
    );
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowDiv = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));

    // Handle wildcard path for 404-like routes
    const isNotFound = computed(() =>
      route.matched.some((record) => record.path === "/:pathMatch(.*)*")
    );

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);

      watchEffect(() => {
        if (stateStore.open) {
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
      shouldShowSidebar,
      shouldShowPaddingZero,
      shouldShowHeader,
      shouldShowDiv,
      shouldShowFooter,
      isNotFound,
    };
  },
});
</script>

<style lang="scss" scoped>
.padding-0 {
  .container-fluid {
    padding: 0;
  }
}
</style>
