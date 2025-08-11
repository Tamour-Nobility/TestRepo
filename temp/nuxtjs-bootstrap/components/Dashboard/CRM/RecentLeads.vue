<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4"
      >
        <h3 class="mb-0">Recent Leads</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>

      <div class="default-table-area style-two recent-leads">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th scope="col">Customer</th>
                <th scope="col">Email</th>
                <th scope="col">Source</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in paginatedItems" :key="item.id">
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                </td>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      :src="item.customer.image"
                      class="wh-44 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">
                        {{ item.customer.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>{{ item.email }}</td>
                <td>{{ item.source }}</td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
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

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4"
        >
          <span class="fs-12 fw-medium">
            Showing {{ startItem + 1 }} to {{ endItem }} of
            {{ paginatedItems.length }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link icon" href="#" @click.prevent="prevPage">
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </a>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click.prevent="goToPage(page)">
                  {{ page }}
                </a>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a class="page-link icon" href="#" @click.prevent="nextPage">
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/user-11.jpg";
import image2 from "~/assets/images/user-12.jpg";
import image3 from "~/assets/images/user-13.jpg";
import image4 from "~/assets/images/user-14.jpg";
import image5 from "~/assets/images/user-15.jpg";

export default defineComponent({
  name: "RecentLeads",
  setup() {
    const items = ref([
      {
        id: "1",
        customer: {
          image: image1,
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "2",
        customer: {
          image: image2,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "3",
        customer: {
          image: image3,
          name: "Amanda Clark",
        },
        email: "amanda@trezo.com",
        source: "Paid",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "4",
        customer: {
          image: image4,
          name: "Jennifer Taylor",
        },
        email: "taylor@trezo.com",
        source: "Others",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "5",
        customer: {
          image: image5,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "6",
        customer: {
          image: image4,
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "7",
        customer: {
          image: image3,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "8",
        customer: {
          image: image5,
          name: "Amanda Clark",
        },
        email: "amanda@trezo.com",
        source: "Paid",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "9",
        customer: {
          image: image1,
          name: "Jennifer Taylor",
        },
        email: "taylor@trezo.com",
        source: "Others",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "10",
        customer: {
          image: image2,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "11",
        customer: {
          image: image5,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "12",
        customer: {
          image: image4,
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "13",
        customer: {
          image: image3,
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    const wordConfirmed = ref("Confirmed");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        inProgress: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
        rejected: wordRejected.value === classValue,
      };
    };

    const currentPage = ref(1);
    const itemsPerPage = ref(5); // Set how many items per page

    const totalPages = computed(() =>
      Math.ceil(items.value.length / itemsPerPage.value)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return items.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, items.value.length)
    );

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      computeClass,
      currentPage,
      paginatedItems,
      totalPages,
      goToPage,
      prevPage,
      nextPage,
      startItem,
      endItem,
    };
  },
});
</script>
