<template>
  <v-card
    class="our-top-courses-card border-radius d-block border-0 shadow-none z-2"
  >
    <div class="v-card-header">
      <h5 class="mb-0 text-white">Our Top Courses</h5>
    </div>
    <div class="top-courses-card-content">
      <Carousel v-bind="settings" :autoplay="5000" :wrap-around="true">
        <Slide v-for="slide in items" :key="slide.id">
          <div class="d-flex align-items-center">
            <div class="image border-radius flex-shrink-1">
              <v-img
                :src="slide.image"
                class="border-radius"
                alt="course-image"
              />
            </div>
            <div class="content flex-grow-0">
              <span class="d-block text-white">
                {{ slide.title }}
              </span>
              <div class="price text-white fw-semibold">${{ slide.price }}</div>
            </div>
          </div>
          <div class="info">
            <span class="d-block text-white fw-semibold">
              {{ slide.infoTitle }}
            </span>
            <ul class="text-white mt-0 mb-0 list-unstyled pl-0">
              <li class="d-inline-block position-relative">
                {{ slide.sections }} sections
              </li>
              <li class="d-inline-block position-relative">
                {{ slide.lectures }} lectures
              </li>
              <li class="d-inline-block position-relative">
                {{ slide.time }}
              </li>
            </ul>
            <div class="text-end">
              <a href="#" class="view-details-btn">
                <i class="material-symbols-outlined"> add </i>
                View Details
              </a>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "OurTopCourses",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        image: require("@/assets/images/courses/course1.jpg"),
        title: "Basic Python",
        price: "35.99",
        infoTitle: "Course content",
        sections: "10",
        lectures: "45",
        time: "25h 50m",
      },
      {
        id: 1,
        image: require("@/assets/images/courses/course2.jpg"),
        title: "HTML Developer",
        price: "49.99",
        infoTitle: "Course content",
        sections: "12",
        lectures: "54",
        time: "35h 40m",
      },
      {
        id: 1,
        image: require("@/assets/images/courses/course1.jpg"),
        title: "Basic Angular",
        price: "55.99",
        infoTitle: "Course content",
        sections: "14",
        lectures: "48",
        time: "29h 30m",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.our-top-courses-card {
  overflow: hidden;
  background-color: #3584fc !important;

  .v-card-header {
    margin-bottom: 20px;
  }
  .top-courses-card-content {
    position: relative;

    .image {
      width: 120px;

      img {
        display: inline-block;
        width: auto;
      }
    }
    .content {
      margin-left: 15px;

      .price {
        font-size: 20px;
        margin-top: 8px;
      }
    }
    .info {
      margin-top: 12px;

      span {
        font-size: 16px;
        margin-bottom: 6px;
      }
      ul {
        li {
          margin-right: 17px;

          &::before {
            top: 50%;
            width: 4px;
            height: 4px;
            content: "";
            right: -11px;
            margin-top: 1px;
            position: absolute;
            border-radius: 50%;
            transform: translateY(-50%);
            background: var(--whiteColor);
          }
          &:last-child {
            margin-right: 0;

            &::before {
              display: none;
            }
          }
        }
      }
      .view-details-btn {
        height: auto;
        min-width: auto;
        margin-top: 22px;
        padding: 6px 13px 6px 35px;
        border-radius: 7px;
        display: inline-block;
        color: var(--whiteColor);
        border: 1px solid var(--whiteColor);
        position: relative;

        i {
          top: 50%;
          left: 8px;
          font-size: 22px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
  &::before {
    top: -80px;
    z-index: -1;
    content: "";
    right: -80px;
    width: 169px;
    height: 169px;
    position: absolute;
    border-radius: 50%;
    background: #1f64f1;
  }
  &::after {
    left: auto;
    top: -75px;
    content: "";
    z-index: -2;
    right: -75px;
    width: 169px;
    height: 169px;
    position: absolute;
    border-radius: 50%;
    background: #5da8ff;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .our-top-courses-card {
    .v-card-header {
      margin-bottom: 17px;
    }
    .top-courses-card-content {
      .image {
        width: 100px;
      }
      .content {
        .price {
          font-size: 18px;
        }
      }
      .info {
        span {
          font-size: 14px;
        }
        .view-details-btn {
          margin-top: 17px;
          padding: 8px 13px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .our-top-courses-card {
    .v-card-header {
      margin-bottom: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .our-top-courses-card {
    .top-courses-card-content {
      .content {
        .price {
          font-size: 19px;
        }
      }
      .info {
        span {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
