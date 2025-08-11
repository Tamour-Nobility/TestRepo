<template>
  <v-card
    class="group-lessons-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Group Lessons</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
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
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <tbody>
            <tr v-for="item in items.slice(0, 6)" :key="item.id">
              <td>
                <div class="group-lesson d-flex align-items-center">
                  <div class="users d-flex align-items-center">
                    <div
                      class="rounded-circle"
                      v-for="image in item.group.images"
                      :key="image.id"
                    >
                      <v-img
                        :src="image.image"
                        class="rounded-circle"
                        alt="user-image"
                      />
                    </div>
                  </div>
                  <div class="info">
                    <span class="fw-medium d-block">
                      {{ item.group.name }}
                    </span>
                    <span class="date text-body fw-medium d-block">
                      {{ item.group.date }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="#"
                  class="link-btn d-inline-block rounded-circle position-relative"
                >
                  <i class="material-symbols-outlined">
                    {{ item.link }}
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/users/user6.jpg";
import image2 from "~/assets/images/users/user20.jpg";
import image3 from "~/assets/images/users/user21.jpg";
import image4 from "~/assets/images/users/user22.jpg";
import image5 from "~/assets/images/users/user23.jpg";
import image6 from "~/assets/images/users/user24.jpg";
import image7 from "~/assets/images/users/user25.jpg";
import image8 from "~/assets/images/users/user26.jpg";
import image9 from "~/assets/images/users/user27.jpg";
import image10 from "~/assets/images/users/user28.jpg";
import image11 from "~/assets/images/users/user29.jpg";
import image12 from "~/assets/images/users/user30.jpg";

export default defineComponent({
  name: "GroupLessons",
  data() {
    return {
      items: [
        {
          id: 1,
          group: {
            images: [
              {
                image: image2,
              },
              {
                image: image3,
              },
              {
                image: image1,
              },
            ],
            name: "Digital Marketing",
            date: "15 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 2,
          group: {
            images: [
              {
                image: image4,
              },
              {
                image: image5,
              },
              {
                image: image6,
              },
            ],
            name: "Web Development",
            date: "10 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 3,
          group: {
            images: [
              {
                image: image7,
              },
              {
                image: image8,
              },
              {
                image: image9,
              },
            ],
            name: "UX/UI Design",
            date: "05 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 4,
          group: {
            images: [
              {
                image: image10,
              },
              {
                image: image11,
              },
              {
                image: image12,
              },
            ],
            name: "Content Writer",
            date: "02 March, 2024",
          },
          link: "arrow_outward",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.group-lessons-card {
  .trezo-table-content {
    .trezo-table {
      .v-table {
        table {
          tbody {
            tr {
              td {
                padding: 18px 20px;
                &:first-child {
                  padding-left: 0;
                  border-left-width: 0 !important;
                }
                &:last-child {
                  text-align: end;
                  padding-right: 0;
                  border-right-width: 0 !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
