<template>
  <v-card
    class="top-products-by-sales-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Products by Sales</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="products-card-content">
      <ul class="pl-0 mt-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-primary bg-primary-100 d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> smartphone </i>
            </div>
            <div>
              <span class="title d-block text-black fw-medium">
                Samsung Galaxy
              </span>
              <span class="d-block text-body"> Samsung </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black"> $96,455 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-purple bg-purple-100 d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> tap_and_play </i>
            </div>
            <div>
              <span class="title d-block text-black fw-medium">
                iPhone 15 Plus
              </span>
              <span class="d-block text-body"> Apple inc. </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black"> $89,670 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-danger bg-danger-100 d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> edgesensor_low </i>
            </div>
            <div>
              <span class="title d-block text-black fw-medium"> Vivo V30 </span>
              <span class="d-block text-body"> Vivo Ltd. </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black"> $75,329 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-success bg-success-100 d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> watch </i>
            </div>
            <div>
              <span class="title d-block text-black fw-medium">
                Watch Series 7
              </span>
              <span class="d-block text-body"> Apple </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black"> $98,256 </span>
        </li>
        <li class="d-flex align-items-center justify-space-between">
          <div class="d-flex align-items-center">
            <div
              class="icon text-primary bg-primary-100 d-flex align-items-center justify-content-center"
            >
              <i class="material-symbols-outlined"> headphones </i>
            </div>
            <div>
              <span class="title d-block text-black fw-medium">
                Sony WF-SP800N
              </span>
              <span class="d-block text-body"> Sony </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black"> $65,987 </span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TopProductsBySales",
};
</script>

<style lang="scss" scoped>
.top-products-by-sales-card {
  .products-card-content {
    ul {
      li {
        border-bottom: 1px solid #eceef2;
        padding-bottom: 14px;
        margin-bottom: 15px;

        .icon {
          width: 48px;
          height: 48px;
          margin-right: 15px;
          border-radius: 4px;
        }
        .title {
          margin-bottom: 5px;
        }
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .top-products-by-sales-card {
    .products-card-content {
      ul {
        li {
          padding-bottom: 13px;
          margin-bottom: 13px;

          .icon {
            width: 45px;
            height: 45px;
            margin-right: 12px;
          }
          .title {
            margin-bottom: 4px;
          }
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
  .top-products-by-sales-card {
    .products-card-content {
      ul {
        li {
          padding-bottom: 13px;
          margin-bottom: 13px;
        }
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
