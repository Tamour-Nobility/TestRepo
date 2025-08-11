<template>
  <v-card
    class="clicks-by-keywords-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Clicks/Impressions by Keywords</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Oct 01 - Oct 31, 2024
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Sep 01 - Sep 30, 2024
          </button>
          <button type="button" class="bg-transparent border-none">
            Aug 01 - Aug 31, 2024
          </button>
          <button type="button" class="bg-transparent border-none">
            Jul 01 - Jul 31, 2024
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>#</th>
              <th>Dimension</th>
              <th>Impressions</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 8)" :key="item.id">
              <td>
                {{ item.id }}
              </td>
              <td>
                {{ item.dimension }}
              </td>
              <td>
                <span class="fw-medium impressions position-relative">
                  <i
                    class="material-symbols-outlined"
                    v-if="item.impressions.upIcon"
                  >
                    trending_up
                  </i>
                  <i
                    class="down material-symbols-outlined"
                    v-if="item.impressions.downIcon"
                  >
                    trending_down
                  </i>
                  {{ item.impressions.number }}
                </span>
              </td>
              <td>
                <span class="fw-medium clicks position-relative">
                  <i
                    class="material-symbols-outlined"
                    v-if="item.clicks.upIcon"
                  >
                    trending_up
                  </i>
                  <i
                    class="down material-symbols-outlined"
                    v-if="item.clicks.downIcon"
                  >
                    trending_down
                  </i>
                  {{ item.clicks.number }}
                </span>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <CommonPaginationTwo items="8" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClicksImpressionsByKeywords",
  data() {
    return {
      items: [
        {
          id: "1",
          dimension: "data metrics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "949",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "656",
          },
        },
        {
          id: "2",
          dimension: "sales metrics",
          impressions: {
            upIcon: false,
            downIcon: true,
            number: "842",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "420",
          },
        },
        {
          id: "3",
          dimension: "analytics dashboard",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "640",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "534",
          },
        },
        {
          id: "4",
          dimension: "saas metrics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "865",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "560",
          },
        },
        {
          id: "5",
          dimension: "hubspot analytics",
          impressions: {
            upIcon: false,
            downIcon: true,
            number: "435",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "328",
          },
        },
        {
          id: "6",
          dimension: "smart goals",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "756",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "235",
          },
        },
        {
          id: "7",
          dimension: "google analytics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "578",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "456",
          },
        },
        {
          id: "8",
          dimension: "trezo dashboard",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "660",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "478",
          },
        },
        {
          id: "9",
          dimension: "trezo dashboard",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "660",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "478",
          },
        },
        {
          id: "10",
          dimension: "google analytics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "578",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "456",
          },
        },
        {
          id: "11",
          dimension: "smart goals",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "756",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "235",
          },
        },
        {
          id: "12",
          dimension: "hubspot analytics",
          impressions: {
            upIcon: false,
            downIcon: true,
            number: "435",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "328",
          },
        },
        {
          id: "13",
          dimension: "saas metrics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "865",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "560",
          },
        },
        {
          id: "14",
          dimension: "analytics dashboard",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "640",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "534",
          },
        },
        {
          id: "15",
          dimension: "sales metrics",
          impressions: {
            upIcon: false,
            downIcon: true,
            number: "842",
          },
          clicks: {
            upIcon: true,
            downIcon: false,
            number: "420",
          },
        },
        {
          id: "16",
          dimension: "data metrics",
          impressions: {
            upIcon: true,
            downIcon: false,
            number: "949",
          },
          clicks: {
            upIcon: false,
            downIcon: true,
            number: "656",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.clicks-by-keywords-card {
  .trezo-table-content {
    .trezo-table {
      table {
        thead {
          tr {
            th {
              font-size: 12px;
              text-align: end !important;
              color: var(--bodyColor);
              background-color: #ffffff !important;
              padding: {
                top: 0 !important;
                bottom: 7px !important;
              }
              &:first-child {
                text-align: start !important;
                padding: {
                  left: 0 !important;
                  right: 10px;
                }
              }
              &:nth-child(2) {
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
              font-weight: 500;
              border: {
                left-width: 0 !important;
                right-width: 0 !important;
              }
              padding: {
                top: 9px !important;
                bottom: 9px !important;
              }
              &:first-child {
                text-align: start !important;
                padding: {
                  left: 0;
                  right: 10px;
                }
              }
              &:nth-child(2) {
                padding-left: 0;
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .clicks-by-keywords-card {
    .v-card-header {
      display: block;
      h5 {
        margin-bottom: 5px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .clicks-by-keywords-card {
    .v-card-header {
      display: flex;
      h5 {
        margin-bottom: 0;
      }
    }
  }
}
</style>
