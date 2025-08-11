<template>
  <div class="card border-0 rounded-3 mb-4" style="background-color: #7c24cc">
    <div class="card-body p-4 py-5 p-xl-5 text-center">
      <h2 class="text-white fs-24 fw-semibold mb-2">Schedule Appointment</h2>
      <p class="text-white fs-14 m-auto" style="max-width: 273px">
        Quickly schedule an appointment for a patient with any available doctor
      </p>
      <div class="py-4 mb-2">
        <img src="~/assets/images/schedule.png" alt="schedule" />
      </div>
      <button class="btn btn-primary py-2 px-4 fs-16 fw-medium text-white">
        Book Appointment
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleAppointment",
});
</script>
