<template>
  <v-card
    class="product-details-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="product-details-card-content">
      <v-row>
        <v-col cols="12" lg="6">
          <div class="product-details-image">
            <CCarousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              :transition="{ name: 'carousel-slide', mode: 'out-in' }"
              v-model:current-slide="currentSlide"
              class="product-gallery__featured"
            >
              <CSlide v-for="(image, index) in productImages" :key="index">
                <v-img
                  :src="image.url"
                  :alt="'Product Image ' + (index + 1)"
                  class="border-radius"
                />
              </CSlide>
            </CCarousel>
            <CCarousel
              id="thumbnails"
              :items-to-show="3"
              :wrap-around="true"
              :transition="{ name: 'carousel-thumb-slide', mode: 'out-in' }"
              :gutter="25"
              v-model:current-slide="currentSlide"
              ref="carousel"
              class="product-gallery__carousel"
            >
              <CSlide v-for="(image, index) in productImages" :key="index">
                <div
                  @click="slideTo(index)"
                  class="border-radius cursor-pointer"
                >
                  <v-img
                    :src="image.url"
                    :alt="'Product Thumbnail ' + (index + 1)"
                    class="border-radius"
                  />
                </div>
              </CSlide>
            </CCarousel>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="product-details-content">
            <span class="stock d-inline-block position-relative">
              <i class="material-symbols-outlined"> check </i>
              in stock
            </span>
            <h6 class="fw-medium">
              Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max
              Chip with 12-Core CPU
            </h6>
            <div class="ratings lh-1">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <span> (76 reviews) </span>
            </div>
            <div class="price d-flex align-items-center">
              <span class="text-black fw-bold"> $3,499 </span>
              <span> $3,799 </span>
            </div>
            <div class="types">
              <div class="style d-flex align-items-center">
                <span>Style:</span>
                <span class="fw-medium text-black">
                  {{ typeText }}
                </span>
              </div>
              <div class="buttons">
                <button
                  type="button"
                  @click="setTypeTextToFirst"
                  :class="{ active: typeActiveButton === 'first' }"
                >
                  Apple M1 Max Chip
                </button>
                <button
                  type="button"
                  @click="setTypeTextToSecond"
                  :class="{ active: typeActiveButton === 'second' }"
                >
                  Apple M1 Pro Chip
                </button>
              </div>
            </div>
            <div class="capacity">
              <div class="storage d-flex align-items-center">
                <span>Capacity:</span>
                <span class="fw-medium text-black">
                  {{ capacityText }}
                </span>
              </div>
              <div class="buttons">
                <button
                  type="button"
                  @click="setCapacityTextToFirst"
                  :class="{ active: capacityActiveButton === 'first' }"
                >
                  512 GB
                </button>
                <button
                  type="button"
                  @click="setCapacityTextToSecond"
                  :class="{ active: capacityActiveButton === 'second' }"
                >
                  1 TB
                </button>
              </div>
            </div>
            <div class="colors">
              <div class="color d-flex align-items-center">
                <span>Color:</span>
                <span class="fw-medium text-black">
                  {{ colorText }}
                </span>
              </div>
              <div class="buttons">
                <button
                  type="button"
                  @click="setColorTextToFirst"
                  :class="{ active: colorActiveButton === 'first' }"
                ></button>
                <button
                  type="button"
                  @click="setColorTextToSecond"
                  :class="{ active: colorActiveButton === 'second' }"
                ></button>
              </div>
            </div>
            <div class="add-to-cart d-flex align-items-center">
              <PagesEcommerceProductsDetailsQuantityCounter value="1" />
              <button type="button">
                <i class="ri-shopping-cart-line"></i>
                Add To Cart
              </button>
            </div>
            <button type="button" class="add-to-wishlist">
              <i class="ri-heart-line"></i>
              <span class="position-relative">Add to wishlist</span>
            </button>
            <div class="total-views">
              <i class="material-symbols-outlined"> visibility </i>
              565 people are viewing the products
            </div>
            <ul class="features-list pl-0 list-unstyled">
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                Free delivery today
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                100% money back Guarantee
              </li>
              <li class="position-relative">
                <i class="material-symbols-outlined"> check </i>
                7 days product return policy
              </li>
            </ul>
            <ul class="info mt-0 list-unstyled pl-0">
              <li>SKU: <span class="fw-medium text-black">SMTGS6T45</span></li>
              <li>
                Category: <span class="fw-medium text-black">computer</span>
              </li>
              <li>
                Tags:
                <span class="fw-medium text-black">laptop, macbook, PC</span>
              </li>
            </ul>
            <div class="share-to-socials d-flex align-items-center">
              <span class="title position-relative"> Share: </span>
              <a href="#" target="_blank" class="share-btn">
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="#" target="_blank" class="share-btn">
                <i class="ri-twitter-x-fill"></i>
              </a>
              <a href="#" target="_blank" class="share-btn">
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="#" target="_blank" class="share-btn">
                <i class="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
  <PagesEcommerceProductsDetailsTabs />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/products/product-details1.jpg";
