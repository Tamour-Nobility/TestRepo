<template>
  <v-card
    class="course-instructor-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Course Instructor</h5>
    </div>
    <div class="instructor-card-content">
      <div class="course-instructor d-flex align-items-center">
        <div class="image">
          <v-img
            src="@/assets/images/users/user7.jpg"
            class="rounded-circle"
            alt="user-image"
          />
        </div>
        <div class="title">
          <span class="d-block fw-medium text-black"> Aliva Cohen </span>
          <span class="d-block text-body"> aliva&#64;trezo.com </span>
        </div>
      </div>
      <div class="course-content">
        <span class="title text-black fw-medium d-block">
          Course Description
        </span>
        <p>
          This course is designed for beginners who want to learn the
          fundamentals of the Python programming language. The course covers
          basic syntax, data types, control structures, and an introduction to
          object-oriented programming. Participants will have hands-on coding
          exercises to reinforce their learning.
        </p>
        <span class="title text-black fw-medium d-block">
          Course Schedule
        </span>
        <p>
          Start Date: 01 August 2024
          <br />
          End Date: 30 December 2024
        </p>
        <span class="title text-black fw-medium d-block"> Status </span>
        <p>
          The course is currently in progress. Students are actively engaged in
          the learning materials, and the instructor is providing guidance and
          support.
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CourseInstructor",
};
</script>

<style lang="scss" scoped>
.course-instructor-card {
  .instructor-card-content {
    .course-instructor {
      .image {
        .v-img {
          width: 100px;
          margin-bottom: -4px;
        }
      }
      .title {
        margin-left: 15px;

        span {
          &:nth-child(1) {
            font-size: 17px;
            margin-bottom: 0;
          }
        }
      }
    }
    .course-content {
      .title {
        margin: {
          bottom: 5px;
          top: 25px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .course-instructor-card {
    .instructor-card-content {
      .course-instructor {
        .image {
          .v-img {
            width: 60px;
          }
        }
        .title {
          margin-left: 12px;

          span {
            &:nth-child(1) {
              font-size: 16px;
            }
          }
        }
      }
      .course-content {
        .title {
          margin: {
            bottom: 8px;
            top: 17px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .course-instructor-card {
    .instructor-card-content {
      .course-content {
        .title {
          margin: {
            bottom: 8px;
            top: 20px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .course-instructor-card {
    .instructor-card-content {
      .course-instructor {
        .title {
          span {
            &:nth-child(1) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
