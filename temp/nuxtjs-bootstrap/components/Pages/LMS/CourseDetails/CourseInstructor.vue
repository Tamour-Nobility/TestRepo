<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-4">Course Instructor</h3>

      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="~/assets/images/user-69.jpg"
            class="wh-100 rounded-circle"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-17 fw-medium mb-1">Aliva Cohen</h4>
          <span>aliva@trezo.com</span>
        </div>
      </div>

      <span class="d-block fw-medium mb-2 text-secondary">
        Course Description
      </span>
      <p class="mb-4">
        This course is designed for beginners who want to learn the fundamentals
        of the Python programming language. The course covers basic syntax, data
        types, control structures, and an introduction to object-oriented
        programming. Participants will have hands-on coding exercises to
        reinforce their learning.
      </p>

      <span class="d-block fw-medium mb-2 text-secondary">
        Course Description
      </span>
      <span class="d-block">Start Date: August 01, 2024</span>
      <span class="d-block mb-4">End Date: December 30, 2024</span>

      <span class="d-block fw-medium mb-2 text-secondary">Status</span>
      <p>
        The course is currently in progress. Students are actively engaged in
        the learning materials, and the instructor is providing guidance and
        support.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseInstructor",
});
</script>
