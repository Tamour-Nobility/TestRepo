<template>
  <v-card
    class="top-performers-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Performers</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Week
          </button>
        </template>
        <v-list class="menu-content">
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
                    <NuxtLink
                      class="fw-medium d-block"
                      to="/ecommerce/product-details"
                    >
                      {{ item.user.name }}
                    </NuxtLink>
                    <span class="email d-block text-body">
                      {{ item.user.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="#"
                  class="link-btn d-inline-block rounded-circle position-relative"
                >
                  <i class="material-symbols-outlined">arrow_outward</i>
                </a>
              </td>
            </tr>
          </tbody>
        </v-table>

        <CommonPaginationTwo items="5" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/users/user6.jpg";
import image2 from "~/assets/images/users/user7.jpg";
import image3 from "~/assets/images/users/user8.jpg";
import image4 from "~/assets/images/users/user9.jpg";
import image5 from "~/assets/images/users/user10.jpg";

export default defineComponent({
  name: "TopPerformers",
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: image1,
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
        },
        {
          id: 2,
          user: {
            image: image2,
            name: "Laura Martinez",
            email: "laura@trezo.com",
          },
        },
        {
          id: 3,
          user: {
            image: image3,
            name: "Mark Thompson",
            email: "mark@trezo.com",
          },
        },
        {
          id: 4,
          user: {
            image: image4,
            name: "Rachel White",
            email: "rachel@trezo.com",
          },
        },
        {
          id: 5,
          user: {
            image: image5,
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
        {
          id: 6,
          user: {
            image: image2,
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.top-performers-card {
  .trezo-table-content {
    .trezo-table {
      .v-table {
        table {
          tbody {
            tr {
              td {
                padding: {
                  top: 16.7px;
                  bottom: 16.7px;
                }
                &:first-child {
                  padding-left: 0;
                  border-left-width: 0 !important;
                }
                &:last-child {
                  border-right-width: 0 !important;
                  padding-right: 0;
                  text-align: end;
                }
                .user-info {
                  .image {
                    width: 44px;
                    height: 44px;
                    margin-right: 12px;
                  }
                }
                .link-btn {
                  width: 36px;
                  height: 36px;
                  line-height: 42px;
                  min-width: auto;
                  transition: unset;
                  text-align: center;
                  border: 1px solid #eceef2;
                  i {
                    font-size: 18px;
                    color: var(--bodyColor);
                  }
                  &:hover {
                    background-color: var(--primaryColor);
                    i {
                      color: var(--whiteColor);
                    }
                  }
                }
              }
              &:first-child {
                td {
                  border-top-width: 1px solid #eceef2;
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
