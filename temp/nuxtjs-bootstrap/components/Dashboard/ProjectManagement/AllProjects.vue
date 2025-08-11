<template>
  <div class="card-body p-0">
    <div class="p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3"
      >
        <h3 class="mb-0">All Projects</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>
    </div>

    <div class="default-table-area style-two all-projects">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Project Name</th>
              <th scope="col">Client</th>
              <th scope="col">Assignees</th>
              <th scope="col">Budget</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedItems.slice(0, 5)" :key="item.id">
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <NuxtLink to="/project-management/project-overview">
                  {{ item.projectName }}
                </NuxtLink>
              </td>
              <td>
                {{ item.client }}
              </td>
              <td>
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li
                    v-for="userImg in item.assignees.images"
                    :key="userImg.id"
                    :class="item.assignees.className"
                  >
                    <NuxtLink to="/my-profile">
                      <img
                        :src="userImg.image"
                        class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                        alt="user"
                      />
                    </NuxtLink>
                  </li>
                  <li class="ms-m-15">
                    <NuxtLink
                      to="/users/users-list"
                      class="wh-34 lh-34 rounded-circle bg-primary d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                    >
                      {{ item.assignees.number }}
                    </NuxtLink>
                  </li>
                </ul>
              </td>
              <td class="text-body">${{ item.budget }}</td>
              <td class="text-body">{{ item.startDate }}</td>
              <td class="text-body">{{ item.endDate }}</td>
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

      <div class="p-4 pt-lg-4">
        <!-- <CommonPagination items="5" :total="items.length" /> -->
        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-12 fw-medium">
            Showing {{ startItem + 1 }} to {{ endItem }} of
            {{ items.length }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link icon" href="#" @click.prevent="prevPage">
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </a>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click.prevent="goToPage(page)">
                  {{ page }}
                </a>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a class="page-link icon" href="#" @click.prevent="nextPage">
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/user-7.jpg";
import image2 from "~/assets/images/user-8.jpg";
import image3 from "~/assets/images/user-9.jpg";
import image4 from "~/assets/images/user-10.jpg";
import image5 from "~/assets/images/user-11.jpg";
import image6 from "~/assets/images/user-12.jpg";
import image7 from "~/assets/images/user-13.jpg";
import image8 from "~/assets/images/user-14.jpg";
import image9 from "~/assets/images/user-15.jpg";
import image10 from "~/assets/images/user-6.jpg";

export default defineComponent({
  name: "AllProjects",
  setup() {
    const items = ref([
      {
        id: "#854",
        projectName: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image9,
            },
            {
              id: 2,
              image: image5,
            },
            {
              id: 3,
              image: image10,
            },
            {
              id: 4,
              image: image3,
            },
          ],
          number: "+10",
        },
        budget: "4,500",
        startDate: "25 Mar 2024",
        endDate: "25 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        projectName: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            },
          ],
          number: "+04",
        },
        budget: "6,800",
        startDate: "20 Mar 2024",
        endDate: "20 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        projectName: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image4,
            },
            {
              id: 2,
              image: image6,
            },
          ],
          number: "+07",
        },
        budget: "2,500",
        startDate: "15 Mar 2024",
        endDate: "15 Apr 2024",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        projectName: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image7,
            },
            {
              id: 2,
              image: image8,
            },
            {
              id: 3,
              image: image9,
            },
            {
              id: 4,
              image: image6,
            },
          ],
          number: "+15",
        },
        budget: "7,500",
        startDate: "10 Mar 2024",
        endDate: "10 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        projectName: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image3,
            },
            {
              id: 3,
              image: image10,
            },
          ],
          number: "+03",
        },
        budget: "3,400",
        startDate: "05 Mar 2024",
        endDate: "05 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        projectName: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image3,
            },
            {
              id: 3,
              image: image10,
            },
          ],
          number: "+03",
        },
        budget: "3,400",
        startDate: "05 Mar 2024",
        endDate: "05 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        projectName: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image7,
            },
            {
              id: 2,
              image: image8,
            },
            {
              id: 3,
              image: image9,
            },
            {
              id: 4,
              image: image6,
            },
          ],
          number: "+15",
        },
        budget: "7,500",
        startDate: "10 Mar 2024",
        endDate: "10 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        projectName: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            },
          ],
          number: "+04",
        },
        budget: "6,800",
        startDate: "20 Mar 2024",
        endDate: "20 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#854",
        projectName: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image9,
            },
            {
              id: 2,
              image: image5,
            },
            {
              id: 3,
              image: image10,
            },
            {
              id: 4,
              image: image3,
            },
          ],
          number: "+10",
        },
        budget: "4,500",
        startDate: "25 Mar 2024",
        endDate: "25 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        projectName: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image4,
            },
            {
              id: 2,
              image: image6,
            },
          ],
          number: "+07",
        },
        budget: "2,500",
        startDate: "15 Mar 2024",
        endDate: "15 Apr 2024",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#854",
        projectName: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image9,
            },
            {
              id: 2,
              image: image5,
            },
            {
              id: 3,
              image: image10,
            },
            {
              id: 4,
              image: image3,
            },
          ],
          number: "+10",
        },
        budget: "4,500",
        startDate: "25 Mar 2024",
        endDate: "25 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        projectName: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            },
          ],
          number: "+04",
        },
        budget: "6,800",
        startDate: "20 Mar 2024",
        endDate: "20 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        projectName: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image4,
            },
            {
              id: 2,
              image: image6,
            },
          ],
          number: "+07",
        },
        budget: "2,500",
        startDate: "15 Mar 2024",
        endDate: "15 Apr 2024",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        projectName: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image7,
            },
            {
              id: 2,
              image: image8,
            },
            {
              id: 3,
              image: image9,
            },
            {
              id: 4,
              image: image6,
            },
          ],
          number: "+15",
        },
        budget: "7,500",
        startDate: "10 Mar 2024",
        endDate: "10 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        projectName: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image3,
            },
            {
              id: 3,
              image: image10,
            },
          ],
          number: "+03",
        },
        budget: "3,400",
        startDate: "05 Mar 2024",
        endDate: "05 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        projectName: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image3,
            },
            {
              id: 3,
              image: image10,
            },
          ],
          number: "+03",
        },
        budget: "3,400",
        startDate: "05 Mar 2024",
        endDate: "05 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        projectName: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image7,
            },
            {
              id: 2,
              image: image8,
            },
            {
              id: 3,
              image: image9,
            },
            {
              id: 4,
              image: image6,
            },
          ],
          number: "+15",
        },
        budget: "7,500",
        startDate: "10 Mar 2024",
        endDate: "10 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        projectName: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            },
          ],
          number: "+04",
        },
        budget: "6,800",
        startDate: "20 Mar 2024",
        endDate: "20 Apr 2024",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#854",
        projectName: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image9,
            },
            {
              id: 2,
              image: image5,
            },
            {
              id: 3,
              image: image10,
            },
            {
              id: 4,
              image: image3,
            },
          ],
          number: "+10",
        },
        budget: "4,500",
        startDate: "25 Mar 2024",
        endDate: "25 Apr 2024",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        projectName: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: {
          className: "ms-m-15",
          images: [
            {
              id: 1,
              image: image4,
            },
            {
              id: 2,
              image: image6,
            },
          ],
          number: "+07",
        },
        budget: "2,500",
        startDate: "15 Mar 2024",
        endDate: "15 Apr 2024",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    const wordConfirmed = ref("Finished");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");

    const computeClass = (classValue: string) => {
      return {
        finished: wordConfirmed.value === classValue,
        cancelled: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
      };
    };

    const itemsPerPage = ref(5);
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(items.value.length / itemsPerPage.value)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return items.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, items.value.length)
    );

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      items,
      computeClass,
      currentPage,
      paginatedItems,
      totalPages,
      goToPage,
      prevPage,
      nextPage,
      startItem,
      endItem,
    };
  },
});
</script>
