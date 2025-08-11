<template>
  <v-card
    class="seller-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="v-card-header info d-flex align-items-center justify-space-between"
    >
      <div class="d-flex align-items-center">
        <div class="icon position-relative text-center rounded-circle">
          <v-img src="@/assets/images/sellers/seller1.png" alt="seller-image" />
        </div>
        <div>
          <RouterLink
            to="/ecommerce/seller-details"
            class="title d-block fw-medium"
          >
            Ava Turner
          </RouterLink>
          <span class="d-block"> turner@trezo.com </span>
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
          <button type="button" class="bg-transparent border-none">View</button>
          <button type="button" class="bg-transparent border-none">Edit</button>
          <button type="button" class="bg-transparent border-none">
            Delete
          </button>
        </v-list>
      </v-menu>
    </div>
    <ul class="pl-0 mb-0 list-unstyled">
      <li class="text-black">
        <span class="text-body"> Last Sale Date: </span>
        25 Nov 2024
      </li>
      <li class="text-black">
        <span class="text-body"> Item Stock: </span>
        50
      </li>
      <li class="text-black">
        <span class="text-body"> Wallet Balance: </span>
        $9,999.50
      </li>
      <li class="text-black">
        <span class="text-body"> Revenue: </span>
        $5,999.50
      </li>
      <li class="text-black">
        <span class="text-body"> Store: </span>
        TechMaster Store
      </li>
    </ul>
    <v-form>
      <div class="trezo-form-group">
        <v-label class="d-block fw-medium text-black">
          Contact Support
        </v-label>
        <v-textarea label="Type here...."></v-textarea>
      </div>
      <div class="form-btn-box">
        <button type="button">
          <i class="material-symbols-outlined"> send </i>
          Send Message
        </button>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Seller",
};
</script>

<style lang="scss" scoped>
.seller-card {
  .v-card-header {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-box {
      margin-right: 20px;
      margin-top: 0;

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
  .info {
    .icon {
      margin-right: 15px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 2px;
    }
  }
  ul {
    margin-top: 20px;

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  form {
    margin-top: 20px;

    .trezo-form-group {
      margin-bottom: 15px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .seller-card {
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
    .info {
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
    form {
      margin-top: 17px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .seller-card {
    .v-card-header {
      display: flex;
      margin-top: 0;

      .search-box {
        width: 200px;
      }
    }
    ul {
      margin-top: 20px;
    }
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .seller-card {
    .info {
      .title {
        font-size: 15px;
      }
    }
  }
}
</style>
