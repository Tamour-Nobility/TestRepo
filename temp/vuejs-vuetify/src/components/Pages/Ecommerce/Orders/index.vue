<template>
  <v-card
    class="orders-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search order here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <button class="add-new-btn">
        <i class="material-symbols-outlined">add</i>
        Add New Orders
      </button>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Order ID</th>
              <th class="text-start">Customer</th>
              <th class="text-start">Items</th>
              <th class="text-start">Created</th>
              <th class="text-start">Total</th>
              <th class="text-start">Vendor</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems.slice(0, 10)" :key="item.orderID">
              <td class="text-start">
                <RouterLink to="/dashboard" class="fw-medium">
                  {{ item.orderID }}
                </RouterLink>
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.customer.image" alt="user-image" />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.customer.name }}
                  </span>
                </div>
              </td>
              <td>{{ item.items }}</td>
              <td>{{ item.created }}</td>
              <td>{{ item.total }}</td>
              <td>{{ item.vendor }}</td>
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
  name: "Orders",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        orderID: "#JAN-2345",
        customer: {
          image: require("@/assets/images/users/user1.jpg"),
          name: "Sarah Johnson",
        },
        items: 120,
        created: "12 Jun 2024",
        total: "$10,490",
        vendor: "Dennis Matthews",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: require("@/assets/images/users/user2.jpg"),
          name: "Michael Smith",
        },
        items: 62,
        created: "11 Jun 2024",
        total: "$6,575",
        vendor: "Kathryn Turner",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: require("@/assets/images/users/user3.jpg"),
          name: "Emily Brown",
        },
        items: 49,
        created: "10 Jun 2024",
        total: "$12,870",
        vendor: "John Valdez",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: require("@/assets/images/users/user4.jpg"),
          name: "Jason Lee",
        },
        items: 25,
        created: "09 Jun 2024",
        total: "$7,895",
        vendor: "Douglas Harvey",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: require("@/assets/images/users/user5.jpg"),
          name: "Ashley Davis",
        },
        items: 82,
        created: "08 Jun 2024",
        total: "$4,680",
        vendor: "Susan Rader",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-2345",
        customer: {
          image: require("@/assets/images/users/user1.jpg"),
          name: "Sarah Johnson",
        },
        items: 120,
        created: "12 Jun 2024",
        total: "$10,490",
        vendor: "Dennis Matthews",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: require("@/assets/images/users/user2.jpg"),
          name: "Michael Smith",
        },
        items: 62,
        created: "11 Jun 2024",
        total: "$6,575",
        vendor: "Kathryn Turner",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: require("@/assets/images/users/user3.jpg"),
          name: "Emily Brown",
        },
        items: 49,
        created: "10 Jun 2024",
        total: "$12,870",
        vendor: "John Valdez",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: require("@/assets/images/users/user4.jpg"),
          name: "Jason Lee",
        },
        items: 25,
        created: "09 Jun 2024",
        total: "$7,895",
        vendor: "Douglas Harvey",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: require("@/assets/images/users/user5.jpg"),
          name: "Ashley Davis",
        },
        items: 82,
        created: "08 Jun 2024",
        total: "$4,680",
        vendor: "Susan Rader",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          orderID: string;
          customer: { name: string };
          items: number;
          created: string;
          total: string;
          vendor: string;
          status: string;
        }) =>
          item.orderID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.items
            .toString()
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.created.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.total.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.vendor.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordConfirmed = ref("Confirmed");
    const wordShipped = ref("Shipped");
    const wordInPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        inProgress: wordShipped.value === classValue,
        pending: wordInPending.value === classValue,
        rejected: wordRejected.value === classValue,
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
.orders-card {
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
.add-new-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
</style>
