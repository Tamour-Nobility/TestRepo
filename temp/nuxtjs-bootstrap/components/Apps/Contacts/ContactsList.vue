<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
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
          <option selected>All</option>
          <option value="1">Admin</option>
          <option value="2">Mamber</option>
        </select>
      </div>

      <div class="default-table-area style-two default-table-width">
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
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault7"
                    >
                      ID
                    </label>
                  </div>
                </th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Last Contacted</th>
                <th scope="col">Company</th>
                <th scope="col">Lead Score</th>
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
                <td class="text-body">{{ item.phone }}</td>
                <td class="text-body">{{ item.lastContacted }}</td>
                <td class="text-body">{{ item.company }}</td>
                <td class="text-body">{{ item.leadScore }}</td>
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

        <div class="p-4 pt-lg-4">
          <CommonPagination items="10" :total="items.length" />
        </div>
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
  name: "ContactsList",
  setup() {
    const items = ref([
      {
        id: "#854",
        user: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        lastContacted: "Jun 19, 2024",
        company: "ABC Corporation",
        leadScore: 50,
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
        id: "#853",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        lastContacted: "Jun 18, 2024",
        company: "XYZ Ltd",
        leadScore: 35,
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
        id: "#852",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        lastContacted: "Jun 17, 2024",
        company: "Tech Solutions",
        leadScore: 40,
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
        id: "#851",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        lastContacted: "Jun 16, 2024",
        company: "Global Solutions",
        leadScore: 25,
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
        id: "#850",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        lastContacted: "Jun 15, 2024",
        company: "Acma Industries",
        leadScore: 27,
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
        id: "#849",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        lastContacted: "Jun 14, 2024",
        company: "Synergy Ltd",
        leadScore: 16,
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
        id: "#848",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        lastContacted: "Jun 13, 2024",
        company: "Summit Solutions",
        leadScore: 38,
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
        id: "#847",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        lastContacted: "Jun 12, 2024",
        company: "Strategies Ltd",
        leadScore: 15,
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
        id: "#846",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        lastContacted: "Jun 11, 2024",
        company: "Tech Enterprises",
        leadScore: 41,
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
        id: "#845",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        lastContacted: "Jun 10, 2024",
        company: "Synetic Solutions",
        leadScore: 29,
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
        id: "#854",
        user: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        lastContacted: "Jun 19, 2024",
        company: "ABC Corporation",
        leadScore: 50,
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
        id: "#853",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        lastContacted: "Jun 18, 2024",
        company: "XYZ Ltd",
        leadScore: 35,
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
        id: "#852",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        lastContacted: "Jun 17, 2024",
        company: "Tech Solutions",
        leadScore: 40,
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
        id: "#851",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        lastContacted: "Jun 16, 2024",
        company: "Global Solutions",
        leadScore: 25,
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
        id: "#850",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        lastContacted: "Jun 15, 2024",
        company: "Acma Industries",
        leadScore: 27,
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
        id: "#849",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        lastContacted: "Jun 14, 2024",
        company: "Synergy Ltd",
        leadScore: 16,
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
        id: "#848",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        lastContacted: "Jun 13, 2024",
        company: "Summit Solutions",
        leadScore: 38,
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
        id: "#847",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        lastContacted: "Jun 12, 2024",
        company: "Strategies Ltd",
        leadScore: 15,
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
        id: "#846",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        lastContacted: "Jun 11, 2024",
        company: "Tech Enterprises",
        leadScore: 41,
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
        id: "#845",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        lastContacted: "Jun 10, 2024",
        company: "Synetic Solutions",
        leadScore: 29,
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
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          user: { name: string };
          email: string;
          phone: string;
          lastContacted: string;
          company: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.lastContacted
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.company.toLowerCase().includes(searchTerm.value.toLowerCase())
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
