<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0 pb-4">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Team Members</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MoreHorizontalIcon class="more-horizontal"></MoreHorizontalIcon>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
            >
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <ClockIcon class="clock"></ClockIcon>
                  Today
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <PieChartIcon class="pie-chart"></PieChartIcon>
                  Last 7 Days
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <RotateCwIcon class="rotate-cw"></RotateCwIcon>
                  Last Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <CalendarIcon class="calendar"></CalendarIcon>
                  Last 1 Year
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <BarChartIcon class="bar-chart"></BarChartIcon>
                  All Time
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <EyeIcon class="eye"></EyeIcon>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <TrashIcon class="trash"></TrashIcon>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="default-table-area style-two team-members">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Tasks</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-0 py-3 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-20.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Olivia Clark</h6>
                      <span class="fs-12">Head of HR</span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">55</td>
                <td class="border-0 py-3 pb-0">
                  <div
                    class="progress bg-opacity-10 bg-primary"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 50%; height: 5px"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="border-0 py-3 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-21.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Alexander Garcia</h6>
                      <span class="fs-12">Product Manager</span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">125</td>
                <td class="border-0 py-3 pb-0">
                  <div
                    class="progress bg-opacity-10 bg-success"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      class="progress-bar bg-success rounded-pill"
                      style="width: 50%; height: 5px"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="border-0 py-3 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-22.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Chloe Lewis</h6>
                      <span class="fs-12">UX/UI Designer</span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">78</td>
                <td class="border-0 py-3 pb-0">
                  <div
                    class="progress bg-opacity-10 bg-primary-div"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      class="progress-bar rounded-pill bg-primary-div"
                      style="width: 50%; height: 5px"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="border-0 py-3 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-23.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Ava Turner</h6>
                      <span class="fs-12">Python Developer</span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">95</td>
                <td class="border-0 py-3 pb-0">
                  <div
                    class="progress bg-opacity-10 bg-danger"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      class="progress-bar bg-danger rounded-pill"
                      style="width: 50%; height: 5px"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="border-0 py-3 pb-0">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-24.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Ryan Flores</h6>
                      <span class="fs-12">WP Developer</span>
                    </div>
                  </div>
                </td>
                <td class="border-0 py-3 pb-0">134</td>
                <td class="border-0 py-3 pb-0">
                  <div
                    class="progress bg-opacity-10 bg-primary"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 5px"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 50%; height: 5px"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeamMembers",
});
</script>
