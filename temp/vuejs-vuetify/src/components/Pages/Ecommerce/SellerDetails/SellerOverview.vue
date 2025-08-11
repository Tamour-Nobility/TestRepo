<template>
  <v-card
    class="seller-overview-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Seller Overview</h5>
    </div>
    <v-row>
      <v-col cols="12" lg="3" sm="6">
        <div class="box bg-primary-50 border-radius">
          <div class="d-flex align-items-center">
            <div class="icon text-primary lh-1">
              <i class="material-symbols-outlined"> settings_account_box </i>
            </div>
            <div>
              <span class="d-block"> Total Orders </span>
              <h5 class="mb-0">7051</h5>
            </div>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="sub-title d-block"> Order this month </span>
            <span class="info-badge d-inline-block"> +0.75% </span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <div class="box bg-orange-50 border-radius">
          <div class="d-flex align-items-center">
            <div class="icon text-orange lh-1">
              <i class="material-symbols-outlined"> settings_timelapse </i>
            </div>
            <div>
              <span class="d-block"> Total Earnings </span>
              <h5 class="mb-0">$23.91k</h5>
            </div>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="sub-title d-block"> Earnings this month </span>
            <span class="info-badge down d-inline-block"> -1.25% </span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <div class="box bg-success-50 border-radius">
          <div class="d-flex align-items-center">
            <div class="icon text-success lh-1">
              <i class="material-symbols-outlined"> assignment_return </i>
            </div>
            <div>
              <span class="d-block"> Total Refunds </span>
              <h5 class="mb-0">178</h5>
            </div>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="sub-title d-block"> Refunds this month </span>
            <span class="info-badge d-inline-block"> +4.75% </span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <div class="box bg-purple-50 border-radius">
          <div class="d-flex align-items-center">
            <div class="icon text-purple lh-1">
              <i class="material-symbols-outlined"> discover_tune </i>
            </div>
            <div>
              <span class="d-block"> Conversion Rate </span>
              <h5 class="mb-0">12.21%</h5>
            </div>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="sub-title d-block"> Conversion rate this month </span>
            <span class="info-badge d-inline-block"> +1.11% </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "SellerOverview",
};
</script>

<style lang="scss" scoped>
.seller-overview-card {
  padding-bottom: 0;
  .box {
    padding: 22px 20px;
    border-radius: 7px;

    .icon {
      margin-right: 12px;

      i {
        font-size: 40px;
      }
    }
    h5 {
      font-size: 20px;
      margin-top: 5px;
    }
    .info {
      margin-top: 25px;

      .sub-title {
        font-size: 13px;
      }
      .info-badge {
        font-size: 13px;
        color: #1e8308;
        padding: 3px 8.3px;
        border-radius: 100px;
        border: 1px solid #82fc5a;
        background-color: #d8ffc8;

        &.down {
          border-color: #ffcea9;
          color: var(--dangerColor);
          background-color: #ffe1dd;
        }
      }
      .users {
        img {
          width: 34px;
          height: 34px;
          margin-right: -14px;
          border: 1px solid var(--whiteColor);
        }
        span {
          width: 34px;
          height: 34px;
          font-size: 12px;
          border: 1px solid var(--whiteColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .seller-overview-card {
    .box {
      padding: 17px;
      margin-bottom: 17px;

      .icon {
        i {
          font-size: 35px;
        }
      }
      h5 {
        font-size: 18px;
        margin-top: 7px;
      }
      .info {
        margin-top: 12px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .seller-overview-card {
    .row {
      margin: {
        left: -8.5px;
        right: -8.5px;
      }
      .col-sm-6 {
        padding: {
          left: 8.5px;
          right: 8.5px;
        }
      }
    }
    .box {
      padding: 20px;
      margin-bottom: 20px;

      .info {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .seller-overview-card {
    .box {
      padding: 20px;

      h5 {
        font-size: 19px;
      }
      .info {
        margin-top: 20px;
      }
    }
  }
}
</style>
