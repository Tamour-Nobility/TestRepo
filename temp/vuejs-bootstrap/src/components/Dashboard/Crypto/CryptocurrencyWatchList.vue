<template>
  <div>
    <div class="d-flex flex-wrap gap-2 justify-content-between mb-4">
      <div>
        <h3 class="mb-0">Cryptocurrency Watch List</h3>
      </div>

      <div>
        <div class="cryptocurrency-controller d-flex gap-1">
          <div class="controller-icon prev">
            <i class="ri-arrow-left-s-line"></i>
          </div>
          <div class="controller-icon next">
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>

    <Swiper
      :slidesPerView="1"
      :spaceBetween="25"
      :centeredSlides="false"
      :preventClicks="true"
      :loop="true"
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
        el: '.swiper-pagination-top-selling',
        clickable: true,
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
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
      class="cryptocurrency-slide"
    >
      <SwiperSlide>
        <BitcoinChart />
      </SwiperSlide>
      <SwiperSlide>
        <EthereumChart />
      </SwiperSlide>
      <SwiperSlide>
        <SolanaChart />
      </SwiperSlide>
      <SwiperSlide>
        <BinanceChart />
      </SwiperSlide>
      <SwiperSlide>
        <CardanoChart />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import BitcoinChart from "./BitcoinChart.vue";
import EthereumChart from "./EthereumChart.vue";
import SolanaChart from "./SolanaChart.vue";
import BinanceChart from "./BinanceChart.vue";
import CardanoChart from "./CardanoChart.vue";

export default defineComponent({
  name: "CryptocurrencyWatchList",
  components: {
    Swiper,
    SwiperSlide,

    BitcoinChart,
    EthereumChart,
    SolanaChart,
    BinanceChart,
    CardanoChart,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },
});
</script>
