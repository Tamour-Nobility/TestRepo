<template>
  <v-card
    class="browser-used-by-users-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Browser Used By Users</h5>
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
              <th>Browser</th>
              <th>Users (%)</th>
              <th>Sessions</th>
              <th>Bounce Rate (%)</th>
              <th>Avg. Session Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.browser.image" alt="instructor-image" />
                  </div>
                  <span class="d-block fw-medium">
                    {{ item.browser.name }}
                  </span>
                </div>
              </td>
              <td>
                {{ item.users }}
              </td>
              <td>
                {{ item.sessions }}
              </td>
              <td>
                {{ item.bounce_rate }}
              </td>
              <td>
                {{ item.avgs_duration }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BrowserUsedByUsers",
  data() {
    return {
      items: [
        {
          id: 1,
          browser: {
            image: require("@/assets/images/browsers/google-chrome.svg"),
            name: "Google Chrome",
          },
          users: "58.4%",
          sessions: "12,345",
          bounce_rate: "34.2%",
          avgs_duration: "3m 15s",
        },
        {
          id: 2,
          browser: {
            image: require("@/assets/images/browsers/safari.svg"),
            name: "Safari",
          },
          users: "25.1%",
          sessions: "5,289",
          bounce_rate: "40.5%",
          avgs_duration: "2m 45s",
        },
        {
          id: 3,
          browser: {
            image: require("@/assets/images/browsers/microsoft-edge.svg"),
            name: "Microsoft Edge",
          },
          users: "10.2%",
          sessions: "2,134",
          bounce_rate: "29.8%",
          avgs_duration: "4m 05s",
        },
        {
          id: 4,
          browser: {
            image: require("@/assets/images/browsers/mozilla-firefox.svg"),
            name: "Mozilla Firefox",
          },
          users: "4.3%",
          sessions: "897",
          bounce_rate: "38.0%",
          avgs_duration: "3m 00s",
        },
        {
          id: 6,
          browser: {
            image: require("@/assets/images/browsers/opera-mini.svg"),
            name: "Opera Mini",
          },
          users: "1.5%",
          sessions: "315",
          bounce_rate: "35.7%",
          avgs_duration: "2m 30s",
        },
        {
          id: 7,
          browser: {
            image: require("@/assets/images/browsers/others.svg"),
            name: "Others",
          },
          users: "0.5%",
          sessions: "105",
          bounce_rate: "42.1%",
          avgs_duration: "2m 10s",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.browser-used-by-users-card {
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
                padding-left: 0;
                text-align: center;
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
              padding: 10px 14px !important;
              border: {
                left-width: 0 !important;
                right-width: 0 !important;
              }
              .customer-info {
                .img {
                  width: 16px;
                  border-radius: 0;

                  img {
                    border-radius: 0;
                    margin-bottom: -3px;
                  }
                }
                span {
                  margin-left: 10px;
                }
              }
              &:first-child {
                padding-left: 0 !important;
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
  .browser-used-by-users-card {
    .v-card-header {
      display: block;
      .card-header-menu {
        margin-top: 5px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .browser-used-by-users-card {
    .v-card-header {
      display: flex;
      .card-header-menu {
        margin-top: 0;
      }
    }
  }
}
</style>
