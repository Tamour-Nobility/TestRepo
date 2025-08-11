<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
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
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#addNewDealsModal"
          aria-controls="addNewDealsModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Deals</span>
          </span>
        </button>
      </div>

      <div class="default-table-area style-two default-table-width deals-table">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input position-relative top-1"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault7"
                    >
                      ID
                    </label>
                  </div>
                </th>
                <th scope="col">Company Name</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Amount</th>
                <th scope="col">Stage</th>
                <th scope="col">Probability</th>
                <th scope="col">Created At</th>
                <th scope="col">Close Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault1"
                    >
                      {{ item.id }}
                    </label>
                  </div>
                </td>
                <td>{{ item.companyName }}</td>
                <td>{{ item.contactPerson }}</td>
                <td class="text-body">${{ item.amount }}</td>
                <td class="text-body">
                  {{ item.stage }}
                </td>
                <td class="text-body">{{ item.probability }}%</td>
                <td class="text-body">
                  {{ item.createdAt }}
                </td>
                <td class="text-body">
                  {{ item.closeDate }}
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

        <div class="p-4 pt-lg-4">
          <CommonPagination items="10" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Deals",
  setup() {
    const items = ref([
      {
        id: "#854",
        companyName: "Tech Solutions",
        contactPerson: "Shawn Kennedy",
        amount: "25,000.00",
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
        amount: "15,000.00",
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
        amount: "30,000.00",
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
        amount: "20,000.00",
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
        amount: "40,000.00",
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
        amount: "50,000.00",
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
        amount: "45,000.00",
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
        amount: "35,000.00",
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
        amount: "23,423.00",
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
        amount: "12,421.00",
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
