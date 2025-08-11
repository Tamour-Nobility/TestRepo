<template>
  <v-card
    class="recent-customer-ratings-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Customer Ratings</h5>
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
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 5)" :key="item.id">
              <td class="text-start">
                <div class="user-info d-flex align-items-center">
                  <div class="image">
                    <v-img
                      class="rounded-circle"
                      :src="item.user.image"
                      alt="user-image"
                    />
                  </div>
                  <div class="info">
                    <span class="fw-medium d-block">
                      {{ item.user.name }}
                    </span>
                    <span class="email d-block text-body">
                      {{ item.user.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="text-body">{{ item.date }}</td>
              <td class="text-body">
                <div class="ratings lh-1">
                  <i
                    v-for="rating in item.ratings"
                    :key="rating.id"
                    :class="rating.star"
                  ></i>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <PaginationTwo items="5" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "RecentCustomerRatings",
  components: {
    PaginationTwo,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: require("@/assets/images/users/user13.jpg"),
            name: "Olivia Clark",
            email: "Big Data",
          },
          date: "28 August, 2024",
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-fill",
            },
          ],
        },
        {
          id: 2,
          user: {
            image: require("@/assets/images/users/user16.jpg"),
            name: "Ava Turner",
            email: "UX/UI",
          },
          date: "27 August, 2024",
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 3,
          user: {
            image: require("@/assets/images/users/user17.jpg"),
            name: "Lucas Morgan",
            email: "Developer",
          },
          date: "26 August, 2024",
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-line",
            },
          ],
        },
        {
          id: 4,
          user: {
            image: require("@/assets/images/users/user18.jpg"),
            name: "Isabella Cooper",
            email: "Designer",
          },
          date: "25 August, 2024",
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 5,
          user: {
            image: require("@/assets/images/users/user15.jpg"),
            name: "Isabella Cooper",
            email: "Designer",
          },
          date: "24 August, 2024",
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-customer-ratings-card {
  .trezo-table-content {
    .trezo-table {
      margin: {
        left: -25px;
        right: -25px;
      }
      .v-table {
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
                  border-left-width: 0 !important;
                  padding-left: 25px;
                }
                &:last-child {
                  padding-right: 25px;
                  border-right-width: 0 !important;
                }
                .user-info {
                  .image {
                    width: 44px;
                    height: 44px;
                    margin-right: 12px;
                  }
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
}
</style>
