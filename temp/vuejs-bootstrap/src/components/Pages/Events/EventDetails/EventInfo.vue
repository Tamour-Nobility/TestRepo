<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Event Info</h3>
      <span class="d-block mb-3">
        <span class="text-secondary">08:00 AM</span> - Registration
      </span>
      <span class="d-block mb-3">
        <span class="text-secondary">09:00 AM</span> - Opening Keynote
      </span>
      <span class="d-block mb-3">
        <span class="text-secondary">10:30 AM</span> - Panel Discussion: Future
        Trends
      </span>
      <span class="d-block mb-3">
        <span class="text-secondary">12:00 PM</span> - Lunch Break
      </span>
      <span class="d-block mb-3">
        <span class="text-secondary">02:00 PM</span> - Interactive Workshops
      </span>
      <span class="d-block mb-3">
        <span class="text-secondary">04:30 PM</span> - Networking Reception
      </span>

      <h3 class="mb-3 mb-lg-3 pt-2">Registration Information</h3>
      <span class="d-block mb-2">
        Early Bird Registration Deadline: 15 November 2024
      </span>
      <span class="d-block mb-2">
        Standard Registration Deadline: 30 November 2024
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventInfo",
});
</script>
