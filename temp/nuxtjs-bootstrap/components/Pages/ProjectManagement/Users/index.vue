<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
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
          data-bs-target="#addNewUserModal"
          aria-controls="addNewUserModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New User</span>
          </span>
        </button>
      </div>

      <div class="default-table-area default-table-width">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input position-relative top-1"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                    />
                    <label
                      class="position-relative top-4 ms-1"
                      for="flexCheckDefault7"
                    >
                      ID
                    </label>
                  </div>
                </th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Project Access</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault12"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault12"
                    >
                      {{ item.id }}
                    </label>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    to="/help-desk/agents"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        :src="item.user.image"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.user.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>{{ item.email }}</td>
                <td class="text-body">
                  {{ item.role }}
                </td>
                <td class="text-body">
                  <span
                    class="text-truncate d-inline-block"
                    style="width: 200px"
                  >
                    {{ item.projectAccess }}
                  </span>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                    v-if="item.status.active"
                  >
                    Active
                  </span>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                    v-if="item.status.deactive"
                  >
                    Deactive
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

        <CommonPagination items="10" :total="items.length" />
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
  name: "Users",
  setup() {
    const items = ref([
      {
        id: "#999",
        user: {
          image: image1,
          name: "Sarah Johnson",
        },
        email: "sarah@trezo.com",
        role: "Project Manager",
        projectAccess: "Hotel Management System, Python Upgrade",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#998",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        role: "Developer",
        projectAccess: "Project Monitoring, Project Alpho",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#997",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        role: "Business Analyst",
        projectAccess: "Aegis Accounting Service, Beja Banking Finance",
        status: {
          active: false,
          deactive: true,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#996",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        role: "UI/UX Designer",
        projectAccess: "Aoriv AI Design, Vaxo App Design",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#995",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        role: "QA Tester",
        projectAccess: "Product Development, Trezo Dashboard Design",
        status: {
          active: false,
          deactive: true,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#994",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        role: "Admin",
        projectAccess: "Hotel Management System, Python Upgrade",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#993",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        role: "Editor",
        projectAccess: "Project Monitoring, Project Alpho",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#992",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        role: "Project Manager",
        projectAccess: "Aegis Accounting Service, Beja Banking Finance",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#991",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        role: "UI/UX Designer",
        projectAccess: "Aoriv AI Design, Vaxo App Design",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#990",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        role: "Web Developer",
        projectAccess: "Product Development, Trezo Dashboard Design",
        status: {
          active: false,
          deactive: true,
        },
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
          id: string;
          user: { name: string };
          email: string;
          role: string;
          projectAccess: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.projectAccess
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
