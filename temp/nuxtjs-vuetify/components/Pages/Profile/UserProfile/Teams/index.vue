<template>
  <v-row>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user11.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Ava Turner
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-purple-100 d-inline-block">
            Project Management
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user15.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user16.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user17.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <div
              class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-medium"
            >
              +4
            </div>
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 85% </span>
          </div>
          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="85"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user12.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Ethan Parker
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-secondary-100 d-inline-block">
            eCommerce Theme
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
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
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 45% </span>
          </div>
          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="45"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user13.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Isabella Lee
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-success-100 d-inline-block">
            Shopify Theme Dev
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user10.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user11.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 70% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="70"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user14.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Thompson Torres
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-orange-100 d-inline-block">
            Oito - HTML
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user30.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user29.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user28.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 90% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="90"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user15.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Lucas Lyon
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-primary-100 d-inline-block">
            Tanus - Template
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user25.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user26.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user27.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 75% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="75"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user16.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Morgan Sturges
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-danger-100 d-inline-block">
            Delft - TypeScript
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user24.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 65% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="65"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user17.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Sophia McNeel
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-primary-100 d-inline-block">
            Trezo - Angular
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user21.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user22.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user23.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 90% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="90"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" lg="4" sm="6">
      <v-card
        class="p-team-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="~/assets/images/users/user18.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Rodriguez Meade
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
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
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="team-name text-center">
          <span class="fw-medium text-black bg-purple-100 d-inline-block">
            eLearniv - React
          </span>
        </div>
        <div class="members text-center">
          <span class="d-block"> Team Members </span>
          <div class="d-flex align-items-center justify-content-center">
            <v-img
              src="~/assets/images/users/user19.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <v-img
              src="~/assets/images/users/user20.jpg"
              class="rounded-circle"
              alt="user-image"
            />
          </div>
        </div>
        <div class="progress">
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block fw-medium"> Progress </span>
            <span class="d-block fw-medium"> 80% </span>
          </div>

          <v-progress-linear
            bg-color="blue-lighten-2"
            color="blue-accent-3"
            model-value="80"
          >
          </v-progress-linear>
        </div>
        <NuxtLink to="/project-management/teams" class="btn">
          View Details
        </NuxtLink>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Teams",
};
</script>

<style lang="scss" scoped>
.p-team-card {
  .info {
    .v-img {
      width: 65px;
      height: 65px;
      margin-right: 12px;
      border: 2px solid var(--borderColor);
    }
    .title {
      font-size: 16px;
      margin-bottom: 6px;
    }
  }
  .team-name {
    margin: {
      top: 15px;
      bottom: 15px;
    }
    span {
      border-radius: 30px;
      padding: 6.5px 15px;
    }
  }
  .members {
    span {
      margin-bottom: 9px;
    }
    div {
      img {
        width: 40px;
        height: 40px;
        border: 2px solid var(--borderColor);
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
      div {
        width: 40px;
        height: 40px;
        font-size: 12px;
        border-radius: 50%;
        border: 2px solid var(--whiteColor);
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
  }
  .progress {
    margin: {
      top: 20px;
      bottom: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .btn {
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
    padding: 10.5px 15px;
    border-radius: 7px;
    text-align: center;
    font-weight: 500;
    min-width: auto;
    display: block;
    height: auto;
    width: 100%;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .p-team-card {
    .info {
      img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 14px;
      }
    }
    .progress {
      margin: {
        top: 15px;
        bottom: 20px;
      }
      span {
        margin-bottom: 8px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .p-team-card {
    .info {
      img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 15px;
      }
    }
    .progress {
      margin: {
        top: 15px;
        bottom: 20px;
      }
    }
  }
}
</style>
