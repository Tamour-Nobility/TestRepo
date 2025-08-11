<template>
  <v-card
    class="products-filter-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header mb-0">
      <h5 class="mb-0 fw-medium">Filter</h5>
      <div class="d-flex">
        <form class="search-box position-relative">
          <label>
            <i class="material-symbols-outlined"> search </i>
          </label>
          <input
            type="text"
            class="input-search"
            placeholder="Search here....."
          />
        </form>
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Default Sorting
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Default Sorting
            </button>
            <button type="button" class="bg-transparent border-none">
              Price Low to High
            </button>
            <button type="button" class="bg-transparent border-none">
              Price High to Low
            </button>
            <button type="button" class="bg-transparent border-none">
              Top Sales
            </button>
            <button type="button" class="bg-transparent border-none">
              Newest Arrivals
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProductsFilter",
};
</script>

<style lang="scss" scoped>
.products-filter-card {
  .v-card-header {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-box {
      margin-right: 20px;

      i {
        top: 50%;
        left: 13px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
        z-index: 1;
      }
      .input-search {
        height: 36px;
        font-size: 12px;
        padding-left: 38px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .products-filter-card {
    .v-card-header {
      display: block;
      margin-top: 12px;

      .d-flex {
        align-items: center !important;
      }
      .search-box {
        width: 150px;
        margin: {
          right: 10px;
          top: 0;
        }
        i {
          left: 10px;
          font-size: 18px;
        }
        .input-search {
          height: 32px;
          padding-left: 35px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .products-filter-card {
    .v-card-header {
      display: flex;
      margin-top: 0;

      .search-box {
        width: 200px;
      }
    }
  }
}
</style>
