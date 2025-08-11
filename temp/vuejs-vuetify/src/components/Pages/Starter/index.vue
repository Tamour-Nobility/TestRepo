<template>
  <v-card
    class="starter-card border-radius d-block bg-white border-0 shadow-none text-center"
  >
    <div class="starter-card-content">
      <v-img src="@/assets/images/starter.png" alt="starter-image" />
      <h4 class="ml-auto mr-auto">
        Create something beautiful, like a masterpiece or a really good
        sandwich.
      </h4>
      <RouterLink to="/dashboard"> Getting Started </RouterLink>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Starter",
};
</script>

<style lang="scss" scoped>
.starter-card {
  padding: {
    top: 80px;
    bottom: 80px;
  }
  .starter-card-content {
    .v-img {
      justify-content: center;
    }
    h4 {
      max-width: 550px;
      line-height: 1.5;
      margin: {
        top: 35px;
        bottom: 30px;
      }
    }
    a {
      height: auto;
      min-width: auto;
      min-height: auto;
      border-radius: 7px;
      padding: 14px 25px;
      font-weight: normal;
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
  .starter-card {
    padding: {
      top: 40px;
      bottom: 40px;
    }
    .starter-card-content {
      h4 {
        max-width: 100%;
        line-height: 1.3;
        margin: {
          top: 25px;
          bottom: 20px;
        }
      }
      a {
        padding: 14px 25px;
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
  .starter-card {
    padding: {
      top: 60px;
      bottom: 60px;
    }
    .starter-card-content {
      h4 {
        margin: {
          top: 30px;
          bottom: 25px;
        }
      }
      a {
        font-size: 15px;
      }
    }
  }
}
</style>
