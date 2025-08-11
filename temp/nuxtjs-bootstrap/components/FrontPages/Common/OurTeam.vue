<template>
  <div class="our-team-area pt-125 position-relative z-1" id="ourteam">
    <div class="container">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 mb-lg-5"
      >
        <div class="section-title ms-0 text-start mw-630 mb-0">
          <span class="top-title">
            <span>Our Team</span>
          </span>
          <h2>
            Introducing Our Exceptional Team. Meet the Minds Driving Our Success
          </h2>
        </div>

        <div class="team-controller d-flex gap-3">
          <div class="controller-icon prev">
            <i class="ri-arrow-left-line"></i>
          </div>
          <div class="controller-icon next">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>

      <Swiper
        :slidesPerView="1"
        :spaceBetween="25"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          nextEl: '.prev',
          prevEl: '.next',
        }"
        :pagination="{
          el: '.swiper-pagination-top-selling',
          clickable: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 3,
          },
        }"
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
        class="team-slide"
      >
        <SwiperSlide v-for="team in teams" :key="team.id">
          <div class="our-team-single-item">
            <div class="team-img">
              <img :src="team.image" alt="team" />
            </div>
            <div
              class="team-content d-flex justify-content-between align-items-center"
            >
              <div>
                <h3>{{ team.name }}</h3>
                <span>{{ team.designation }}</span>
              </div>
              <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    class="text-decoration-none fs-20 text-primary"
                  >
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    class="text-decoration-none fs-20 text-primary"
                  >
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="text-decoration-none fs-20 text-primary"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <img
      src="~/assets/images/landing/shape-1.png"
      class="shape shape-3"
      alt="shape"
    />
    <img
      src="~/assets/images/landing/shape-2.png"
      class="shape shape-4"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/landing/team-1.jpg";
import image2 from "~/assets/images/landing/team-2.jpg";
import image3 from "~/assets/images/landing/team-3.jpg";

export default defineComponent({
  name: "OurTeam",
  data() {
    return {
      teams: [
        {
          id: 1,
          image: image1,
          name: "Michael Johnson",
          designation: "CEO",
        },
        {
          id: 2,
          image: image2,
          name: "Emily Davis",
          designation: "Project Manager",
        },
        {
          id: 3,
          image: image3,
          name: "Daniel Lee",
          designation: "Sales Team Lead",
        },
        {
          id: 4,
          image: image1,
          name: "Michael Johnson",
          designation: "CEO",
        },
        {
          id: 5,
          image: image2,
          name: "Emily Davis",
          designation: "Project Manager",
        },
        {
          id: 6,
          image: image3,
          name: "Daniel Lee",
          designation: "Sales Team Lead",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.team-controller {
  .controller-icon {
    cursor: pointer;
  }
}
</style>
