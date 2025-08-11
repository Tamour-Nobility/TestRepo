<template>
  <div class="team-area">
    <div class="container position-relative z-1">
      <div class="section-title">
        <div class="sub-title d-inline-block position-relative">
          <span class="d-inline-block position-relative text-purple">
            Our Team
          </span>
        </div>
        <h2 class="mb-0">
          Introducing Our Exceptional Team. Meet the Minds Driving Our Success
        </h2>
      </div>
      <div class="team-slides">
        <CCarousel
          v-bind="settings"
          :autoplay="3000"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <CSlide v-for="slide in items" :key="slide.id">
            <div class="single-team-member">
              <div class="image border-radius">
                <v-img
                  :src="slide.image"
                  class="border-radius"
                  alt="team-image"
                />
              </div>
              <div
                class="content border-radius d-flex align-items-center justify-content-between"
              >
                <div>
                  <h3 class="fw-semibold">{{ slide.name }}</h3>
                  <span class="d-block"> {{ slide.designation }} </span>
                </div>
                <div class="socials">
                  <a
                    v-for="social in slide.socials"
                    :key="social.id"
                    :href="social.link"
                    class="d-inline-block lh-1"
                    target="_blank"
                  >
                    <i :class="social.icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </CSlide>

          <template #addons>
            <CNavigation>
              <template #next>
                <span> <i class="ri-arrow-right-line"></i> </span>
              </template>
              <template #prev>
                <span> <i class="ri-arrow-left-line"></i> </span>
              </template>
            </CNavigation>
          </template>
        </CCarousel>
      </div>
      <div class="shape1">
        <v-img src="~/assets/images/front-pages/shape1.png" alt="shape1" />
      </div>
      <div class="shape2">
        <v-img src="~/assets/images/front-pages/shape2.png" alt="shape2" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import image1 from "~/assets/images/front-pages/team1.jpg";
import image2 from "~/assets/images/front-pages/team2.jpg";
import image3 from "~/assets/images/front-pages/team3.jpg";
import image4 from "~/assets/images/front-pages/team4.jpg";

export default defineComponent({
  name: "OurTeam",
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        image: image1,
        name: "Michael Johnson",
        designation: "CEO",
        socials: [
          {
            id: 1,
            link: "https://www.facebook.com/",
            icon: "ri-facebook-fill",
          },
          {
            id: 2,
            link: "https://x.com/",
            icon: "ri-twitter-x-fill",
          },
          {
            id: 3,
            link: "https://www.linkedin.com/",
            icon: "ri-linkedin-fill",
          },
        ],
      },
      {
        id: 2,
        image: image2,
        name: "Emily Davis",
        designation: "Project Manager",
        socials: [
          {
            id: 1,
            link: "https://www.facebook.com/",
            icon: "ri-facebook-fill",
          },
          {
            id: 2,
            link: "https://x.com/",
            icon: "ri-twitter-x-fill",
          },
          {
            id: 3,
            link: "https://www.linkedin.com/",
            icon: "ri-linkedin-fill",
          },
        ],
      },
      {
        id: 3,
        image: image3,
        name: "Daniel Lee",
        designation: "Sales Team Lead",
        socials: [
          {
            id: 1,
            link: "https://www.facebook.com/",
            icon: "ri-facebook-fill",
          },
          {
            id: 2,
            link: "https://x.com/",
            icon: "ri-twitter-x-fill",
          },
          {
            id: 3,
            link: "https://www.linkedin.com/",
            icon: "ri-linkedin-fill",
          },
        ],
      },
      {
        id: 4,
        image: image4,
        name: "Olivia John",
        designation: "Frontend Lead",
        socials: [
          {
            id: 1,
            link: "https://www.facebook.com/",
            icon: "ri-facebook-fill",
          },
          {
            id: 2,
            link: "https://x.com/",
            icon: "ri-twitter-x-fill",
          },
          {
            id: 3,
            link: "https://www.linkedin.com/",
            icon: "ri-linkedin-fill",
          },
        ],
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      515: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      695: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      935: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
.team-area {
  .section-title {
    max-width: 630px;
  }
  .single-team-member {
    .image {
      padding: 15px;
      background: rgba(255, 255, 255, 0.26);
      backdrop-filter: blur(3.6px);
      border: 1px solid rgba(255, 255, 255, 0.24);

      .v-img {
        margin-bottom: -3px;
      }
    }

    .content {
      padding: 30px;
      background: rgba(255, 255, 255, 0.26);
      backdrop-filter: blur(3.6px);
      border: 1px solid rgba(255, 255, 255, 0.24);

      h3 {
        font-size: 18px;
        margin-bottom: 6px;
      }

      .socials {
        a {
          font-size: 20px;
          margin-right: 8px;
          color: var(--primaryColor);

          &:hover {
            color: var(--purpleColor);
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .shape1 {
    left: 90px;
    z-index: -1;
    bottom: 15px;
    position: absolute;
    filter: blur(150px);
  }

  .shape2 {
    z-index: -1;
    right: -15px;
    bottom: -130px;
    position: absolute;
    filter: blur(125px);
  }
}

@media only screen and (max-width: 767px) {
  .team-area {
    .section-title {
      max-width: 100%;
    }
    .single-team-member {
      .content {
        padding: 22px;

        h3 {
          font-size: 16px;
        }

        .socials {
          a {
            margin-right: 5px;
            font-size: 17px;
          }
        }
      }
    }
    .shape1 {
      left: 0;
      right: 0;
      bottom: 150px;
      text-align: center;
      margin: {
        left: auto;
        right: auto;
      }
    }
    .shape2 {
      text-align: center;
      bottom: -100px;
      right: 0;
      left: 0;
      margin: {
        left: auto;
        right: auto;
      }
    }
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team-area {
    .section-title {
      max-width: 500px;
    }
    .single-team-member {
      .content {
        padding: 25px;

        h3 {
          font-size: 17px;
        }
        .socials {
          a {
            font-size: 18px;
            margin-right: 7px;
          }
        }
      }
    }
    .shape2 {
      bottom: -30px;
    }
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .team-area {
    .single-team-member {
      .content {
        .socials {
          a {
            font-size: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
