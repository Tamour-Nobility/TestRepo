<template>
  <v-card
    class="basic-timeline-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Basic Timeline</h5>
    </div>
    <div class="basic-timeline-content">
      <ul class="list pl-0 pr-0 mt-0 mb-0 list-unstyled position-relative">
        <li class="position-relative">
          <div class="time d-block">Just now</div>
          <span class="title text-black d-block fw-medium">
            Weekly Stand-Up Meetings:
          </span>
          <p>
            We continued our weekly stand-up meetings where team members
            provided updates on their current tasks, discussed any roadblocks,
            and coordinated efforts for the week ahead.
          </p>
          <div class="members d-flex align-items-center">
            <v-img
              src="~/assets/images/users/user6.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user7.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user8.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user9.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <div
              class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-medium"
            >
              +15
            </div>
          </div>
          <span class="author d-block">
            By: <span class="text-primary">Olivia Rodriguez</span>
          </span>
        </li>
        <li class="position-relative">
          <div class="time d-block">12:00 AM, Tuesday</div>
          <span class="title text-black d-block fw-medium">
            Project Kickoff Session:
          </span>
          <p>
            The session included introductions, a review of project goals and
            objectives, and initial planning discussions.
          </p>
          <span class="author d-block">
            By: <span class="text-primary">Isabella Cooper</span>
          </span>
        </li>
        <li class="position-relative">
          <div class="time d-block">03:00 PM, Sunday</div>
          <span class="title text-black d-block fw-medium">
            Team Building Workshop:
          </span>
          <p>
            Last Friday, we conducted a team building workshop focused on
            improving communication and collaboration among team members.
            Activities included team challenges, icebreakers, and open
            discussions.
          </p>
          <span class="author d-block">
            By: <span class="text-primary">Lucas Morgan</span>
          </span>
        </li>
        <li class="position-relative">
          <div class="time d-block">10:00 PM, Friday</div>
          <div class="members d-flex align-items-center">
            <v-img
              src="~/assets/images/users/user6.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user7.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user8.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user9.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <div
              class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-medium"
            >
              +15
            </div>
          </div>
          <span class="title text-black d-block fw-medium">
            Lunch and Learn Session:
          </span>
          <p>
            We organized a lunch and learn session on March 15th where a guest
            speaker from the industry discussed emerging trends in our field. It
            was an insightful session that sparked valuable discussions among
            team members.
          </p>
          <span class="author d-block">
            By: <span class="text-primary">Ethan Parker</span>
          </span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BasicTimeline",
};
</script>

<style lang="scss" scoped>
.basic-timeline-card {
  .basic-timeline-content {
    padding: {
      top: 10px;
      bottom: 10px;
    }
    .list {
      li {
        padding-left: 180px;
        margin-bottom: 30px;

        .time {
          top: 0;
          left: 0;
          width: 120px;
          font-size: 13px;
          text-align: end;
          position: absolute;
          display: inline-block;
        }
        .title {
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .author {
          font-size: 13px;
        }
        .members {
          margin-bottom: 13px;

          .v-img {
            width: 40px;
            height: 40px;
            margin-right: -12px;
            border: 2px solid var(--borderColor);

            &:last-child {
              margin-right: 0;
            }
          }
          div {
            width: 40px;
            height: 40px;
            font-size: 12px;
            border-radius: 50%;
            margin-right: -12px;
            border: 2px solid var(--whiteColor);

            &:last-child {
              margin-right: 0;
            }
          }
        }
        &::before {
          top: 3px;
          left: 144px;
          width: 12px;
          content: "";
          height: 12px;
          border-radius: 50%;
          position: absolute;
          background: #37d80a;
        }
        &:nth-child(2) {
          &::before {
            background: var(--orangeColor);
          }
        }
        &:nth-child(3) {
          &::before {
            background: var(--purpleColor);
          }
        }
        &:nth-child(4) {
          &::before {
            background: var(--secondaryColor);
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &::before {
        top: 0;
        bottom: 0;
        left: 150px;
        content: "";
        margin-top: 5px;
        position: absolute;
        border-left: 1px dashed var(--borderColor);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .basic-timeline-card {
    .basic-timeline-content {
      .list {
        li {
          padding-left: 25px;
          margin-bottom: 25px;

          .time {
            left: 0;
            width: auto;
            text-align: start;
            position: relative;
            margin-bottom: 12px;
          }
          .title {
            margin-bottom: 11px;
          }
          p {
            margin-bottom: 12px;
          }
          &::before {
            left: 0;
            width: 10px;
            height: 10px;
          }
        }
        &::before {
          left: 4px;
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
  .basic-timeline-card {
    .basic-timeline-content {
      .list {
        li {
          margin-bottom: 25px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .basic-timeline-card {
    .basic-timeline-content {
      .list {
        li {
          p {
            max-width: 770px;
          }
        }
      }
    }
  }
}
</style>
