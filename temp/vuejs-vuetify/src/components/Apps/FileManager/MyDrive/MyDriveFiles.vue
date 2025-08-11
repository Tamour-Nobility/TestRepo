<template>
  <v-card
    class="my-drive-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">My Drive</h5>
    </div>
    <div class="drive-card-content">
      <div class="row">
        <div class="col-xxl-3 col-sm-6">
          <div class="box bg-primary-50 border-radius">
            <div class="d-flex align-items-center justify-space-between">
              <v-checkbox color="primary"></v-checkbox>
              <div class="action">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="dot-menu p-0 d-inline-block border-radius-0"
                    >
                      <i class="ri-more-fill"></i>
                    </button>
                  </template>
                  <v-list class="card-header-menu menu-content">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="title d-flex align-items-center">
              <div class="icon text-primary lh-1">
                <i class="material-symbols-outlined"> folder_open </i>
              </div>
              <h6 class="mb-0">Assets</h6>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="d-block text-black"> 387 Files </span>
              <span class="d-block text-black"> 4.5 GB </span>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="box bg-orange-50 border-radius">
            <div class="d-flex align-items-center justify-space-between">
              <v-checkbox color="primary"></v-checkbox>
              <div class="action">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="dot-menu p-0 d-inline-block border-radius-0"
                    >
                      <i class="ri-more-fill"></i>
                    </button>
                  </template>
                  <v-list class="card-header-menu menu-content">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="title d-flex align-items-center">
              <div class="icon text-orange lh-1">
                <i class="material-symbols-outlined"> news </i>
              </div>
              <h6 class="mb-0">Projects</h6>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="d-block text-black"> 123 Files </span>
              <span class="d-block text-black"> 1.4 GB </span>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="box bg-success-50 border-radius">
            <div class="d-flex align-items-center justify-space-between">
              <v-checkbox color="primary"></v-checkbox>
              <div class="action">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="dot-menu p-0 d-inline-block border-radius-0"
                    >
                      <i class="ri-more-fill"></i>
                    </button>
                  </template>
                  <v-list class="card-header-menu menu-content">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="title d-flex align-items-center">
              <div class="icon text-success lh-1">
                <i class="material-symbols-outlined"> folder </i>
              </div>
              <h6 class="mb-0">Personal</h6>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="d-block text-black"> 435 Files </span>
              <span class="d-block text-black"> 5.2 GB </span>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="box bg-purple-50 border-radius">
            <div class="d-flex align-items-center justify-space-between">
              <v-checkbox color="primary"></v-checkbox>
              <div class="action">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="dot-menu p-0 d-inline-block border-radius-0"
                    >
                      <i class="ri-more-fill"></i>
                    </button>
                  </template>
                  <v-list class="card-header-menu menu-content">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="title d-flex align-items-center">
              <div class="icon text-purple lh-1">
                <i class="material-symbols-outlined"> topic </i>
              </div>
              <h6 class="mb-0">Templates</h6>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="d-block text-black"> 431 Files </span>
              <span class="d-block text-black"> 1.3 GB </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "MyDriveFiles",
};
</script>

<style lang="scss" scoped>
.my-drive-card {
  padding-bottom: 0 !important;

  .drive-card-content {
    .v-checkbox.v-input {
      margin: -35px -10px -30px -10px;
    }
    .box {
      padding: 22px 20px;
      border-radius: 7px;
      margin-bottom: 25px;

      .dot-menu {
        height: 21.59px;
        min-width: auto;
        margin-right: -2px;
        i {
          line-height: 21.59px;
          color: var(--bodyColor);
          font-size: 26px;
        }

        &:hover {
          color: var(--primaryColor);
        }
      }
      .title {
        margin-top: 35px;
      }
      .icon {
        margin-right: 10px;

        i {
          font-size: 45px;
        }
      }
      .info {
        margin-top: 40px;

        span {
          font-size: 13px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .my-drive-card {
    .drive-card-content {
      .box {
        padding: 17px;
        margin-bottom: 17px;

        .title {
          margin-top: 22px;
        }
        .icon {
          i {
            font-size: 40px;
          }
        }
        .info {
          margin-top: 20px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .my-drive-card {
    .drive-card-content {
      .box {
        padding: 20px;
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .my-drive-card {
    .drive-card-content {
      .box {
        padding: 20px;

        .title {
          margin-top: 35px;
        }
        .icon {
          i {
            font-size: 40px;
          }
        }
        .info {
          margin-top: 35px;
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
