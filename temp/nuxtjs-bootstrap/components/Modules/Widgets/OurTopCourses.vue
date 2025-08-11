<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="24"
    :centeredSlides="true"
    :preventClicks="true"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    }"
    :pagination="{
      el: '.swiper-pagination2',
      clickable: true,
    }"
    :modules="[SwiperAutoplay, SwiperPagination]"
    class="courses-slide"
  >
    <SwiperSlide v-for="item in items" :key="item.id">
      <div
        class="card bg-card-bg-c bg-primary border-0 rounded-3 mb-4 overflow-hidden position-relative"
      >
        <div class="card-body p-4">
          <h3 class="mb-0 text-card-text-c fw-semibold">Our Top Courses</h3>

          <div class="d-flex align-items-center py-3">
            <div class="flex-shrink-0">
              <img
                :src="item.image"
                class="wh-130-113 rounded-3"
                alt="courses"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span class="d-block mb-2 text-white">
                {{ item.title }}
              </span>
              <h3 class="mb-0 fs-20 text-white">${{ item.price }}</h3>
            </div>
          </div>

          <h3 class="mb-2 fs-20 text-white">
            {{ item.infoTitle }}
          </h3>
          <ul
            class="ps-0 mb-3 list-unstyled d-flex flex-wrap gap-2 gap-sm-0 list-dot"
          >
            <li class="text-white">{{ item.sections }} sections</li>
            <li class="text-white">{{ item.lectures }} lectures</li>
            <li class="text-white">{{ item.time }}</li>
          </ul>

          <div class="text-end">
            <NuxtLink
              to="/lms/course-details"
              class="btn border-color-white text-white py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            >
              <span class="py-sm-1 d-block">
                <i class="ri-add-line me-1"></i>
                <span>View Details</span>
              </span>
            </NuxtLink>
          </div>
        </div>
        <img
          src="~/assets/images/shape.png"
          class="position-absolute top-0 end-0"
          alt="shape"
        />
      </div>
    </SwiperSlide>

    <div class="swiper-pagination2 text-center"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/courses-1.jpg";
import image2 from "~/assets/images/event-5.jpg";
import image3 from "~/assets/images/courses-1.jpg";

export default defineComponent({
  name: "OurTopCourses",
  data() {
    return {
      items: [
        {
          id: 1,
          image: image1,
          title: "Basic Python",
          price: "35.99",
          infoTitle: "Course content",
          sections: "10",
          lectures: "45",
          time: "25h 50m",
        },
        {
          id: 1,
          image: image2,
          title: "HTML Developer",
          price: "49.99",
          infoTitle: "Course content",
          sections: "12",
          lectures: "54",
          time: "35h 40m",
        },
        {
          id: 1,
          image: image3,
          title: "Basic Angular",
          price: "55.99",
          infoTitle: "Course content",
          sections: "14",
          lectures: "48",
          time: "29h 30m",
        },
      ],
    };
  },
});
</script>
