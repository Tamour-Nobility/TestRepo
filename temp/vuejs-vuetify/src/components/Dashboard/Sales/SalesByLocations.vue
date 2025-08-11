<template>
  <v-card
    class="sales-by-locations-card mb-25 trezo-card border-radius d-block bg-white shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sales by Locations</h5>
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
    <div class="sales-by-locations-card-content">
      <div class="text-center">
        <v-img
          src="@/assets/images/vector-map.png"
          class="justify-content-center"
          alt="vector-map"
        />
      </div>
      <div class="trezo-table-content">
        <div class="trezo-table">
          <v-table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Orders</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>
                  <div class="customer-info d-flex align-items-center">
                    <div class="img">
                      <v-img
                        :src="item.country.image"
                        alt="flag-image"
                        width="22px"
                      />
                    </div>
                    <span class="d-block fw-medium">
                      {{ item.country.name }}
                    </span>
                  </div>
                </td>
                <td class="fw-medium">
                  {{ item.orders }}
                </td>
                <td class="fw-medium">
                  {{ item.earnings }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesByLocations",
  data() {
    return {
      items: [
        {
          id: 1,
          country: {
            image: require("@/assets/images/flags/usa.svg"),
            name: "USA",
          },
          orders: "22,124",
          earnings: "$250.4k",
        },
        {
          id: 2,
          country: {
            image: require("@/assets/images/flags/germany.svg"),
            name: "Germany",
          },
          orders: "18,320",
          earnings: "$180.3k",
        },
        {
          id: 3,
          country: {
            image: require("@/assets/images/flags/uk.svg"),
            name: "UK",
          },
          orders: "12,560",
          earnings: "$125.6k",
        },
        {
          id: 4,
          country: {
            image: require("@/assets/images/flags/canada.svg"),
            name: "Canada",
          },
          orders: "8,720",
          earnings: "$94.1k",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
.sales-by-locations-card {
  border: 1px solid var(--borderColor) !important;

  .sales-by-locations-card-content {
    .trezo-table-content {
      .trezo-table {
        table {
          thead {
            tr {
              background-color: transparent !important;
              th {
                font-size: 12px;
                text-align: end !important;
                color: var(--bodyColor);
                background-color: transparent !important;
                padding: {
                  top: 10px !important;
                  bottom: 7px !important;
                }
                &:first-child {
                  text-align: start !important;
                  padding-left: 0;
                }
                &:last-child {
                  padding-right: 0;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                text-align: end !important;
                border: {
                  left-width: 0 !important;
                  right-width: 0 !important;
                }
                padding: {
                  top: 12px !important;
                  bottom: 12px !important;
                }
                .customer-info {
                  .img {
                    border-radius: 0;

                    .v-img {
                      border-radius: 0;
                      margin-bottom: -3px;
                    }
                  }
                  span {
                    margin-left: 8px;
                  }
                }
                &:first-child {
                  text-align: start;
                  padding-left: 0;
                }
                &:last-child {
                  padding-right: 0;
                }
              }
              &:last-child {
                td {
                  padding-bottom: 0 !important;
                  border-bottom-width: 0;
                }
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
  .sales-by-locations-card {
    .sales-by-locations-card-content {
      .trezo-table-content {
        .trezo-table {
          table {
            thead {
              tr {
                th {
                  padding: {
                    bottom: 9px;
                  }
                }
              }
            }
            tbody {
              tr {
                td {
                  padding: {
                    top: 12px;
                    bottom: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sales-by-locations-card {
    .sales-by-locations-card-content {
      .trezo-table-content {
        .trezo-table {
          table {
            thead {
              tr {
                th {
                  padding: {
                    bottom: 9px;
                  }
                }
              }
            }
            tbody {
              tr {
                td {
                  padding: {
                    top: 12px;
                    bottom: 12px;
                  }
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
