<template>
  <v-card
    class="cryptocurrency-watchlist-card mb-25 border-radius d-block bg-white border-0 shadow-none p-0"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Cryptocurrency Watchlist</h5>
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

    <div class="cryptocurrency-watchlist-card-content">
      <div class="cryptocurrency-watchlist-slides">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :centeredSlides="false"
          :preventClicks="true"
          :loop="false"
          :dir="isRtl ? 'rtl' : 'ltr'"
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
        >
          <SwiperSlide>
            <div class="box">
              <div class="coin d-flex align-items-center">
                <v-img
                  src="@/assets/images/watchlist/bitcoin.svg"
                  alt="bitcoin"
                />
                <div>
                  <span class="d-block text-black text-uppercase fw-medium">
                    Bitcoin <span class="text-body fw-normal">(BTC)</span>
                  </span>
                  <h4 class="mb-0 fw-semibold">
                    $27,500
                    <span class="fw-medium position-relative">
                      <i class="material-symbols-outlined"> trending_up </i>
                      +2.3%
                    </span>
                  </h4>
                </div>
              </div>
              <div class="chart">
                <BitcoinChart />
              </div>
              <ul
                class="list mt-0 mb-0 p-0 list-unstyled d-flex justify-content-between"
              >
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium"> Market Cap: </span>
                  $520B
                </li>
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium">
                    Volume (24h):
                  </span>
                  $35B
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="box bg-faf5ff">
              <div class="coin d-flex align-items-center">
                <v-img
                  src="@/assets/images/watchlist/ethereum.svg"
                  alt="ethereum"
                />
                <div>
                  <span class="d-block text-black text-uppercase fw-medium">
                    Ethereum <span class="text-body fw-normal">(ETH)</span>
                  </span>
                  <h4 class="mb-0 fw-semibold">
                    $1,750
                    <span class="fw-medium position-relative">
                      <i class="material-symbols-outlined"> trending_down </i>
                      -1.2%
                    </span>
                  </h4>
                </div>
              </div>
              <div class="chart">
                <EthereumChart />
              </div>
              <ul
                class="list mt-0 mb-0 p-0 list-unstyled d-flex justify-content-between"
              >
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium"> Market Cap: </span>
                  $210B
                </li>
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium">
                    Volume (24h):
                  </span>
                  $20B
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="box bg-fff5ed">
              <div class="coin d-flex align-items-center">
                <v-img
                  src="@/assets/images/watchlist/solana.svg"
                  alt="solana"
                />
                <div>
                  <span class="d-block text-black text-uppercase fw-medium">
                    Solana <span class="text-body fw-normal">(SOL)</span>
                  </span>
                  <h4 class="mb-0 fw-semibold">
                    $35
                    <span class="fw-medium position-relative">
                      <i class="material-symbols-outlined"> trending_up </i>
                      +5.8%
                    </span>
                  </h4>
                </div>
              </div>
              <div class="chart">
                <SolanaChart />
              </div>
              <ul
                class="list mt-0 mb-0 p-0 list-unstyled d-flex justify-content-between"
              >
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium"> Market Cap: </span>
                  $12B
                </li>
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium">
                    Volume (24h):
                  </span>
                  $3.5B
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="box bg-eeffe5">
              <div class="coin d-flex align-items-center">
                <v-img
                  src="@/assets/images/watchlist/binance.svg"
                  alt="binance"
                />
                <div>
                  <span class="d-block text-black text-uppercase fw-medium">
                    Binance <span class="text-body fw-normal">(BNB)</span>
                  </span>
                  <h4 class="mb-0 fw-semibold">
                    $250
                    <span class="fw-medium position-relative">
                      <i class="material-symbols-outlined"> trending_up </i>
                      +1.5%
                    </span>
                  </h4>
                </div>
              </div>
              <div class="chart">
                <BinanceChart />
              </div>
              <ul
                class="list mt-0 mb-0 p-0 list-unstyled d-flex justify-content-between"
              >
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium"> Market Cap: </span>
                  $40B
                </li>
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium">
                    Volume (24h):
                  </span>
                  $1.8B
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="box">
              <div class="coin d-flex align-items-center">
                <v-img
                  src="@/assets/images/watchlist/cardano.svg"
                  alt="cardano"
                />
                <div>
                  <span class="d-block text-black text-uppercase fw-medium">
                    Cardano <span class="text-body fw-normal">(ADA)</span>
                  </span>
                  <h4 class="mb-0 fw-semibold">
                    $0.38
                    <span class="fw-medium position-relative">
                      <i class="material-symbols-outlined"> trending_down </i>
                      -2.21%
                    </span>
                  </h4>
                </div>
              </div>
              <div class="chart">
                <CardanoChart />
              </div>
              <ul
                class="list mt-0 mb-0 p-0 list-unstyled d-flex justify-content-between"
              >
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium"> Market Cap: </span>
                  $25B
                </li>
                <li class="fw-semibold text-black">
                  <span class="d-block text-body fw-medium">
                    Volume (24h):
                  </span>
                  $1.3B
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import BitcoinChart from "./BitcoinChart.vue";
import CardanoChart from "./CardanoChart.vue";
import EthereumChart from "./EthereumChart.vue";
import SolanaChart from "./SolanaChart.vue";
import BinanceChart from "./BinanceChart.vue";

