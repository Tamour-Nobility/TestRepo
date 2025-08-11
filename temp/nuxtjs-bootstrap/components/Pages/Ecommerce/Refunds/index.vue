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
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Date</th>
                <th scope="col" class="text-end">No. Order Returned</th>
                <th scope="col" class="text-end">No. Order Refunded</th>
                <th scope="col" class="text-end">No. Order Replaced</th>
                <th scope="col" class="text-end">Total Refunded</th>
                <th scope="col" class="text-end">Total Replaced</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      :src="item.customer.image"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.customer.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-secondary">
                  {{ item.date }}
                </td>
                <td class="text-secondary text-end">
                  {{ item.noOrderReturned }}
                </td>
                <td class="text-secondary text-end">
                  {{ item.noOrderRefunded }}
                </td>
                <td class="text-secondary text-end">
                  {{ item.noOrderReplaced }}
                </td>
                <td class="text-secondary text-end">
                  ${{ item.totalRefunded }}
                </td>
                <td class="text-secondary text-end">
                  ${{ item.totalReplaced }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPaginationTwo items="10" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/user-6.jpg";
import image2 from "~/assets/images/user-7.jpg";
import image3 from "~/assets/images/user-8.jpg";
import image4 from "~/assets/images/user-9.jpg";
import image5 from "~/assets/images/user-10.jpg";
import image6 from "~/assets/images/user-11.jpg";
import image7 from "~/assets/images/user-12.jpg";
import image8 from "~/assets/images/user-13.jpg";
import image9 from "~/assets/images/user-14.jpg";
import image10 from "~/assets/images/user-15.jpg";

export default defineComponent({
  name: "Refunds",
  setup() {
    const items = ref([
      {
        id: "#999",
        customer: {
          image: image1,
          name: "Oliver Khan",
        },
        date: "19 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 1,
        noOrderReplaced: 0,
        totalRefunded: "42.00",
        totalReplaced: "50.00",
      },
      {
        id: "#998",
        customer: {
          image: image2,
          name: "Marcia Baker",
        },
        date: "19 Jun 2024",
        noOrderReturned: 1,
        noOrderRefunded: 1,
        noOrderReplaced: 0,
        totalRefunded: "32.00",
        totalReplaced: "54.00",
      },
      {
        id: "#997",
        customer: {
          image: image3,
          name: "Carolyn Barnes",
        },
        date: "20 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 7,
        noOrderReplaced: 4,
        totalRefunded: "53.00",
        totalReplaced: "67.00",
      },
      {
        id: "#996",
        customer: {
          image: image4,
          name: "Donna Miller",
        },
        date: "21 Jun 2024",
        noOrderReturned: 3,
        noOrderRefunded: 1,
        noOrderReplaced: 2,
        totalRefunded: "42.00",
        totalReplaced: "56.00",
      },
      {
        id: "#995",
        customer: {
          image: image5,
          name: "Barbara Cross",
        },
        date: "22 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 2,
        noOrderReplaced: 7,
        totalRefunded: "24.00",
        totalReplaced: "45.00",
      },
      {
        id: "#994",
        customer: {
          image: image6,
          name: "Rebecca Block",
        },
        date: "23 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 6,
        noOrderReplaced: 2,
        totalRefunded: "53.00",
        totalReplaced: "56.00",
      },
      {
        id: "#993",
        customer: {
          image: image7,
          name: "Ramiro McCarty",
        },
        date: "24 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 6,
        noOrderReplaced: 1,
        totalRefunded: "52.00",
        totalReplaced: "67.00",
      },
      {
        id: "#992",
        customer: {
          image: image8,
          name: "Robert Fairweather",
        },
        date: "25 Jun 2024",
        noOrderReturned: 6,
        noOrderRefunded: 5,
        noOrderReplaced: 4,
        totalRefunded: "42.00",
        totalReplaced: "46.00",
      },
      {
        id: "#991",
        customer: {
          image: image9,
          name: "Marcelino Haddock",
        },
        date: "26 Jun 2024",
        noOrderReturned: 7,
        noOrderRefunded: 2,
        noOrderReplaced: 5,
        totalRefunded: "44.00",
        totalReplaced: "68.00",
      },
      {
        id: "#990",
        customer: {
          image: image10,
          name: "Thomas Wilson",
        },
        date: "27 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 1,
        noOrderReplaced: 6,
        totalRefunded: "99.00",
        totalReplaced: "742.00",
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          customer: { name: string };
          date: string;
          noOrderReturned: number;
          noOrderRefunded: number;
          noOrderReplaced: number;
          totalRefunded: string;
          totalReplaced: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.date.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.totalRefunded
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.totalReplaced
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      items,
      searchTerm,
      filteredItems,
    };
  },
});
</script>
