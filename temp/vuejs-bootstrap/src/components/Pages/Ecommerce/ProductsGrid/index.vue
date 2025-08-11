<template>
  <div class="row justify-content-center">
    <div
      class="col-lg-4 col-sm-6"
      v-for="product in products"
      :key="product.id"
    >
      <div class="mb-4 transition-y">
        <div class="position-relative mb-3">
          <RouterLink :to="product.link">
            <img :src="product.image" class="rounded-3" alt="product" />
          </RouterLink>
          <RouterLink
            to="/ecommerce/cart"
            class="bg-body-bg bg-for-dark-mode pt-2 ps-2 position-absolute bottom-0 end-0 rounded-3 rounded-bottom-0 rounded-end-0"
          >
            <i
              class="material-symbols-outlined wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-24"
            >
              shopping_cart
            </i>
          </RouterLink>
        </div>
        <RouterLink
          :to="product.link"
          class="text-secondary text-decoration-none fs-16 hover d-block mb-4"
        >
          {{ product.name }}
        </RouterLink>

        <div class="d-flex justify-content-between align-items-center">
          <h2 class="fs-20 mb-0">
            ${{ product.price }}
            <del class="fs-16 fw-normal">${{ product.oldPrice }}</del>
          </h2>
          <div class="d-flex flex-wrap gap-1">
            <i
              v-for="star in 5"
              :key="star"
              class="fs-16 text-warning"
              :class="starClass(star, product.ratings)"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <Pagination items="09" total="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "ProductsGridPage",
  components: {
    Pagination,
  },
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Apple MacBook Pro 16.2" with M3 Pro Chip',
        image: require("@/assets/images/product-6.jpg"),
        price: 3479,
        oldPrice: 3599,
        ratings: 5,
        link: "/ecommerce/product-details",
      },
      {
        id: 2,
        name: "SAMSUNG Galaxy Tab A9+ Tablet 11”",
        image: require("@/assets/images/product-7.jpg"),
        price: 549,
        oldPrice: 649,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 3,
        name: "Apple iPhone 15 Pro Max (512 GB)",
        image: require("@/assets/images/product-8.jpg"),
        price: 1479,
        oldPrice: 1599,
        ratings: 4,
        link: "/ecommerce/product-details",
      },
      {
        id: 4,
        name: "Gildan Men's Crew T-Shirts, Multipack",
        image: require("@/assets/images/product-9.jpg"),
        price: 79,
        oldPrice: 89,
        ratings: 3.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 5,
        name: "Skechers Men's Summits High Range",
        image: require("@/assets/images/product-10.jpg"),
        price: 849,
        oldPrice: 999,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 6,
        name: "Amazfit GTR 3 Smart Watch for Men",
        image: require("@/assets/images/product-11.jpg"),
        price: 49,
        oldPrice: 69,
        ratings: 3,
        link: "/ecommerce/product-details",
      },
      {
        id: 7,
        name: "SOJOS Small Round Polarized Sunglasses",
        image: require("@/assets/images/product-12.jpg"),
        price: 39,
        oldPrice: 49,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 8,
        name: "Nautical Clock Ship Table Clock Brass Desk",
        image: require("@/assets/images/product-13.jpg"),
        price: 25,
        oldPrice: 39,
        ratings: 5,
        link: "/ecommerce/product-details",
      },
      {
        id: 9,
        name: "Carhartt, Durable, Adjustable Crossbody Bag",
        image: require("@/assets/images/product-14.jpg"),
        price: 149,
        oldPrice: 299,
        ratings: 4,
        link: "/ecommerce/product-details",
      },
    ]);

    const starClass = (star: number, ratings: number) => {
      if (star <= ratings) {
        return "ri-star-fill";
      } else if (star - ratings < 1) {
        return "ri-star-half-fill";
      } else {
        return "ri-star-line";
      }
    };

    return {
      products,
      starClass,
    };
  },
});
</script>
