<template>
  <v-card
    class="projects-overview-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Projects Overview</h5>
    </div>
    <div class="overview-card-content">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="box bg-primary-50 border-radius">
            <div class="d-flex align-items-center">
              <div class="icon text-primary lh-1">
                <i class="material-symbols-outlined">history_toggle_off</i>
              </div>
              <div>
                <span class="d-block">Total Hours</span>
                <h5 class="mb-0">102</h5>
              </div>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="sub-title d-block">Hours this week</span>
              <span class="info-badge d-inline-block">+10</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="box bg-orange-50 border-radius">
            <div class="d-flex align-items-center">
              <div class="icon text-orange lh-1">
                <i class="material-symbols-outlined">local_cafe</i>
              </div>
              <div>
                <span class="d-block">Total Cup of Coffee</span>
                <h5 class="mb-0">89</h5>
              </div>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="sub-title d-block">Coffee this week</span>
              <span class="info-badge d-inline-block">+10%</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="box bg-success-50 border-radius">
            <div class="d-flex align-items-center">
              <div class="icon text-success lh-1">
                <i class="material-symbols-outlined">door_open</i>
              </div>
              <div>
                <span class="d-block">Total Days</span>
                <h5 class="mb-0">54</h5>
              </div>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="sub-title d-block">Days this week</span>
              <span class="info-badge down d-inline-block">-15%</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="box bg-purple-50 border-radius">
            <div class="d-flex align-items-center">
              <div class="icon text-purple lh-1">
                <i class="material-symbols-outlined">group</i>
              </div>
              <div>
                <span class="d-block">Team Members</span>
                <h5 class="mb-0">65+</h5>
              </div>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
              <span class="sub-title d-block">Hard Worker</span>
              <div class="users d-flex align-items-center">
                <v-img
                  src="@/assets/images/users/user15.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <v-img
                  src="@/assets/images/users/user14.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <v-img
                  src="@/assets/images/users/user13.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <v-img
                  src="@/assets/images/users/user12.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <span
                  class="text-white bg-primary d-flex align-items-center justify-content-center rounded-circle fw-medium"
                >
                  +55
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProjectsOverview",
};
</script>

<style lang="scss" scoped>
.projects-overview-card {
  padding-bottom: 0;

  .overview-card-content {
    .box {
      padding: 22px 20px;
      border-radius: 7px;

      .icon {
        margin-right: 10px;

        i {
          font-size: 40px;
          font-weight: 600;
        }
      }
      h5 {
        font-size: 20px;
        margin-top: 3px;
      }
      .info {
        margin-top: 23px;

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
          line-height: 1.2;

          &.down {
            border-color: #ffcea9;
            color: var(--dangerColor);
            background-color: #ffe1dd;
          }
        }
        .users {
          .v-img {
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
            z-index: 1;
          }
        }
      }
    }
    .v-col-sm-6 {
      &:nth-child(4) {
        .box {
          .info {
            margin-top: 15px;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .projects-overview-card {
    .overview-card-content {
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
      .v-col-sm-6 {
        &:nth-child(4) {
          .box {
            .info {
              margin-top: 12px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .projects-overview-card {
    .overview-card-content {
      .row {
        margin: {
          left: -8.5px;
          right: -8.5px;
        }
        .v-col-sm-6 {
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
      .v-col-sm-6 {
        &:nth-child(4) {
          .box {
            .info {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .projects-overview-card {
    .overview-card-content {
      .box {
        padding: 20px;

        h5 {
          font-size: 19px;
        }
        .info {
          margin-top: 20px;
        }
      }
      .v-col-sm-6 {
        &:nth-child(4) {
          .box {
            .info {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
