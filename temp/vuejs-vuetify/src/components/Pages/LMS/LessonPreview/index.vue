<template>
  <v-card
    class="lesson-preview-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="preview-card-content">
      <video controls class="border-radius">
        <source :src="videoSrc" class="border-radius" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h4>Introduction to Cybersecurity</h4>
      <p>
        Node.js for Beginners: Alias animi labque, deserunt distinctio eum
        excepturi fuga iure labore magni molestias mollitia natus, officia pofro
        quis sunt temporibus veritatis voluptatem voluptatum.
      </p>
      <a href="#" class="btn"> Next Tutorial </a>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "LessonPreview",
  data() {
    return {
      videoSrc: require("@/assets/images/video.mp4"),
    };
  },
};
</script>

<style lang="scss" scoped>
.lesson-preview-card {
  .preview-card-content {
    video {
      width: 100%;
      height: auto;
      border-radius: 7px;
    }
    h4 {
      margin: {
        top: 25px;
        bottom: 10px;
      }
    }
    p {
      margin-bottom: 20px;
    }
    .btn {
      height: auto;
      min-width: auto;
      border-radius: 7px;
      padding: 14px 22px;
      display: inline-block;
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      font: {
        size: 16px;
        weight: 500;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .lesson-preview-card {
    .preview-card-content {
      h4 {
        margin: {
          top: 17px;
          bottom: 10px;
        }
      }
      p {
        margin-bottom: 15px;
      }
      .btn {
        padding: 13px 20px;
        font-size: 14px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .lesson-preview-card {
    .preview-card-content {
      h4 {
        margin: {
          top: 20px;
          bottom: 10px;
        }
      }
      .btn {
        font-size: 15px;
      }
    }
  }
}
</style>
