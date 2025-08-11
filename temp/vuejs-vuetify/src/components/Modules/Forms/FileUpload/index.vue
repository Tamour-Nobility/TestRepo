<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Simple File Uploader</h5>
    </div>
    <FileUploader />
  </v-card>
</template>

<script>
import FileUploader from "@/components/Common/FileUploader.vue";

export default {
  name: "FileUpload",
  components: {
    FileUploader,
  },
};
</script>
