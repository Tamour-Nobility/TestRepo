<template>
  <v-card
    class="notifications-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Timestamp</th>
              <th class="text-start">Type</th>
              <th class="text-start">Content</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="text-body">{{ item.id }}</td>
              <td class="text-body">{{ item.timestamp }}</td>
              <td class="fw-medium">{{ item.type }}</td>
              <td class="fw-medium">{{ item.content }}</td>
              <td class="text-body">
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button" class="text-black">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Notifications",
  setup() {
    const items = ref([
      {
        id: "#JAN-854",
        timestamp: "01 Dec 2024 09:30 AM",
        type: "Information",
        content: "New software update available. Click here to download.",
        status: "Unread",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-853",
        timestamp: "30 Nov 2024 09:30 AM",
        type: "Alert",
        content:
          "Urgent: Server maintenance scheduled for tomorrow at 10:00 PM.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-852",
        timestamp: "28 Nov 2024 09:30 AM",
        type: "Announcement",
        content:
          "Welcome to our new team member, Jane Smith, as Head of Sales.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-851",
        timestamp: "27 Nov 2024 09:30 AM",
        type: "Information",
        content:
          "Check out our latest blog post for tips on improving efficiency.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-850",
        timestamp: "26 Nov 2024 09:30 AM",
        type: "Alert",
        content: "Attention: Upcoming webinar on cybersecurity best practices.",
        status: "Unread",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-849",
        timestamp: "25 Nov 2024 09:30 AM",
        type: "Announcement",
        content: "Happy Thanksgiving! Our office will be closed on Nov 30.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-848",
        timestamp: "24 Nov 2024 09:30 AM",
        type: "Information",
        content: "Year-end financial reports are now available for download.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-847",
        timestamp: "23 Nov 2024 09:30 AM",
        type: "Announcement",
        content: "Critical security update. Update your passwords immediately.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-846",
        timestamp: "22 Nov 2024 09:30 AM",
        type: "Information",
        content: "Holiday Office Party on Dec 20. Save the date!",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
      {
        id: "#JAN-845",
        timestamp: "20 Nov 2024 09:30 AM",
        type: "Alert",
        content: "Year-end sale: Up to 20% off on selected products.",
        status: "Read",
        action: {
          view: "visibility",
        },
      },
    ]);

    const wordUnread = ref("Unread");

    const computeClass = (classValue: string) => {
      return {
        cancelled: wordUnread.value === classValue,
      };
    };

    return {
      computeClass,
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.notifications-card {
  &.v-card {
    &.trezo-card {
      .v-card-header {
        .search-box {
          width: 239px;
          margin-right: 20px;

          .input-search {
            height: 36px;
            font-size: 12px;
            padding-left: 38px;
            position: relative;
          }
          button {
            top: 53%;
            left: 13px;
            right: auto;
            position: absolute;
            transform: translateY(-50%);
            i {
              font-size: 20px !important;
            }
          }
        }
      }
    }
  }
}
/* Max width 576px */
@media only screen and (max-width: 576px) {
  .notifications-card {
    &.v-card {
      &.trezo-card {
        .v-card-header {
          display: block;
          .d-flex {
            display: block !important;
          }
          .search-box {
            width: 100%;
            margin-right: 0;
            margin-top: 10px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
