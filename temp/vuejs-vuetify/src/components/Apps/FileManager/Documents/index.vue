<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      sm="6"
      lg="3"
      xxl="3"
      v-for="(item, index) in documentItems"
      :key="index"
    >
      <v-card
        class="document-folder-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="folder-card-content">
          <div :class="'icon text-' + item.color + ' lh-1'">
            <v-img :src="item.icon" :alt="item.alt" />
          </div>
          <h6>{{ item.title }}</h6>
          <div
            class="action-buttons d-flex justify-content-center align-items-center"
          >
            <button type="button" title="View">
              <i class="material-symbols-outlined">visibility</i>
            </button>
            <button type="button" title="Edit">
              <i class="material-symbols-outlined">edit</i>
            </button>
            <button type="button" title="Delete">
              <i class="material-symbols-outlined">delete</i>
            </button>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DocumentItem {
  title: string;
  icon: string;
  alt: string;
  color: string;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Documents",
  data() {
    return {
      documentItems: [
        {
          title: "Projects",
          icon: require("@/assets/images/icons/png.png"),
          alt: "png-image",
          color: "primary",
        },
        {
          title: "Documents",
          icon: require("@/assets/images/icons/jpg.png"),
          alt: "jpg-image",
          color: "secondary",
        },
        {
          title: "Media",
          icon: require("@/assets/images/icons/txt.png"),
          alt: "txt-image",
          color: "success",
        },
        {
          title: "Applications",
          icon: require("@/assets/images/icons/pdf.png"),
          alt: "pdf-image",
          color: "danger",
        },
        {
          title: "ET Template",
          icon: require("@/assets/images/icons/xl4.png"),
          alt: "xl4-image",
          color: "warning",
        },
        {
          title: "React Template",
          icon: require("@/assets/images/icons/doc.png"),
          alt: "doc-image",
          color: "info",
        },
        {
          title: "Material UI",
          icon: require("@/assets/images/icons/png.png"),
          alt: "png-image",
          color: "purple",
        },
        {
          title: "WP Themes",
          icon: require("@/assets/images/icons/jpg.png"),
          alt: "jpg-image",
          color: "dark",
        },
        {
          title: "Personal Photos",
          icon: require("@/assets/images/icons/pdf.png"),
          alt: "txt-image",
          color: "orange",
        },
        {
          title: "Mobile Apps",
          icon: require("@/assets/images/icons/xl4.png"),
          alt: "pdf-image",
          color: "primary",
        },
        {
          title: "Important Files",
          icon: require("@/assets/images/icons/doc.png"),
          alt: "xl4-image",
          color: "secondary",
        },
        {
          title: "Angular Template",
          icon: require("@/assets/images/icons/pdf.png"),
          alt: "jpg-image",
          color: "dark",
        },
        {
          title: "Projects",
          icon: require("@/assets/images/icons/png.png"),
          alt: "png-image",
          color: "primary",
        },
        {
          title: "Documents",
          icon: require("@/assets/images/icons/jpg.png"),
          alt: "jpg-image",
          color: "secondary",
        },
        {
          title: "Media",
          icon: require("@/assets/images/icons/pdf.png"),
          alt: "txt-image",
          color: "success",
        },
        {
          title: "Applications",
          icon: require("@/assets/images/icons/doc.png"),
          alt: "pdf-image",
          color: "danger",
        },
      ] as DocumentItem[],
    };
  },
});
</script>

<style lang="scss" scoped>
.document-folder-card {
  .folder-card-content {
    text-align: center;

    .icon {
      margin-bottom: 20px;
      .v-responsive {
        justify-content: center;
      }
    }
    h6 {
      margin-bottom: 18px;
    }
    .action-buttons {
      button {
        color: var(--primaryColor);
        display: inline-block;
        min-width: auto;
        line-height: 1;
        height: auto;
        padding: 0;
        margin: {
          left: 7px;
          right: 7px;
        }
        i {
          font-size: 16px;
        }
        &:nth-child(2) {
          color: var(--bodyColor);
        }
        &:nth-child(3) {
          color: var(--dangerColor);
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .document-folder-card {
    .folder-card-content {
      .icon {
        margin-bottom: 15px;
      }
      h6 {
        margin-bottom: 15px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .document-folder-card {
    .folder-card-content {
      .icon {
        margin-bottom: 18px;
      }
      h6 {
        margin-bottom: 18px;
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
