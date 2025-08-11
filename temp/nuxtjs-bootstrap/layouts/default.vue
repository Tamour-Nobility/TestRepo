<template>
  <div>
    <LayoutPreloader v-if="isLoading" />
    <LayoutLeftSidebar v-if="shouldShowSidebar" />
    <div class="container-fluid">
      <div
        class="main-content d-flex flex-column"
        :class="{ 'p-0': shouldShowPaddingZero }"
      >
        <LayoutTopHeader v-if="shouldShowHeader" />
        <NuxtPage />
        <div class="flex-grow-1" v-if="shouldShowDiv"></div>
        <LayoutMainFooter v-if="shouldShowFooter" />
      </div>
    </div>
    <LayoutCreateTaskModal />
    <LayoutAddNewLabelModal />
    <LayoutAddNewCardModal />
    <LayoutAddNewFileModal />
    <LayoutAddNewOrderModal />
    <LayoutAddNewCategorieModal />
    <LayoutAddNewContactModal />
    <LayoutAddNewCustomerModal />
    <LayoutAddNewLeadModal />
    <LayoutAddNewDealsModal />
    <LayoutAddNewUserModal />
    <LayoutAddNewInstructorsModal />
    <LayoutSettingsSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import stateStore from "~/utils/store";

export default defineComponent({
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
