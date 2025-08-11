<template>
  <v-card
    class="customer-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="v-card-header info d-flex align-items-center justify-space-between"
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
          <span class="title d-block fw-medium text-black"> Ava Turner </span>
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
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <ul class="pl-0 mb-0 list-unstyled">
      <li class="text-black fw-medium">
        <span class="text-body d-block fw-normal"> Account ID: </span>
        ID-12174123
      </li>
      <li class="text-black fw-medium">
        <span class="text-body d-block fw-normal"> Billing Email: </span>
        ava&#64;trezo.com
      </li>
      <li class="text-black fw-medium">
        <span class="text-body d-block fw-normal"> Delivery Address: </span>
        715 Maple St, Hamletville, England
      </li>
      <li class="text-black fw-medium">
        <span class="text-body d-block fw-normal"> Language: </span>
        English, Spanish
      </li>
      <li class="text-black fw-medium">
        <span class="text-body d-block fw-normal"> Latest Transaction: </span>
        #JAN-121
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",
};
</script>

<style lang="scss" scoped>
.customer-details-card {
  .v-card-header {
    margin-bottom: 20px !important;
  }
  .info {
    .v-img {
      width: 65px;
      height: 65px;
      margin-right: 12px;
      border: 2px solid #eceef2;
    }
    .title {
      font-size: 16px;
      margin-bottom: 2px;
    }
  }
  ul {
    li {
      margin-bottom: 15px;

      span {
        margin-bottom: 5px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .customer-details-card {
    .info {
      img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 14px;
      }
    }
    ul {
      margin-top: 17px;

      li {
        margin-bottom: 13px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .customer-details-card {
    ul {
      margin-top: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .customer-details-card {
    .info {
      img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 15px;
      }
    }
  }
}
</style>
