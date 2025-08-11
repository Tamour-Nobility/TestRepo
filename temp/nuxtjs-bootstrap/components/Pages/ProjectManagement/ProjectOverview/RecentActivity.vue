<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h3 class="mb-0">Recent Activity</h3>
        <div
          class="dropdown action-opt ms-2 position-relative top-3"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="More Option"
        >
          <button
            class="p-0 border-0 bg-transparent"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-symbols-outlined fs-20 fw-bold text-body hover">
              more_horiz
            </i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:void(0);">
                <EyeIcon class="eye"></EyeIcon>
                View All
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);">
                <EditIcon class="edit"></EditIcon>
                Edit
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);">
                <Trash2Icon class="trash-2"></Trash2Icon>
                Delete One
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);">
                <LockIcon class="lock"></LockIcon>
                Block
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="position-relative timeline-item">
        <span class="time-line-date">Just now</span>

        <div class="border-style-for-timeline">
          <h4 class="fs-14 fw-medium mb-2">Weekly Stand-Up Meetings:</h4>
          <p class="fs-13">
            We continued our weekly stand-up meetings where team members
            provided updates on their current tasks, discussed any roadblocks,
            and coordinated efforts for the week ahead.
          </p>
          <p>By: <span class="text-primary">Olivia Rodriguez</span></p>
        </div>
      </div>
      <div class="position-relative timeline-item">
        <span class="time-line-date">1 day ago</span>

        <div class="border-style-for-timeline dot-2">
          <h4 class="fs-14 fw-medium mb-2">Project Kickoff Session:</h4>
          <p class="fs-13">
            The session included introductions, a review of project goals and
            objectives, and initial planning discussions.
          </p>
          <p>By: <span class="text-primary">Isabella Cooper</span></p>
        </div>
      </div>
      <div class="position-relative timeline-item">
        <span class="time-line-date">2 days ago</span>

        <div class="border-style-for-timeline dot-3">
          <h4 class="fs-14 fw-medium mb-2">Team Building Workshop:</h4>
          <p class="fs-13">
            Last Friday, we conducted a team building workshop focused on
            improving communication and collaboration among team members.
            Activities included team challenges, icebreakers, and open
            discussions.
          </p>
          <p>By: <span class="text-primary">Lucas Morgan</span></p>
        </div>
      </div>
      <div class="position-relative timeline-item">
        <span class="time-line-date">3 days ago</span>

        <div class="border-style-for-timeline dot-4 pb-0">
          <h4 class="fs-14 fw-medium mb-2">Lunch and Learn Session:</h4>
          <p class="fs-13">
            We organized a lunch and learn session on March 15th where a guest
            speaker from the industry discussed emerging trends in our field. It
            was an insightful session that sparked valuable discussions among
            team members.
          </p>
          <p>By: <span class="text-primary">Ethan Parker</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentActivity",
});
</script>
