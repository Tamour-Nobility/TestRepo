<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Group Lessons</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              type="button"
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
            <tbody>
              <tr v-for="item in items.slice(0, 6)" :key="item.id">
                <td :class="item.class">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <div class="d-flex">
                        <RouterLink
                          to="/my-profile"
                          class="ms-m-20"
                          v-for="image in item.group.images"
                          :key="image.id"
                        >
                          <img
                            :src="image.image"
                            class="wh-44 rounded-circle border border-2 border-color-white"
                            alt="user"
                          />
                        </RouterLink>
                      </div>
                    </div>
                    <RouterLink
                      to="/project-management/project-list"
                      class="flex-grow-1 ms-2 position-relative top-2"
                    >
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.group.title }}
                      </h6>
                      <span class="fs-12 text-body">
                        {{ item.group.date }}
                      </span>
                    </RouterLink>
                  </div>
                </td>
                <td class="text-end pt-1">
                  <RouterLink
                    to="/project-management/project-list"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
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
import feather from "feather-icons";
import PaginationTwo from "../../Common/PaginationTwo.vue";

export default defineComponent({
  title: "GroupLessons",
  components: {
    PaginationTwo,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          class: "pt-1",
          group: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-31.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-32.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-30.jpg"),
              },
            ],
            title: "Digital Marketing",
            date: "15 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 2,
          class: "",
          group: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-33.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-34.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-35.jpg"),
              },
            ],
            title: "Web Development",
            date: "10 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 3,
          class: "",
          group: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-36.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-37.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-38.jpg"),
              },
            ],
            title: "UX/UI Design",
            date: "05 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 4,
          class: "",
          group: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-39.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-30.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-28.jpg"),
              },
            ],
            title: "Content Writer",
            date: "02 March, 2024",
          },
          link: "arrow_outward",
        },
        {
          id: 5,
          class: "",
          group: {
            images: [
              {
                id: 1,
                image: require("@/assets/images/user-32.jpg"),
              },
              {
                id: 2,
                image: require("@/assets/images/user-36.jpg"),
              },
              {
                id: 3,
                image: require("@/assets/images/user-30.jpg"),
              },
            ],
            title: "Wordpress",
            date: "07 March, 2024",
          },
          link: "arrow_outward",
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
.default-table-area {
  .table-responsive {
    .table {
      tbody {
        tr {
          td {
            a {
              &:first-child {
                &.ms-m-20 {
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
