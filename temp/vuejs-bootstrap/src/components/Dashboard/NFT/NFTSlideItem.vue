<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="25"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="false"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :navigation="{
      prevEl: '.prev',
      nextEl: '.next',
    }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 4,
      },
    }"
    :modules="modules"
    class="nft-slide"
  >
    <SwiperSlide v-for="nft in nftItem" :key="nft.id">
      <div class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card">
        <RouterLink
          to="/nft-details"
          class="d-block mb-3 text-decoration-none position-relative"
        >
          <img :src="nft.image" class="rounded-3" alt="nft" />
          <span
            class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
          >
            Place Bid
          </span>
        </RouterLink>

        <div
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <RouterLink
            to="/creator-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <img
                :src="nft.creator.image"
                class="rounded-circle"
                style="width: 27px; height: 27px"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12"> NFT ID: {{ nft.creator.id }} </span>
              <h4 class="fw-semibold fs-14 mb-0">
                {{ nft.creator.name }}
              </h4>
            </div>
          </RouterLink>
          <img
            src="@/assets/images/verify.svg"
            class="cursor"
            alt="verify"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Verified"
          />
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <RouterLink
            to="/nft-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-grow-1">
              <span class="fs-12 d-block mb-1">
                Highest Bid:
                <span class="fw-semibold text-secondary">
                  {{ nft.highestBid }} ETH
                </span>
              </span>
              <h4 class="fw-semibold fs-14 mb-0">{{ nft.bid }} ETH</h4>
            </div>
          </RouterLink>
          <button class="bg-transparent p-0 border-0">
            <i
              class="ri-heart-fill fs-20 position-relative top-2"
              style="color: #ee3e08"
            ></i>
            <span class="text-secondary fs-12 fw-semibold">
              {{ nft.rating }}
              <span class="text-body">/10</span>
            </span>
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <div class="nft-controller">
    <div class="controller-icon prev">
      <i class="ri-arrow-left-line"></i>
    </div>
    <div class="controller-icon next">
      <i class="ri-arrow-right-line"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

export default defineComponent({
  name: "NFTSlideItem",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nftItem = ref([
      {
        id: 1,
        image: require("@/assets/images/nft-1.gif"),
        creator: {
          image: require("@/assets/images/user-76.gif"),
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 2,
        image: require("@/assets/images/nft-2.png"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35247",
          name: "Rotating Panda",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 3,
        image: require("@/assets/images/nft-3.gif"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 4,
        image: require("@/assets/images/nft-4.gif"),
        creator: {
          image: require("@/assets/images/user-78.gif"),
          id: "35248",
          name: "World Savior",
        },
        highestBid: "9.75",
        bid: "10.50",
        rating: "9.7",
      },
      {
        id: 5,
        image: require("@/assets/images/nft-1.gif"),
        creator: {
          image: require("@/assets/images/user-76.gif"),
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 6,
        image: require("@/assets/images/nft-2.png"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35247",
          name: "Rotating Panda",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 7,
        image: require("@/assets/images/nft-3.gif"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 8,
        image: require("@/assets/images/nft-4.gif"),
        creator: {
          image: require("@/assets/images/user-78.gif"),
          id: "35248",
          name: "World Savior",
        },
        highestBid: "9.75",
        bid: "10.50",
        rating: "9.7",
      },
    ]);
    return {
      modules: [Autoplay, Navigation],
      nftItem,
    };
  },
});
</script>
