<template>
  <v-card
    class="working-schedule-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Working Schedule</h5>
    </div>
    <div class="schedule-card-content">
      <CommonCalendarContent />
      <div class="upcoming-events">
        <span class="title d-block fw-medium"> Upcoming Events: </span>
        <CCarousel v-bind="settings" :autoplay="3000" :wrap-around="true">
          <CSlide v-for="slide in items" :key="slide.id">
            <div class="event-item position-relative">
              <h6 class="fw-semibold">Pythons Unleashed: {{ slide.title }}</h6>
              <span>
                <span class="text-primary"> {{ slide.date }} </span>
                - {{ slide.startTime }} - {{ slide.endTime }}
              </span>
            </div>
          </CSlide>

          <template #addons>
            <CPagination />
          </template>
        </CCarousel>
      </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkingSchedule",
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        title: "A Development Expedition",
        date: "June 25, 2024",
        startTime: "12.00 PM",
        endTime: "6.00 PM",
      },
      {
        id: 2,
        title: "A Development Expedition",
        date: "June 25, 2024",
        startTime: "12.00 PM",
        endTime: "6.00 PM",
      },
      {
        id: 3,
        title: "A Development Expedition",
        date: "June 25, 2024",
        startTime: "12.00 PM",
        endTime: "6.00 PM",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.working-schedule-card {
  .schedule-card-content {
    position: relative;

    .upcoming-events {
      margin-top: 30px;

      .title {
        margin-bottom: 15px;
      }
      .event-item {
        padding-left: 14px;

        h6 {
          font-size: 13px;
          margin-bottom: 5px;
        }
        span {
          font-size: 12px;
        }
        &::before {
          left: 0;
          top: 3px;
          width: 7px;
          content: "";
          height: 7px;
          position: absolute;
          border-radius: 2px;
          background: var(--primaryColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .working-schedule-card {
    .schedule-card-content {
      .upcoming-events {
        margin-top: 10px;

        .title {
          margin-bottom: 12px;
        }
        .event-item {
          h6 {
            margin-bottom: 6px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .working-schedule-card {
    .schedule-card-content {
      .upcoming-events {
        margin-top: 12px;

        .title {
          margin-bottom: 13px;
        }
      }
    }
  }
}
</style>
