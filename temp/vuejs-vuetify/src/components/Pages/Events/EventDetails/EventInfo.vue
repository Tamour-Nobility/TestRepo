<template>
  <v-card
    class="event-details-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Event Info</h5>
    </div>
    <div class="event-details-content">
      <ul class="list pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">08:00 AM</span> - Registration</li>
        <li><span class="text-black">09:00 AM</span> - Opening Keynote</li>
        <li>
          <span class="text-black">10:30 AM</span> - Panel Discussion: Future
          Trends
        </li>
        <li><span class="text-black">12:00 PM</span> - Lunch Break</li>
        <li>
          <span class="text-black">02:00 PM</span> - Interactive Workshops
        </li>
        <li><span class="text-black">04:30 PM</span> - Networking Reception</li>
      </ul>
      <h5>Registration Information</h5>
      <ul class="list pl-0 mb-0 mt-0 list-unstyled">
        <li>Early Bird Registration Deadline: 15 November 2024</li>
        <li>Standard Registration Deadline: 30 November 2024</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "EventInfo",
};
</script>
