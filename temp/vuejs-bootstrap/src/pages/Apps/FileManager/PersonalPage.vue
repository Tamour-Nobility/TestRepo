<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Personal" subTitle="Apps" />

    <div class="row justify-content-center">
      <div class="col-xl-3 col-lg-3 col-md-4">
        <Sidebar />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-8">
        <Personal />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Sidebar from "../../../components/Apps/FileManager/Sidebar.vue";
import Personal from "../../../components/Apps/FileManager/Personal/index.vue";

export default defineComponent({
  name: "PersonalPage",
  components: {
    PageTitle,
    Sidebar,
    Personal,
  },
});
</script>
