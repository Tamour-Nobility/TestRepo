<template>
  <v-card
    class="profile-card mb-25 border-radius d-block bg-white border-0 shadow-none p-0"
  >
    <div class="profile-card-content">
      <div class="cover-image position-relative border-top-radius">
        <v-img
          src="@/assets/images/profile-cover.jpg"
          class="border-top-radius"
          alt="cover-image"
        />
        <v-menu>
          <template v-slot:activator="{ props }">
            <button type="button" v-bind="props" class="edit-btn">
              Update Cover Photo
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Upload Photo
            </button>
            <button type="button" class="bg-transparent border-none">
              Reposition
            </button>
            <button type="button" class="bg-transparent border-none">
              Remove
            </button>
          </v-list>
        </v-menu>
      </div>
      <div class="profile-content">
        <div class="d-md-flex align-items-end justify-space-between">
          <div class="d-md-flex align-items-end">
            <div class="image position-relative">
              <v-img
                src="@/assets/images/profile.jpg"
                class="profile-image rounded-circle"
                alt="profile-image"
              />
              <v-img
                src="@/assets/images/icons/verified.svg"
                class="verified"
                alt="verified"
              />
            </div>
            <div class="title">
              <span class="d-block text-black fw-bold"> Alice Johnson </span>
              <span class="d-block fw-medium"> Product Designer </span>
            </div>
          </div>
          <div class="btn-box">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button type="button" v-bind="props" class="edit-btn">
                  <i class="material-symbols-outlined"> edit </i>
                  Edit
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  See Photo
                </button>
                <button type="button" class="bg-transparent border-none">
                  Upload Photo
                </button>
                <button type="button" class="bg-transparent border-none">
                  Remove
                </button>
              </v-list>
            </v-menu>
            <v-menu>
              <template v-slot:activator="{ props }">
                <button type="button" v-bind="props" class="edit-btn">
                  <i class="material-symbols-outlined"> share </i>
                  Share
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  Facebook
                </button>
                <button type="button" class="bg-transparent border-none">
                  X
                </button>
                <button type="button" class="bg-transparent border-none">
                  Instagram
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>

<style lang="scss" scoped>
.profile-card {
  padding: 0 !important;
  .profile-card-content {
    .cover-image {
      .v-img {
        margin-bottom: -3px;
      }
      .edit-btn {
        right: 28px;
        bottom: 28px;
        height: auto;
        min-width: auto;
        border-radius: 7px;
        position: absolute;
        padding: 10.5px 16px;
        color: var(--whiteColor);
        background-color: transparent;
        border: 1px solid var(--whiteColor);
      }
    }
    .profile-content {
      margin-top: -60px;
      padding: {
        left: 30px;
        right: 30px;
        bottom: 45px;
      }
      .image {
        width: 160px;

        .profile-image {
          margin-bottom: -3.5px;
          border: 2px solid var(--whiteColor);
        }
        .verified {
          right: -7px;
          bottom: 11px;
          position: absolute;
        }
      }
      .title {
        margin-left: 30px;

        span {
          font-size: 24px;

          &:not(:first-child) {
            margin-top: 5px;
            font-size: 16px;
          }
        }
      }
      .btn-box {
        button {
          margin-right: 12px;
          padding: 12px 27px;
          border-radius: 7px;
          color: var(--bodyColor);
          border: 1px solid var(--borderColor);
          font: {
            size: 16px;
            weight: 500;
          }
          align-items: center;

          i {
            font-size: 20px;
            margin-right: 8px;
            position: relative;
            top: 4px;
          }
          &:nth-child(2) {
            margin-right: 0;
            color: var(--whiteColor);
            border-color: var(--primaryColor);
            background-color: var(--primaryColor);
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .profile-card {
    .profile-card-content {
      .cover-image {
        .edit-btn {
          right: 0;
          bottom: 0;
          position: relative;
          color: var(--blackColor);
          border-color: var(--blackColor);
          margin: {
            left: 17px;
            top: 17px;
          }
        }
      }
      .profile-content {
        margin-top: 17px;
        padding: {
          left: 20px;
          right: 20px;
          bottom: 17px;
        }
        .image {
          .profile-image {
            border-color: #f7f7f7;
          }
        }
        .title {
          margin: {
            left: 0;
            top: 12px;
          }
          span {
            font-size: 18px;

            &:not(:first-child) {
              margin-top: 6px;
              font-size: 13px;
            }
          }
        }
        .btn-box {
          margin-top: 17px;

          margin-right: 10px;
          padding: 11px 25px;
          font-size: 13px;

          i {
            font-size: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .profile-card {
    .profile-card-content {
      .cover-image {
        .edit-btn {
          right: 20px;
          bottom: 20px;
        }
      }
      .profile-content {
        padding: {
          left: 25px;
          right: 25px;
          bottom: 40px;
        }
        .title {
          margin-left: 25px;

          span {
            font-size: 20px;

            &:not(:first-child) {
              font-size: 14px;
            }
          }
        }
        .btn-box {
          padding: 11px 25px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
