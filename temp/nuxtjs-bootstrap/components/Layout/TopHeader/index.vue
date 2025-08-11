<template>
  <header
    :class="[
      'header-area bg-white mb-4 rounded-bottom-15',
      { sticky: isSticky },
    ]"
  >
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-6">
        <div class="left-header-content">
          <ul
            class="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-sm-start"
          >
            <li>
              <button
                class="header-burger-menu bg-transparent p-0 border-0"
                :class="[
                  'header-burger-menu bg-transparent p-0 border-0',
                  { active: stateStoreInstance.open },
                ]"
                @click="stateStoreInstance.onChange"
              >
                <span class="material-symbols-outlined">menu</span>
              </button>
            </li>
            <li>
              <LayoutTopHeaderSearchFrom />
            </li>
            <li>
              <LayoutTopHeaderWebApps />
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-8 col-sm-6">
        <div class="right-header-content mt-2 mt-sm-0">
          <ul
            class="d-flex align-items-center justify-content-center justify-content-sm-end ps-0 mb-0 list-unstyled"
          >
            <li class="header-right-item">
              <LayoutTopHeaderDarkSwtichBtn />
            </li>
            <li class="header-right-item">
              <LayoutTopHeaderLanguageMenu />
            </li>
            <li class="header-right-item">
              <LayoutTopHeaderToggleFullscreenBtn />
            </li>
            <li class="header-right-item">
              <LayoutTopHeaderNotificationsLists />
            </li>
            <li class="header-right-item">
              <LayoutTopHeaderAdminProfile />
            </li>
            <li class="header-right-item">
              <LayoutTopHeaderSettingsBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "TopHeader",
  setup() {
    const stateStoreInstance = stateStore;
    const isSticky = ref(false);

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
