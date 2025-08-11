<template>
  <v-row>
    <v-col cols="12" lg="4">
      <v-card
        class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">To Do</h5>
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
                Select All
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit All
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete All
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="board-card-content">
          <div
            v-for="item in toDo"
            :key="item.id"
            class="kanban-board-task"
            :class="item.bgClass"
          >
            <div class="title d-flex align-items-center justify-space-between">
              <span class="d-block text-black fw-semibold">
                {{ item.title }}
              </span>
              <button type="button">
                <i class="material-symbols-outlined"> edit </i>
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="info d-flex align-items-center justify-space-between">
              <div class="users d-flex align-items-center">
                <v-img
                  v-for="user in item.users"
                  :key="user.id"
                  :src="user.image"
                  class="rounded-circle"
                  alt="user-image"
                />
              </div>
              <span class="days-left d-block text-secondary">
                5 days left
              </span>
            </div>
          </div>
        </div>
        <AddNewCard />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Doing</h5>
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
                Select All
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit All
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete All
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="board-card-content">
          <div
            v-for="item in doing"
            :key="item.id"
            class="kanban-board-task"
            :class="item.bgClass"
          >
            <div class="title d-flex align-items-center justify-space-between">
              <span class="d-block text-black fw-semibold">
                {{ item.title }}
              </span>
              <button type="button">
                <i class="material-symbols-outlined"> edit </i>
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="info d-flex align-items-center justify-space-between">
              <div class="users d-flex align-items-center">
                <v-img
                  v-for="user in item.users"
                  :key="user.id"
                  :src="user.image"
                  class="rounded-circle"
                  alt="user-image"
                />
              </div>
              <span class="days-left d-block text-danger"> 5 days left </span>
            </div>
          </div>
        </div>
        <AddNewCard />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Done</h5>
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
                Select All
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit All
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete All
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="board-card-content">
          <div
            v-for="item in done"
            :key="item.id"
            class="kanban-board-task"
            :class="item.bgClass"
          >
            <div class="title d-flex align-items-center justify-space-between">
              <span class="d-block text-black fw-semibold">
                {{ item.title }}
              </span>
              <button type="button">
                <i class="material-symbols-outlined"> edit </i>
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="info d-flex align-items-center justify-space-between">
              <div class="users d-flex align-items-center">
                <v-img
                  v-for="user in item.users"
                  :key="user.id"
                  :src="user.image"
                  class="rounded-circle"
                  alt="user-image"
                />
              </div>
              <span class="days-left d-block text-secondary">
                5 days left
              </span>
            </div>
          </div>
        </div>
        <AddNewCard />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddNewCard from "./AddNewCard.vue";

export default defineComponent({
  name: "KanbanBoard",
  components: {
    AddNewCard,
  },
  data() {
    return {
      toDo: [
        {
          id: 1,
          title: `Project Requirements`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `5 days left`,
          bgClass: `bg-purple-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user6.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user7.jpg"),
            },
            {
              id: 3,
              image: require("@/assets/images/users/user8.jpg"),
            },
          ],
        },
        {
          id: 2,
          title: `WordPress Theme`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `bg-secondary-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user9.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user10.jpg"),
            },
          ],
        },
        {
          id: 3,
          title: `UX/UI Design`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `10 days left`,
          bgClass: `bg-success-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user11.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user12.jpg"),
            },
            {
              id: 3,
              image: require("@/assets/images/users/user13.jpg"),
            },
          ],
        },
        {
          id: 4,
          title: `Project Analysis`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `14 days left`,
          bgClass: `bg-orange-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user14.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user15.jpg"),
            },
          ],
        },
        {
          id: 5,
          title: `Competitor Research `,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `15 days left`,
          bgClass: `bg-primary-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user16.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user17.jpg"),
            },
          ],
        },
      ],
      doing: [
        {
          id: 1,
          title: `React Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `3 days left`,
          bgClass: `bg-orange-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user18.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user19.jpg"),
            },
          ],
        },
        {
          id: 2,
          title: `Laravel Project`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `5 days left`,
          bgClass: `bg-purple-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user20.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user21.jpg"),
            },
            {
              id: 3,
              image: require("@/assets/images/users/user22.jpg"),
            },
          ],
        },
        {
          id: 3,
          title: `Project Requirements`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `bg-danger-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user23.jpg"),
            },
          ],
        },
        {
          id: 4,
          title: `UX/UI Design`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `9 days left`,
          bgClass: `bg-success-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user24.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user25.jpg"),
            },
          ],
        },
      ],
      done: [
        {
          id: 1,
          title: `Admin Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `3 days left`,
          bgClass: `bg-primary-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user26.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user27.jpg"),
            },
            {
              id: 3,
              image: require("@/assets/images/users/user28.jpg"),
            },
          ],
        },
        {
          id: 2,
          title: `eCommerce Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `bg-purple-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user29.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user30.jpg"),
            },
          ],
        },
        {
          id: 3,
          title: `Shopify Theme`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `10 days left`,
          bgClass: `bg-success-100`,
          users: [
            {
              id: 1,
              image: require("@/assets/images/users/user11.jpg"),
            },
            {
              id: 2,
              image: require("@/assets/images/users/user12.jpg"),
            },
            {
              id: 3,
              image: require("@/assets/images/users/user13.jpg"),
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.kanban-board-card {
  .v-card-header {
    margin-bottom: 22px;
  }
  .kanban-board-task {
    border: 0;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 25px !important;

    .title {
      margin-bottom: 15px;
      line-height: 0;
    }
    .info {
      margin-top: 20px;

      .users {
        .v-img {
          width: 34px;
          height: 34px;
          margin-right: -10px;
          border: 2px solid var(--whiteColor);

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .kanban-board-card {
    .v-card-header {
      margin-bottom: 17px;
    }
  }
  .kanban-board-task {
    margin-bottom: 17px;
    padding: 17px !important;

    .title {
      margin-bottom: 12px;
    }
    .info {
      margin-top: 15px;

      .users {
        .v-img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .kanban-board-card {
    .v-card-header {
      margin-bottom: 20px;
    }
    .kanban-board-task {
      margin-bottom: 20px;
      padding: 20px !important;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
