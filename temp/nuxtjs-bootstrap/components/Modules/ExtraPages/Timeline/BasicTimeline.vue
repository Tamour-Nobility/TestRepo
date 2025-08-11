<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="mb-4">
        <h3 class="mb-0">Basic Timeline</h3>
      </div>
      <div class="position-relative timeline-item">
        <span class="time-line-date">Just now</span>

        <div class="border-style-for-timeline">
          <h4 class="fs-14 fw-medium mb-2">Weekly Stand-Up Meetings:</h4>
          <p class="fs-13 mb-4">
            We continued our weekly stand-up meetings where team members
            provided updates on their current tasks, discussed any roadblocks,
            and coordinated efforts for the week ahead.
          </p>
          <ul class="ps-0 mb-3 list-unstyled d-flex align-items-center">
            <li>
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-16.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-17.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-18.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-19.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink
                to="/users/users-list"
                class="wh-34 lh-34 rounded-circle bg-primary d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                >+10</NuxtLink
              >
            </li>
          </ul>
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
          <p class="fs-13 mb-4">
            Last Friday, we conducted a team building workshop focused on
            improving communication and collaboration among team members.
            Activities included team challenges, icebreakers, and open
            discussions.
          </p>
          <ul class="ps-0 mb-3 list-unstyled d-flex align-items-center">
            <li>
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-16.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-17.jpg"
                  class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                  alt="user"
                />
              </NuxtLink>
            </li>
            <li class="ms-m-15">
              <NuxtLink to="/my-profile">
                <img
                  src="~/assets/images/user-18.jpg"
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
                +10
              </NuxtLink>
            </li>
          </ul>
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
  name: "BasicTimeline",
});
</script>
