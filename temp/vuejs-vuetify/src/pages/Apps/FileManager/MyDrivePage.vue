<template>
  <PageTitle pageTitle="File Manager" subTitle="Apps" />

  <v-row>
    <v-col cols="12" lg="3" md="12">
      <Sidebar />
    </v-col>
    <v-col cols="12" lg="9" md="12">
      <MyDriveFiles />
      <RecentFiles />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../components/Common/PageTitle.vue";
import Sidebar from "../../../components/Apps/FileManager/Sidebar.vue";
import MyDriveFiles from "../../../components/Apps/FileManager/MyDrive/MyDriveFiles.vue";
import RecentFiles from "../../../components/Apps/FileManager/MyDrive/RecentFiles.vue";

export default defineComponent({
  name: "MyDrivePage",
  components: {
    PageTitle,
    Sidebar,
    MyDriveFiles,
    RecentFiles,
  },
});
</script>
