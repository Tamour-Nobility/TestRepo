<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Profile" subTitle="Social" />

    <Profile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Profile from "@/components/Pages/Social/Profile/index.vue";

export default defineComponent({
  name: "EditAnEventPage",
  components: {
    PageTitle,
    Profile,
  },
});
</script>
