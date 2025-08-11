<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Type</th>
                <th scope="col">Content</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td class="text-body">
                  {{ item.timestamp }}
                </td>
                <td class="text-secondary fw-medium">
                  {{ item.type }}
                </td>
                <td class="text-secondary fw-medium">
                  {{ item.content }}
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPaginationTwo items="10" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Notification",
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

    const wordRead = ref("Read");
    const wordUnread = ref("Unread");

    const computeClass = (classValue: string) => {
      return {
        read: wordRead.value === classValue,
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
