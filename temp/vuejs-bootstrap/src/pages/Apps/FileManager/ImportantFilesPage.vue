<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Important" subTitle="Apps" />

    <div class="row justify-content-center">
      <div class="col-xl-3 col-lg-3 col-md-4">
        <Sidebar />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-8">
        <Important />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Sidebar from "../../../components/Apps/FileManager/Sidebar.vue";
import Important from "../../../components/Apps/FileManager/Important/index.vue";

export default defineComponent({
  name: "ImportantFilesPage",
  components: {
    PageTitle,
    Sidebar,
    Important,
  },
});
</script>
