<template>
  <v-card
    class="users-by-country-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Users by Country</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Last Day
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="users-by-country-card-content">
      <div class="text-center image">
        <v-img src="@/assets/images/vector-map.png" alt="vector-map" />
      </div>
      <ul class="mb-0 p-0 list-unstyled d-flex flex-wrap">
        <li>
          <div class="position-relative bt-1">
            <v-img src="@/assets/images/flags/usa.svg" width="20" alt="usa" />
            <span class="d-block text-body fw-medium"> United States </span>
            <h6 class="mb-0 fw-semibold">
              12,800 <span class="text-body">35.6%</span>
            </h6>
          </div>
        </li>
        <li>
          <div class="position-relative bt-1">
            <v-img src="@/assets/images/flags/uk.svg" width="20" alt="uk" />
            <span class="d-block text-body fw-medium"> United Kingdom </span>
            <h6 class="mb-0 fw-semibold">
              6,750 <span class="text-body">18.7%</span>
            </h6>
          </div>
        </li>
        <li>
          <div class="position-relative bt-1">
            <v-img
              src="@/assets/images/flags/canada.svg"
              width="20"
              alt="canada"
            />
            <span class="d-block text-body fw-medium"> Canada </span>
            <h6 class="mb-0 fw-semibold">
              2,500 <span class="text-body">6.3%</span>
            </h6>
          </div>
        </li>
        <li>
          <div class="position-relative bt-1">
            <v-img
              src="@/assets/images/flags/australia.svg"
              width="20"
              alt="australia"
            />
            <span class="d-block text-body fw-medium"> Australia </span>
            <h6 class="mb-0 fw-semibold">
              2,200 <span class="text-body">5.4%</span>
            </h6>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersByCountry",
});
</script>

<style lang="scss" scoped>
.users-by-country-card {
  .users-by-country-card-content {
    .image {
      margin-top: 35px;
      .v-responsive {
        justify-content: center !important;
      }
    }
    ul {
      margin-top: 0;

      li {
        flex: 0 0 auto;
        width: 50%;

        .bt-1 {
          border-top: 1px solid var(--borderColor);
        }
        div {
          margin-top: 15px;
          padding: {
            left: 30px;
            top: 15px;
          }
          .v-img {
            left: 0;
            top: 2px;
            position: absolute;
            padding: 0;
          }
          span {
            font-size: 12px;
            margin-bottom: 5px;
          }
          h6 {
            font-size: 16px;
          }
        }
        &:first-child,
        &:nth-child(2) {
          div {
            border-top-width: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .users-by-country-card {
    .users-by-country-card-content {
      .image {
        margin-top: 17px;
      }
      ul {
        margin-top: -5px;

        li {
          div {
            margin-top: 10px;
            padding: {
              left: 28px;
              top: 10px;
            }
            h6 {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .users-by-country-card {
    .users-by-country-card-content {
      ul {
        max-width: 450px;
        margin: {
          left: auto;
          right: auto;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .users-by-country-card {
    .users-by-country-card-content {
      ul {
        li {
          div {
            padding-left: 28px;
          }
        }
      }
    }
  }
}
</style>
