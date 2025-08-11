<template>
  <v-card
    class="timeline-post-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Save Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Hide Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Report Photo
          </button>
          <button type="button" class="bg-transparent border-none">
            Block Cynthia
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="timeline-post-content">
      <div class="user d-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/users/user6.jpg"
            class="rounded-circle"
            alt="user-image"
          />
        </div>
        <div class="title">
          <span class="d-block text-black fw-semibold"> Cynthia Baggett </span>
          <span class="d-block"> 05 mins ago </span>
        </div>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions.
      </p>
      <div class="post-info d-sm-flex align-items-center">
        <button>
          <i class="material-symbols-outlined"> thumb_up </i>
          10 Likes
        </button>
        <button>
          <i class="material-symbols-outlined"> chat_bubble_outline </i>
          0 Comments
        </button>
        <button>
          <i class="material-symbols-outlined"> share </i>
          0 Share
        </button>
      </div>
      <div class="post-comment d-sm-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/profile.jpg"
            class="rounded-circle"
            alt="profile-image"
          />
        </div>
        <form class="position-relative">
          <div class="trezo-form-group mb-0">
            <v-text-field label="Type something...." required> </v-text-field>
          </div>
          <button>
            <i class="material-symbols-outlined"> send </i>
          </button>
        </form>
        <div class="buttons-list d-flex align-items-center">
          <button class="text-body">
            <i class="material-symbols-outlined"> sentiment_satisfied </i>
          </button>
          <button class="text-body">
            <i class="material-symbols-outlined"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </v-card>
  <v-card
    class="timeline-post-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Save Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Hide Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Report Photo
          </button>
          <button type="button" class="bg-transparent border-none">
            Block Cynthia
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="timeline-post-content">
      <div class="user d-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/users/user7.jpg"
            class="rounded-circle"
            alt="user-image"
          />
        </div>
        <div class="title">
          <span class="d-block text-black fw-semibold"> Douglas Hairston </span>
          <span class="d-block"> 1 hour ago </span>
        </div>
      </div>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of lorem
        ipsum.
      </p>
      <div class="post-info d-sm-flex align-items-center">
        <button>
          <i class="material-symbols-outlined"> thumb_up </i>
          42 Likes
        </button>
        <button>
          <i class="material-symbols-outlined"> chat_bubble_outline </i>
          2 Comments
        </button>
        <button>
          <i class="material-symbols-outlined"> share </i>
          1 Share
        </button>
      </div>
      <div class="post-comment d-sm-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/profile.jpg"
            class="rounded-circle"
            alt="profile-image"
          />
        </div>
        <form class="position-relative">
          <div class="trezo-form-group mb-0">
            <v-text-field label="Type something...." required> </v-text-field>
          </div>
          <button>
            <i class="material-symbols-outlined"> send </i>
          </button>
        </form>
        <div class="buttons-list d-flex align-items-center">
          <button class="text-body">
            <i class="material-symbols-outlined"> sentiment_satisfied </i>
          </button>
          <button class="text-body">
            <i class="material-symbols-outlined"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </v-card>
  <v-card
    class="timeline-post-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Save Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Hide Post
          </button>
          <button type="button" class="bg-transparent border-none">
            Report Photo
          </button>
          <button type="button" class="bg-transparent border-none">
            Block Cynthia
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="timeline-post-content">
      <div class="user d-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/users/user8.jpg"
            class="rounded-circle"
            alt="user-image"
          />
        </div>
        <div class="title">
          <span class="d-block text-black fw-semibold"> Olivia John </span>
          <span class="d-block"> 1 day ago </span>
        </div>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div class="post-info d-sm-flex align-items-center">
        <button>
          <i class="material-symbols-outlined"> thumb_up </i>
          100 Likes
        </button>
        <button>
          <i class="material-symbols-outlined"> chat_bubble_outline </i>
          16 Comments
        </button>
        <button>
          <i class="material-symbols-outlined"> share </i>
          5 Share
        </button>
      </div>
      <div class="post-comment d-sm-flex align-items-center">
        <div class="img">
          <v-img
            src="~/assets/images/profile.jpg"
            class="rounded-circle"
            alt="profile-image"
          />
        </div>
        <form class="position-relative">
          <div class="trezo-form-group mb-0">
            <v-text-field label="Type something...." required> </v-text-field>
          </div>
          <button>
            <i class="material-symbols-outlined"> send </i>
          </button>
        </form>
        <div class="buttons-list d-flex align-items-center">
          <button class="text-body">
            <i class="material-symbols-outlined"> sentiment_satisfied </i>
          </button>
          <button class="text-body">
            <i class="material-symbols-outlined"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style lang="scss" scoped>
