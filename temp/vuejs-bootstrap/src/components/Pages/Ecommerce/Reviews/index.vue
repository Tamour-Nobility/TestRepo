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
                  <RouterLink
                    to="/my-profile"
                    class="d-flex align-items-center"
                  >
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
                  </RouterLink>
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
                  <RouterLink
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
                  </RouterLink>
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

        <PaginationTwo items="10" total="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

interface Reviewer {
  image: string;
  name: string;
  email: string;
}

interface Rating {
  stars: { star: string }[];
  review: string;
}

interface Product {
  image: string;
  title: string;
}

interface DateInfo {
  date: string;
  time: string;
}

interface Action {
  approved: string;
  delete: string;
  reply: string;
}

interface Item {
  id: string;
  reviewer: Reviewer;
  ratings: Rating;
  product: Product;
  date: DateInfo;
  status: string;
  action: Action;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reviews",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref<Item[]>([
      {
        id: "#999",
        reviewer: {
          image: require("@/assets/images/user-6.jpg"),
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
          image: require("@/assets/images/product-1.jpg"),
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
          image: require("@/assets/images/user-7.jpg"),
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
          image: require("@/assets/images/product-2.jpg"),
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
          image: require("@/assets/images/user-8.jpg"),
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
          image: require("@/assets/images/product-3.jpg"),
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
          image: require("@/assets/images/user-9.jpg"),
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
          image: require("@/assets/images/product-4.jpg"),
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
          image: require("@/assets/images/user-10.jpg"),
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
          image: require("@/assets/images/product-5.jpg"),
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
          image: require("@/assets/images/user-11.jpg"),
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
          image: require("@/assets/images/product-1.jpg"),
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
          image: require("@/assets/images/user-12.jpg"),
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
          image: require("@/assets/images/product-2.jpg"),
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
          image: require("@/assets/images/user-13.jpg"),
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
          image: require("@/assets/images/product-3.jpg"),
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
          image: require("@/assets/images/user-14.jpg"),
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
          image: require("@/assets/images/product-4.jpg"),
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
          image: require("@/assets/images/user-15.jpg"),
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
          image: require("@/assets/images/product-5.jpg"),
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
      return items.value.filter((item) =>
        [
          item.id,
          item.reviewer.name,
          item.reviewer.email,
          item.product.title,
          item.date.date,
          item.status,
        ].some((field) =>
          field.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      );
    });

    const computeClass = (status: string) => {
      return status === "Pending" ? "published" : "warning";
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
