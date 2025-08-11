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
              <SearchFrom />
            </li>
            <li>
              <WebApps />
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
              <DarkSwtichBtn />
            </li>
            <li class="header-right-item">
              <LanguageMenu />
            </li>
            <li class="header-right-item">
              <ToggleFullscreenBtn />
            </li>
            <li class="header-right-item">
              <NotificationsLists />
            </li>
            <li class="header-right-item">
              <AdminProfile />
            </li>
            <li class="header-right-item">
              <SettingsBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "../../../utils/store";

import SearchFrom from "./SearchFrom.vue";
import WebApps from "./WebApps.vue";
import DarkSwtichBtn from "./DarkSwtichBtn.vue";
import LanguageMenu from "./LanguageMenu.vue";
import ToggleFullscreenBtn from "./ToggleFullscreenBtn.vue";
import NotificationsLists from "./NotificationsLists.vue";
import AdminProfile from "./AdminProfile.vue";
import SettingsBtn from "./SettingsBtn.vue";

export default defineComponent({
  name: "TopHeader",
  components: {
    SearchFrom,
    WebApps,
    DarkSwtichBtn,
    LanguageMenu,
    ToggleFullscreenBtn,
    NotificationsLists,
    AdminProfile,
    SettingsBtn,
  },
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
