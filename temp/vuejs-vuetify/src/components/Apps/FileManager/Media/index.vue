<template>
  <v-card
    class="media-files-list trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mt-0 mb-0">Media</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              This Day
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              This Day
            </button>
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
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">File Name</th>
              <th class="text-start">Owner</th>
              <th class="text-start">Listed Date</th>
              <th class="text-start">File Type</th>
              <th class="text-start">File Size</th>
              <th class="text-start">File Items</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 8)" :key="item.id">
              <td>
                <a
                  href="#"
                  class="file-name d-flex align-items-center fw-medium"
                >
                  <i class="material-symbols-outlined"> folder </i>
                  {{ item.fileName }}
                </a>
              </td>
              <td class="text-body">
                {{ item.owner }}
              </td>
              <td class="text-body">{{ item.listedDate }}</td>
              <td class="text-body">{{ item.fileType }}</td>
              <td class="text-body">{{ item.fileSize }}</td>
              <td class="text-body">{{ item.fileItems }}</td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.delete }}
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
        <PaginationTwo items="8" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Media",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: 1,
        fileName: "Dashboard Design",
        owner: "Linda Maddox",
        listedDate: "20 Nov 2024",
        fileType: ".pdf",
        fileSize: "1.2 GB",
        fileItems: "69",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 2,
        fileName: "Important Documents",
        owner: "Juanita Lavigne",
        listedDate: "18 Nov 2024",
        fileType: ".zip",
        fileSize: "2.6 GB",
        fileItems: "236",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 3,
        fileName: "Product Design",
        owner: "Roy Pope",
        listedDate: "17 Nov 2024",
        fileType: ".psd",
        fileSize: "3.2 GB",
        fileItems: "365",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 4,
        fileName: "Dashboard Design File",
        owner: "Cecil Jones",
        listedDate: "15 Nov 2024",
        fileType: ".fig",
        fileSize: "1 GB",
        fileItems: "25",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 5,
        fileName: "Media Files",
        owner: "Trudy Venegas",
        listedDate: "14 Nov 2024",
        fileType: ".jpg",
        fileSize: "1.5 GB",
        fileItems: "153",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 6,
        fileName: "Graphic Design File",
        owner: "Sharilyn Goodall",
        listedDate: "13 Nov 2024",
        fileType: ".png",
        fileSize: "1.6 GB",
        fileItems: "142",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 7,
        fileName: "Personal Photo",
        owner: "Annie Carver",
        listedDate: "09 Nov 2024",
        fileType: ".gif",
        fileSize: "1.2 GB",
        fileItems: "175",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 8,
        fileName: "Audio File",
        owner: "Winona Etzel",
        listedDate: "08 Nov 2024",
        fileType: ".mp3",
        fileSize: "1.3 GB",
        fileItems: "136",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 9,
        fileName: "Audio File",
        owner: "Winona Etzel",
        listedDate: "08 Nov 2024",
        fileType: ".mp3",
        fileSize: "1.3 GB",
        fileItems: "136",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 10,
        fileName: "Personal Photo",
        owner: "Annie Carver",
        listedDate: "09 Nov 2024",
        fileType: ".gif",
        fileSize: "1.2 GB",
        fileItems: "175",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 11,
        fileName: "Graphic Design File",
        owner: "Sharilyn Goodall",
        listedDate: "13 Nov 2024",
        fileType: ".png",
        fileSize: "1.6 GB",
        fileItems: "142",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 12,
        fileName: "Media Files",
        owner: "Trudy Venegas",
        listedDate: "14 Nov 2024",
        fileType: ".jpg",
        fileSize: "1.5 GB",
        fileItems: "153",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 13,
        fileName: "Dashboard Design File",
        owner: "Cecil Jones",
        listedDate: "15 Nov 2024",
        fileType: ".fig",
        fileSize: "1 GB",
        fileItems: "25",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 14,
        fileName: "Product Design",
        owner: "Roy Pope",
        listedDate: "17 Nov 2024",
        fileType: ".psd",
        fileSize: "3.2 GB",
        fileItems: "365",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 15,
        fileName: "Important Documents",
        owner: "Juanita Lavigne",
        listedDate: "18 Nov 2024",
        fileType: ".zip",
        fileSize: "2.6 GB",
        fileItems: "236",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 16,
        fileName: "Dashboard Design",
        owner: "Linda Maddox",
        listedDate: "20 Nov 2024",
        fileType: ".pdf",
        fileSize: "1.2 GB",
        fileItems: "69",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.media-files-list {
  .trezo-table-content {
    .trezo-table {
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-left: 1px solid #eceef2;
        border-right: 1px solid #eceef2;
        border-bottom: 1px solid #eceef2;
      }
    }
  }
}
</style>
