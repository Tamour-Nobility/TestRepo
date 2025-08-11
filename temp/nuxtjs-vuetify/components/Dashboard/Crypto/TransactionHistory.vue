<template>
  <v-card
    class="transaction-history-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Transaction History</h5>
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
              <th>Coin</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Type</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 7)" :key="item.id">
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.coin.image" alt="coin-image" />
                  </div>
                  <span class="d-block fw-medium">
                    {{ item.coin.name }}
                    <span class="text-body fw-normal">
                      ({{ item.coin.abbreviation }})
                    </span>
                  </span>
                </div>
              </td>
              <td class="fw-medium">
                {{ item.date }}
              </td>
              <td class="fw-medium">
                {{ item.amount }}
              </td>
              <td class="fw-medium">
                {{ item.price }}
              </td>
              <td>
                <span class="trezo-status-badge shipped" v-if="item.type.buy">
                  Buy
                </span>
                <span class="trezo-status-badge rejected" v-if="item.type.sell">
                  Sell
                </span>
              </td>
              <td class="fw-medium">
                {{ item.total_value }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <CommonPaginationTwo items="7" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/cryptocurrencies/bitcoin.svg";
import image2 from "~/assets/images/cryptocurrencies/ethereum.svg";
import image3 from "~/assets/images/cryptocurrencies/binance.svg";
import image4 from "~/assets/images/cryptocurrencies/tether.svg";
import image5 from "~/assets/images/cryptocurrencies/xrp.svg";
import image6 from "~/assets/images/cryptocurrencies/solana.svg";
import image7 from "~/assets/images/cryptocurrencies/usdc.png";
import image8 from "~/assets/images/cryptocurrencies/dogecoin.png";
import image9 from "~/assets/images/cryptocurrencies/toncoin.png";
import image10 from "~/assets/images/cryptocurrencies/cardano.png";
import image11 from "~/assets/images/cryptocurrencies/tron.png";
import image12 from "~/assets/images/cryptocurrencies/avalanche.png";
import image13 from "~/assets/images/cryptocurrencies/shiba-inu.png";
import image14 from "~/assets/images/cryptocurrencies/chainlink.png";

export default defineComponent({
  name: "TransactionHistory",
  data() {
    return {
      items: [
        {
          id: 1,
          coin: {
            image: image1,
            name: "Bitcoin",
            abbreviation: "BTC",
          },
          date: "2024-09-10",
          amount: "0.50 BTC",
          price: "$27,500",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$13,500",
        },
        {
          id: 2,
          coin: {
            image: image2,
            name: "Ethereum",
            abbreviation: "ETH",
          },
          date: "2024-09-08",
          amount: "5.00 ETH",
          price: "$1,750",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$8,750",
        },
        {
          id: 3,
          coin: {
            image: image3,
            name: "Binance",
            abbreviation: "BNB",
          },
          date: "2024-09-05",
          amount: "100 SOL",
          price: "$250",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$3,500",
        },
        {
          id: 4,
          coin: {
            image: image4,
            name: "Tether",
            abbreviation: "USDT",
          },
          date: "2024-08-30",
          amount: "10 BNB",
          price: "$1.00",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$2,500",
        },
        {
          id: 5,
          coin: {
            image: image5,
            name: "XRP",
            abbreviation: "XRP",
          },
          date: "2024-08-25",
          amount: "1,000 ADA",
          price: "$0.50",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$250",
        },
        {
          id: 6,
          coin: {
            image: image6,
            name: "Solana",
            abbreviation: "SOL",
          },
          date: "2024-08-20",
          amount: "0.40 BTC",
          price: "$35",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$11,800",
        },
        {
          id: 7,
          coin: {
            image: image7,
            name: "USDC",
            abbreviation: "USDC",
          },
          date: "2024-08-15",
          amount: "3.00 USDC",
          price: "$0.9999",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$5,400",
        },
        {
          id: 8,
          coin: {
            image: image8,
            name: "Dogecoin",
            abbreviation: "DOGE",
          },
          date: "2024-08-14",
          amount: "3.00 DOGE",
          price: "$0,1221",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$254",
        },
        {
          id: 9,
          coin: {
            image: image9,
            name: "Toncoin",
            abbreviation: "TON",
          },
          date: "2024-08-10",
          amount: "3.00 TON",
          price: "$5.82",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$1,253",
        },
        {
          id: 10,
          coin: {
            image: image10,
            name: "Cardano",
            abbreviation: "ADA",
          },
          date: "2024-08-08",
          amount: "3.00 ADA",
          price: "$0,3884",
          type: {
            buy: true,
            sell: false,
          },
          total_value: "$4,432",
        },
        {
          id: 11,
          coin: {
            image: image11,
            name: "TRON",
            abbreviation: "TRX",
          },
          date: "2024-08-07",
          amount: "10.00 TRX",
          price: "$0.1554",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$5,435",
        },
        {
          id: 12,
          coin: {
            image: image12,
            name: "Avalanche",
            abbreviation: "AVAX",
          },
          date: "2024-08-02",
          amount: "43.22 AVAX",
          price: "$28.77",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$134",
        },
        {
          id: 13,
          coin: {
            image: image13,
            name: "Shiba Inu",
            abbreviation: "SHIB",
          },
          date: "2024-07-25",
          amount: "43.23 SHIB",
          price: "$0.1554",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$4,342",
        },
        {
          id: 14,
          coin: {
            image: image14,
            name: "Chainlink",
            abbreviation: "LINK",
          },
          date: "2024-08-01",
          amount: "54.23 LINK",
          price: "$28.77",
          type: {
            buy: false,
            sell: true,
          },
          total_value: "$5,302",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.transaction-history-card {
  .trezo-table-content {
    .trezo-table {
      table {
        thead {
          tr {
            th {
              font-size: 12px;
              text-align: end !important;
              color: var(--bodyColor);
              background-color: #ffffff !important;
              padding: {
                top: 0 !important;
                bottom: 7px !important;
              }
              &:first-child {
                text-align: start !important;
                padding-left: 0 !important;
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
                text-align: start;
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
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
  .transaction-history-card {
    .v-card-header {
      display: block;
      h5 {
        margin-bottom: 5px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .transaction-history-card {
    .v-card-header {
      display: flex;
      h5 {
        margin-bottom: 0;
      }
    }
  }
}
</style>
