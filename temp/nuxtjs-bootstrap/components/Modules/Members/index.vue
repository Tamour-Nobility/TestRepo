<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Member</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Location</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Last Active</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="item.member.image"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.member.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-body">
                  {{ item.email }}
                </td>
                <td class="text-body">
                  {{ item.phone }}
                </td>
                <td class="text-body">
                  {{ item.location }}
                </td>
                <td class="text-body">
                  {{ item.joiningDate }}
                </td>
                <td class="text-body">
                  {{ item.lastActive }}
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

import image1 from "~/assets/images/user-6.jpg";
import image2 from "~/assets/images/user-7.jpg";
import image3 from "~/assets/images/user-8.jpg";
import image4 from "~/assets/images/user-9.jpg";
import image5 from "~/assets/images/user-10.jpg";
import image6 from "~/assets/images/user-11.jpg";
import image7 from "~/assets/images/user-12.jpg";
import image8 from "~/assets/images/user-13.jpg";
import image9 from "~/assets/images/user-14.jpg";
import image10 from "~/assets/images/user-15.jpg";

export default defineComponent({
  name: "Members",
  setup() {
    const items = ref([
      {
        id: "#JAN-854",
        member: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        location: "Washington D.C",
        joiningDate: "10 Oct 2024",
        lastActive: "01 Dec 2024 08:23 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-853",
        member: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        location: "Chicago",
        joiningDate: "11 Sep 2024",
        lastActive: "02 Dec 2024 05:09 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-852",
        member: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        location: "Oklahoma City",
        joiningDate: "12 Aug 2024",
        lastActive: "03 Dec 2024 09:30 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-851",
        member: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        location: "San Diego",
        joiningDate: "13 Jul 2024",
        lastActive: "04 Dec 2024 10:22 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-850",
        member: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        location: "Los Angeles",
        joiningDate: "14 Jun 2024",
        lastActive: "05 Dec 2024 08:49 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-849",
        member: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        location: "Las Vegas",
        joiningDate: "15 May 2024",
        lastActive: "06 Dec 2024 04:35 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-848",
        member: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        location: "San Francisco",
        joiningDate: "16 Apr 2024",
        lastActive: "07 Dec 2024 06:13 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-847",
        member: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        location: "Washington D.C",
        joiningDate: "17 Mar 2024",
        lastActive: "08 Dec 2024 02:20 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-846",
        member: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        location: "San Diego",
        joiningDate: "18 Feb 2024",
        lastActive: "09 Dec 2024 12:09 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-845",
        member: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        location: "Chicago",
        joiningDate: "19 Jan 2024",
        lastActive: "10 Dec 2024 06:03 PM",
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
          id: string;
          member: { name: string };
          email: string;
          phone: string;
          location: string;
          joiningDate: string;
          lastActive: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.member.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.joiningDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.lastActive.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordActive = ref("Active");
    const wordDeactive = ref("Deactive");

    const computeClass = (classValue: string) => {
      return {
        published: wordActive.value === classValue,
        warning: wordDeactive.value === classValue,
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      computeClass,
    };
  },
});
</script>
