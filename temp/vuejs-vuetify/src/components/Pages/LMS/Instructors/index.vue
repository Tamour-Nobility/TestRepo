<template>
  <v-card
    class="lms-instructors-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search instructor here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <AddNewInstructors />
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Name</th>
              <th class="text-start">Courses</th>
              <th class="text-start">Total Earnings</th>
              <th class="text-start">Email</th>
              <th class="text-start">Ratings</th>
              <th class="text-start">Status</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td>
                {{ item.id }}
              </td>
              <td>
                <div class="user-info d-flex align-items-center">
                  <div class="image">
                    <v-img
                      :src="item.user.image"
                      class="rounded-circle"
                      alt="user-image"
                    />
                  </div>
                  <div class="info">
                    <span class="fw-medium d-block">
                      {{ item.user.name }}
                    </span>
                    <span class="email d-block text-body">
                      {{ item.user.designation }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="text-body">{{ item.courses }}</td>
              <td class="text-body">{{ item.totalEarnings }}</td>
              <td class="text-body">{{ item.email }}</td>
              <td class="text-body">
                <div class="ratings lh-1">
                  <i
                    v-for="(stars, index) of item.ratings"
                    :key="index"
                    :class="stars.star"
                  ></i>
                </div>
              </td>
              <td>
                <span class="trezo-status-badge" v-if="item.status.active">
                  Active
                </span>
                <span
                  class="trezo-status-badge cancelled"
                  v-if="item.status.deactive"
                >
                  Deactive
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
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
import AddNewInstructors from "./AddNewInstructors.vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Instructors",
  components: {
    AddNewInstructors,
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#A-1217",
        user: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: require("@/assets/images/users/user16.jpg"),
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-2951",
        user: {
          image: require("@/assets/images/users/user17.jpg"),
          name: "Lucas Morgan",
          designation: "Developer",
        },
        courses: 86,
        totalEarnings: "$3890.00",
        email: "lucas@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-line",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-7342",
        user: {
          image: require("@/assets/images/users/user18.jpg"),
          name: "Isabella Cooper",
          designation: "Designer",
        },
        courses: 75,
        totalEarnings: "$2500.00",
        email: "isabella@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1217",
        user: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: require("@/assets/images/users/user16.jpg"),
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-2951",
        user: {
          image: require("@/assets/images/users/user17.jpg"),
          name: "Lucas Morgan",
          designation: "Developer",
        },
        courses: 86,
        totalEarnings: "$3890.00",
        email: "lucas@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-line",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-7342",
        user: {
          image: require("@/assets/images/users/user18.jpg"),
          name: "Isabella Cooper",
          designation: "Designer",
        },
        courses: 75,
        totalEarnings: "$2500.00",
        email: "isabella@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1217",
        user: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: require("@/assets/images/users/user16.jpg"),
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          user: { name: string; designation: string };
          totalEarnings: string;
          email: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.user.designation
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.totalEarnings
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase())
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
.lms-instructors-card {
  padding-bottom: 8px !important;
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;
              padding: {
                top: 13px;
                bottom: 13px;
              }
              &:first-child {
                border-top-left-radius: 0 !important;
                padding: {
                  left: 25px;
                  right: 0;
                }
              }
              &:last-child {
                border-top-right-radius: 0;
                padding-right: 25px;
              }
              .v-checkbox.v-input {
                margin: -18px -9px -40px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: {
                top: 17px !important;
                bottom: 17px !important;
              }
              &:first-child {
                border-left: 0 !important;
                padding: {
                  left: 25px;
                  right: 0;
                }
              }
              &:last-child {
                border-right: 0 !important;
                padding-right: 25px;
                text-align: end;
              }
              .action-buttons.d-flex.align-items-center {
                justify-content: end;
              }
              .v-checkbox.v-input {
                margin: -10px -30px -32px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
              }
            }
          }
        }
      }
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
      }
    }
  }
}
</style>
