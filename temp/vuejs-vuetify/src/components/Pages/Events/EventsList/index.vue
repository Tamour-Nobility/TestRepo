<template>
  <v-card
    class="events-list-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search event here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <RouterLink to="/events/create-an-event" class="add-btn" type="button">
        <i class="material-symbols-outlined"> add </i>
        Add New Event
      </RouterLink>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Event ID</th>
              <th class="text-start">Event</th>
              <th class="text-start">Date and Time</th>
              <th class="text-start">Location</th>
              <th class="text-start">Organizer</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.eventID">
              <td class="text-start">
                {{ item.eventID }}
              </td>
              <td>
                <div class="product-info d-flex align-items-center">
                  <div class="image">
                    <v-img :src="item.event.image" alt="product-image" />
                  </div>
                  <div class="info">
                    <RouterLink
                      to="/events/event-details"
                      class="fw-medium d-inline-block"
                    >
                      {{ item.event.title }}
                    </RouterLink>
                  </div>
                </div>
              </td>
              <td>{{ item.dateAndTime }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.organizer }}</td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.delete }}
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
        <PaginationTwo items="10" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "EventsList",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        eventID: "#JAN-258",
        event: {
          image: require("@/assets/images/events/event1.jpg"),
          title: "Annual Conference 2024",
        },
        dateAndTime: "01 Dec 2024 09:00 AM",
        location: "Convention Center",
        organizer: "ABC Corporation",
        status: "Happening",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-648",
        event: {
          image: require("@/assets/images/events/event2.jpg"),
          title: "Leadership Summit 2024",
        },
        dateAndTime: "10 Dec 2024 03:00 AM",
        location: "Online",
        organizer: "Marketing Pros",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-945",
        event: {
          image: require("@/assets/images/events/event3.jpg"),
          title: "Product Launch Webinar",
        },
        dateAndTime: "15 Dec 2024 06:00 PM",
        location: "City Sky Lounge",
        organizer: "Tech Solutions Inc.",
        status: "Past",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-186",
        event: {
          image: require("@/assets/images/events/event4.jpg"),
          title: "AI in Healthcare Symposium",
        },
        dateAndTime: "20 Dec 2024 09:00 AM",
        location: "Training Center",
        organizer: "Startup Hub",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-439",
        event: {
          image: require("@/assets/images/events/event5.jpg"),
          title: "Tech Summit 2024",
        },
        dateAndTime: "25 Dec 2024 02:30 PM",
        location: "Tech Park Auditorium",
        organizer: "Community Foundation",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-752",
        event: {
          image: require("@/assets/images/events/event6.jpg"),
          title: "Startup Pitch Day",
        },
        dateAndTime: "30 Dec 2024 11:00 AM",
        location: "Grand Hotel Ballroom",
        organizer: "FutureTech Solutions",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-658",
        event: {
          image: require("@/assets/images/events/event7.jpg"),
          title: "Workshop: Digital Marketing",
        },
        dateAndTime: "01 Jan 2024 07:00 AM",
        location: "Innovation Hub",
        organizer: "Leadership Institute",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-951",
        event: {
          image: require("@/assets/images/events/event8.jpg"),
          title: "Charity Gala Dinner",
        },
        dateAndTime: "10 Jan 2024 03:00PM",
        location: "Medical Center",
        organizer: "XYZ Innovations",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-357",
        event: {
          image: require("@/assets/images/events/event9.jpg"),
          title: "Web Development Seminar",
        },
        dateAndTime: "20 Jan 2024 01:00 PM",
        location: "Corporate HQ",
        organizer: "DTech Institute",
        status: "Past",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        eventID: "#JAN-851",
        event: {
          image: require("@/assets/images/events/event10.jpg"),
          title: "Networking Mixer",
        },
        dateAndTime: "30 Jan 2024 10:00 AM",
        location: "Online",
        organizer: "ABC Corporation",
        status: "Upcoming",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item) =>
          item.eventID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.event.title
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.dateAndTime
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.organizer
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const computeClass = (status: string) => {
      return {
        happening: status === "Happening",
        inProgress: status === "Upcoming",
        cancelled: status === "Past",
      };
    };

    return {
      searchTerm,
      items,
      filteredItems,
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.events-list-card {
  .trezo-table-content {
    .trezo-table {
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-left: 1px solid #eceef2;
        border-right: 1px solid #eceef2;
        border-bottom: 1px solid #eceef2;
      }
    }
  }
}
</style>
