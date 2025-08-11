<template>
  <v-card
    class="congratulations-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="congratulations-card-content">
      <h5 class="fw-semibold">
        Congratulations, <span class="text-primary">Olivia!</span>
      </h5>
      <p>Best agent of the month</p>
      <h6 class="text-secondary">1.5k+</h6>
      <span class="d-block"> Ticket Solved </span>
      <a href="#"> View Profile </a>
      <v-img src="~/assets/images/trophy.gif" alt="trophy-image" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Congratulations",
};
</script>

<style lang="scss" scoped>
.congratulations-card {
  .congratulations-card-content {
    position: relative;

    h5 {
      margin-bottom: 3px;
    }
    p {
      margin-bottom: 14px;
    }
    h6 {
      font-size: 20px;
      margin-bottom: 4px;
    }
    a {
      height: auto;
      min-width: auto;
      color: #ecf0ff;
      margin-top: 18px;
      border-radius: 7px;
      padding: 5.5px 9.3px;
      display: inline-block;
      background-color: var(--primaryColor);
      font: {
        size: var(--fontSize);
        weight: 500;
      }
    }
    .v-img {
      right: -25px;
      bottom: -20px;
      max-width: 152px;
      position: absolute;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .congratulations-card {
    .congratulations-card-content {
      h5 {
        margin-bottom: 3px;
      }
      p {
        margin-bottom: 12px;
      }
      h6 {
        font-size: 18px;
      }
      a {
        font-size: 13px;
        margin-top: 15px;
      }
      .v-img {
        right: -17px;
        bottom: -17px;
        max-width: 130px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .congratulations-card {
    .congratulations-card-content {
      h6 {
        font-size: 19px;
      }
      .v-img {
        right: 0;
        bottom: 0;
        max-width: 155px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .congratulations-card {
    .congratulations-card-content {
      .v-img {
        right: -20px;
        bottom: -20px;
        max-width: 130px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .congratulations-card {
    .congratulations-card-content {
      .v-img {
        right: -20px;
        bottom: -20px;
        max-width: 135px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .congratulations-card {
    .congratulations-card-content {
      .v-img {
        right: 0;
        bottom: 0;
      }
    }
  }
}
</style>
