<template>
  <v-row>
    <v-col cols="12" lg="4" md="12">
      <Sidebar />
    </v-col>
    <v-col cols="12" lg="8" md="12">
      <v-card
        class="email-inbox-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <v-checkbox color="primary" title="Select"></v-checkbox>
          <div
            class="buttons-list d-flex align-items-center justify-space-between"
          >
            <div>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <button v-bind="props" class="fw-bold" title="Select">
                    <i class="material-symbols-outlined"> arrow_drop_down </i>
                  </button>
                </template>
                <v-list class="menu-content">
                  <button type="button" class="bg-transparent border-none">
                    All
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    None
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Read
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Unread
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Starred
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Unstarred
                  </button>
                </v-list>
              </v-menu>
              <button type="button" title="Archive">
                <i class="material-symbols-outlined"> archive </i>
              </button>
              <button type="button" title="Report Spam">
                <i class="material-symbols-outlined"> help_clinic </i>
              </button>
              <button type="button" title="Delete">
                <i class="material-symbols-outlined"> delete </i>
              </button>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <button v-bind="props" title="More">
                    <i class="material-symbols-outlined"> more_vert </i>
                  </button>
                </template>
                <v-list class="menu-content">
                  <button type="button" class="bg-transparent border-none">
                    Mark as unread
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Snooze
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Add star
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Mark as important
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Mark as not important
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Forward as attachment
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Filter
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Mute
                  </button>
                </v-list>
              </v-menu>
            </div>
            <PaginationTwo items="11" />
          </div>
        </div>
        <div class="inbox-card-content">
          <v-tabs v-model="tab" bg-color="white">
            <v-tab value="one">
              <i class="material-symbols-outlined"> inbox </i>
              Primary
            </v-tab>
            <v-tab value="two">
              <i class="material-symbols-outlined"> shoppingmode </i>
              Promotions
            </v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <PrimaryEmails />
              </v-tabs-window-item>
              <v-tabs-window-item value="two">
                <PromotionsEmails />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../Sidebar.vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";
import PrimaryEmails from "./PrimaryEmails.vue";
import PromotionsEmails from "./PromotionsEmails.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Inbox",
  components: {
    Sidebar,
    PaginationTwo,
    PrimaryEmails,
    PromotionsEmails,
  },
  data: () => ({
    tab: null,
  }),
});
</script>

<style lang="scss" scoped>
.email-inbox-card {
  .v-card-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .v-checkbox.v-input {
      margin: -30px -30px -30px -10px;
    }
    .v-input__details {
      display: none !important;
    }
    .v-selection-control__input {
      width: 0 !important;
      height: 0 !important;
    }
    .buttons-list {
      line-height: 1;
      width: 100%;

      button {
        padding: 0;
        height: auto;
        min-width: auto;
        border-radius: 0;
        margin-left: 10px;
        display: inline-block;
        color: var(--bodyColor);

        i {
          font-size: 18px;
          font-weight: 900;
        }
        &:first-child {
          margin: {
            left: 25px;
            right: 20px;
          }
        }
      }
      .pagination-content {
        margin-top: 0 !important;
        span {
          display: none !important;
        }
      }
    }
  }
  .inbox-card-content {
    .v-slide-group {
      margin-top: 20px;

      .v-slide-group__container {
        .v-slide-group__content {
          .v-btn {
            margin-right: 33px;
            padding: 0 0 10px;
            height: 30px;
            text-transform: initial;
            color: var(--bodyColor);
            font-weight: 500;
            letter-spacing: 0;
            min-width: initial;
            &:last-child {
              margin-right: 0;
            }
            i {
              font-size: 18px;
              position: relative;
              top: 1px;
              margin-right: 3px;
              font-weight: 900;
            }

            &.v-tab-item--selected {
              color: var(--primaryColor);
            }
          }
        }
      }
    }
    .v-tabs--density-default {
      --v-tabs-height: auto !important;
      border-bottom: 1px solid #eceef2 !important;
    }
    .v-card-text {
      padding: 0 !important;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .email-inbox-card {
    .v-card-header {
      margin-bottom: 15px;

      .buttons-list {
        button {
          margin-left: 10px;

          &:first-child {
            margin: {
              left: 0;
              right: 10px;
            }
          }
        }
      }
    }
    .inbox-card-content {
      .inbox-nav-links {
        margin-bottom: 12px;

        li {
          margin-right: 25px;

          button {
            padding-left: 23px;

            i {
              font-size: 16px;
              margin-top: 0;
            }
            &::before {
              bottom: -13px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .email-inbox-card {
    .inbox-card-content {
      .inbox-nav-links {
        li {
          margin-right: 30px;

          button {
            padding-left: 25px;
          }
        }
      }
    }
  }
}
</style>
