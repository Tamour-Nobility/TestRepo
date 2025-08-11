<template>
  <v-card
    class="portfolio-card trezo-card mb-25 border-radius d-block bg-primary border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0 text-white">Portfolio</h5>
    </div>
    <div class="portfolio-card-content">
      <div class="total-balance d-flex align-items-center">
        <img
          src="~/assets/images/icons/total-balance.svg"
          alt="total-balance"
        />
        <div>
          <span class="d-block text-uppercase text-white"> Total balance </span>
          <h4 class="mb-0 text-white fw-semibold">
            $78,350.00
            <span class="fw-medium position-relative">
              <i class="material-symbols-outlined"> trending_up </i>
              +2.3%
            </span>
          </h4>
        </div>
      </div>

      <div class="trezo-table-content">
        <div class="trezo-table">
          <v-table>
            <thead>
              <tr>
                <th class="text-white">Coin</th>
                <th class="text-white">Amount</th>
                <th class="text-white">Total Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 5)" :key="item.id">
                <td class="text-white">
                  <div class="customer-info d-flex align-items-center">
                    <span class="d-block fw-medium">
                      {{ item.coin.name }}
                      <span class="text-white fw-normal">
                        ({{ item.coin.abbreviation }})
                      </span>
                    </span>
                  </div>
                </td>
                <td class="text-white fw-medium">
                  {{ item.amount }}
                </td>
                <td class="text-white fw-medium">
                  {{ item.total_value }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </div>

      <div class="text-end">
        <a href="#" class="view-button">
          View All Portfolio <i class="ri-arrow-right-s-line"></i>
        </a>
      </div>
      <div class="shape">
        <img src="~/assets/images/sphere-bowl.png" alt="sphere-bowl" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Portfolio",
  data() {
    return {
      items: [
        {
          id: 1,
          coin: {
            name: "Bitcoin",
            abbreviation: "BTC",
          },
          amount: "0.50 BTC",
          total_value: "$13,500",
        },
        {
          id: 2,
          coin: {
            name: "Ethereum",
            abbreviation: "ETH",
          },
          amount: "5.00 ETH",
          total_value: "$8,750",
        },
        {
          id: 3,
          coin: {
            name: "Binance",
            abbreviation: "BNB",
          },
          amount: "100 SOL",
          total_value: "$3,500",
        },
        {
          id: 4,
          coin: {
            name: "Tether",
            abbreviation: "USDT",
          },
          amount: "10 BNB",
          total_value: "$2,500",
        },
        {
          id: 5,
          coin: {
            name: "XRP",
            abbreviation: "XRP",
          },
          amount: "1,000 ADA",
          total_value: "$250",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.portfolio-card {
  --primaryColor: #4936f5;
  background-image: url("~/assets/images/portfolio-bg.jpg");
  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;

  .portfolio-card-content {
    z-index: 1;
    margin-top: 32px;
    position: relative;

    .total-balance {
      margin-bottom: 32px;

      div {
        margin-left: 10px;

        h4 {
          margin-top: 6px;
          font-size: 20px;

          span {
            font-size: 14px;
            color: #d8ffc8;
            margin-left: 3px;
            padding-left: 25px;

            i {
              left: 0;
              top: 50%;
              font-size: 20px;
              position: absolute;
              transform: translateY(-50%);
            }
          }
        }
      }
    }

    .trezo-table-content {
      .trezo-table {
        .v-table {
          background: transparent !important;
        }
        table {
          thead {
            tr {
              background-color: transparent !important;
              th {
                font-size: 12px;
                text-align: center;
                background-color: transparent !important;
                padding: {
                  top: 0;
                  bottom: 7px;
                }
                &:first-child {
                  text-align: start;
                  padding-left: 0;
                  border-top-left-radius: 0 !important;
                }
                &:last-child {
                  padding-right: 0;
                  text-align: end;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                text-align: center;
                border-color: #757dff !important;
                background-color: transparent !important;
                border: {
                  left-width: 0 !important;
                  right-width: 0 !important;
                }
                padding: {
                  top: 10px;
                  bottom: 10px;
                }
                .customer-info {
                  span {
                    margin-left: 0;

                    span {
                      font-size: 12px;
                    }
                  }
                }
                &:first-child {
                  text-align: start;
                  padding-left: 0;
                  border-color: #757dff !important;
                }
                &:last-child {
                  padding-right: 0;
                  text-align: end;
                  border-color: #757dff !important;
                }
              }
              &:first-child {
                td {
                  border-color: #757dff !important;
                }
              }
            }
          }
        }
      }
    }
    .view-button {
      margin-top: 28px;
      padding: 5px 12px;
      border-radius: 4px;
      color: var(--whiteColor);
      border: 1px solid #757dff;
      display: inline-block;
      padding-right: 30px;
      position: relative;
      font: {
        size: var(--fontSize);
        weight: 500;
      }

      i {
        top: 50%;
        right: 6px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
      &:hover {
        color: var(--blackColor);
        border-color: var(--whiteColor);
        background-color: var(--whiteColor);
      }
    }
    .shape {
      right: 0;
      top: -55px;
      z-index: -1;
      position: absolute;
    }
  }
  &.component-rtl-enabled {
    .portfolio-card-content {
      .total-balance {
        div {
          margin: {
            left: 0;
            right: 10px;
          }
          h4 {
            span {
              margin: {
                left: 0;
                right: 3px;
              }
              padding: {
                left: 0;
                right: 25px;
              }
              i {
                left: auto;
                right: 0;
              }
            }
          }
        }
      }
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
                    margin-right: 0;
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
      .mat-mdc-button {
        .mdc-button__label {
          padding: {
            right: 0;
            left: 17px;
          }
          i {
            left: -6px;
            right: auto;
          }
        }
      }
      .shape {
        right: auto;
        left: 0;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .portfolio-card {
    .portfolio-card-content {
      margin-top: 0;

      .total-balance {
        margin-bottom: 17px;

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
      .mat-mdc-button {
        font-size: 13px;
        margin-top: 17px;
      }
      .shape {
        display: none;
      }
    }
    &.component-rtl-enabled {
      .portfolio-card-content {
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
  .portfolio-card {
    &.component-rtl-enabled {
      .portfolio-card-content {
        .mat-mdc-table {
          &.mdc-data-table__table {
            .mat-mdc-header-row {
              .mat-mdc-header-cell {
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
