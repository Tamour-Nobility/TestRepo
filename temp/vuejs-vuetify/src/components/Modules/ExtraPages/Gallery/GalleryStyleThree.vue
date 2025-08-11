<template>
  <v-card
    class="border-radius trezo-card d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Gallery Style - 3</h5>
    </div>
    <div class="row gallery-list">
      <div class="col-lg-4 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery1.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-4 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery2.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-4 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery3.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-6 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery4.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-6 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery5.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-3 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery6.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-3 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery7.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-3 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery8.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
      <div class="col-lg-3 col-sm-4 col-md-4 mb-25">
        <v-img
          src="@/assets/images/gallery/gallery9.jpg"
          class="border-radius"
          alt="gallery-image"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "GalleryStyleThree",
};
</script>

<style lang="scss" scoped>
.gallery-list {
  margin-bottom: -25px !important;

  .v-img {
    margin-bottom: -3px;
  }
}
</style>
