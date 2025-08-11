<template>
  <v-card
    class="product-development-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Shopify Theme Development</h5>
    </div>
    <div class="development-card-content">
      <div class="info bg-primary border-radius">
        <div class="d-sm-flex align-items-center justify-space-between">
          <div class="item d-flex align-items-center">
            <div
              class="icon text-center rounded-circle text-white position-relative"
            >
              <i class="material-symbols-outlined"> for_you </i>
            </div>
            <div>
              <span class="info-title d-block text-white"> Client </span>
              <span class="info-sub-title fw-semibold d-block text-white">
                Innovatech
              </span>
            </div>
          </div>
          <div class="item d-flex align-items-center">
            <div
              class="icon text-center rounded-circle text-white position-relative"
            >
              <i class="material-symbols-outlined"> attach_money </i>
            </div>
            <div>
              <span class="info-title d-block text-white"> Budget </span>
              <span class="info-sub-title fw-semibold d-block text-white">
                $25,500
              </span>
            </div>
          </div>
          <div class="item d-flex align-items-center">
            <div
              class="icon text-center rounded-circle text-white position-relative"
            >
              <i class="material-symbols-outlined"> pace </i>
            </div>
            <div>
              <span class="info-title d-block text-white"> Duration </span>
              <span class="info-sub-title fw-semibold d-block text-white">
                360 hrs
              </span>
            </div>
          </div>
        </div>
        <v-progress-linear
          bg-color="grey-lighten-2
"
          color="orange-darken-3"
          height="7"
          model-value="60"
        ></v-progress-linear>
        <div class="d-flex align-items-center justify-space-between">
          <span class="d-block text-white"> Progress </span>
          <span class="d-block text-white"> 60% </span>
        </div>
      </div>
      <div class="d-flex align-items-center justify-space-between">
        <span class="d-block"> Project Started: 01 Mar 2024 </span>
        <span class="d-block"> Project Deadline: 25 Jun 2024 </span>
      </div>
      <span class="title d-block text-black fw-bold"> Project Details </span>
      <p>
        Vestibulum euismod nisi vitae orci placerat, vitae vehicula eros dictum.
        Phasellus ut pharetra felis. Nulla facilisi. Nullam congue semper nunc,
        at sodales magna laoreet id. Nullam et lacus vitae ligula pretium
        suscipit. Fusce nec viverra enim. Sed feugiat gravida nibh sit amet
        suscipit. Integer tempor sapien eget metus lacinia, nec finibus lacus
        tincidunt. Sed sodales tellus nec metus aliquam, nec dignissim arcu
        lobortis.
      </p>
      <ul class="list mb-0">
        <li>Outline the boundaries and deliverables of the project.</li>
        <li>List team members, their roles, and responsibilities.</li>
        <li>
          Specify the technology stack and tools to be used for development.
        </li>
        <li>Break down the project into manageable phases or sprints.</li>
        <li>Outline the design phase, including wireframing, prototyping</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ThemeDevelopment",
};
</script>

<style lang="scss" scoped>
.bg-primary {
  background-color: var(--primaryColor) !important;
}
.product-development-card {
  .development-card-content {
    .info {
      padding: 24px 24px 20px;
      margin-bottom: 14px;

      .icon {
        width: 45px;
        height: 45px;
        margin-right: 12px;
        background-color: #4936f5;

        i {
          left: 0;
          right: 0;
          top: 50%;
          font-size: 24px;
          margin-top: -1px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      .info-sub-title {
        font-size: 16px;
      }
      .v-progress-linear {
        margin: {
          top: 20px;
          bottom: 10px;
        }
      }
      .v-progress-linear__background {
        opacity: initial !important;
      }
    }
    .title {
      margin: {
        bottom: 10px;
        top: 25px;
      }
    }
    p {
      line-height: 1.7;
    }
    .list {
      padding-left: 22px;

      li {
        line-height: 1.7;
        color: var(--bodyColor);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .product-development-card {
    .development-card-content {
      .info {
        padding: 17px;

        .icon {
          i {
            font-size: 22px;
          }
        }
        .info-sub-title {
          font-size: 14px;
        }
        .item {
          margin-bottom: 12px;
        }
        .v-progress-linear {
          margin-top: 15px;
        }
      }
      .title {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .product-development-card {
    .development-card-content {
      .info {
        padding: 20px;

        .item {
          margin-bottom: 0;
        }
      }
      .title {
        margin-top: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product-development-card {
    .development-card-content {
      .info {
        .info-sub-title {
          font-size: 15px;
        }
      }
      .title {
        margin-top: 20px;
      }
    }
  }
}
</style>
