<template>
  <v-card
    class="schedule-appointment-card mb-25 border-radius d-block bg-purple border-0 shadow-none"
  >
    <div class="schedule-appointment-card-content">
      <h3 class="fw-semibold text-white">Schedule Appointment</h3>
      <p class="text-white ml-auto mr-auto">
        Quickly schedule an appointment for a patient with any available doctor.
      </p>
      <v-img
        src="@/assets/images/doctor.png"
        class="d-block ml-auto mr-auto"
        alt="doctor-image"
      />
      <a href="#" class="appointment-btn"> Book Appointment </a>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleAppointment",
});
</script>

<style lang="scss" scoped>
.schedule-appointment-card {
  --purpleColor: #7c24cc;
  background-color: var(--purpleColor) !important;

  .schedule-appointment-card-content {
    text-align: center;
    padding-top: 11px !important;

    h3 {
      font-size: 24px;
      margin-bottom: 9px;
    }
    p {
      max-width: 275px;
      line-height: 1.6;
      margin-bottom: 22px;
    }
    .appointment-btn {
      margin-top: 22px;
      padding: 8px 17px;
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      display: inline-block;
      border-radius: 7px;
      font: {
        size: 16px;
        weight: 500;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .schedule-appointment-card {
    .schedule-appointment-card-content {
      padding-top: 0 !important;

      h3 {
        font-size: 20px;
      }
      p {
        max-width: 100%;
        margin-bottom: 17px;
      }
      .appointment-btn {
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .schedule-appointment-card {
    .schedule-appointment-card-content {
      h3 {
        font-size: 22px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .schedule-appointment-card {
    .schedule-appointment-card-content {
      h3 {
        font-size: 21px;
      }
    }
  }
}
</style>
