<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="mb-3 mb-lg-4">
        <h3 class="mb-0">Working Schedule</h3>
      </div>
      <div class="calendar-wraps mb-4">
        <CommonCalendarContent />
      </div>

      <div
        class="d-flex justify-content-between align-items-center mt-3 mt-sm-0 mb-3"
      >
        <span class="fw-medium">Upcoming Events:</span>
        <div class="swiper-pagination1 text-end" style="width: 100px"></div>
      </div>

      <Swiper
        :slidesPerView="1"
        :spaceBetween="24"
        :loop="true"
        :centeredSlides="true"
        :preventClicks="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :pagination="{
          el: '.swiper-pagination1',
          clickable: true,
        }"
        :modules="[SwiperAutoplay, SwiperPagination]"
        class="upcoming-events-slide"
      >
        <SwiperSlide class="cursor" v-for="item in items" :key="item.id">
          <div class="position-relative d-flex">
            <span
              class="wh-11 bg-primary rounded-1 d-inline-block position-relative top-1"
            ></span>
            <div>
              <h4 class="fs-12 fw-semibold text-secondary mb-0 ms-1">
                Pythons Unleashed: {{ item.title }}
              </h4>
              <p class="fs-12">
                <span class="text-primary">
                  {{ item.date }}
                </span>
                - {{ item.startTime }} - {{ item.endTime }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkingSchedule",
  data() {
    return {
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
    };
  },
});
</script>
