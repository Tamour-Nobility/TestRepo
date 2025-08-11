<template>
  <v-card
    class="enrolled-students-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Enrolled Students</h5>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Name</th>
              <th class="text-start">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="text-body">{{ item.id }}</td>
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
                  </div>
                </div>
              </td>
              <td class="text-body">{{ item.email }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/users/user13.jpg";
import image2 from "~/assets/images/users/user16.jpg";
import image3 from "~/assets/images/users/user17.jpg";
import image4 from "~/assets/images/users/user18.jpg";

export default defineComponent({
  name: "EnrolledStudents",
  setup() {
    const items = ref([
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
      {
        id: "#A1364",
        user: {
          image: image2,
          name: "Ava Turner",
        },
        email: "ava@trezo.com",
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
        },
        email: "lucas@trezo.com",
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
        },
        email: "isabella@trezo.com",
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
      {
        id: "#A1364",
        user: {
          image: image2,
          name: "Ava Turner",
        },
        email: "ava@trezo.com",
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
        },
        email: "lucas@trezo.com",
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
        },
        email: "isabella@trezo.com",
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.enrolled-students-card {
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      height: 450px;
      overflow: auto;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;

              &:first-child {
                border-top-left-radius: 0 !important;
                padding-left: 25px;
              }
              &:last-child {
                border-top-right-radius: 0 !important;
                padding-right: 25px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              &:first-child {
                padding-left: 25px;
                border-left-width: 0 !important;
              }
              &:last-child {
                padding-right: 25px;
                border-right-width: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0 !important;
              }
            }
          }
        }
      }
    }
  }
}
/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .enrolled-students-card {
    .trezo-table-content {
      .trezo-table {
        height: 475px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .enrolled-students-card {
    .trezo-table-content {
      .trezo-table {
        height: 500px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .enrolled-students-card {
    .trezo-table-content {
      .trezo-table {
        height: 425px;
      }
    }
  }
}
</style>
