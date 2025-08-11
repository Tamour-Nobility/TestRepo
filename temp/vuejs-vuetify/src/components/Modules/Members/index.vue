<template>
  <v-card
    class="customers-list trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search member here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Member</th>
              <th class="text-start">Email</th>
              <th class="text-start">Phone</th>
              <th class="text-start">Location</th>
              <th class="text-start">Joining Date</th>
              <th class="text-start">Last Active</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      class="rounded-circle"
                      :src="item.member.image"
                      alt="customer-image"
                    />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.member.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">{{ item.email }}</td>
              <td class="text-body">{{ item.phone }}</td>
              <td class="text-body">{{ item.location }}</td>
              <td class="text-body">{{ item.joiningDate }}</td>
              <td class="text-body">{{ item.lastActive }}</td>
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
import PaginationTwo from '@/components/Common/PaginationTwo.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Members",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#JAN-854",
        member: {
          image: require("@/assets/images/users/user6.jpg"),
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
          image: require("@/assets/images/users/user7.jpg"),
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
          image: require("@/assets/images/users/user8.jpg"),
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
          image: require("@/assets/images/users/user9.jpg"),
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
          image: require("@/assets/images/users/user10.jpg"),
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
          image: require("@/assets/images/users/user11.jpg"),
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
          image: require("@/assets/images/users/user12.jpg"),
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
          image: require("@/assets/images/users/user13.jpg"),
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
          image: require("@/assets/images/users/user14.jpg"),
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
          image: require("@/assets/images/users/user15.jpg"),
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

<style lang="scss" scoped>
.customers-list {
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
