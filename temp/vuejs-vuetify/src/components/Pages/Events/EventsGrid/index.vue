<template>
  <v-row>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event1.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $120
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Annual Conference 2024
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user6.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user7.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user8.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user9.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 1156 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="85"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event2.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $59
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Leadership Summit 2024
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user10.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user11.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 556 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="24"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event3.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $123
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Product Launch Webinar
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user12.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user13.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user14.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 356 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="65"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event4.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $99
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                AI in Healthcare Symposium
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user15.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 3226 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="82"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event5.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $35
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Tech Summit 2024
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user16.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user17.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 4109 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="48"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event6.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $76
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Startup Pitch Day
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user18.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user19.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user20.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 432 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="37"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event7.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $30
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Workshop: Digital Marketing
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user21.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 1728 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="65"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event8.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $87
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Charity Gala Dinner
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user22.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user23.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user24.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user25.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 1306 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="80"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event9.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $50
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Web Development Seminar
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user26.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user27.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 2756 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="78"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event10.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $89
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Networking Mixer
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user28.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user29.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 1467 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="30"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event1.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $105
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Annual Conference 2024
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user30.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user6.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user7.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 799 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="90"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="event-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="event-card-content">
          <div class="image position-relative">
            <RouterLink
              to="/events/event-details"
              class="d-block border-radius"
            >
              <v-img
                src="@/assets/images/events/event2.jpg"
                class="border-radius"
                alt="event-image"
              />
            </RouterLink>
            <div
              class="price d-flex align-items-center text-center justify-content-center fw-bold bg-primary text-white"
            >
              $100
            </div>
          </div>
          <div class="content">
            <h6>
              <RouterLink to="/events/event-details">
                Leadership Summit 2024
              </RouterLink>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div class="members d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user8.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user9.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user10.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <v-img
                src="@/assets/images/users/user11.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div class="progress">
              <div class="d-flex align-items-center justify-space-between">
                <span class="d-block"> Seat Booked </span>
                <span class="d-block text-black fw-semibold"> 3241 </span>
              </div>
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="50"
              >
              </v-progress-linear>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <Pagination
    class="pagination-content border-radius d-block bg-white border-0 shadow-none"
  />
</template>

<script>
import Pagination from "@/components/Common/Pagination.vue";

export default {
  name: "EventsGrid",
  components: {
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  .event-card-content {
    .image {
      a {
        .v-img {
          margin-bottom: -3px;
        }
      }
      .price {
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        font-size: 16px;
        position: absolute;
        border-radius: 7px;
        z-index: 2;
      }
      &::before {
        top: 0;
        right: 0;
        width: 65px;
        content: "";
        height: 65px;
        position: absolute;
        border-radius: 0 7px 0 7px;
        background: var(--whiteColor);
        z-index: 1;
      }
    }
    .content {
      margin-top: 22px;

      h6 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .members {
        .v-img {
          width: 40px;
          height: 40px;
          border: 2px solid #eceef2;
          margin: {
            left: -6px;
            right: -6px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .progress {
        margin-top: 22px;

        span {
          margin-bottom: 10px;
        }
      }
    }
  }
}
.bg-primary {
  background-color: var(--primaryColor) !important;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .event-card {
    .event-card-content {
      .image {
        .price {
          width: 55px;
          height: 55px;
          font-size: 14px;
        }
        &::before {
          width: 60px;
          height: 60px;
        }
      }
      .content {
        margin-top: 18px;

        h6 {
          font-size: 15px;
          margin-bottom: 8px;
        }
        .members {
          .v-img {
            width: 38px;
            height: 38px;
            margin: {
              left: -5px;
              right: -5px;
            }
          }
        }
        .progress {
          margin-top: 18px;
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
  .event-card {
    .event-card-content {
      .content {
        margin-top: 20px;

        h6 {
          font-size: 16px;
        }
        .progress {
          margin-top: 20px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .event-card {
    .event-card-content {
      .content {
        h6 {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
