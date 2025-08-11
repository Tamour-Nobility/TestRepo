<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Event Details</h3>
      <h4 class="fs-14 fw-semibold mb-2 pb-1">Annual Conference 2024</h4>
      <p class="mb-4">
        The Annual Conference 2024 is a flagship event organized by ABC
        Corporation. This conference aims to bring together industry leaders,
        experts, and enthusiasts to discuss the latest trends, innovations, and
        challenges in our field. Participants can expect insightful keynote
        sessions, engaging panel discussions, and valuable networking
        opportunities field. Participants can expect insightful keynote
        sessions.
      </p>

      <div class="row">
        <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="d-flex align-items-center mb-4">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined d-inline-block wh-70 lh-70 text-center fs-35 text-primary bg-gary-light rounded-circle bg-for-dark-mode"
              >
                schedule
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h4 class="fs-14 fw-semibold mb-1">Time</h4>
              <span>01 Dec 2024, 09:00 AM</span>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="d-flex align-items-center mb-4">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined d-inline-block wh-70 lh-70 text-center fs-35 text-info bg-gary-light rounded-circle bg-for-dark-mode"
              >
                place
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h4 class="fs-14 fw-semibold mb-1">Location</h4>
              <span>Convention Center</span>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="d-flex align-items-center mb-4">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined d-inline-block wh-70 lh-70 text-center fs-35 text-primary-div bg-gary-light rounded-circle bg-for-dark-mode"
              >
                event_seat
              </i>
            </div>
            <div class="flex-grow-1 ms-3">
              <h4 class="fs-14 fw-semibold mb-1">TiEvent Seatme</h4>
              <span>50</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap gap-2 border-top pt-4">
        <button class="btn btn-primary fs-15 fw-medium py-2 px-4">
          <div class="d-flex align-items-center py-1">
            <i class="material-symbols-outlined me-2 text-white">
              local_activity
            </i>
            <span>Get Ticket</span>
          </div>
        </button>
        <button
          class="btn btn-primary bg-transparent border fs-15 fw-medium py-2 px-4 text-body hover-bg"
        >
          <div class="d-flex align-items-center py-1">
            <i class="material-symbols-outlined me-2 text-body">event</i>
            <span>Add To Calendar</span>
          </div>
        </button>
        <button
          class="btn btn-primary bg-transparent border fs-15 fw-medium py-2 px-4 text-body hover-bg"
        >
          <div class="d-flex align-items-center py-1">
            <i class="material-symbols-outlined me-2 text-body">
              favorite_border
            </i>
            <span>5937</span>
          </div>
        </button>
        <button
          class="btn btn-primary bg-transparent border fs-15 fw-medium py-2 px-4 text-body hover-bg"
        >
          <div class="d-flex align-items-center py-1">
            <i class="material-symbols-outlined me-2 text-body">share</i>
            <span>2582</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnnualConference",
});
</script>
