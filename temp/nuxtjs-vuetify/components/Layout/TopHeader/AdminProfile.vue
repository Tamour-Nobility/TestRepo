<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <button class="profile-btn align-items-center" v-bind="props">
        <v-img src="~/assets/images/admin.png" alt="admin" />
        <span class="fw-semibold text-black">Olivia</span>
      </button>
    </template>
    <v-list class="profile-menu-dropdown">
      <div class="admin d-flex align-items-center">
        <v-img src="~/assets/images/admin.png" alt="admin-image" />
        <div>
          <span class="d-block text-black fw-medium"> Olivia John </span>
          <span class="d-block"> Marketing Manager </span>
        </div>
      </div>
      <ul class="list pl-0 mt-0 mb-0 list-unstyled">
        <li>
          <router-link to="/my-profile" class="d-block position-relative">
            <i class="material-symbols-outlined">account_circle</i>
            My Profile
          </router-link>
        </li>
        <li>
          <router-link to="/apps/chat" class="d-block position-relative">
            <i class="material-symbols-outlined">chat</i> Messages
          </router-link>
        </li>
        <li>
          <router-link
            to="/apps/file-manager/my-drive"
            class="d-block position-relative"
          >
            <i class="material-symbols-outlined">format_list_bulleted</i>
            My Task
          </router-link>
        </li>
        <li>
          <router-link
            to="/authentication/sign-in"
            class="d-block position-relative"
          >
            <i class="material-symbols-outlined">credit_card</i>
            Billing
          </router-link>
        </li>
      </ul>
      <div class="border-top"></div>
      <ul class="list pl-0 mt-0 mb-0 list-unstyled">
        <li>
          <router-link to="/profile" class="d-block position-relative">
            <i class="material-symbols-outlined">settings</i>
            Settings
          </router-link>
        </li>
        <li>
          <router-link
            to="/settings/account-settings"
            class="d-block position-relative"
          >
            <i class="material-symbols-outlined">support</i>
            Support
          </router-link>
        </li>
        <li>
          <router-link
            to="/authentication/lock-screen"
            class="d-block position-relative"
          >
            <i class="material-symbols-outlined">lock </i>
            Lock Screen
          </router-link>
        </li>
        <li>
          <router-link
            to="/authentication/logout"
            class="d-block position-relative"
          >
            <i class="material-symbols-outlined">logout </i>
            Logout
          </router-link>
        </li>
      </ul>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "AdminProfile",
};
</script>
