<template>
  <v-card
    class="top-browsing-pages-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Browsing Pages Today</h5>
      <div class="d-flex align-items-center">
        <form class="search-box position-relative" @submit.prevent>
          <input
            type="text"
            class="input-search d-block"
            placeholder="Search here.."
            v-model="searchTerm"
          />
          <button type="submit">
            <i class="material-symbols-outlined">search</i>
          </button>
        </form>
      </div>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Page URL</th>
              <th>Source</th>
              <th>Avg Time</th>
              <th>Page Views</th>
              <th>Bounce Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems.slice(0, 6)" :key="item.id">
              <td>
                <a href="#" class="text-secondary">
                  {{ item.page_url }}
                </a>
              </td>
              <td>
                {{ item.source }}
              </td>
              <td>
                {{ item.avg_time }}
              </td>
              <td>
                {{ item.page_views }}
              </td>
              <td>
                {{ item.bounce_rate }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <PaginationTwo items="6" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

interface Item {
  id: number;
  page_url: string;
  source: string;
  avg_time: string;
  page_views: string;
  bounce_rate: string;
}

export default defineComponent({
  name: "TopBrowsingPagesToday",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref<Item[]>([
      {
        id: 1,
        page_url: "/dashboard-overview",
        source: "Organic",
        avg_time: "3m 45s",
        page_views: "350",
        bounce_rate: "30.5%",
      },
      {
        id: 2,
        page_url: "/custom-reports/generate",
        source: "Paid",
        avg_time: "7m 00s",
        page_views: "400",
        bounce_rate: "24.9%",
      },
      {
        id: 3,
        page_url: "/export-data",
        source: "Direct",
        avg_time: "2m 30s",
        page_views: "125",
        bounce_rate: "50.0%",
      },
      {
        id: 4,
        page_url: "/realtime-users",
        source: "Referral",
        avg_time: "3m 00s",
        page_views: "190",
        bounce_rate: "40.2%",
      },
      {
        id: 5,
        page_url: "/account-preferences",
        source: "Organic",
        avg_time: "2m 50s",
        page_views: "180",
        bounce_rate: "42.1%",
      },
      {
        id: 6,
        page_url: "/apis-and-reports",
        source: "Paid",
        avg_time: "4m 15s",
        page_views: "320",
        bounce_rate: "28.7%",
      },
      {
        id: 7,
        page_url: "/apis-and-reports",
        source: "Paid",
        avg_time: "4m 15s",
        page_views: "320",
        bounce_rate: "28.7%",
      },
      {
        id: 8,
        page_url: "/account-preferences",
        source: "Organic",
        avg_time: "2m 50s",
        page_views: "180",
        bounce_rate: "42.1%",
      },
      {
        id: 9,
        page_url: "/realtime-users",
        source: "Referral",
        avg_time: "3m 00s",
        page_views: "190",
        bounce_rate: "40.2%",
      },
      {
        id: 10,
        page_url: "/export-data",
        source: "Direct",
        avg_time: "2m 30s",
        page_views: "125",
        bounce_rate: "50.0%",
      },
      {
        id: 11,
        page_url: "/custom-reports/generate",
        source: "Paid",
        avg_time: "7m 00s",
        page_views: "400",
        bounce_rate: "24.9%",
      },
      {
        id: 12,
        page_url: "/dashboard-overview",
        source: "Organic",
        avg_time: "3m 45s",
        page_views: "350",
        bounce_rate: "30.5%",
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          page_url: string;
          source: string;
          avg_time: string;
          page_views: string | any[];
          bounce_rate: string | any[];
        }) =>
          item.page_url
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.avg_time
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.page_views.includes(searchTerm.value) ||
          item.bounce_rate.includes(searchTerm.value)
      );
    });

    return {
      searchTerm,
      filteredItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.text-secondary {
  color: var(--secondaryColor) !important;
}
.top-browsing-pages-card {
  .trezo-table-content {
    .trezo-table {
      table {
        thead {
          tr {
            th {
              font-size: 12px;
              text-align: end !important;
              padding: 0 14px 7px !important;
              color: var(--bodyColor);
              background-color: #ffffff !important;

              &:first-child {
                padding-left: 0 !important;
                text-align: start !important;
              }
              &:nth-child(2),
              &:nth-child(3) {
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              text-align: end !important;
              padding: 8px 14px !important;
              border: {
                left-width: 0 !important;
                right-width: 0 !important;
              }
              &:first-child {
                padding-left: 0 !important;
                text-align: start !important;
              }
              &:nth-child(2),
              &:nth-child(3) {
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
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
  .top-browsing-pages-card {
    .v-card-header {
      display: block;
      h5 {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