export default defineComponent({
  name: "CryptocurrencyWatchlist",
  components: {
    Swiper,
    SwiperSlide,

    BitcoinChart,
    CardanoChart,
    EthereumChart,
    SolanaChart,
    BinanceChart,
  },
  setup() {
    const isRtl = ref(false);

    const checkRtl = () => {
      isRtl.value = document.body.classList.contains("rtl-enabled");
    };

    onMounted(() => {
      checkRtl();
      window.addEventListener("rtl-enabled", checkRtl);
    });

    onUnmounted(() => {
      window.removeEventListener("rtl-enabled", checkRtl);
    });

    return { isRtl, modules: [Navigation] };
  },
});
</script>

<style lang="scss" scoped>
.cryptocurrency-watchlist-card {
  .cryptocurrency-watchlist-card-content {
    .cryptocurrency-watchlist-slides {
      .box {
        padding: 23px;
        border-radius: 5px;
        background: #ecf0ff;

        .coin {
          img {
            width: 48px;
          }
          div {
            margin-left: 10px;

            h4 {
              margin-top: 6px;
              font-size: 20px;

              span {
                top: -1px;
                font-size: 14px;
                color: #1e8308;
                margin-left: 2px;
                padding-left: 24px;

                i {
                  left: 0;
                  top: 50%;
                  font-size: 20px;
                  position: absolute;
                  transform: translateY(-50%);
                }
                &.down {
                  color: #c52b09;
                }
              }
            }
          }
        }
        .chart {
          margin: {
            top: -15px;
            left: -11px;
            bottom: -18px;
          }
        }
        .list {
          margin-right: 8px;

          li {
            font-size: 12px;

            span {
              margin-bottom: 5px;
            }
          }
        }
        &.bg-faf5ff {
          background: #faf5ff;
        }
        &.bg-fff5ed {
          background: #fff5ed;
        }
        &.bg-eeffe5 {
          background: #eeffe5;
        }
      }
      .owl-theme {
        .owl-nav {
          position: absolute;
          margin-top: 0;
          right: -2px;
          top: -51px;

          [class*="owl-"] {
            border: 1px solid var(--borderColor);
            background-color: transparent;
            color: var(--bodyColor);
            line-height: 29px;
            font-size: 22px;
            margin: 0 2px;
            height: 31px;
            width: 31px;
            padding: 0;

            &:hover {
              background-color: var(--primaryColor);
              border-color: var(--primaryColor);
              color: var(--whiteColor);
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .cryptocurrency-watchlist-card {
    .cryptocurrency-watchlist-card-content {
      .cryptocurrency-watchlist-slides {
        .box {
          padding: 17px;

          .coin {
            div {
              h4 {
                margin-top: 5px;
                font-size: 18px;

                span {
                  font-size: 13px;
                }
              }
            }
          }
          .chart {
            margin: {
              top: -15px;
              left: -10px;
              bottom: -20px;
            }
          }
          .list {
            margin-right: 0;
          }
        }
        .owl-theme {
          .owl-nav {
            position: relative;
            margin-top: 17px;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cryptocurrency-watchlist-card {
    .cryptocurrency-watchlist-card-content {
      .cryptocurrency-watchlist-slides {
        .box {
          padding: 20px;
        }
        .owl-theme {
          .owl-nav {
            top: -46px;
          }
        }
      }
    }
  }
}
</style>
