<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <h3 class="mb-0">Courses</h3>
      </div>

      <div class="default-table-area style-two all-projects pb-4">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course Name</th>
                <th scope="col">Category</th>
                <th scope="col">Instructor</th>
                <th scope="col">Enrolled</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-body">#854</td>
                <td>
                  <NuxtLink to="/lms/course-details"
                    >Cybersecurity Awareness</NuxtLink
                  >
                </td>
                <td>Technology</td>
                <td>
                  <NuxtLink
                    to="/lms/instructors"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        src="~/assets/images/user-42.jpg"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">Oliver Khan</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-body">180</td>
                <td class="text-body">25 Mar 2024</td>
                <td class="text-body">25 Apr 2024</td>
                <td>$49.99</td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
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
  name: "Course",
});
</script>
