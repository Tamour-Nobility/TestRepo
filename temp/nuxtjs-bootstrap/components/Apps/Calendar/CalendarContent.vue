<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="calendar-wrap">
        <div id="calendar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

const dialog = ref(false);

onMounted(() => {
  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      headerToolbar: {
        left: "title",
        right: "today prev,next",
      },
      initialView: "dayGridMonth",
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: [
        {
          title: "Annual Conference 2024",
          date: "2024-06-01",
        },
        {
          title: "Product Lunch Webinar 2024 & Meet With Trezo Nuxt",
          start: "2024-06-02",
          end: "2024-06-04",
        },
        {
          title: "Tech Summit 2024",
          date: "2024-06-14",
        },
        {
          title: "Web Development Seminar",
          date: "2024-06-17",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2024-06-26",
        },
        {
          title: "Meeting with Developers",
          date: "2024-06-30",
        },
        {
          title: "Annual Conference 2024",
          date: "2024-07-10",
        },
        {
          title: "Product Lunch Webinar 2024 & Meet With Trezo Angular",
          start: "2024-07-14",
          end: "2024-07-16",
        },
        {
          title: "Tech Summit 2024",
          date: "2024-07-24",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2024-07-26",
        },
        {
          title: "Web Development Seminar",
          date: "2024-07-28",
        },
        {
          title: "Annual Conference 2024",
          date: "2024-08-21",
        },
        {
          title: "Product Lunch Webinar 2024 & Meet With Trezo Angular",
          start: "2024-08-05",
          end: "2024-08-08",
        },
        {
          title: "Tech Summit 2024",
          date: "2024-08-14",
        },
        {
          title: "Web Development Seminar",
          date: "2024-08-17",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2024-08-26",
        },
        {
          title: "Meeting with Developers",
          date: "2024-08-30",
        },
        {
          title: "Annual Conference 2024",
          date: "2024-09-05",
        },
        {
          title: "Product Lunch Webinar 2024 & Meet With Trezo Angular",
          start: "2024-09-09",
          end: "2024-09-11",
        },
        {
          title: "Tech Summit 2024",
          date: "2024-09-20",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2024-09-26",
        },
        {
          title: "Web Development Seminar",
          date: "2024-09-29",
        },
        {
          title: "Web Development Seminar",
          date: "2024-10-20",
        },
        {
          title: "Web Development Seminar",
          date: "2024-11-20",
        },
        {
          title: "Web Development Seminar",
          date: "2024-12-20",
        },
      ],
    });
    calendar.render();
  }
});
</script>
