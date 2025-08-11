<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 mb-md-4"
      >
        <form class="position-relative table-src-form me-0" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
            v-model="searchTerm"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <select
          class="form-select month-select form-control"
          aria-label="Default select example"
        >
          <option selected>Show All</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
          <option value="3">Yearly</option>
        </select>
      </div>

      <div class="default-table-area manage-reviews-table">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Reviewer</th>
                <th scope="col">Review</th>
                <th scope="col">Product</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      :src="item.reviewer.image"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">
                        {{ item.reviewer.name }}
                      </h6>
                      <span class="text-body">
                        {{ item.reviewer.email }}
                      </span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i
                      v-for="content in item.ratings.stars"
                      :key="content"
                      :class="content.star"
                      class="fs-18 text-warning"
                    ></i>
                  </div>
                  <p class="mw-380">
                    {{ item.ratings.review }}
                  </p>
                </td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center text-secondary hover"
                  >
                    <img
                      :src="item.product.image"
                      class="rounded-3 wh-40"
                      alt="product"
                    />
                    <span class="fs-15 fw-medium ms-2">
                      {{ item.product.title }}
                    </span>
                  </NuxtLink>
                </td>
                <td>
                  <span class="d-block">
                    {{ item.date.date }}
                  </span>
                  <span class="d-block">
                    {{ item.date.time }}
                  </span>
                </td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Approved"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.approved }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Reply"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.reply }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Delete"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPaginationTwo items="10" total="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import userImage1 from "~/assets/images/user-6.jpg";
import userImage2 from "~/assets/images/user-7.jpg";
import userImage3 from "~/assets/images/user-8.jpg";
import userImage4 from "~/assets/images/user-9.jpg";
import userImage5 from "~/assets/images/user-10.jpg";
import userImage6 from "~/assets/images/user-11.jpg";
import userImage7 from "~/assets/images/user-12.jpg";
import userImage8 from "~/assets/images/user-13.jpg";
import userImage9 from "~/assets/images/user-14.jpg";
import userImage10 from "~/assets/images/user-15.jpg";
import productImage1 from "~/assets/images/product-1.jpg";
import productImage2 from "~/assets/images/product-2.jpg";
import productImage3 from "~/assets/images/product-3.jpg";
import productImage4 from "~/assets/images/product-4.jpg";
import productImage5 from "~/assets/images/product-5.jpg";

export default defineComponent({
  name: "Reviews",
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
