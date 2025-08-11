<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 mb-lg-4"
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
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#addNewCategoriesModal"
          aria-controls="addNewCategoriesModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Categorie</span>
          </span>
        </button>
      </div>

      <div class="default-table-area all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check" style="min-height: auto">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                    />
                  </div>
                </th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Total Products</th>
                <th scope="col">Slug</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
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
                  <img :src="item.image" class="wh-40 rounded-3" alt="" />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.totalProducts }}</td>
                <td>{{ item.slug }}</td>
                <td>{{ item.description }}</td>
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

        <CommonPaginationTwo items="05" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/product-1.jpg";
import image2 from "~/assets/images/product-2.jpg";
import image3 from "~/assets/images/product-3.jpg";
import image4 from "~/assets/images/product-4.jpg";
import image5 from "~/assets/images/product-5.jpg";

export default defineComponent({
  name: "Categories",
  setup() {
    const items = ref([
      {
        id: 1,
        image: image1,
        name: "Watch",
        totalProducts: 54,
        slug: "watch",
        description: "What is lorem ipsum?",
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 2,
        image: image2,
        name: "Headphone",
        totalProducts: 13,
        slug: "headphone",
        description: "Why do we use it?",
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 3,
        image: image3,
        name: "Mobile",
        totalProducts: 42,
        slug: "mobile",
        description: "Where does it come from?",
        status: "Deactive",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 4,
        image: image4,
        name: "Speaker",
        totalProducts: 32,
        slug: "speaker",
        description: "Where can I get some?",
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: 5,
        image: image5,
        name: "Electronics",
        totalProducts: 100,
        slug: "electronics",
        description: "Contrary to popular belief",
        status: "Active",
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
          id: number;
          image: string;
          name: string;
          totalProducts: number;
          slug: string;
          description: string;
          status: string;
        }) =>
          item.name.toString().includes(searchTerm.value.toLowerCase()) ||
          item.totalProducts
            .toString()
            .includes(searchTerm.value.toLowerCase()) ||
          item.slug.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase())
      );
    });

    const wordActive = ref("Active");
    const wordDeactive = ref("Deactive");

    const computeClass = (classValue: string) => {
      return {
        active: wordActive.value === classValue,
        deactive: wordDeactive.value === classValue,
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
