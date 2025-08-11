<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      md="4"
      sm="6"
      v-for="(folder, index) in folders"
      :key="index"
    >
      <v-card
        class="project-folder-card border-radius d-block bg-white border-0 shadow-none"
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
            <div :class="['icon', folder.iconClass, 'lh-1']">
              <v-img :src="folder.iconSrc" :alt="folder.iconAlt" />
            </div>
            <h6 class="mb-0">{{ folder.title }}</h6>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="d-block text-black">
              {{ folder.fileCount }} Files
            </span>
            <span class="d-block text-black"> {{ folder.size }} GB </span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";

import icon1 from "~/assets/images/icons/png.png";
import icon2 from "~/assets/images/icons/jpg.png";
import icon3 from "~/assets/images/icons/txt.png";
import icon4 from "~/assets/images/icons/pdf.png";
import icon5 from "~/assets/images/icons/xl4.png";
import icon6 from "~/assets/images/icons/doc.png";

const folders = ref([
  {
    iconClass: "text-primary",
    iconSrc: icon1,
    iconAlt: "png-image",
    title: "ET Template",
    fileCount: 159,
    size: "4.5 GB",
  },
  {
    iconClass: "text-secondary",
    iconSrc: icon2,
    iconAlt: "jpg-image",
    title: "React Template",
    fileCount: 522,
    size: "5.5 GB",
  },
  {
    iconClass: "text-success",
    iconSrc: icon3,
    iconAlt: "txt-image",
    title: "Material UI",
    fileCount: 995,
    size: "7.5 GB",
  },
  {
    iconClass: "text-danger",
    iconSrc: icon4,
    iconAlt: "pdf-image",
    title: "WP Themes",
    fileCount: 39,
    size: "3.8 GB",
  },
  {
    iconClass: "text-warning",
    iconSrc: icon5,
    iconAlt: "xl4-image",
    title: "Personal Photos",
    fileCount: 75,
    size: "2.2 GB",
  },
  {
    iconClass: "text-info",
    iconSrc: icon6,
    iconAlt: "doc-image",
    title: "Mobile Apps",
    fileCount: 357,
    size: "8.5 GB",
  },
  {
    iconClass: "text-purple",
    iconSrc: icon1,
    iconAlt: "png-image",
    title: "Important Files",
    fileCount: 159,
    size: "4.5 GB",
  },
  {
    iconClass: "text-dark",
    iconSrc: icon2,
    iconAlt: "jpg-image",
    title: "Angular Template",
    fileCount: 522,
    size: "5.5 GB",
  },
  {
    iconClass: "text-orange",
    iconSrc: icon3,
    iconAlt: "txt-image",
    title: "Projects",
    fileCount: 995,
    size: "7.5 GB",
  },
  {
    iconClass: "text-primary",
    iconSrc: icon4,
    iconAlt: "pdf-image",
    title: "Documents",
    fileCount: 39,
    size: "3.8 GB",
  },
  {
    iconClass: "text-secondary",
    iconSrc: icon5,
    iconAlt: "xl4-image",
    title: "Media",
    fileCount: 75,
    size: "2.2 GB",
  },
  {
    iconClass: "lh-1",
    iconSrc: icon2,
    iconAlt: "jpg-image",
    title: "Applications",
    fileCount: 357,
    size: "8.5 GB",
  },
]);
</script>

<style lang="scss" scoped>
.project-folder-card {
  .folder-card-content {
    .v-checkbox.v-input {
      margin: -40px -10px -56px -10px;
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
