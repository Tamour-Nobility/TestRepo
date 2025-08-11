<template>
  <v-card
    class="total-courses-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="courses-card-content">
      <span class="d-block text-body"> Total Courses </span>
      <h5 class="mb-0">45.6k</h5>
      <div
        class="icon ml-auto mr-auto text-secondary bg-secondary-100 rounded-circle mx-auto d-flex align-items-center justify-content-center"
      >
        <i class="material-symbols-outlined"> auto_stories </i>
      </div>
      <div class="info d-flex align-items-center justify-space-between">
        <span class="d-block text-body"> This Month </span>
        <span class="lh-1 text-success">
          <i class="material-symbols-outlined"> trending_up </i>
        </span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TotalCourses",
};
</script>

<style lang="scss" scoped>
.total-courses-card {
  .courses-card-content {
    h5 {
      font-size: 20px;
      margin-top: 5px;
    }
    .icon {
      width: 77px;
      height: 77px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
      i {
        font-size: 32px;
      }
    }
    .info {
      span {
        font-size: 13px;

        i {
          font-size: 20px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .total-courses-card {
    .courses-card-content {
      h5 {
        font-size: 18px;
        margin-top: 7px;
      }
      .icon {
        width: 60px;
        height: 60px;
        margin: {
          top: 10px;
          bottom: 10px;
        }
        i {
          font-size: 28px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .total-courses-card {
    .courses-card-content {
      h5 {
        font-size: 19px;
        margin-top: 7px;
      }
      .icon {
        width: 75px;
        height: 75px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
