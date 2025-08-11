<template>
  <div class="page-banner-area text-center">
    <div class="container position-relative z-1">
      <h1 class="mb-0">
        {{ pageTitle }}
      </h1>
      <div class="shape1">
        <img src="~/assets/images/front-pages/shape3.png" alt="shape3" />
      </div>
      <div class="shape2">
        <img src="~/assets/images/front-pages/shape5.png" alt="shape5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["pageTitle"],
};
</script>

<style lang="scss" scoped>
.page-banner-area {
  padding-top: 195px;

  h1 {
    font-size: 60px;
    letter-spacing: -1.5px;
  }
  .shape1 {
    bottom: 0;
    z-index: -1;
    right: -30px;
    position: absolute;
    filter: blur(250px);
  }
  .shape2 {
    top: -220px;
    left: -50px;
    z-index: -1;
    position: absolute;
    filter: blur(150px);
  }
}
img {
  max-width: 100%;
  height: auto;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .page-banner-area {
    padding-top: 125px;

    h1 {
      font-size: 32px;
      letter-spacing: -0.5px;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .page-banner-area {
    padding-top: 145px;

    h1 {
      font-size: 40px;
      letter-spacing: -1px;
    }
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .page-banner-area {
    padding-top: 185px;

    h1 {
      font-size: 50px;
      letter-spacing: -1px;
    }
  }
}
</style>
