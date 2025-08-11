<template>
  <v-card
    class="recent-activity-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Activity</h5>
    </div>
    <div class="activity-card-content">
      <ul class="list pl-0 mt-0 mb-0 list-unstyled position-relative">
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
          <span class="author d-block">
            By: <span class="text-primary">Olivia Rodriguez</span>
          </span>
        </li>
        <li class="position-relative">
          <div class="time d-block">1 day ago</div>
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
          <div class="time d-block">2 days ago</div>
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
          <div class="time d-block">3 days ago</div>
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
  name: "RecentActivity",
};
</script>

<style lang="scss" scoped>
.recent-activity-card {
  .activity-card-content {
    .list {
      li {
        padding-left: 132px;
        margin-bottom: 30px;

        .time {
          top: 0;
          left: 5px;
          font-size: 13px;
          position: absolute;
        }
        .title {
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 11px;
        }
        .author {
          font-size: 13px;
        }
        &::before {
          top: 3px;
          left: 93px;
          width: 12px;
          content: "";
          height: 12px;
          border-radius: 50%;
          position: absolute;
          background: #37d80a;
        }
        &:nth-child(2) {
          &::before {
            background: #fd5812;
          }
        }
        &:nth-child(3) {
          &::before {
            background: #ad63f6;
          }
        }
        &:nth-child(4) {
          &::before {
            background: #3584fc;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &::before {
        top: 0;
        bottom: 0;
        left: 98px;
        content: "";
        margin-top: 5px;
        position: absolute;
        border-left: 1px dashed #d5d9e2;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .recent-activity-card {
    .activity-card-content {
      .list {
        li {
          padding-left: 25px;
          margin-bottom: 25px;

          .time {
            left: 0;
            position: relative;
            margin-bottom: 11px;
          }
          .title {
            margin-bottom: 10px;
          }
          p {
            margin-bottom: 11px;
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
  .recent-activity-card {
    .activity-card-content {
      .list {
        li {
          padding-left: 125px;
          margin-bottom: 25px;

          &::before {
            left: 90px;
          }
        }
        &::before {
          left: 95px;
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
  .recent-activity-card {
    .activity-card-content {
      padding: {
        top: 10px;
        bottom: 25px;
      }
      .list {
        li {
          p {
            max-width: 500px;
          }
        }
      }
    }
  }
}
</style>
