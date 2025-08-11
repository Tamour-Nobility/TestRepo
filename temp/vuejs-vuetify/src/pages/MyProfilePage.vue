<template>
  <PageTitle pageTitle="My Profile" subTitle="Error" />

  <MyProfile />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MyProfile from "@/components/Others/MyProfile/index.vue";

export default defineComponent({
  name: "MyProfilePage",
  components: {
    PageTitle,
    MyProfile,
  },
});
</script>
