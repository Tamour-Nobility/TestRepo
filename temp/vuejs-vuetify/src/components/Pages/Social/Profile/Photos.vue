<template>
  <v-card
    class="photos-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Photos</h5>
    </div>
    <div class="photos-content">
      <div class="row">
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product6.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product7.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product8.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product9.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product10.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product11.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product12.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product13.jpg"
              alt="photo-image"
            />
          </a>
        </div>
        <div class="col-4">
          <a href="#" class="d-block">
            <v-img
              src="@/assets/images/products/product14.jpg"
              alt="photo-image"
            />
          </a>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Photos",
};
</script>

<style lang="scss" scoped>
.photos-card {
  .photos-content {
    a {
      border-radius: 5px;

      .v-img {
        margin-bottom: -3px;
        border-radius: 5px;
      }
    }
    .row {
      margin: -5px;

      .col-4 {
        padding: 5px;
      }
    }
  }
}
</style>
