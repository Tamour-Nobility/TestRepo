<template>
  <v-card
    class="enrolled-by-countries-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Enrolled by Countries</h5>
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
    <div class="countries-card-content">
      <div class="text-center">
        <v-img src="~/assets/images/vector-map.png" alt="vector-map" />
      </div>
      <ul class="pl-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="~/assets/images/flags/usa.svg" alt="usa" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium text-body">
              United States
            </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="blue-accent-3"
                model-value="85"
              >
              </v-progress-linear>
              <span class="d-block percentage text-body"> 85% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="~/assets/images/flags/germany.svg" alt="germany" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium text-body"> Germany </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="blue-accent-3"
                model-value="75"
              >
              </v-progress-linear>
              <span class="d-block percentage text-body"> 75% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="~/assets/images/flags/uk.svg" alt="uk" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium text-body">
              United Kingdom
            </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="blue-accent-3"
                model-value="40"
              >
              </v-progress-linear>
              <span class="d-block percentage text-body"> 40% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="~/assets/images/flags/canada.svg" alt="canada" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium text-body"> Canada </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="deep-purple-lighten-2"
                class="blue-accent-3"
                model-value="10"
              >
              </v-progress-linear>
              <span class="d-block percentage text-body"> 10% </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "EnrolledByCountries",
};
</script>

<style lang="scss" scoped>
.enrolled-by-countries-card {
  .countries-card-content {
    ul {
      margin-top: 22px;

      li {
        margin-bottom: 11px;

        .flag {
          margin-right: 15px;
        }
        .title {
          line-height: 1.3;
        }
        .percentage {
          margin-left: 15px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .v-responsive {
      justify-content: center;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .enrolled-by-countries-card {
    .countries-card-content {
      ul {
        margin-top: 17px;

        li {
          margin-bottom: 12px;

          .flag {
            margin-right: 12px;
          }
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
  .enrolled-by-countries-card {
    .countries-card-content {
      ul {
        margin-top: 20px;

        li {
          margin-bottom: 13px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .enrolled-by-countries-card {
    .countries-card-content {
      ul {
        margin-top: 24px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .enrolled-by-countries-card {
    .countries-card-content {
      ul {
        margin-top: 24px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
