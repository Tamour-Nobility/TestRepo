<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="fs-18 mb-3">Shopify Theme Development</h3>
      <div class="bg-primary p-4 rounded-3 mb-2">
        <div class="d-flex justify-content-between flex-wrap gap-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined wh-45 lh-45 text-white text-center rounded-circle"
                style="background-color: #4936f5"
              >
                for_you
              </i>
            </div>
            <div class="flex-grow-1 ms-2 position-relative">
              <span class="fw-medium text-white d-block mb-1">Client</span>
              <h4 class="fs-16 text-white mb-0">Innovatech</h4>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined wh-45 lh-45 text-white text-center rounded-circle"
                style="background-color: #4936f5"
              >
                attach_money
              </i>
            </div>
            <div class="flex-grow-1 ms-2 position-relative">
              <span class="fw-medium text-white d-block mb-1">Budget</span>
              <h4 class="fs-16 text-white mb-0">$25,500</h4>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined wh-45 lh-45 text-white text-center rounded-circle"
                style="background-color: #4936f5"
              >
                pace
              </i>
            </div>
            <div class="flex-grow-1 ms-2 position-relative">
              <span class="fw-medium text-white d-block mb-1">Duration</span>
              <h4 class="fs-16 text-white mb-0">360 hrs</h4>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div
            class="progress bg-light"
            style="height: 7px"
            role="progressbar"
            aria-label="danger example"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-danger"
              style="width: 65%; height: 7px"
            ></div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span class="fw-medium d-block text-body-bg">Progress</span>
            <span class="fw-medium d-block text-body-bg">65%</span>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-between align-items-center mb-4 flex-wrap"
      >
        <span>Project Started: Mar 01, 2024</span>
        <span>Project Deadline: Jun 25, 2024</span>
      </div>
      <h4 class="fs-14">Project Details</h4>
      <p>
        Vestibulum euismod nisi vitae orci placerat, vitae vehicula eros dictum.
        Phasellus ut pharetra felis. Nulla facilisi. Nullam congue semper nunc,
        at sodales magna laoreet id. Nullam et lacus vitae ligula pretium
        suscipit. Fusce nec viverra enim. Sed feugiat gravida nibh sit amet
        suscipit. Integer tempor sapien eget metus lacinia, nec finibus lacus
        tincidunt. Sed sodales tellus nec metus aliquam, nec dignissim arcu
        lobortis.
      </p>
      <ul class="mb-0">
        <li class="mb-2">
          Outline the boundaries and deliverables of the project.
        </li>
        <li class="mb-2">
          List team members, their roles, and responsibilities.
        </li>
        <li class="mb-2">
          Specify the technology stack and tools to be used for development.
        </li>
        <li class="mb-2">
          Break down the project into manageable phases or sprints.
        </li>
        <li class="mb-0">
          Outline the design phase, including wireframing, prototyping
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThemeDevelopment",
});
</script>
