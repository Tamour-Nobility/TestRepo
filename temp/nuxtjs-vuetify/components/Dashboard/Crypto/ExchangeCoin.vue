<template>
  <v-card
    class="crypto-exchange-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Exchange</h5>
      <button type="button">
        <i class="material-symbols-outlined"> refresh </i>
      </button>
    </div>
    <div class="crypto-exchange-card-content">
      <div class="item">
        <div class="title d-flex justify-content-between align-items-center">
          <span class="d-block text-body text-uppercase"> Selling </span>
          <span class="d-block text-body text-uppercase"> Max 4,238 </span>
        </div>
        <div class="cryptocurrency-types">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="d-block text-uppercase fw-medium"
              >
                <img
                  src="~/assets/images/cryptocurrencies/big-ethereum.svg"
                  alt="ethereum"
                />
                Ethereum
                <span class="fw-normal text-body">(ETH)</span>
              </button>
            </template>
            <v-list class="menu-content">
              <button
                type="button"
                class="bg-transparent border-none align-items-center"
              >
                <img
                  src="~/assets/images/cryptocurrencies/ethereum.svg"
                  alt="ethereum"
                  width="24px"
                />
                Ethereum
                <span class="fw-normal text-body">(ETH)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/bitcoin.svg"
                  alt="bitcoin"
                  width="24px"
                />
                Bitcoin
                <span class="fw-normal text-body">(BTC)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/solana.svg"
                  alt="solana"
                  width="24px"
                />
                Solana
                <span class="fw-normal text-body">(SOL)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/cardano.png"
                  alt="cardano"
                  width="24px"
                />
                Cardano
                <span class="fw-normal text-body">(ADA)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/binance.svg"
                  alt="binance"
                  width="24px"
                />
                Binance
                <span class="fw-normal text-body">(BNB)</span>
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="trezo-form-group position-relative">
          <v-text-field label="ETH" model-value="1" required></v-text-field>
          <span class="d-inline-block value text-body"> $1750 </span>
        </div>
      </div>
      <div class="item">
        <div class="title d-flex justify-content-between align-items-center">
          <span class="d-block text-body text-uppercase"> Buying </span>
        </div>
        <div class="cryptocurrency-types">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="d-block text-uppercase fw-medium"
              >
                <img
                  src="~/assets/images/cryptocurrencies/big-solana.svg"
                  alt="solana"
                />
                Solana
                <span class="fw-normal text-body">(SOL)</span>
              </button>
            </template>
            <v-list class="menu-content">
              <button
                type="button"
                class="bg-transparent border-none align-items-center"
              >
                <img
                  src="~/assets/images/cryptocurrencies/ethereum.svg"
                  alt="ethereum"
                  width="24px"
                />
                Ethereum
                <span class="fw-normal text-body">(ETH)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/bitcoin.svg"
                  alt="bitcoin"
                  width="24px"
                />
                Bitcoin
                <span class="fw-normal text-body">(BTC)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/solana.svg"
                  alt="solana"
                  width="24px"
                />
                Solana
                <span class="fw-normal text-body">(SOL)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/cardano.png"
                  alt="cardano"
                  width="24px"
                />
                Cardano
                <span class="fw-normal text-body">(ADA)</span>
              </button>
              <button type="button" class="bg-transparent border-none">
                <img
                  src="~/assets/images/cryptocurrencies/binance.svg"
                  alt="binance"
                  width="24px"
                />
                Binance
                <span class="fw-normal text-body">(BNB)</span>
              </button>
            </v-list>
          </v-menu>
        </div>
        <div class="trezo-form-group position-relative">
          <v-text-field label="SOL" model-value="75" required></v-text-field>
          <span class="d-inline-block value text-body"> $35 </span>
        </div>
      </div>
      <button type="button" class="exchange-btn">Exchange</button>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExchangeCoin",
});
</script>

<style lang="scss" scoped>
.crypto-exchange-card {
  background: #f3e8ff;

  .v-card-header {
    border-bottom: 1px solid #d5d9e2;
    padding: {
      left: 25px;
      right: 25px;
      bottom: 8px;
    }
    margin: {
      left: -25px;
      right: -25px;
    }
    button {
      padding: 0;
      line-height: 1;
      color: #5f6368;
    }
  }
  .crypto-exchange-card-content {
    padding-bottom: 15px !important;

    .item {
      margin-bottom: 20px;

      .title {
        margin-bottom: 10px;
      }
      .cryptocurrency-types {
        button {
          padding: 0;
          width: 100%;
          font-size: 16px !important;
          color: var(--blackColor);
          position: relative;
          display: flex !important;
          align-items: center;

          img {
            margin-right: 10px;
          }
          span {
            margin-left: 5px;
          }
          &::before {
            transform: translateY(-50%);
            position: absolute;
            content: "\ea4e";
            right: -4px;
            top: 50%;
            font: {
              size: 22px;
              family: remixicon;
            }
          }
        }
      }
    }
    .exchange-btn {
      background-color: var(--primaryColor);
      color: var(--whiteColor);
      display: block;
      width: 100%;
      padding: 13px 30px;
      border-radius: 7px;
      font: {
        size: 16px;
        weight: 500;
      }
    }
  }
}
.menu-content {
  width: 290px;
  height: auto;
  max-width: 290px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0px 4px 45px 0px rgba(0, 0, 0, 0.1) !important;

  &.v-list {
    display: block;
    min-height: auto;
    text-align: start;
    color: var(--blackColor);
    text-transform: uppercase;

    button {
      display: flex;
      font-weight: 600;
      font-size: 14px;
      align-items: center !important;
      text-transform: uppercase;
      padding: 10px 22px;

      img {
        width: 22px;
        margin-right: 8px;
      }
      span {
        margin-left: 3px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .crypto-exchange-card {
    .v-card-header {
      padding: {
        left: 17px;
        right: 17px;
      }
      margin: {
        left: -17px;
        right: -17px;
      }
      button {
        i {
          font-size: 20px;
        }
      }
    }
    .crypto-exchange-card-content {
      padding-bottom: 0 !important;

      .item {
        margin-bottom: 17px;

        .title {
          margin-bottom: 10px;
        }
        .cryptocurrency-types {
          .mdc-button {
            font-size: 14px;
          }
        }
        .form-group {
          .mat-mdc-form-field {
            .mdc-text-field {
              padding: {
                left: 15px;
                right: 15px;
              }
            }
          }
          .value {
            right: 15px;
          }
        }
      }
      .exchange-btn {
        &.mdc-button {
          font-size: 14px;
        }
      }
    }
  }
  .menu-content {
    width: 258px;
    max-width: 258px;
    &.v-list {
      button {
        padding: 9px 16px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .crypto-exchange-card {
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
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .menu-content {
    width: 220px;
    max-width: 220px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .menu-content {
    width: 220px;
    max-width: 220px;
  }
}
</style>
