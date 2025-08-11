<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="File Upload" subTitle="Forms" />

    <FileUpload />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import FileUpload from "@/components/Modules/Forms/FileUpload/index.vue";

export default defineComponent({
  name: "FileUploadPage",
  components: {
    PageTitle,
    FileUpload,
  },
});
</script>
