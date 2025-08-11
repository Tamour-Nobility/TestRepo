<template>
  <v-card
    class="market-price-statistics-card trezo-card border-radius d-block bg-white shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Market Price Statistics</h5>
      <div class="subtitle">
        <div class="statistics-buttons-list">
          <button type="button">1H</button>
          <button type="button">24H</button>
          <button type="button" class="active">1W</button>
          <button type="button">1M</button>
          <button type="button">1Y</button>
        </div>
        <div class="cryptocurrency-types">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="card-header-menu border-none d-inline-block border-radius align-items-center"
              >
                <v-img
                  src="@/assets/images/cryptocurrencies/big-bitcoin.svg"
                  alt="bitcoin"
                  width="24px"
                />
                Bitcoin
              </button>
            </template>
            <v-list class="menu-content">
              <button
                type="button"
                class="bg-transparent border-none align-items-center"
              >
                <v-img
                  src="@/assets/images/cryptocurrencies/ethereum.svg"
                  alt="ethereum"
                  width="24px"
                />
                Ethereum
                <span class="fw-normal text-body">(ETH)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <v-img
                  src="@/assets/images/cryptocurrencies/bitcoin.svg"
                  alt="bitcoin"
                  width="24px"
                />
                Bitcoin
                <span class="fw-normal text-body">(BTC)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <v-img
                  src="@/assets/images/cryptocurrencies/solana.svg"
                  alt="solana"
                  width="24px"
                />
                Solana
                <span class="fw-normal text-body">(SOL)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <v-img
                  src="@/assets/images/cryptocurrencies/cardano.png"
                  alt="cardano"
                  width="24px"
                />
                Cardano
                <span class="fw-normal text-body">(ADA)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <v-img
                  src="@/assets/images/cryptocurrencies/binance.svg"
                  alt="binance"
                  width="24px"
                />
                Binance
                <span class="fw-normal text-body">(BNB)</span>
              </button>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
    <div class="market-price-statistics-card-content">
      <div class="info d-sm-flex align-items-center justify-content-between">
        <div class="coin d-flex align-items-center">
          <v-img
            src="@/assets/images/cryptocurrencies/big-bitcoin.svg"
            alt="bitcoin"
          />
          <div>
            <span class="d-block text-uppercase fw-medium">
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
        <ul class="list mb-0 mt-0 p-0 list-unstyled">
          <li class="fw-semibold text-black">
            <span class="d-block fw-normal text-body"> Closing Price </span>
            $27,200
          </li>
          <li class="fw-semibold text-black">
            <span class="d-block fw-normal text-body"> 24h Volume </span>
            $35B
          </li>
        </ul>
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius fw-bold"
            >
              <i class="material-symbols-outlined"> more_vert </i>
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              View
            </button>
            <button type="button" class="bg-transparent border-none">
              Block
            </button>
            <button type="button" class="bg-transparent border-none">
              Delete
            </button>
            <button type="button" class="bg-transparent border-none">
              Report
            </button>
          </v-list>
        </v-menu>
      </div>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="candlestick"
          height="319"
          :options="marketPriceStatistics"
          :series="statistics"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketPriceStatisticsChart",
  setup() {
    const isClient = ref(false);
    const statistics = ref([
      {
        name: "Price",
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01],
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25],
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99],
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81],
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96],
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39],
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27],
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55],
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02],
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01],
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06],
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89],
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5],
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86],
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07],
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606],
          },
        ],
      },
    ]);
    const marketPriceStatistics = ref({
      chart: {
        type: "candlestick",
        height: 319,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#EE3E08",
            downward: "#4936F5",
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      statistics,
      marketPriceStatistics,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
.market-price-statistics-card {
  padding-top: 15px !important;

  .v-card-header {
    border-bottom: 1px solid var(--borderColor) !important;
    padding: {
      left: 25px !important;
      right: 25px !important;
      bottom: 15px !important;
    }
    margin: {
      left: -25px !important;
      right: -25px !important;
    }
    .subtitle {
      display: flex;
      align-items: center;

      .statistics-buttons-list {
        margin-right: 25px;

        button {
          border-radius: 0;
          padding: 1px 10px;
          color: var(--bodyColor);
          border: {
            top: 1px solid var(--borderColor);
            bottom: 1px solid var(--borderColor);
            right: 1px solid var(--borderColor);
          }
          &:first-child {
            border-radius: 7px 0 0 7px;
            border-left: 1px solid var(--borderColor);
          }
          &:last-child {
            border-radius: 0 7px 7px 0;
          }
          &.active,
          &:hover {
            background-color: #ecf0ff;
          }
        }
      }
      .cryptocurrency-types {
        button {
          padding: 0 20px 0 0 !important;
          color: var(--blackColor);
          display: flex !important;
          align-items: center !important;
          font-weight: 600;

          .v-img {
            width: 24px;
            margin-right: 6px;
          }
          &::before {
            transform: translateY(-50%);
            position: absolute;
            content: "\ea4e";
            right: -4px;
            top: 50%;
            font: {
              size: 20px;
              family: remixicon;
            }
          }
        }
      }
    }
  }
  .market-price-statistics-card-content {
    .info {
      .coin {
        div {
          margin-left: 10px;

          h4 {
            margin-top: 6px;
            font-size: 20px;

            span {
              font-size: 14px;
              color: #1e8308;
              margin-left: 3px;
              padding-left: 25px;

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
      .list {
        li {
          display: inline-block;
          margin: {
            left: 20px;
            right: 20px;
          }
          span {
            margin-bottom: 5px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .chart {
      margin: {
        top: 15px;
        left: -15px;
        bottom: -15px;
      }
    }
  }
}
.menu-content {
  &.v-list button {
    display: flex;
    align-items: center !important;
    .v-img {
      margin-right: 5px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .market-price-statistics-card {
    .v-card-header {
      padding: {
        left: 17px;
        right: 17px;
      }
      margin: {
        left: -17px;
        right: -17px;
      }
      .mat-mdc-card-header-text {
        display: block;
      }
      .mat-mdc-card-subtitle {
        display: block;
        margin-top: 10px;

        .statistics-buttons-list {
          margin-right: 0;

          .mat-mdc-button {
            padding: 1px 8px;
          }
        }
        .cryptocurrency-types {
          margin-top: 10px;

          button {
            &::before {
              font-size: 18px;
            }
          }
        }
      }
    }
    .market-price-statistics-card-content {
      .info {
        .coin {
          margin-bottom: 12px;

          div {
            margin-left: 10px;

            h4 {
              margin-top: 5px;
              font-size: 18px;

              span {
                font-size: 13px;
              }
            }
          }
        }
        .list {
          li {
            margin: {
              left: 15px;
              right: 15px;
            }
          }
        }
      }
      .chart {
        margin-top: 0;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .market-price-statistics-card {
    .v-card-header {
      padding: {
        left: 20px;
        right: 20px;
      }
      margin: {
        left: -20px;
        right: -20px;
      }
    }
    .market-price-statistics-card-content {
      .info {
        .coin {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .market-price-statistics-card {
    .v-card-header {
      .statistics-buttons-list {
        margin-right: 20px;

        button {
          padding: 1px 8px;
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .market-price-statistics-card {
    .v-card-header {
      .statistics-buttons-list {
        margin-right: 20px;

        button {
          padding: 1px 7px;
        }
      }
    }
  }
}
</style>
