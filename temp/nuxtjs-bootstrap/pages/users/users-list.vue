<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Users List" subTitle="Users" />

    <PagesUsersUsersList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersListPage",
});
</script>
