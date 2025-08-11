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
        class="folder-card border-radius d-block bg-white border-0 shadow-none"
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
          <div class="title">
            <div :class="['icon', folder.iconClass, 'lh-1']">
              <v-img :src="folder.iconSrc" :alt="folder.iconAlt" />
            </div>
            <h6 class="mb-0">{{ folder.title }}</h6>
          </div>
          <div class="info d-flex align-items-center justify-space-between">
            <span class="d-block text-black">{{ folder.fileCount }} Files</span>
            <span class="d-block text-black">{{ folder.size }}</span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Personal",
  setup() {
    const folders = ref([
      {
        iconClass: "text-primary",
        iconSrc: require("@/assets/images/icons/png.png"),
        iconAlt: "png-image",
        title: "Projects",
        fileCount: 159,
        size: "4.5 GB",
      },
      {
        iconClass: "text-secondary",
        iconSrc: require("@/assets/images/icons/jpg.png"),
        iconAlt: "jpg-image",
        title: "Documents",
        fileCount: 522,
        size: "5.5 GB",
      },
      {
        iconClass: "text-success",
        iconSrc: require("@/assets/images/icons/txt.png"),
        iconAlt: "txt-image",
        title: "Media",
        fileCount: 995,
        size: "7.5 GB",
      },
      {
        iconClass: "text-danger",
        iconSrc: require("@/assets/images/icons/pdf.png"),
        iconAlt: "pdf-image",
        title: "Applications",
        fileCount: 39,
        size: "3.8 GB",
      },
      {
        iconClass: "text-warning",
        iconSrc: require("@/assets/images/icons/xl4.png"),
        iconAlt: "xl4-image",
        title: "ET Template",
        fileCount: 75,
        size: "2.2 GB",
      },
      {
        iconClass: "text-info",
        iconSrc: require("@/assets/images/icons/doc.png"),
        iconAlt: "doc-image",
        title: "React Template",
        fileCount: 357,
        size: "8.5 GB",
      },
      {
        iconClass: "text-purple",
        iconSrc: require("@/assets/images/icons/png.png"),
        iconAlt: "png-image",
        title: "Material UI",
        fileCount: 159,
        size: "4.5 GB",
      },
      {
        iconClass: "text-dark",
        iconSrc: require("@/assets/images/icons/jpg.png"),
        iconAlt: "jpg-image",
        title: "WP Themes",
        fileCount: 522,
        size: "5.5 GB",
      },
      {
        iconClass: "text-orange",
        iconSrc: require("@/assets/images/icons/txt.png"),
        iconAlt: "txt-image",
        title: "Personal Photos",
        fileCount: 995,
        size: "7.5 GB",
      },
      {
        iconClass: "text-primary",
        iconSrc: require("@/assets/images/icons/pdf.png"),
        iconAlt: "pdf-image",
        title: "Mobile Apps",
        fileCount: 39,
        size: "3.8 GB",
      },
      {
        iconClass: "text-secondary",
        iconSrc: require("@/assets/images/icons/xl4.png"),
        iconAlt: "xl4-image",
        title: "Important Files",
        fileCount: 75,
        size: "2.2 GB",
      },
      {
        iconClass: "lh-1",
        iconSrc: require("@/assets/images/icons/jpg.png"),
        iconAlt: "jpg-image",
        title: "Angular Template",
        fileCount: 357,
        size: "8.5 GB",
      },
    ]);
    return {
      folders,
    };
  },
});
</script>

<style lang="scss" scoped>
.folder-card {
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
      margin-top: 30px;
    }
    .icon {
      margin-bottom: 15px;
    }
    .info {
      margin-top: 35px;

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
