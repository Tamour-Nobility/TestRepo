<template>
  <div class="banner-area">
    <div class="container position-relative z-1">
      <div class="banner-content text-center ml-auto mr-auto">
        <h1>Insights On-the-Go: Access Your Dashboard Anywhere, Anytime</h1>
        <p>
          Our intuitive interface transforms complex data into actionable
          insights, empowering you to make informed decisions with confidence.
        </p>
        <NuxtLink class="btn" to="/dashboard">
          <i class="material-symbols-outlined"> person </i>
          Get started - It is free
        </NuxtLink>
      </div>
      <div class="banner-image text-center">
        <v-img
          src="~/assets/images/front-pages/dashboard.png"
          alt="dashboard-image"
        />
      </div>
      <div class="shape1">
        <img src="~/assets/images/front-pages/shape3.png" alt="shape3" />
      </div>
      <div class="shape2">
        <img src="~/assets/images/front-pages/shape2.png" alt="shape2" />
      </div>
      <div class="shape3">
        <img src="~/assets/images/front-pages/shape4.png" alt="shape4" />
      </div>
      <div class="shape4">
        <img src="~/assets/images/front-pages/shape5.png" alt="shape5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
});
</script>

<style lang="scss" scoped>
.banner-area {
  padding-top: 185px;

  .banner-image {
    .v-responsive {
      justify-content: center;
    }
  }
  .shape1 {
    z-index: -1;
    right: -30px;
    bottom: 50px;
    position: absolute;
    filter: blur(150px);
  }
  .shape2 {
    left: 25px;
    top: -210px;
    z-index: -1;
    position: absolute;
    filter: blur(125px);
  }
  .shape3 {
    top: -125px;
    z-index: -1;
    right: 260px;
    position: absolute;
    filter: blur(75px);
  }
  .shape4 {
    bottom: 0;
    left: -50px;
    z-index: -1;
    filter: blur(75px);
    position: absolute;
  }
}
.banner-content {
  max-width: 935px;
  margin-bottom: 60px;

  h1 {
    font-size: 60px;
    margin-bottom: 30px;
    letter-spacing: -1.5px;
  }
  p {
    max-width: 740px;
    font-size: 18px;
    margin: {
      left: auto;
      right: auto;
    }
  }
  .btn {
    height: auto;
    min-width: auto;
    margin-top: 25px;
    border-radius: 7px;
    padding: 12px 17px;
    display: inline-flex;
    color: var(--whiteColor);
    background-color: var(--primaryColor);
    font: {
      size: 16px;
      weight: 500;
    }
    i {
      margin-right: 5px;
    }
    &:not(:disabled) {
      color: var(--whiteColor);
    }
  }
}
img {
  max-width: 100%;
  height: auto;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .banner-area {
    padding-top: 125px;
  }
  .banner-content {
    max-width: 100%;
    margin-bottom: 30px;

    h1 {
      font-size: 32px;
      margin-bottom: 13px;
      letter-spacing: -0.5px;
    }
    p {
      max-width: 100%;
      font-size: 13px;
    }
    .btn {
      margin-top: 5px;
      font-size: 13px;
      i {
        font-size: 20px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-area {
    padding-top: 145px;
  }
  .banner-content {
    max-width: 100%;
    margin-bottom: 45px;

    h1 {
      font-size: 40px;
      margin-bottom: 22px;
      letter-spacing: -1px;
    }
    p {
      max-width: 600px;
      font-size: 15px;
    }
    .btn {
      margin-top: 12px;
      font-size: 14px;
      i {
        font-size: 22px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .banner-area {
    padding-top: 185px;
  }
  .banner-content {
    max-width: 100%;

    h1 {
      font-size: 50px;
      margin-bottom: 25px;
      letter-spacing: -1px;
    }
    p {
      max-width: 650px;
      font-size: 16px;
    }
    .btn {
      margin-top: 20px;
      font-size: 15px;
    }
  }
}
</style>
