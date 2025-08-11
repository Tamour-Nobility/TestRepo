<template>
  <v-card
    class="crm-deals-card trezo-card mt-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search deal here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <AddNewDeal />
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">
                <v-checkbox color="primary"></v-checkbox>
              </th>
              <th class="text-start">ID</th>
              <th class="text-start">Company Name</th>
              <th class="text-start">Contact Person</th>
              <th class="text-start">Amount</th>
              <th class="text-start">Stage</th>
              <th class="text-start">Probability</th>
              <th class="text-start">Created At</th>
              <th class="text-start">Close Date</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td>{{ item.id }}</td>
              <td>{{ item.companyName }}</td>
              <td>{{ item.contactPerson }}</td>
              <td class="text-body">{{ item.amount }}</td>
              <td class="text-body">{{ item.stage }}</td>
              <td class="text-body">{{ item.probability }}%</td>
              <td class="text-body">{{ item.createdAt }}</td>
              <td class="text-body">{{ item.closeDate }}</td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                  <!-- <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </button> -->
                  <EditDeal />
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
import AddNewDeal from "./AddNewDeal.vue";
import EditDeal from "./EditDeal.vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Deals",
  components: {
    AddNewDeal,
    EditDeal,
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#854",
        companyName: "Tech Solutions",
        contactPerson: "Shawn Kennedy",
        amount: "$25,000.00",
        stage: "Proposal",
        probability: 80,
        closeDate: "15 Nov 2024",
        createdAt: "08 Nov 2024 10:30 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        companyName: "Acma Industries",
        contactPerson: "Roberto Cruz",
        amount: "$15,000.00",
        stage: "Presentation",
        probability: 50,
        closeDate: "14 Nov 2024",
        createdAt: "09 Nov 2024 02:15 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        companyName: "Synergy Ltd",
        contactPerson: "Juli Johnson",
        amount: "$30,000.00",
        stage: "Negotiation",
        probability: 75,
        closeDate: "13 Nov 2024",
        createdAt: "10 Nov 2024 09:45 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        companyName: "Tech Enterprises",
        contactPerson: "Catalina Engles",
        amount: "$20,000.00",
        stage: "Discovery",
        probability: 90,
        closeDate: "12 Nov 2024",
        createdAt: "11 Nov 2024 03:45 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#850",
        companyName: "Synetic Solutions",
        contactPerson: "Louis Nagle",
        amount: "$40,000.00",
        stage: "Contract Sent",
        probability: 60,
        closeDate: "13 Nov 2024",
        createdAt: "12 Nov 2024 01:00 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        companyName: "GlobalTech Solutions",
        contactPerson: "Patrick Madsen",
        amount: "$50,000.00",
        stage: "Proposal",
        probability: 55,
        closeDate: "19 Nov 2024",
        createdAt: "13 Nov 2024 01:00 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#848",
        companyName: "Quantum Solutions",
        contactPerson: "Lillian McCreary",
        amount: "$45,000.00",
        stage: "Negotiation",
        probability: 79,
        closeDate: "26 Nov 2024",
        createdAt: "14 Nov 2024 01:00 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#847",
        companyName: "Synetic Pinnacle Ltd",
        contactPerson: "Beverly Caulkins",
        amount: "$35,000.00",
        stage: "Presentation",
        probability: 85,
        closeDate: "23 Nov 2024",
        createdAt: "15 Nov 2024 01:00 PM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#846",
        companyName: "IT Solutions",
        contactPerson: "Alina Smith",
        amount: "$23,423.00",
        stage: "Proposal",
        probability: 11,
        closeDate: "14 Nov 2024",
        createdAt: "08 Nov 2024 10:30 AM",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#845",
        companyName: "Trezo Admin",
        contactPerson: "David Warner",
        amount: "$12,421.00",
        stage: "Discovery",
        probability: 53,
        closeDate: "11 Nov 2024",
        createdAt: "07 Nov 2024 10:30 AM",
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
          companyName: string;
          contactPerson: string;
          amount: string;
          stage: string;
          closeDate: string;
          createdAt: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.companyName
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.contactPerson
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.amount.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.stage.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.closeDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      items,
      searchTerm,
      filteredItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.crm-deals-card {
  padding-bottom: 8px !important;
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;
              padding: {
                top: 13px;
                bottom: 13px;
              }
              &:first-child {
                border-top-left-radius: 0 !important;
                padding: {
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                border-top-right-radius: 0;
                padding-right: 25px;
              }
              .v-checkbox.v-input {
                margin: -27px -9px -30px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: {
                top: 20px !important;
                bottom: 20px !important;
              }
              &:first-child {
                border-left: 0 !important;
                padding: {
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                border-right: 0 !important;
                padding-right: 25px;
                text-align: end;
              }
              .action-buttons.d-flex.align-items-center {
                justify-content: end;
              }
              .v-checkbox.v-input {
                margin: -28px -30px -30px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
              }
            }
          }
        }
      }
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
      }
    }
  }
}
</style>
