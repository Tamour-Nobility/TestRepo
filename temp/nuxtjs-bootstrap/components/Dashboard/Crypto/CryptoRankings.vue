<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3"
      >
        <h3 class="mb-0">Crypto Rankings</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 pe-4 w-auto"
          style="background-position: right 0 center; color: #64748b !important"
          aria-label="Default select example"
        >
          <option>July 01 - July 31, 2024</option>
          <option value="1">August 01 - August 31, 2024</option>
          <option selected value="2">September 01 - September 31, 2024</option>
        </select>
      </div>

      <div class="default-table-area style-two rankings-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">Rank</th>
                <th scope="col" class="bg-transparent">Cryptocurrency</th>
                <th scope="col" class="text-end bg-transparent">Market Cap</th>
                <th scope="col" class="text-end bg-transparent">Price</th>
                <th scope="col" class="text-end bg-transparent">
                  24h Change %
                </th>
                <th scope="col" class="text-end bg-transparent">7d Change %</th>
                <th scope="col" class="text-end bg-transparent">Value 24h</th>
                <th scope="col" class="text-end bg-transparent">
                  Circulating Supply
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-medium">1</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/cardano.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="cardano"
                    />
                    <span class="ps-2 fw-medium">
                      Bitcoin
                      <span class="text-body">(BTC)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$520B</td>
                <td class="text-end fw-medium">$27,500</td>
                <td class="text-end fw-medium text-success">+2.3%</td>
                <td class="text-end fw-medium text-success">+10.2%</td>
                <td class="text-end fw-medium">$35B</td>
                <td class="text-end fw-medium">19M BTC</td>
              </tr>
              <tr>
                <td class="fw-medium">2</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/ethereum-2.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="ethereum"
                    />
                    <span class="ps-2 fw-medium">
                      Ethereum
                      <span class="text-body">(ETH)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$210B</td>
                <td class="text-end fw-medium">$1,750</td>
                <td class="text-end fw-medium text-danger">-1.2%</td>
                <td class="text-end fw-medium text-success">+6.3%</td>
                <td class="text-end fw-medium">$20B</td>
                <td class="text-end fw-medium">120M ETH</td>
              </tr>
              <tr>
                <td class="fw-medium">3</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/binance-2.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="binance"
                    />
                    <span class="ps-2 fw-medium">
                      Binance
                      <span class="text-body">(BNB)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$40B</td>
                <td class="text-end fw-medium">$250</td>
                <td class="text-end fw-medium text-success">+1.5%</td>
                <td class="text-end fw-medium text-success">+7.8%</td>
                <td class="text-end fw-medium">$1.8B</td>
                <td class="text-end fw-medium">160M BNB</td>
              </tr>
              <tr>
                <td class="fw-medium">4</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/tether.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="tether"
                    />
                    <span class="ps-2 fw-medium">
                      Tether
                      <span class="text-body">(USDT)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$83B</td>
                <td class="text-end fw-medium">$1.00</td>
                <td class="text-end fw-medium text-success">+0.01%</td>
                <td class="text-end fw-medium text-success">+0.02%</td>
                <td class="text-end fw-medium">$45B</td>
                <td class="text-end fw-medium">83B USDT</td>
              </tr>
              <tr>
                <td class="fw-medium">5</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/xrp.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="xrp"
                    />
                    <span class="ps-2 fw-medium">
                      XRP
                      <span class="text-body">(XRP)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$25B</td>
                <td class="text-end fw-medium">$0.50</td>
                <td class="text-end fw-medium text-success">+0.9%</td>
                <td class="text-end fw-medium text-danger">-8.6%</td>
                <td class="text-end fw-medium">$2.2B</td>
                <td class="text-end fw-medium">50B XRP</td>
              </tr>
              <tr>
                <td class="fw-medium">6</td>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/solana-2.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="solana"
                    />
                    <span class="ps-2 fw-medium">
                      Solana
                      <span class="text-body">(SOL)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">$12B</td>
                <td class="text-end fw-medium">$35</td>
                <td class="text-end fw-medium text-success">+5.8%</td>
                <td class="text-end fw-medium text-success">+15.5%</td>
                <td class="text-end fw-medium">$3.5B</td>
                <td class="text-end fw-medium">400M SOL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPagination items="6" total="30" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoRankings",
});
</script>
