<template>
  <PagesEventsEventDetailsImage />
  <div class="row">
    <div class="col-xxxl-7">
      <v-card
        class="event-details-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Event Details</h5>
        </div>
        <div class="event-details-content">
          <span class="title d-block fw-semibold text-black">
            Annual Conference 2024
          </span>
          <p>
            The Annual Conference 2024 is a flagship event organized by ABC
            Corporation. This conference aims to bring together industry
            leaders, experts, and enthusiasts to discuss the latest trends,
            innovations, and challenges in our field. Participants can expect
            insightful keynote sessions, engaging panel discussions, and
            valuable networking opportunities.
          </p>
          <div class="info d-md-flex aling-items-center">
            <div class="d-flex align-items-center">
              <div
                class="icon rounded-circle position-relative text-primary text-center"
              >
                <i class="material-symbols-outlined"> schedule </i>
              </div>
              <div>
                <span class="d-block text-black fw-semibold"> Time </span>
                <span class="d-block"> 01 Dec 2024, 09:00 AM </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="icon rounded-circle position-relative text-info text-center"
              >
                <i class="material-symbols-outlined"> place </i>
              </div>
              <div>
                <span class="d-block text-black fw-semibold"> Location </span>
                <span class="d-block"> Convention Center </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="icon rounded-circle position-relative text-purple text-center"
              >
                <i class="material-symbols-outlined"> event_seat </i>
              </div>
              <div>
                <span class="d-block text-black fw-semibold"> Event Seat </span>
                <span class="d-block"> 50 </span>
              </div>
            </div>
          </div>
          <div class="form-btn-box">
            <button>
              <i class="material-symbols-outlined"> local_activity </i>
              Get Ticket
            </button>
            <button>
              <i class="material-symbols-outlined"> event </i>
              Add To Calendar
            </button>
            <button>
              <i class="material-symbols-outlined"> favorite_border </i>
              5937
            </button>
            <button>
              <i class="material-symbols-outlined"> share </i>
              2582
            </button>
          </div>
        </div>
      </v-card>
    </div>
    <div class="col-xxxl-5">
      <v-card
        class="event-details-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Event Info</h5>
        </div>
        <div class="event-details-content">
          <ul class="list pl-0 mb-0 mt-0 list-unstyled">
            <li><span class="text-black">08:00 AM</span> - Registration</li>
            <li><span class="text-black">09:00 AM</span> - Opening Keynote</li>
            <li>
              <span class="text-black">10:30 AM</span> - Panel Discussion:
              Future Trends
            </li>
            <li><span class="text-black">12:00 PM</span> - Lunch Break</li>
            <li>
              <span class="text-black">02:00 PM</span> - Interactive Workshops
            </li>
            <li>
              <span class="text-black">04:30 PM</span> - Networking Reception
            </li>
          </ul>
          <h5>Registration Information</h5>
          <ul class="list pl-0 mb-0 mt-0 list-unstyled">
            <li>Early Bird Registration Deadline: 15 November 2024</li>
            <li>Standard Registration Deadline: 30 November 2024</li>
          </ul>
        </div>
      </v-card>
    </div>
    <div class="col-xxl-6">
      <v-card
        class="event-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">About This Event</h5>
        </div>
        <div class="event-details-content">
          <p>
            Pellentesque viverra lorem malesuada nunc tristique sapien.
            Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus
            non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet
            aliquam venenatis. Ac viverra interdum tortor enim. Molestie
            tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
            mauris placerat nisi placerat.
          </p>
          <p>
            Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus
            non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet
            aliquam venenatis. Ac viverra interdum tortor enim. Molestie
            tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
            mauris placerat nisi placerat.
          </p>
          <ul class="features-list pl-0 mb-0 list-unstyled">
            <li class="position-relative">
              Pellentesque viverra lorem malesuada nunc tristique sapien.
            </li>
            <li class="position-relative">
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
            <li class="position-relative">
              Tellus non morbi nascetur cursus etiam facilisis mi.
            </li>
            <li class="position-relative">
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
          </ul>
        </div>
      </v-card>
    </div>
    <div class="col-xxl-6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Speakers</h5>
        </div>
        <div class="event-details-content">
          <div class="basic-table table-responsive">
            <table>
              <thead>
                <tr>
                  <th scope="col" class="fw-medium">Speaker</th>
                  <th scope="col" class="fw-medium">Topic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="speaker-info d-flex align-items-center">
                      <div class="img">
                        <v-img
                          src="~/assets/images/users/user1.jpg"
                          alt="user-image"
                        />
                      </div>
                      <span class="d-block fw-medium"> Sarah Johnson </span>
                    </div>
                  </td>
                  <td class="text-body">Opening Keynote</td>
                </tr>
                <tr>
                  <td>
                    <div class="speaker-info d-flex align-items-center">
                      <div class="img">
                        <v-img
                          src="~/assets/images/users/user2.jpg"
                          alt="user-image"
                        />
                      </div>
                      <span class="d-block fw-medium"> Russell Colon </span>
                    </div>
                  </td>
                  <td class="text-body">Panel Discussion: Future Trends</td>
                </tr>
                <tr>
                  <td>
                    <div class="speaker-info d-flex align-items-center">
                      <div class="img">
                        <v-img
                          src="~/assets/images/users/user3.jpg"
                          alt="user-image"
                        />
                      </div>
                      <span class="d-block fw-medium"> Cynthia Baggett </span>
                    </div>
                  </td>
                  <td class="text-body">Interactive Workshops</td>
                </tr>
                <tr>
                  <td>
                    <div class="speaker-info d-flex align-items-center">
                      <div class="img">
                        <v-img
                          src="~/assets/images/users/user4.jpg"
                          alt="user-image"
                        />
                      </div>
                      <span class="d-block fw-medium"> Raymond Nguyen </span>
                    </div>
                  </td>
                  <td class="text-body">Networking Reception</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
};
</script>

