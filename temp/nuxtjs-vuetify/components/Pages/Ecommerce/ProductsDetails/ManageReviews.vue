<template>
  <v-card
    class="reviews-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Manage Reviews</h5>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Reviewer</th>
              <th class="text-start">Review</th>
              <th class="text-start">Date</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems.slice(0, 5)" :key="item.id">
              <td>
                <div class="user-info d-flex align-items-center">
                  <div class="image">
                    <v-img
                      :src="item.reviewer.image"
                      class="rounded-circle"
                      alt="reviewer-image"
                    />
                  </div>
                  <div class="info">
                    <span class="fw-medium d-block">
                      {{ item.reviewer.name }}
                    </span>
                    <span class="email d-block text-body">
                      {{ item.reviewer.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td style="white-space: normal">
                <div class="review">
                  <div class="ratings lh-1">
                    <i
                      v-for="(content, index) in item.ratings.stars"
                      :key="index"
                      :class="content.star"
                    ></i>
                  </div>
                  <p class="text-black">
                    {{ item.ratings.review }}
                  </p>
                </div>
              </td>
              <td class="text-body">
                <span class="d-block">
                  {{ item.date.date }}
                </span>
                <span class="d-block">
                  {{ item.date.time }}
                </span>
              </td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.approved }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.reply }}
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
        <CommonPaginationTwo items="5" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import userImage1 from "~/assets/images/users/user6.jpg";
import userImage2 from "~/assets/images/users/user7.jpg";
import userImage3 from "~/assets/images/users/user8.jpg";
import userImage4 from "~/assets/images/users/user9.jpg";
import userImage5 from "~/assets/images/users/user10.jpg";
import userImage6 from "~/assets/images/users/user11.jpg";
import userImage7 from "~/assets/images/users/user12.jpg";
import userImage8 from "~/assets/images/users/user13.jpg";
import userImage9 from "~/assets/images/users/user14.jpg";
import userImage10 from "~/assets/images/users/user15.jpg";
import productImage1 from "~/assets/images/products/product1.jpg";
import productImage2 from "~/assets/images/products/product2.jpg";
import productImage3 from "~/assets/images/products/product3.jpg";
import productImage4 from "~/assets/images/products/product4.jpg";
import productImage5 from "~/assets/images/products/product5.jpg";

export default defineComponent({
  name: "ManageReviews",
  setup() {
    const items = ref([
      {
        id: "#999",
        reviewer: {
          image: userImage1,
          name: "Olivia Clark",
          email: "olivia@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
          ],
          review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        product: {
          image: productImage1,
          title: "Smart Band",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#998",
        reviewer: {
          image: userImage2,
          name: "Zephyr Zing",
          email: "zephyr@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-half-fill",
            },
          ],
          review: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
        },
        product: {
          image: productImage2,
          title: "Headphone",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#997",
        reviewer: {
          image: userImage3,
          name: "Nova Nectar",
          email: "nova@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-line",
            },
          ],
          review: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        product: {
          image: productImage3,
          title: "iPhone 15 Plus",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#996",
        reviewer: {
          image: userImage4,
          name: "Isabella Chang",
          email: "isabella@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-half-fill",
            },
            {
              star: "ri-star-line",
            },
          ],
          review: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.`,
        },
        product: {
          image: productImage4,
          title: "Bluetooth Speaker",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#995",
        reviewer: {
          image: userImage5,
          name: "Alina Bennett",
          email: "alina@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
          ],
          review: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        },
        product: {
          image: productImage5,
          title: "Airbuds 2nd Gen",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Published",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#994",
        reviewer: {
          image: userImage6,
          name: "Marcia Baker",
          email: "marcia@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
          ],
          review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        product: {
          image: productImage1,
          title: "Smart Band",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#993",
        reviewer: {
          image: userImage7,
          name: "Carolyn Barnes",
          email: "carolyn@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-half-fill",
            },
          ],
          review: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
        },
        product: {
          image: productImage2,
          title: "Headphone",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#992",
        reviewer: {
          image: userImage8,
          name: "Donna Miller",
          email: "donna@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-line",
            },
          ],
          review: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        product: {
          image: productImage3,
          title: "iPhone 15 Plus",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#991",
        reviewer: {
          image: userImage9,
          name: "Barbara Cross",
          email: "barbara@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-half-fill",
            },
            {
              star: "ri-star-line",
            },
          ],
          review: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.`,
        },
        product: {
          image: productImage4,
          title: "Bluetooth Speaker",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
      {
        id: "#990",
        reviewer: {
          image: userImage10,
          name: "Rebecca Block",
          email: "rebecca@trezo.com",
        },
        ratings: {
          stars: [
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
            {
              star: "ri-star-fill",
            },
          ],
          review: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        },
        product: {
          image: productImage5,
          title: "Airbuds 2nd Gen",
        },
        date: {
          date: "17 Dec 2024",
          time: "08:30 PM",
        },
        status: "Pending",
        action: {
          approved: "download_done",
          delete: "delete",
          reply: "reply",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          reviewer: { image: string; name: string; email: string };
          ratings: {
            stars: {
              star: string;
            };
            review: string;
          };
          product: { image: string; title: string };
          date: { date: string; time: string };
          status: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.reviewer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.reviewer.email
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.product.title
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.date.date
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordPending = ref("Pending");
    const wordPublished = ref("Published");

    const computeClass = (classValue: string) => {
      return {
        published: wordPending.value === classValue,
        warning: wordPublished.value === classValue,
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.reviews-card {
  .trezo-table-content {
    .trezo-table {
      .v-table {
        table {
          tbody {
            tr {
              td {
                vertical-align: top !important;
              }
            }
          }
        }
      }
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
