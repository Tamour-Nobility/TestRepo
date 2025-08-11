<template>
  <div
    class="card p-0 border-0 rounded-3 mb-4 exchange-for-dark"
    style="background-color: #f3e8ff"
  >
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4 p-3 px-4"
      style="border-bottom: 1px solid #d5d9e2"
    >
      <div>
        <h3 class="mb-0">Exchange</h3>
      </div>
      <button class="p-0 border-0 bg-transparent position-relative top-3">
        <span class="material-symbols-outlined">replay</span>
      </button>
    </div>

    <form class="p-4 pt-0">
      <div class="mb-30">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span>SELLING</span>
          <span>MAX 4,238</span>
        </div>

        <div class="dropdown action-opt mb-3">
          <button
            class="btn bg-transparent p-0 d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="">
              <img
                src="~/assets/images/ethereum.png"
                style="width: 42px"
                alt="cardano"
              />
              <span class="fs-14 fw-semibold text-secondary ms-1">
                ETHEREUM (ETH)
              </span>
            </div>
            <ChevronDownIcon
              class="chevron-down"
              style="stroke: #3a4252"
            ></ChevronDownIcon>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow w-100"
          >
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/ethereum.png"
                  style="width: 24px"
                  alt="ethereum"
                />
                <span class="ms-2">Ethereum (BTC)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/solana.png"
                  style="width: 24px"
                  alt="solana"
                />
                <span class="ms-2">Solana (SOL)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/binance.png"
                  style="width: 24px"
                  alt="binance"
                />
                <span class="ms-2">Binance (BNB)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/bitcoin.png"
                  style="width: 24px"
                  alt="binance"
                />
                <span class="ms-2">Cardano (ADA)</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="position-relative z-1">
          <input
            type="text"
            class="form-control h-55 bg-white border-0"
            placeholder="1 ETH"
          />
          <span
            class="fs-14 position-absolute top-50 end-0 translate-middle-y pe-3"
          >
            $1750
          </span>
        </div>
      </div>

      <div class="mb-30">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span>SELLING</span>
          <span>MAX 4,238</span>
        </div>

        <div class="dropdown action-opt mb-3">
          <button
            class="btn bg-transparent p-0 d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="">
              <img
                src="~/assets/images/solana.png"
                style="width: 42px"
                alt="solana"
              />
              <span class="fs-14 fw-semibold text-secondary ms-1">
                SOLANA (SOL)
              </span>
            </div>
            <ChevronDownIcon
              class="chevron-down"
              style="stroke: #3a4252"
            ></ChevronDownIcon>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow w-100"
          >
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/ethereum.png"
                  style="width: 24px"
                  alt="ethereum"
                />
                <span class="ms-2">Ethereum (BTC)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/solana.png"
                  style="width: 24px"
                  alt="solana"
                />
                <span class="ms-2">Solana (SOL)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/binance.png"
                  style="width: 24px"
                  alt="binance"
                />
                <span class="ms-2">Binance (BNB)</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="javascript:;">
                <img
                  src="~/assets/images/bitcoin.png"
                  style="width: 24px"
                  alt="binance"
                />
                <span class="ms-2">Cardano (ADA)</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="position-relative z-1">
          <input
            type="text"
            class="form-control h-55 bg-white border-0"
            placeholder="75 SOL"
          />
          <span
            class="fs-14 position-absolute top-50 end-0 translate-middle-y pe-3"
          >
            $35
          </span>
        </div>
      </div>

      <button type="submit" class="btn btn-primary py-2 px-4 w-100">
        <span class="d-inline-block py-1">Exchange</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExchangeCoin",
});
</script>
