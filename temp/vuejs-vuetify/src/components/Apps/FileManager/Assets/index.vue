<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      md="4"
      sm="6"
      v-for="folder in folders"
      :key="folder.title"
    >
      <v-card
        class="assets-folder-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="folder-card-content">
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
            <div :class="['icon lh-1', folder.iconClass]">
              <i class="material-symbols-outlined">folder_open</i>
            </div>
            <h6 class="mb-0">{{ folder.title }}</h6>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="d-block text-black">{{ folder.files }} Files</span>
            <span class="d-block text-black">{{ folder.size }} GB</span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Assets",
  data() {
    return {
      folders: [
        { title: "Projects", files: 159, size: 4.5, iconClass: "text-primary" },
        {
          title: "Documents",
          files: 522,
          size: 5.5,
          iconClass: "text-secondary",
        },
        { title: "Media", files: 995, size: 7.5, iconClass: "text-success" },
        {
          title: "Applications",
          files: 39,
          size: 3.8,
          iconClass: "text-danger",
        },
        {
          title: "ET Template",
          files: 75,
          size: 2.2,
          iconClass: "text-warning",
        },
        {
          title: "React Template",
          files: 357,
          size: 8.5,
          iconClass: "text-info",
        },
        {
          title: "Material UI",
          files: 159,
          size: 4.5,
          iconClass: "text-purple",
        },
        { title: "WP Themes", files: 522, size: 5.5, iconClass: "text-dark" },
        {
          title: "Personal Photos",
          files: 995,
          size: 7.5,
          iconClass: "text-orange",
        },
        {
          title: "Mobile Apps",
          files: 39,
          size: 3.8,
          iconClass: "text-primary",
        },
        {
          title: "Important Files",
          files: 75,
          size: 2.2,
          iconClass: "text-secondary",
        },
        { title: "Angular Template", files: 357, size: 8.5, iconClass: "" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.assets-folder-card {
  .folder-card-content {
    .v-checkbox.v-input {
      margin: -35px -10px -30px -10px;
    }
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
      margin-right: 12px;
      color: #ffb264;

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

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .assets-folder-card {
    .folder-card-content {
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

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .assets-folder-card {
    .folder-card-content {
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
