<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Add User" subTitle="Users" />

    <PagesUsersAddUser />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddUserPage",
});
</script>