import image2 from "~/assets/images/products/product-details2.jpg";
import image3 from "~/assets/images/products/product-details3.jpg";

export default defineComponent({
  name: "ProductsDetails",
  setup() {
    const currentSlide = ref(0);
    const productImages = ref([
      { url: image1 },
      { url: image2 },
      { url: image3 },
    ]);

    const typeText = ref("Apple M1 Max Chip");
    const typeActiveButton = ref("first");

    const setTypeTextToFirst = () => {
      typeText.value = "Apple M1 Max Chip";
      typeActiveButton.value = "first";
    };

    const setTypeTextToSecond = () => {
      typeText.value = "Apple M1 Pro Chip";
      typeActiveButton.value = "second";
    };

    const capacityText = ref("512 GB");
    const capacityActiveButton = ref("first");

    const setCapacityTextToFirst = () => {
      capacityText.value = "512 GB";
      capacityActiveButton.value = "first";
    };

    const setCapacityTextToSecond = () => {
      capacityText.value = "1 TB";
      capacityActiveButton.value = "second";
    };

    const colorText = ref("Silver");
    const colorActiveButton = ref("first");

    const setColorTextToFirst = () => {
      colorText.value = "Silver";
      colorActiveButton.value = "first";
    };

    const setColorTextToSecond = () => {
      colorText.value = "Gray";
      colorActiveButton.value = "second";
    };

    const slideTo = (index: number) => {
      currentSlide.value = index;
    };

    return {
      currentSlide,
      productImages,
      typeText,
      typeActiveButton,
      setTypeTextToFirst,
      setTypeTextToSecond,
      capacityText,
      capacityActiveButton,
      setCapacityTextToFirst,
      setCapacityTextToSecond,
      colorText,
      colorActiveButton,
      setColorTextToFirst,
      setColorTextToSecond,
      slideTo,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-details-card {
  .product-details-card-content {
    max-width: 1070px;
    padding: 15px 15px 75px !important;

    .product-details-image {
      margin-right: 29.5px;

      .carousel {
        &.product-gallery__featured {
          margin-bottom: 25px;
        }
        &.product-gallery__carousel {
          .carousel__slide {
            &.carousel__slide--visible {
              &.carousel__slide--active {
                margin: 0 15px;
              }
            }
          }
        }
      }
    }
    .product-details-content {
      .stock {
        font-size: 12px;
        color: #1e8308;
        border-radius: 6px;
        margin-bottom: 14px;
        padding: 6px 16px 6px 37px;
        background-color: #eeffe5;

        i {
          top: 50%;
          left: 12px;
          font-size: 19px;
          margin-top: 0.2px;
          position: absolute;
          color: var(--successColor);
          transform: translateY(-50%);
        }
      }
      h6 {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 16px;
      }
      .ratings {
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 25px;
        margin-bottom: 23px;

        i {
          color: var(--warningColor);
          font-size: 16px;
        }
        span {
          font-size: 12px;
          margin-left: 12px;
        }
      }
      .price {
        span {
          font-size: 18px;

          &:nth-child(2) {
            font-size: 16px;
            margin-left: 7px;
          }
        }
      }
      .types {
        margin-top: 25px;

        .style {
          span {
            &:nth-child(2) {
              margin-left: 3px;
            }
          }
        }
        .buttons {
          margin-top: 8px;

          button {
            height: auto;
            font-size: 12px;
            min-width: auto;
            padding: 6px 15px;
            border-radius: 4px;
            margin-right: 10px;
            display: inline-block;
            color: var(--bodyColor);
            border: 1px solid var(--borderColor);

            &.active {
              font-weight: 600;
              border-color: #fe7a36;
              color: var(--blackColor);
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .capacity {
        margin-top: 17px;

        .storage {
          span {
            &:nth-child(2) {
              margin-left: 3px;
            }
          }
        }
        .buttons {
          margin-top: 8px;

          button {
            height: auto;
            font-size: 12px;
            min-width: auto;
            padding: 6px 15px;
            border-radius: 4px;
            margin-right: 10px;
            display: inline-block;
            color: var(--bodyColor);
            border: 1px solid var(--borderColor);

            &.active {
              font-weight: 600;
              border-color: #fe7a36;
              color: var(--blackColor);
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .colors {
        margin-top: 17px;

        .color {
          span {
            &:nth-child(2) {
              margin-left: 3px;
            }
          }
        }
        .buttons {
          margin-top: 8px;

          button {
            padding: 0;
            width: 29px;
            height: 29px;
            min-width: auto;
            margin-right: 10px;
            border-radius: 50%;
            border: 1px solid var(--borderColor);
            background-color: var(--borderColor);

            &:nth-child(2) {
              border-color: #d5d9e2;
              background-color: #d5d9e2;
            }
            &.active {
              border-color: #fe7a36;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .add-to-cart {
        margin-top: 30px;

        button {
          height: auto;
          min-width: auto;
          font-weight: 500;
          margin-left: 8px;
          border-radius: 7px;
          padding: 8.5px 21px;
          display: inline-block;
          color: var(--whiteColor);
          background-color: var(--primaryColor);
          padding-left: 24px;
          i {
            font-size: 17px;
          }
        }
      }
      .add-to-wishlist {
        color: var(--blackColor);
        display: inline-block;
        margin-top: 20px;
        font-weight: 500;
        min-width: auto;
        height: auto;
        padding: 0;
        align-items: center;

        i {
          width: 31px;
          height: 31px;
          font-size: 18px;
          color: #64748b;
          line-height: 33px;
          margin-right: 10px;
          border-radius: 50%;
          display: inline-block;
          background: var(--borderColor);
        }
        span {
          top: -2px;
        }
      }
      .total-views {
        display: flex;
        margin-top: 11px;
        align-items: center;

        i {
          width: 31px;
          height: 31px;
          font-size: 18px;
          color: #64748b;
          line-height: 33px;
          margin-right: 10px;
          border-radius: 50%;
          text-align: center;
          display: inline-block;
          background: var(--borderColor);
        }
      }
      .features-list {
        margin: {
          top: 19px;
          bottom: 21px;
        }
        border: {
          top: 1px solid var(--borderColor);
          bottom: 1px solid var(--borderColor);
        }
        padding: {
          top: 17px;
          bottom: 18px;
        }
        li {
          padding-left: 27px;
          margin-bottom: 11px;
          color: var(--blackColor);

          i {
            left: 0;
            top: 50%;
            font-size: 20px;
            color: #1e8308;
            position: absolute;
            transform: translateY(-50%);
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .info {
        margin-bottom: 22px;

        li {
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .share-to-socials {
        .title {
          top: -1px;
          font-size: 16px;
          margin-right: 5px;
        }
        .share-btn {
          padding: 0;
          width: 23.844px;
          font-size: 13px;
          min-width: auto;
          height: 23.844px;
          margin-left: 4px;
          text-align: center;
          border-radius: 50%;
          line-height: 23.844px;
          display: inline-block;
          color: var(--blackColor);
          background-color: var(--borderColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .product-details-card {
    .product-details-card-content {
      max-width: 100%;
      padding: 0 !important;

      .product-details-image {
        margin-right: 0;

        .product-gallery__featured {
          margin-bottom: 17px;
        }
        .product-gallery__carousel {
          .owl-item {
            margin-right: 17px !important;
          }
        }
      }
      .product-details-content {
        margin-top: 17px;

        .stock {
          margin-bottom: 10px;
        }
        h6 {
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        .ratings {
          padding-bottom: 17px;
          margin-bottom: 17px;

          i {
            font-size: 14px;
          }
          span {
            margin-left: 5px;
          }
        }
        .price {
          span {
            font-size: 16px;

            &:nth-child(2) {
              font-size: 14px;
            }
          }
        }
        .types {
          margin-top: 17px;

          .buttons {
            button {
              padding: 6px 10px;
              margin-right: 5px;
            }
          }
        }
        .capacity {
          margin-top: 15px;

          .buttons {
            button {
              padding: 6px 10px;
              margin-right: 5px;
            }
          }
        }
        .colors {
          margin-top: 15px;

          .buttons {
            button {
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }
          }
        }
        .add-to-cart {
          margin-top: 17px;
        }
        .add-to-wishlist {
          margin-top: 17px;
          span {
            top: 0;
          }
        }
        .features-list {
          margin: {
            top: 17px;
            bottom: 17px;
          }
          padding: {
            top: 17px;
            bottom: 17px;
          }
          li {
            padding-left: 23px;
            margin-bottom: 10px;

            i {
              font-size: 18px;
            }
          }
        }
        .info {
          margin-bottom: 17px;
        }
        .share-to-socials {
          .title {
            font-size: 14px;
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
  .product-details-card {
    .product-details-card-content {
      max-width: 100%;
      padding: 0 !important;

      .product-details-image {
        margin: {
          right: 0;
          bottom: 25px;
        }
      }
      .product-details-content {
        .stock {
          margin-bottom: 13px;
        }
        h6 {
          font-size: 17px;
          margin-bottom: 11px;
        }
        .ratings {
          padding-bottom: 20px;
          margin-bottom: 20px;

          i {
            font-size: 15px;
          }
          span {
            margin-left: 5px;
          }
        }
        .price {
          span {
            font-size: 17px;

            &:nth-child(2) {
              font-size: 15px;
            }
          }
        }
        .types {
          margin-top: 20px;
        }
        .add-to-cart {
          margin-top: 20px;
        }
        .features-list {
          margin: {
            top: 20px;
            bottom: 20px;
          }
          padding: {
            top: 17px;
            bottom: 17px;
          }
          li {
            padding-left: 25px;
            margin-bottom: 10px;
          }
        }
        .info {
          margin-bottom: 20px;
        }
        .share-to-socials {
          .title {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product-details-card {
    .product-details-card-content {
      max-width: 100%;
      padding: 5px !important;

      .product-details-image {
        margin-right: 5px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .product-details-card {
    .product-details-card-content {
      padding: 15px !important;

      .product-details-image {
        margin-right: 10px;
      }
    }
  }
}
</style>
