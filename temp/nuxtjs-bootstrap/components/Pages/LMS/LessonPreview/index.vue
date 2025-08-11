<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <video
        src="~/assets/images/video.mp4"
        class="w-100 rounded-3 mb-3 mb-md-4"
        controls
      ></video>
      <h3 class="fs-24">Introduction to Cybersecurity</h3>
      <p class="mb-md-4 mb-3">
        Node.js for Beginners: Alias animi labque, deserunt distinctio eum
        excepturi fuga iure labore magni molestias mollitia natus, officia pofro
        quis sunt temporibus veritatis voluptatem voluptatum.
      </p>

      <a href="#" class="btn btn-primary py-2 px-4 fw-medium fs-16">
        <span class="d-inline-block py-1">Next Tutoorial</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LessonPreview",
});
</script>
