<template>
  <v-card
    class="advanced-timeline-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Advanced Timeline</h5>
    </div>
    <div class="advanced-timeline-content">
      <ul class="timeline pl-0 pr-0 mb-0 list-unstyled mt-0 position-relative">
        <li class="timeline-item position-relative z-1">
          <div class="date d-inline-block">
            12:00 AM, 25 Mar 2024
            <span class="arrow d-block"></span>
          </div>
          <div class="inner bg-gray border-radius position-relative">
            <h6 class="text-primary fw-medium">Weekly Stand-Up Meetings:</h6>
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
          </div>
        </li>
        <li class="timeline-item position-relative z-1">
          <div class="date d-inline-block">
            04:00 PM, 24 Mar 2024
            <span class="arrow d-block"></span>
          </div>
          <div class="inner bg-gray border-radius position-relative">
            <h6 class="text-primary fw-medium">Project Kickoff Session:</h6>
            <p>
              Briefly explain the purpose of the kickoff session and its
              importance in setting the project on the right track. Discuss any
              assumptions made about the scope and clarify
            </p>
            <span class="author d-block">
              By: <span class="text-primary">Olivia Rodriguez</span>
            </span>
          </div>
        </li>
        <li class="timeline-item position-relative z-1">
          <div class="date d-inline-block">
            02 PM, 23 Mar 2024
            <span class="arrow d-block"></span>
          </div>
          <div class="inner bg-gray border-radius position-relative">
            <h6 class="text-primary fw-medium">Team Building Workshop:</h6>
            <p>
              Arrange for a suitable venue and ensure that any necessary
              materials or resources are readily available. Start the workshop
              with a fun icebreaker activity to help team members.
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
          </div>
        </li>
        <li class="timeline-item position-relative z-1">
          <div class="date d-inline-block">
            12:00 PM, 22 Mar 2024
            <span class="arrow d-block"></span>
          </div>
          <div class="inner bg-gray border-radius position-relative">
            <h6 class="text-primary fw-medium">Lunch & Learning Session:</h6>
            <p>
              Determine a convenient time and date for the session, ideally
              during a lunch break or over a lunch hour. Start the session on
              time and welcome all participants.
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
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AdvancedTimeline",
};
</script>

<style lang="scss" scoped>
.advanced-timeline-card {
  .advanced-timeline-content {
    padding: {
      top: 10px;
      bottom: 10px;
    }
    .timeline {
      .timeline-item {
        padding-bottom: 30px;

        .inner {
          padding: 20px;
          width: 44.7%;
          float: left;

          h6 {
            font-size: 14px;
            margin-bottom: 8px;
          }
          p {
            line-height: 1.5;
            margin-bottom: 13px;
          }
          .members {
            margin-bottom: 13px;

            .v-img {
              width: 34px;
              height: 34px;
              margin-right: -14px;
              border: 1px solid var(--whiteColor);

              &:last-child {
                margin-right: 0;
              }
            }
            div {
              width: 34px;
              height: 34px;
              font-size: 12px;
              margin-right: -14px;
              border: 1px solid var(--whiteColor);

              &:last-child {
                margin-right: 0;
              }
            }
          }
          .author {
            font-size: 12px;
          }
        }
        .date {
          left: 50%;
          top: 78px;
          font-size: 12px;
          margin-left: 123px;
          position: absolute;
          border-radius: 7px;
          padding: 10px 18px;
          color: var(--whiteColor);
          transform: translateX(-50%);
          background-color: var(--primaryColor);

          .arrow {
            top: 50%;
            left: -6px;
            width: 15px;
            height: 15px;
            border-radius: 4px;
            position: absolute;
            background: var(--primaryColor);
            transform: translateY(-50%) rotate(45deg);
          }
        }
        .bg-gray {
          background-color: #ecf0ff;
        }
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(6),
        &:nth-child(8),
        &:nth-child(10) {
          .inner {
            float: right;
            left: -25px;
          }
          .date {
            margin-left: -150px;

            .arrow {
              left: auto;
              right: -6px;
            }
          }
        }
        &:nth-child(2),
        &:nth-child(6) {
          &::before {
            background: var(--purpleColor);
          }
        }
        &:nth-child(3),
        &:nth-child(7) {
          &::before {
            background: var(--primaryColor);
          }
        }
        &:nth-child(4),
        &:nth-child(8) {
          &::before {
            background: var(--dangerColor);
          }
        }
        &:last-child {
          padding-bottom: 0;
        }
        &::before {
          left: 50%;
          top: 90px;
          content: "";
          width: 12px;
          height: 12px;
          margin-left: -10px;
          border-radius: 50%;
          position: absolute;
          background: #37d80a;
          transform: translateX(-50%);
        }
        &::after {
          display: block;
          content: "";
          clear: both;
        }
      }
      &::before {
        top: 0;
        left: 50%;
        bottom: 0;
        content: "";
        position: absolute;
        transform: translateX(-50%);
        border-right: 1px dashed var(--borderColor);
        margin: {
          top: 90px;
          left: -10px;
          bottom: 100px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .advanced-timeline-card {
    .advanced-timeline-content {
      padding: {
        top: 0;
        bottom: 0;
      }
      .timeline {
        .timeline-item {
          padding: {
            bottom: 20px;
            left: 15px;
          }
          .inner {
            width: 100%;
            float: unset;
            padding: 17px;
          }
          .date {
            top: 0;
            left: 0;
            padding: 8px 15px;
            position: relative;
            transform: translateX(0);
            margin: {
              left: 6px;
              bottom: 12px;
            }
            .arrow {
              left: -5px;
              width: 13px;
              height: 13px;
            }
          }
          &:nth-child(2),
          &:nth-child(4),
          &:nth-child(6),
          &:nth-child(8),
          &:nth-child(10) {
            .inner {
              float: unset;
              left: 0;
            }
            .date {
              margin-left: 6px;

              .arrow {
                left: -5px;
                right: auto;
              }
            }
          }
          &::before {
            display: none;
          }
        }
        &::before {
          left: 0;
          transform: translateX(0);
          margin: {
            top: 0;
            left: 0;
            bottom: 0;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .advanced-timeline-card {
    .advanced-timeline-content {
      .timeline {
        .timeline-item {
          .inner {
            padding: 20px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .advanced-timeline-card {
    .advanced-timeline-content {
      padding: {
        top: 0;
        bottom: 0;
      }
      .timeline {
        .timeline-item {
          padding-bottom: 25px;
        }
      }
    }
  }
}
</style>
