<template>
  <v-card
    class="sales-by-locations-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sales by Locations</h5>
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
    <div class="sales-by-card-content">
      <div class="text-center">
        <v-img src="@/assets/images/vector-map.png" alt="vector-map" />
      </div>
      <ul class="pl-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/usa.svg" alt="usa" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> United States </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="85"
              ></v-progress-linear>
              <span class="d-block percentage"> 85% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/germany.svg" alt="germany" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> Germany </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="75"
              ></v-progress-linear>
              <span class="d-block percentage"> 75% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/uk.svg" alt="uk" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> United Kingdom </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="40"
              ></v-progress-linear>
              <span class="d-block percentage"> 40% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/canada.svg" alt="canada" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> Canada </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="10"
              ></v-progress-linear>
              <span class="d-block percentage"> 10% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/portugal.svg" alt="portugal" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> Portugal </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="05"
              ></v-progress-linear>
              <span class="d-block percentage"> 05% </span>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flag flex-shrink-0">
            <v-img src="@/assets/images/flags/spain.svg" alt="spain" />
          </div>
          <div class="flex-grow-1">
            <span class="title d-block fw-medium"> Spain </span>
            <div class="progressbar d-flex align-items-center">
              <v-progress-linear
                bg-color="blue-lighten-2"
                color="blue-accent-3"
                model-value="15"
              ></v-progress-linear>
              <span class="d-block percentage"> 15% </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SalesByLocations",
};
</script>

<style lang="scss" scoped>
.sales-by-locations-card {
  .sales-by-card-content {
    .v-responsive {
      justify-content: center;
    }
    ul {
      margin-top: 26px;
      li {
        margin-bottom: 17px;
        &:last-child {
          margin-bottom: 0;
        }
        .flag {
          margin-right: 15px;
          .v-img {
            position: relative;
            top: -2px;
          }
        }
        .title {
          color: var(--bodyColor);
          line-height: 1.1;
        }
        .percentage {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