.timeline-post-card {
  .v-card-header {
    margin-bottom: 0;

    .dot-btn {
      top: 38px;
      right: 25px;
      position: absolute !important;
    }
  }
  .timeline-post-content {
    .user {
      border-bottom: 1px solid var(--borderColor);
      padding-bottom: 20px;
      margin-bottom: 18px;

      .img {
        .v-img {
          width: 50px;
          margin-bottom: -3px;
        }
      }
      .title {
        margin-left: 12px;

        span {
          &:not(:first-child) {
            margin-top: 6px;
          }
        }
      }
    }
    .post-info {
      margin-top: 20px;
      border: {
        top: 1px solid var(--borderColor);
        bottom: 1px solid var(--borderColor);
      }
      padding: {
        top: 15px;
        bottom: 15px;
      }
      button {
        padding: 0;
        height: auto;
        min-width: auto;
        border-radius: 0;
        margin-right: 30px;
        color: var(--bodyColor);
        display: flex;
        align-items: center;

        i {
          font-size: 18px;
          margin-right: 5px;
        }
        &:last-child {
          margin-right: 0;
          i {
            margin-right: 0;
          }
        }
      }
    }
    .post-comment {
      margin-top: 20px;

      .img {
        margin-right: 20px;

        .v-img {
          margin-bottom: -3px;
          width: 55px;
        }
      }
      form {
        flex: 1 1 auto;
        padding-right: 70px;

        button {
          right: 0;
          top: 50%;
          padding: 0;
          width: 58px;
          height: 58px;
          min-width: auto;
          border-radius: 7px;
          position: absolute;
          display: inline-block;
          color: var(--whiteColor);
          transform: translateY(-50%);
          background-color: var(--primaryColor);
        }
      }
      .buttons-list {
        margin-left: 20px;

        button {
          padding: 0;
          height: auto;
          min-width: auto;
          border-radius: 0;
          margin-left: 15px;
          display: inline-block;
          color: var(--bodyColor);
          transition: var(--transition);

          i {
            font-size: 20px;
          }
          &:hover {
            color: var(--primaryColor);
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .timeline-post-card {
    .v-card-header {
      &.dot-menu {
        top: 32px;
        right: 17px;
      }
    }
    .timeline-post-content {
      .user {
        padding-bottom: 15px;
        margin-bottom: 13px;
      }
      .post-info {
        margin-top: 15px;
        padding: {
          top: 15px;
          bottom: 0;
        }
        button {
          margin: {
            right: 15px;
            bottom: 15px;
          }
        }
      }
      .post-comment {
        margin-top: 15px;

        .img {
          margin-right: 0;
        }
        form {
          margin: {
            top: 15px;
            bottom: 15px;
          }
        }
        .buttons-list {
          margin-left: 0;

          button {
            margin-left: 12px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .timeline-post-card {
    .v-card-header {
      &.dot-menu {
        right: 20px;
      }
    }
    .timeline-post-content {
      .post-comment {
        .img {
          margin-right: 15px;
        }
        form {
          margin: {
            top: 0;
            bottom: 0;
          }
        }
        .buttons-list {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
