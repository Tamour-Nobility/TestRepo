<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">My Tasks</h3>
          <select
            class="form-select month-select form-control p-0 h-auto border-0 w-90"
            style="background-position: right 0 center"
            aria-label="Default select example"
          >
            <option selected>All Tasks</option>
            <option value="1">This Month</option>
            <option value="2">This Year</option>
          </select>
        </div>
      </div>

      <div class="default-table-area style-two my-tasks">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="position-relative top-2 ms-2"
                      for="flexCheckDefault"
                    >
                      Project Name
                    </label>
                  </div>
                </th>
                <th scope="col">Deadline</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                    <label
                      class="fw-medium fs-14 position-relative top-0 ms-2"
                      for="flexCheckDefault2"
                    >
                      {{ item.projectName }}
                    </label>
                  </div>
                </td>
                <td>{{ item.deadline }}</td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <div
            class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
          >
            <span class="fs-12 fw-medium">
              Items per pages: {{ itemsPerPage }}
            </span>

            <div class="d-flex align-items-center">
              <span class="fs-12 fw-medium me-2">
                {{ startItem }} - {{ endItem }} of {{ totalItems }}
              </span>
              <nav aria-label="Page navigation example">
                <ul class="pagination mb-0 justify-content-center">
                  <li class="page-item">
                    <a
                      class="page-link icon"
                      href="#"
                      aria-label="Previous"
                      @click.prevent="prevPage"
                    >
                      <i class="material-symbols-outlined"
                        >keyboard_arrow_left</i
                      >
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link icon"
                      href="#"
                      aria-label="Next"
                      @click.prevent="nextPage"
                    >
                      <i class="material-symbols-outlined"
                        >keyboard_arrow_right</i
                      >
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MyTasks",
  setup() {
    const items = ref([
      {
        id: "1",
        projectName: "Web Development",
        deadline: "10 Jan 2024",
        status: "Completed",
      },
      {
        id: "2",
        projectName: "UX/UI Design",
        deadline: "05 Feb 2024",
        status: "In Progress",
      },
      {
        id: "3",
        projectName: "React Development",
        deadline: "28 Mar 2024",
        status: "Cancelled",
      },
      {
        id: "4",
        projectName: "Python Research",
        deadline: "09 Mar 2024",
        status: "Pending",
      },
      {
        id: "5",
        projectName: "Python Research",
        deadline: "09 Mar 2024",
        status: "Completed",
      },
      {
        id: "6",
        projectName: "Python Research",
        deadline: "09 Mar 2024",
        status: "Pending",
      },
      {
        id: "7",
        projectName: "Python Research",
        deadline: "09 Mar 2024",
        status: "Completed",
      },
      {
        id: "8",
        projectName: "Web Development",
        deadline: "10 Jan 2024",
        status: "Cancelled",
      },
      {
        id: "9",
        projectName: "UX/UI Design",
        deadline: "05 Feb 2024",
        status: "In Progress",
      },
      {
        id: "10",
        projectName: "React Development",
        deadline: "28 Mar 2024",
        status: "Cancelled",
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(4);
    const totalItems = computed(() => items.value.length);
    const totalPages = computed(() =>
      Math.ceil(totalItems.value / itemsPerPage.value)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return items.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(startItem.value + itemsPerPage.value - 1, totalItems.value)
    );

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const wordCompleted = ref("Completed");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");
    const wordCancelled = ref("Cancelled");

    const computeClass = (classValue: string) => {
      return {
        completed: wordCompleted.value === classValue,
        inProgress: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
        cancelled: wordCancelled.value === classValue,
      };
    };

    return {
      items: paginatedItems,
      computeClass,
      currentPage,
      itemsPerPage,
      totalItems,
      totalPages,
      startItem,
      endItem,
      nextPage,
      prevPage,
    };
  },
});
</script>
