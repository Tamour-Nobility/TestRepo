<template>
  <v-card
    class="refunds-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search refund here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Month
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Last Day
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Customer</th>
              <th class="text-start">Date</th>
              <th class="text-end">No. Order Returned</th>
              <th class="text-end">No. Order Refunded</th>
              <th class="text-end">No. Order Replaced</th>
              <th class="text-end">Total Refunded</th>
              <th class="text-end">Total Replaced</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.customer.image" alt="customer-image" />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.customer.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">{{ item.date }}</td>
              <td class="text-body text-end">{{ item.noOrderReturned }}</td>
              <td class="text-body text-end">{{ item.noOrderRefunded }}</td>
              <td class="text-body text-end">{{ item.noOrderReplaced }}</td>
              <td class="text-body text-end">{{ item.totalRefunded }}</td>
              <td class="text-body text-end">{{ item.totalReplaced }}</td>
            </tr>
          </tbody>
        </v-table>
        <PaginationTwo items="10" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Refunds",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#999",
        customer: {
          image: require("@/assets/images/users/user6.jpg"),
          name: "Oliver Khan",
        },
        date: "19 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 1,
        noOrderReplaced: 0,
        totalRefunded: "$42.00",
        totalReplaced: "$50.00",
      },
      {
        id: "#998",
        customer: {
          image: require("@/assets/images/users/user7.jpg"),
          name: "Marcia Baker",
        },
        date: "19 Jun 2024",
        noOrderReturned: 1,
        noOrderRefunded: 1,
        noOrderReplaced: 0,
        totalRefunded: "$32.00",
        totalReplaced: "$54.00",
      },
      {
        id: "#997",
        customer: {
          image: require("@/assets/images/users/user8.jpg"),
          name: "Carolyn Barnes",
        },
        date: "20 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 7,
        noOrderReplaced: 4,
        totalRefunded: "$53.00",
        totalReplaced: "$67.00",
      },
      {
        id: "#996",
        customer: {
          image: require("@/assets/images/users/user9.jpg"),
          name: "Donna Miller",
        },
        date: "21 Jun 2024",
        noOrderReturned: 3,
        noOrderRefunded: 1,
        noOrderReplaced: 2,
        totalRefunded: "$42.00",
        totalReplaced: "$56.00",
      },
      {
        id: "#995",
        customer: {
          image: require("@/assets/images/users/user10.jpg"),
          name: "Barbara Cross",
        },
        date: "22 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 2,
        noOrderReplaced: 7,
        totalRefunded: "$24.00",
        totalReplaced: "$45.00",
      },
      {
        id: "#994",
        customer: {
          image: require("@/assets/images/users/user11.jpg"),
          name: "Rebecca Block",
        },
        date: "23 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 6,
        noOrderReplaced: 2,
        totalRefunded: "$53.00",
        totalReplaced: "$56.00",
      },
      {
        id: "#993",
        customer: {
          image: require("@/assets/images/users/user12.jpg"),
          name: "Ramiro McCarty",
        },
        date: "24 Jun 2024",
        noOrderReturned: 2,
        noOrderRefunded: 6,
        noOrderReplaced: 1,
        totalRefunded: "$52.00",
        totalReplaced: "$67.00",
      },
      {
        id: "#992",
        customer: {
          image: require("@/assets/images/users/user14.jpg"),
          name: "Robert Fairweather",
        },
        date: "25 Jun 2024",
        noOrderReturned: 6,
        noOrderRefunded: 5,
        noOrderReplaced: 4,
        totalRefunded: "$42.00",
        totalReplaced: "$46.00",
      },
      {
        id: "#991",
        customer: {
          image: require("@/assets/images/users/user15.jpg"),
          name: "Marcelino Haddock",
        },
        date: "26 Jun 2024",
        noOrderReturned: 7,
        noOrderRefunded: 2,
        noOrderReplaced: 5,
        totalRefunded: "$44.00",
        totalReplaced: "$68.00",
      },
      {
        id: "#990",
        customer: {
          image: require("@/assets/images/users/user16.jpg"),
          name: "Thomas Wilson",
        },
        date: "27 Jun 2024",
        noOrderReturned: 5,
        noOrderRefunded: 1,
        noOrderReplaced: 6,
        totalRefunded: "$99.00",
        totalReplaced: "$742.00",
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

    const wordActive = ref("Active");
    const wordDeactive = ref("Deactive");

    const computeClass = (classValue: string) => {
      return {
        published: wordActive.value === classValue,
        warning: wordDeactive.value === classValue,
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
.refunds-card {
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
