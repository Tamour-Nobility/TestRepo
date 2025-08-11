<template>
  <div class="cta-area ptb-150">
    <div class="container position-relative z-1">
      <div class="cta-content text-center ml-auto mr-auto">
        <h2>Unlock a world of possibilities with Trezo Dashboard.</h2>
        <p>
          Experience the difference with Trezo Dashboard. Sign up for a free
          trial today and see how our intuitive platform can revolutionize your
          data analysis process.
        </p>
        <RouterLink to="/dashboard" class="btn">
          <i class="material-symbols-outlined"> person </i>
          Get started - It is free
        </RouterLink>
      </div>
      <div class="shape1">
        <v-img src="@/assets/images/front-pages/shape1.png" alt="shape1" />
      </div>
      <div class="shape2">
        <v-img src="@/assets/images/front-pages/shape2.png" alt="shape2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTA",
};
</script>

<style lang="scss" scoped>
.cta-area {
  .shape1 {
    left: 10px;
    top: -200px;
    z-index: -1;
    position: absolute;
    filter: blur(150px);
  }
  .shape2 {
    top: 150px;
    right: 25px;
    z-index: -1;
    position: absolute;
    filter: blur(125px);
  }
}
.cta-content {
  max-width: 830px;

  h2 {
    font-size: 48px;
    margin-bottom: 35px;
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
    margin-top: 30px;
    border-radius: 7px;
    padding: 14px 17px;
    display: inline-block;
    color: var(--whiteColor);
    background-color: var(--purpleColor);
    font: {
      size: 16px;
      weight: 500;
    }
    i {
      position: relative;
      top: 4px;
      line-height: 0;
    }
  }
}
img {
  width: 100%;
  height: auto;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .cta-area {
    .shape2 {
      display: none;
    }
  }
  .cta-content {
    max-width: 100%;

    h2 {
      font-size: 28px;
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
  .cta-area {
    .shape2 {
      display: none;
    }
  }
  .cta-content {
    max-width: 680px;

    h2 {
      font-size: 36px;
      margin-bottom: 20px;
      letter-spacing: -0.8px;
    }
    p {
      max-width: 650px;
      font-size: 15px;
    }
    .btn {
      margin-top: 10px;
      font-size: 14px;

      i {
        font-size: 22px;
      }
    }
    .shape2 {
      display: none;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .cta-content {
    max-width: 800px;

    h2 {
      font-size: 45px;
      margin-bottom: 25px;
      letter-spacing: -1.2px;
    }
    p {
      max-width: 680px;
      font-size: 16px;
    }
    .btn {
      margin-top: 20px;
      font-size: 15px;
    }
  }
}
</style>
