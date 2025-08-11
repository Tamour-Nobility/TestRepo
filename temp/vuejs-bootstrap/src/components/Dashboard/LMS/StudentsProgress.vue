<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Student’s Progress</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-horizontal"></i>
            </button>

            <ul
              class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
            >
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="clock"></i>
                  Today
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="pie-chart"></i>
                  Last 7 Days
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="rotate-cw"></i>
                  Last Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="calendar"></i>
                  Last 1 Year
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="bar-chart"></i>
                  All Time
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="eye"></i>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="trash"></i>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="default-table-area style-two top-instructors">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Course Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 6)" :key="item.id">
                <td>
                  <RouterLink
                    to="/lms/instructors"
                    class="d-flex align-items-center"
                  >
                    <h6 class="mb-0 fs-14 fw-medium">
                      {{ item.name }}
                    </h6>
                  </RouterLink>
                </td>
                <td class="text-body">
                  {{ item.courseName }}
                </td>
                <td>
                  <div
                    :class="['progress bg-opacity-10', item.status.className]"
                    role="progressbar"
                    aria-label="Example with label"
                    :aria-valuenow="item.status.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      :class="[
                        'progress-bar rounded-pill',
                        item.status.className,
                      ]"
                      :style="{
                        width: item.status.percentage + '%',
                        height: '5px',
                      }"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4">
        <PaginationTwo items="5" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";
import feather from "feather-icons";

export default defineComponent({
  name: "StudentsProgress",
  components: {
    PaginationTwo,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Olivia Clark",
          courseName: "Web Design",
          status: {
            percentage: 55,
            className: "bg-primary",
          },
        },
        {
          id: 2,
          name: "Alexander Garcia",
          courseName: "Python Dev",
          status: {
            percentage: 80,
            className: "bg-success",
          },
        },
        {
          id: 3,
          name: "Chloe Lewis",
          courseName: "Front-end",
          status: {
            percentage: 25,
            className: "bg-primary-div",
          },
        },
        {
          id: 4,
          name: "Ava Turner",
          courseName: "Back-end",
          status: {
            percentage: 50,
            className: "bg-danger",
          },
        },
        {
          id: 5,
          name: "Ryan Flores",
          courseName: "Data Analytics",
          status: {
            percentage: 100,
            className: "bg-primary",
          },
        },
        {
          id: 6,
          name: "John Doe",
          courseName: "Plugin Dev",
          status: {
            percentage: 10,
            className: "bg-primary-div",
          },
        },
        {
          id: 7,
          name: "Ryan Flores",
          courseName: "Data Analytics",
          status: {
            percentage: 100,
            className: "bg-primary",
          },
        },
      ],
    };
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.progress {
  .progress-bar {
    &.bg-primary-div {
      --bs-bg-opacity: 1;
      background-color: rgba(
        var(--bs-primary-div-rgb),
        var(--bs-bg-opacity)
      ) !important;
    }
  }
}
</style>
