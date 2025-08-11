<template>
  <v-card
    class="crypto-rankings-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Crypto Rankings</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Oct 01 - Oct 31, 2024
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Sep 01 - Sep 30, 2024
          </button>
          <button type="button" class="bg-transparent border-none">
            Aug 01 - Aug 31, 2024
          </button>
          <button type="button" class="bg-transparent border-none">
            Jul 01 - Jul 31, 2024
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Cryptocurrency</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>24h Change %</th>
              <th>7d Change %</th>
              <th>Value 24h</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 6)" :key="item.rank">
              <td class="text-body">
                {{ item.rank }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      :src="item.cryptocurrency.image"
                      alt="cryptocurrency-image"
                    />
                  </div>
                  <span class="d-block fw-medium">
                    {{ item.cryptocurrency.name }}
                    <span class="text-body fw-normal">
                      ({{ item.cryptocurrency.abbreviation }})
                    </span>
                  </span>
                </div>
              </td>
              <td class="fw-medium">
                {{ item.market_cap }}
              </td>
              <td class="fw-medium">
                {{ item.price }}
              </td>
              <td class="fw-medium">
                <span class="change_24h up" v-if="item.change_24h.up">
                  {{ item.change_24h.number }}
                </span>
                <span class="change_24h down" v-if="item.change_24h.down">
                  {{ item.change_24h.number }}
                </span>
              </td>
              <td class="fw-medium">
                <span class="change_7d up" v-if="item.change_7d.up">
                  {{ item.change_7d.number }}
                </span>
                <span class="change_7d down" v-if="item.change_7d.down">
                  {{ item.change_7d.number }}
                </span>
              </td>
              <td class="fw-medium">
                {{ item.value_24h }}
              </td>
              <td class="fw-medium">
                {{ item.circulating_supply }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <PaginationTwo items="6" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "CryptoRankings",
  components: {
    PaginationTwo,
  },
  data() {
    return {
      items: [
        {
          rank: 1,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/bitcoin.svg"),
            name: "Bitcoin",
            abbreviation: "BTC",
          },
          market_cap: "$520B",
          price: "$27,500",
          change_24h: {
            number: "+2.3%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+10.2%",
            up: true,
            down: false,
          },
          value_24h: "$35B",
          circulating_supply: "19M BTC",
        },
        {
          rank: 2,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/ethereum.svg"),
            name: "Ethereum",
            abbreviation: "ETH",
          },
          market_cap: "$210B",
          price: "$1,750",
          change_24h: {
            number: "-1.2%",
            up: false,
            down: true,
          },
          change_7d: {
            number: "+6.3%",
            up: true,
            down: false,
          },
          value_24h: "$20B",
          circulating_supply: "120M ETH",
        },
        {
          rank: 3,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/binance.svg"),
            name: "Binance",
            abbreviation: "BNB",
          },
          market_cap: "$40B",
          price: "$250",
          change_24h: {
            number: "+1.5%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+7.8%",
            up: true,
            down: false,
          },
          value_24h: "$1.8B",
          circulating_supply: "160M BNB",
        },
        {
          rank: 4,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/tether.svg"),
            name: "Tether",
            abbreviation: "USDT",
          },
          market_cap: "$83B",
          price: "$1.00",
          change_24h: {
            number: "+0.01%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+0.02%",
            up: true,
            down: false,
          },
          value_24h: "$45B",
          circulating_supply: "83B USDT",
        },
        {
          rank: 5,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/xrp.svg"),
            name: "XRP",
            abbreviation: "XRP",
          },
          market_cap: "$25B",
          price: "$0.50",
          change_24h: {
            number: "+0.9%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "-8.6%",
            up: false,
            down: true,
          },
          value_24h: "$2.2B",
          circulating_supply: "50B XRP",
        },
        {
          rank: 6,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/solana.svg"),
            name: "Solana",
            abbreviation: "SOL",
          },
          market_cap: "$12B",
          price: "$35",
          change_24h: {
            number: "+5.8%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+15.5%",
            up: true,
            down: false,
          },
          value_24h: "$3.5B",
          circulating_supply: "400M SOL",
        },
        {
          rank: 7,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/usdc.png"),
            name: "USDC",
            abbreviation: "USDC",
          },
          market_cap: "$36B",
          price: "$0.9999",
          change_24h: {
            number: "+0.01%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+0.02%",
            up: true,
            down: false,
          },
          value_24h: "$4B",
          circulating_supply: "36 USDC",
        },
        {
          rank: 8,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/dogecoin.png"),
            name: "Dogecoin",
            abbreviation: "DOGE",
          },
          market_cap: "$17B",
          price: "$0,1221",
          change_24h: {
            number: "-0.56%",
            up: false,
            down: true,
          },
          change_7d: {
            number: "-3.57%",
            up: false,
            down: true,
          },
          value_24h: "$85B",
          circulating_supply: "146M DOGE",
        },
        {
          rank: 9,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/toncoin.png"),
            name: "Toncoin",
            abbreviation: "TON",
          },
          market_cap: "$14B",
          price: "$5.82",
          change_24h: {
            number: "+0.13%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+0.88%",
            up: true,
            down: false,
          },
          value_24h: "$21B",
          circulating_supply: "25M TON",
        },
        {
          rank: 10,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/cardano.png"),
            name: "Cardano",
            abbreviation: "ADA",
          },
          market_cap: "$13B",
          price: "$0,3884",
          change_24h: {
            number: "-0.59%",
            up: false,
            down: true,
          },
          change_7d: {
            number: "-1.80%",
            up: false,
            down: true,
          },
          value_24h: "$32B",
          circulating_supply: "86M ADA",
        },
        {
          rank: 11,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/tron.png"),
            name: "TRON",
            abbreviation: "TRX",
          },
          market_cap: "$130B",
          price: "$0.1554",
          change_24h: {
            number: "+0.17%",
            up: true,
            down: false,
          },
          change_7d: {
            number: "+0.02%",
            up: true,
            down: false,
          },
          value_24h: "$33B",
          circulating_supply: "86M TRX",
        },
        {
          rank: 12,
          cryptocurrency: {
            image: require("@/assets/images/cryptocurrencies/avalanche.png"),
            name: "Avalanche",
            abbreviation: "AVAX",
          },
          market_cap: "$11B",
          price: "$28.77",
          change_24h: {
            number: "-0.08%",
            up: false,
            down: true,
          },
          change_7d: {
            number: "+0.51%",
            up: true,
            down: false,
          },
          value_24h: "$32B",
          circulating_supply: "40M AVAX",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.crypto-rankings-card {
  .trezo-table-content {
    .trezo-table {
      background: transparent !important;
      table {
        thead {
          tr {
            background-color: transparent !important;
            th {
              font-size: 12px;
              text-align: end !important;
              color: var(--bodyColor);
              background-color: transparent !important;
              padding: {
                top: 0 !important;
                bottom: 7px !important;
              }
              &:first-child {
                text-align: start !important;
                padding: {
                  left: 0 !important;
                  right: 0 !important;
                }
              }
              &:nth-child(2) {
                padding-left: 10px !important;
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              text-align: end !important;
              border: {
                left-width: 0 !important;
                right-width: 0 !important;
              }
              padding: {
                top: 10px !important;
                bottom: 10px !important;
              }
              .customer-info {
                .img {
                  width: 22px;
                  border-radius: 0;

                  img {
                    border-radius: 0;
                    margin-bottom: -3px;
                  }
                }
                span {
                  margin-left: 8px;

                  span {
                    font-size: 12px;
                    margin-left: 0;
                  }
                }
              }
              &:first-child {
                text-align: start !important;
                padding: {
                  left: 0 !important;
                  right: 0 !important;
                }
              }
              &:nth-child(2) {
                padding-left: 10px !important;
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
      }
    }
  }
  &.component-rtl-enabled {
    .mat-mdc-card-content {
      .mat-mdc-table {
        &.mdc-data-table__table {
          .mat-mdc-header-row {
            .mat-mdc-header-cell {
              &:first-child {
                padding: {
                  left: 20px;
                  right: 0;
                }
              }
              &:last-child {
                padding: {
                  right: 20px;
                  left: 0;
                }
              }
            }
          }
          .mdc-data-table__content {
            .mat-mdc-row {
              .mat-mdc-cell {
                .customer-info {
                  span {
                    margin: {
                      left: 0;
                      right: 8px;
                    }
                    span {
                      margin-right: 0;
                    }
                  }
                }
                &:first-child {
                  padding: {
                    left: 20px;
                    right: 0;
                  }
                }
                &:last-child {
                  padding: {
                    right: 20px;
                    left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .crypto-rankings-card {
    .v-card-header {
      display: block;
      h5 {
        margin-bottom: 5px;
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .mat-mdc-table {
          &.mdc-data-table__table {
            .mat-mdc-header-row {
              .mat-mdc-header-cell {
                &:first-child {
                  padding: {
                    left: 17px;
                  }
                }
                &:last-child {
                  padding: {
                    right: 17px;
                  }
                }
              }
            }
            .mdc-data-table__content {
              .mat-mdc-row {
                .mat-mdc-cell {
                  &:first-child {
                    padding: {
                      left: 17px;
                    }
                  }
                  &:last-child {
                    padding: {
                      right: 17px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .crypto-rankings-card {
    .v-card-header {
      display: flex;
      h5 {
        margin-bottom: 0;
      }
    }
    &.component-rtl-enabled {
      .mat-mdc-card-content {
        .mat-mdc-table {
          &.mdc-data-table__table {
            .mat-mdc-header-row {
              .mat-mdc-header-cell {
                &:first-child {
                  padding: {
                    left: 1720pxpx;
                  }
                }
                &:last-child {
                  padding: {
                    right: 20px;
                  }
                }
              }
            }
            .mdc-data-table__content {
              .mat-mdc-row {
                .mat-mdc-cell {
                  &:first-child {
                    padding: {
                      left: 20px;
                    }
                  }
                  &:last-child {
                    padding: {
                      right: 20px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
