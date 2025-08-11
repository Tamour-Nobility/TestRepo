<template>
  <v-card
    class="seller-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header mb-0">
      <form class="search-box position-relative" @submit.prevent>
        <label>
          <i class="material-symbols-outlined"> search </i>
        </label>
        <input
          type="text"
          class="input-search"
          placeholder="Search seller here....."
          v-model="searchTerm"
        />
      </form>
      <RouterLink class="add-btn" to="/ecommerce/create-seller">
        <i class="material-symbols-outlined"> add </i>
        Add New Seller
      </RouterLink>
    </div>
  </v-card>
  <v-row>
    <v-col
      cols="12"
      lg="4"
      xl="3"
      sm="6"
      v-for="item in filteredItems"
      :key="item.id"
    >
      <v-card
        class="seller-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-space-between"
        >
          <div class="d-flex align-items-center">
            <div class="icon position-relative text-center rounded-circle">
              <v-img :src="item.seller.image" alt="seller-image" />
            </div>
            <div>
              <RouterLink
                to="/ecommerce/seller-details"
                class="title d-block fw-medium"
              >
                {{ item.seller.name }}
              </RouterLink>
              <span class="d-block">
                {{ item.seller.email }}
              </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li class="text-black">
            <span class="text-body"> Last Sale Date: </span>
            {{ item.lastSaleDate }}
          </li>
          <li class="text-black">
            <span class="text-body"> Item Stock: </span>
            {{ item.itemStock }}
          </li>
          <li class="text-black">
            <span class="text-body"> Wallet Balance: </span>
            ${{ item.walletBalance }}
          </li>
          <li class="text-black">
            <span class="text-body"> Revenue: </span>
            ${{ item.revenue }}
          </li>
          <li class="text-black">
            <span class="text-body"> Store: </span>
            {{ item.store }}
          </li>
        </ul>
      </v-card>
    </v-col>
  </v-row>

  <Pagination
    items="12"
    class="pagination-content border-radius d-block bg-white border-0 shadow-none"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sellers",
  components: {
    Pagination,
  },
  setup() {
    const items = ref([
      {
        id: 1,
        seller: {
          image: require("@/assets/images/sellers/seller1.png"),
          name: "Ava Turner",
          email: "turner@trezo.com",
        },
        lastSaleDate: "30 Nov 2024",
        itemStock: "50",
        walletBalance: "9,999.50",
        revenue: "5,999.50",
        store: "TechMaster Store",
      },
      {
        id: 2,
        seller: {
          image: require("@/assets/images/sellers/seller2.png"),
          name: "Ethan Parker",
          email: "parker@trezo.com",
        },
        lastSaleDate: "29 Nov 2024",
        itemStock: "39",
        walletBalance: "6,756.50",
        revenue: "4,645.50",
        store: "RisionTech Store",
      },
      {
        id: 3,
        seller: {
          image: require("@/assets/images/sellers/seller3.png"),
          name: "Isabella Lee",
          email: "isabella@trezo.com",
        },
        lastSaleDate: "28 Nov 2024",
        itemStock: "75",
        walletBalance: "5,550.00",
        revenue: "4,350.50",
        store: "ComfotLiving",
      },
      {
        id: 4,
        seller: {
          image: require("@/assets/images/sellers/seller4.png"),
          name: "Thompson Torres",
          email: "thompson@trezo.com",
        },
        lastSaleDate: "27 Nov 2024",
        itemStock: "99",
        walletBalance: "2,100.50",
        revenue: "1,500.50",
        store: "SportFit Store",
      },
      {
        id: 5,
        seller: {
          image: require("@/assets/images/sellers/seller5.png"),
          name: "Lucas Lyon",
          email: "lucas@trezo.com",
        },
        lastSaleDate: "26 Nov 2024",
        itemStock: "350",
        walletBalance: "15,250.50",
        revenue: "10,200.50",
        store: "Velas Store",
      },
      {
        id: 6,
        seller: {
          image: require("@/assets/images/sellers/seller6.png"),
          name: "Morgan Sturges",
          email: "morgan@trezo.com",
        },
        lastSaleDate: "25 Nov 2024",
        itemStock: "200",
        walletBalance: "10,500.50",
        revenue: "5,458.50",
        store: "Herna Store",
      },
      {
        id: 7,
        seller: {
          image: require("@/assets/images/sellers/seller7.png"),
          name: "Sophia McNeel",
          email: "sophia@trezo.com",
        },
        lastSaleDate: "24 Nov 2024",
        itemStock: "80",
        walletBalance: "2,580.00",
        revenue: "1,500.00",
        store: "Dona Store",
      },
      {
        id: 8,
        seller: {
          image: require("@/assets/images/sellers/seller8.png"),
          name: "Rodriguez Meade",
          email: "turner@trezo.com",
        },
        lastSaleDate: "23 Nov 2024",
        itemStock: "150",
        walletBalance: "9,000.00",
        revenue: "6,000.00",
        store: "Willi Dav Store",
      },
      {
        id: 9,
        seller: {
          image: require("@/assets/images/sellers/seller9.png"),
          name: "Olivia Taylor",
          email: "olivia@trezo.com",
        },
        lastSaleDate: "22 Nov 2024",
        itemStock: "75",
        walletBalance: "7,500.50",
        revenue: "4,500.50",
        store: "Donne Store",
      },
      {
        id: 10,
        seller: {
          image: require("@/assets/images/sellers/seller10.png"),
          name: "David Smith",
          email: "david@trezo.com",
        },
        lastSaleDate: "21 Nov 2024",
        itemStock: "500",
        walletBalance: "18,500.00",
        revenue: "13,200.00",
        store: "RichMaster Store",
      },
      {
        id: 11,
        seller: {
          image: require("@/assets/images/sellers/seller11.png"),
          name: "Alice Johnson",
          email: "alice@trezo.com",
        },
        lastSaleDate: "20 Nov 2024",
        itemStock: "50",
        walletBalance: "6,300.50",
        revenue: "4,000.50",
        store: "Dajon Store",
      },
      {
        id: 12,
        seller: {
          image: require("@/assets/images/sellers/seller12.png"),
          name: "Emily Brown",
          email: "emily@trezo.com",
        },
        lastSaleDate: "19 Nov 2024",
        itemStock: "99",
        walletBalance: "3,699.50",
        revenue: "2,599.50",
        store: "Barbahall Store",
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: number;
          seller: { image: string; name: string; email: string };
          lastSaleDate: string;
          itemStock: string;
          walletBalance: string;
          revenue: string;
          store: string;
        }) =>
          item.seller.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.seller.email
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.lastSaleDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.itemStock
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.walletBalance
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.revenue.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.store.toLowerCase().includes(searchTerm.value.toLowerCase())
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

<style lang="scss" scoped>
.seller-card {
  .v-card-header {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-box {
      margin-right: 20px;
      margin-top: 0;

      i {
        top: 50%;
        left: 13px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
        z-index: 1;
      }
      .input-search {
        height: 36px;
        font-size: 12px;
        padding-left: 38px;
      }
    }
  }
  .info {
    .icon {
      margin-right: 15px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 2px;
    }
  }
  ul {
    margin-top: 20px;

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  form {
    margin-top: 20px;

    .form-group {
      margin-bottom: 15px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .seller-card {
    .v-card-header {
      display: block;
      margin-top: 12px;

      .d-flex {
        align-items: center !important;
      }
      .search-box {
        width: 150px;
        margin: {
          right: 10px;
          top: 0;
        }
        i {
          left: 10px;
          font-size: 18px;
        }
        .input-search {
          height: 32px;
          padding-left: 35px;
        }
      }
    }
    .info {
      .title {
        font-size: 14px;
      }
    }
    ul {
      margin-top: 17px;

      li {
        margin-bottom: 13px;
      }
    }
    form {
      margin-top: 17px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .seller-card {
    .v-card-header {
      display: flex;
      margin-top: 0;

      .search-box {
        width: 200px;
      }
    }
    ul {
      margin-top: 20px;
    }
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .seller-card {
    .info {
      .title {
        font-size: 15px;
      }
    }
  }
}
</style>
