<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3"
      >
        <form class="position-relative table-src-form me-0" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
            v-model="searchTerm"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <NuxtLink
          to="/events/create-an-event"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block fs-18 me-1"></i>
            <span>Add New Event</span>
          </span>
        </NuxtLink>
      </div>

      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Event ID</th>
                <th scope="col">Event</th>
                <th scope="col">Date and Time</th>
                <th scope="col">Location</th>
                <th scope="col">Organizer</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="item in filteredItems.slice(0, 10)"
                :key="item.eventID"
              >
                <td class="text-body">
                  {{ item.eventID }}
                </td>
                <td>
                  <NuxtLink
                    to="/events/event-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      :src="item.event.image"
                      class="wh-40 rounded-3"
                      alt="event-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.event.title }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-secondary">
                  {{ item.dateAndTime }}
                </td>
                <td class="text-secondary">
                  {{ item.location }}
                </td>
                <td class="text-secondary">
                  {{ item.organizer }}
                </td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
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
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/event-1.jpg";
import image2 from "~/assets/images/event-2.jpg";
import image3 from "~/assets/images/event-3.jpg";
import image4 from "~/assets/images/event-4.jpg";
import image5 from "~/assets/images/event-5.jpg";
import image6 from "~/assets/images/event-6.jpg";
import image7 from "~/assets/images/event-7.jpg";
import image8 from "~/assets/images/event-8.jpg";
import image9 from "~/assets/images/event-9.jpg";
import image10 from "~/assets/images/event-10.jpg";

export default defineComponent({
  name: "EventsList",
  setup() {
    const items = ref([
      {
        eventID: "#JAN-258",
        event: {
          image: image1,
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
          image: image2,
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
          image: image3,
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
          image: image4,
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
          image: image5,
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
          image: image6,
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
          image: image7,
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
          image: image8,
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
          image: image9,
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
          image: image10,
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
      {
        eventID: "#JAN-258",
        event: {
          image: image1,
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
          image: image2,
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
          image: image3,
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
          image: image4,
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
          image: image5,
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
          image: image6,
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
          image: image7,
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
          image: image8,
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
          image: image9,
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
          image: image10,
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
        (item: {
          eventID: string;
          event: { title: string };
          dateAndTime: string;
          location: string;
          organizer: string;
          status: string;
        }) =>
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