<style lang="scss" scoped>
.event-details-card {
  .event-details-content {
    .title {
      margin-bottom: 12px;
    }
    .info {
      margin-top: 20px;

      .icon {
        width: 70px;
        height: 70px;
        margin-right: 15px;
        background-color: #f4f6fc;

        i {
          left: 0;
          right: 0;
          top: 50%;
          font-size: 35px;
          margin-top: -1px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      span {
        &:not(:first-child) {
          margin-top: 6px;
        }
      }
      .d-flex {
        margin-right: 25px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .form-btn-box {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed #e0e0e0;
      button {
        color: var(--bodyColor);
        border-color: var(--primaryColor);
        background-color: var(--whiteColor);
        border: 1px solid #c2cada;
        &:nth-child(1) {
          color: var(--whiteColor) !important;
          border-color: var(--primaryColor) !important;
          background-color: var(--primaryColor) !important;
        }
        &:last-child {
          margin-right: 0 !important;
        }
        &:hover {
          color: var(--whiteColor);
          border-color: var(--primaryColor);
          background-color: var(--primaryColor);
          border: 1px solid var(--primaryColor);
        }
      }
    }
    h5 {
      margin: {
        bottom: 18px;
        top: 25px;
      }
    }
    .list {
      li {
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .features-list {
      margin-top: 20px;

      li {
        margin-bottom: 12px;
        padding-left: 15px;

        &::before {
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          content: "";
          position: absolute;
          border-radius: 50%;
          transform: translateY(-50%);
          background: var(--primaryColor);
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .event-details-card {
    .event-details-content {
      .info {
        margin-top: 0;

        .d-flex {
          margin: {
            top: 15px;
            right: 0;
          }
        }
        .icon {
          width: 55px;
          height: 55px;
          margin-right: 12px;

          i {
            font-size: 30px;
            margin-top: 0;
          }
        }
      }
      .form-btn-box {
        margin-top: 15px;
        padding-top: 5px;
      }
      h5 {
        margin: {
          bottom: 12px;
          top: 20px;
        }
      }
      .list {
        li {
          margin-bottom: 12px;
        }
      }
      .features-list {
        margin-top: 15px;

        li {
          margin-bottom: 12px;
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
  .event-details-card {
    .event-details-content {
      .info {
        margin-top: 20px;

        .icon {
          width: 65px;
          height: 65px;

          i {
            font-size: 40px;
          }
        }
      }
      .form-btn-box {
        margin-top: 25px;
        padding-top: 25px;
      }
      h5 {
        margin: {
          bottom: 15px;
          top: 25px;
        }
      }
    }
  }
}
</style>
