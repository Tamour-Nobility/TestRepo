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
        <RouterLink
          to="/users/add-user"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New User</span>
          </span>
        </RouterLink>
      </div>

      <div class="default-table-area style-two all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
                <th scope="col">Phone</th>
                <th scope="col">Projects</th>
                <th scope="col">Join Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems.slice(0, 10)" :key="item.userID">
                <td class="text-body">
                  {{ item.userID }}
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.user.image"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.user.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="text-secondary">
                  {{ item.email }}
                </td>
                <td class="text-secondary">
                  {{ item.location }}
                </td>
                <td class="text-secondary">
                  {{ item.phone }}
                </td>
                <td class="text-secondary">
                  {{ item.projects }}
                </td>
                <td class="text-secondary">
                  {{ item.joinDate }}
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

        <PaginationTwo class="p-4" items="10" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "UsersList",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        userID: "#JAN-158",
        user: {
          image: require("@/assets/images/user-6.jpg"),
          name: "Marcia Baker",
        },
        email: "marcia@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-445-4455",
        projects: 6,
        joinDate: "01 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-325",
        user: {
          image: require("@/assets/images/user-7.jpg"),
          name: "Carolyn Barnes",
        },
        email: "barnes@trezo.com",
        location: "Chicago",
        phone: "+1 555-455-9966",
        projects: 10,
        joinDate: "02 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-286",
        user: {
          image: require("@/assets/images/user-8.jpg"),
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        location: "Oklahoma City",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "03 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-463",
        user: {
          image: require("@/assets/images/user-9.jpg"),
          name: "Barbara Cross",
        },
        email: "cross@trezo.com",
        location: "San Diego",
        phone: "+1 555-445-7788",
        projects: 4,
        joinDate: "04 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-491",
        user: {
          image: require("@/assets/images/user-10.jpg"),
          name: "Rebecca Block",
        },
        email: "block@trezo.com",
        location: "Los Angeles",
        phone: "+1 555-333-2288",
        projects: 2,
        joinDate: "05 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-860",
        user: {
          image: require("@/assets/images/user-11.jpg"),
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        location: "Las Vegas",
        phone: "+1 555-445-4455",
        projects: 8,
        joinDate: "06 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-431",
        user: {
          image: require("@/assets/images/user-12.jpg"),
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        location: "San Francisco",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "07 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-998",
        user: {
          image: require("@/assets/images/user-13.jpg"),
          name: "Marcelino Haddock",
        },
        email: "haddock@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-455-9966",
        projects: 9,
        joinDate: "08 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-436",
        user: {
          image: require("@/assets/images/user-14.jpg"),
          name: "Thomas Wilson",
        },
        email: "wildon@trezo.com",
        location: "San Diego",
        phone: "+1 555-333-2288",
        projects: 5,
        joinDate: "10 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-125",
        user: {
          image: require("@/assets/images/user-15.jpg"),
          name: "Nathaniel Hulsey",
        },
        email: "hulsey@trezo.com",
        location: "Chicago",
        phone: "+1 555-445-7788",
        projects: 6,
        joinDate: "11 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-158",
        user: {
          image: require("@/assets/images/user-6.jpg"),
          name: "Marcia Baker",
        },
        email: "marcia@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-445-4455",
        projects: 6,
        joinDate: "01 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-325",
        user: {
          image: require("@/assets/images/user-7.jpg"),
          name: "Carolyn Barnes",
        },
        email: "barnes@trezo.com",
        location: "Chicago",
        phone: "+1 555-455-9966",
        projects: 10,
        joinDate: "02 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-286",
        user: {
          image: require("@/assets/images/user-8.jpg"),
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        location: "Oklahoma City",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "03 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-463",
        user: {
          image: require("@/assets/images/user-9.jpg"),
          name: "Barbara Cross",
        },
        email: "cross@trezo.com",
        location: "San Diego",
        phone: "+1 555-445-7788",
        projects: 4,
        joinDate: "04 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-491",
        user: {
          image: require("@/assets/images/user-10.jpg"),
          name: "Rebecca Block",
        },
        email: "block@trezo.com",
        location: "Los Angeles",
        phone: "+1 555-333-2288",
        projects: 2,
        joinDate: "05 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-860",
        user: {
          image: require("@/assets/images/user-11.jpg"),
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        location: "Las Vegas",
        phone: "+1 555-445-4455",
        projects: 8,
        joinDate: "06 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-431",
        user: {
          image: require("@/assets/images/user-12.jpg"),
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        location: "San Francisco",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "07 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-998",
        user: {
          image: require("@/assets/images/user-13.jpg"),
          name: "Marcelino Haddock",
        },
        email: "haddock@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-455-9966",
        projects: 9,
        joinDate: "08 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-436",
        user: {
          image: require("@/assets/images/user-14.jpg"),
          name: "Thomas Wilson",
        },
        email: "wildon@trezo.com",
        location: "San Diego",
        phone: "+1 555-333-2288",
        projects: 5,
        joinDate: "10 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-125",
        user: {
          image: require("@/assets/images/user-15.jpg"),
          name: "Nathaniel Hulsey",
        },
        email: "hulsey@trezo.com",
        location: "Chicago",
        phone: "+1 555-445-7788",
        projects: 6,
        joinDate: "11 Dec 2024",
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
          userID: string;
          user: { name: string };
          email: string;
          location: string;
          phone: string;
          joinDate: string;
        }) =>
          item.userID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.joinDate.toLowerCase().includes(searchTerm.value.toLowerCase())
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
