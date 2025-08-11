<template>
  <div>
    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-body p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-2"
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
          <NuxtLink
            to="/ecommerce/create-seller"
            class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
              <span>Add New Seller</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-xxl-3 col-lg-4 col-sm-6"
        v-for="item in filteredItems"
        :key="item.id"
      >
        <div class="card bg-white border-0 rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img :src="item.seller.image" class="wh-52" alt="seller" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <NuxtLink
                    to="/ecommerce/seller-details"
                    class="text-decoration-none text-secondary fw-medium fs-16 mb-1"
                  >
                    {{ item.seller.name }}
                  </NuxtLink>
                  <span class="d-block">
                    {{ item.seller.email }}
                  </span>
                </div>
              </div>

              <div
                class="dropdown action-opt ms-2 position-relative top-3"
                v-b-tooltip.hover.top="'More_Option'"
              >
                <button
                  class="p-0 border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    class="material-symbols-outlined fs-24 fw-bold text-body hover"
                  >
                    more_horiz
                  </i>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                >
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <EyeIcon class="eye"></EyeIcon>
                      View All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <EditIcon class="edit"></EditIcon>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <Trash2Icon class="trash-2"></Trash2Icon>
                      Delete One
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <LockIcon class="lock"></LockIcon>
                      Block
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center mb-3">
              <span>Last Sale Date:</span>
              <span class="text-secondary ms-1">
                {{ item.lastSaleDate }}
              </span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <span>Item Stock:</span>
              <span class="text-secondary ms-1">
                {{ item.itemStock }}
              </span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <span>Wallet Balance:</span>
              <span class="text-secondary ms-1">
                ${{ item.walletBalance }}
              </span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <span>Revenue:</span>
              <span class="text-secondary ms-1"> ${{ item.revenue }} </span>
            </div>
            <div class="d-flex align-items-center mb-0">
              <span>Store:</span>
              <span class="text-secondary ms-1">
                {{ item.store }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/seller-1.png";
import image2 from "~/assets/images/seller-2.png";
import image3 from "~/assets/images/seller-3.png";
import image4 from "~/assets/images/seller-4.png";
import image5 from "~/assets/images/seller-5.png";
import image6 from "~/assets/images/seller-6.png";
import image7 from "~/assets/images/seller-7.png";
import image8 from "~/assets/images/seller-8.png";
import image9 from "~/assets/images/seller-9.png";
import image10 from "~/assets/images/seller-10.png";
import image11 from "~/assets/images/seller-11.png";
import image12 from "~/assets/images/seller-12.png";

export default defineComponent({
  name: "Sellers",
  setup() {
    const items = ref([
      {
        id: 1,
        seller: {
          image: image1,
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
          image: image2,
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
          image: image3,
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
          image: image4,
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
          image: image5,
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
          image: image6,
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
          image: image7,
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
          image: image8,
          name: "Rodriguez Meade",
          email: "rodriguez@trezo.com",
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
          image: image9,
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
          image: image10,
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
          image: image11,
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
          image: image12,
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
