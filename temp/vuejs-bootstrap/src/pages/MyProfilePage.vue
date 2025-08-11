<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="My Profile" subTitle="Error" />

    <MyProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MyProfile from "@/components/Others/MyProfile/index.vue";

export default defineComponent({
  name: "WidgetsPage",
  components: {
    PageTitle,
    MyProfile,
  },
});
</script>
