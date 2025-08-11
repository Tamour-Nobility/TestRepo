<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3"
      >
        <h3 class="mb-0">Transaction History</h3>
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

      <div class="default-table-area style-two transaction-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">Coin</th>
                <th scope="col" class="text-end bg-transparent">Date</th>
                <th scope="col" class="text-end bg-transparent">Amount</th>
                <th scope="col" class="text-end bg-transparent">Price</th>
                <th scope="col" class="text-end bg-transparent">Type</th>
                <th scope="col" class="text-end bg-transparent pe-0">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/cardano.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="cardano"
                    />
                    <span class="ps-2 fw-medium">
                      Bitcoin <span class="text-body">(BTC)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">2024-09-10</td>
                <td class="text-end fw-medium">0.50 BTC</td>
                <td class="text-end fw-medium">$27,000</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Buy</span
                  >
                </td>
                <td class="text-end fw-medium pe-0">$13,500</td>
              </tr>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/ethereum-2.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="ethereum"
                    />
                    <span class="ps-2 fw-medium">
                      Ethereum <span class="text-body">(ETH)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">2024-09-08</td>
                <td class="text-end fw-medium">5.00 ETH</td>
                <td class="text-end fw-medium">$1,750</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                  >
                    Sell
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$8,750</td>
              </tr>
              <tr>
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
                <td class="text-end fw-medium">2024-09-05</td>
                <td class="text-end fw-medium">100 SOL</td>
                <td class="text-end fw-medium">$250</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                  >
                    Buy
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$3,500</td>
              </tr>
              <tr>
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
                <td class="text-end fw-medium">2024-08-30</td>
                <td class="text-end fw-medium">10 BNB</td>
                <td class="text-end fw-medium">$1.00</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                  >
                    Buy
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$2,500</td>
              </tr>
              <tr>
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
                <td class="text-end fw-medium">2024-08-25</td>
                <td class="text-end fw-medium">1,000 ADA</td>
                <td class="text-end fw-medium">$0.50</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                  >
                    Sell
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$250</td>
              </tr>
              <tr>
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
                <td class="text-end fw-medium">2024-08-20</td>
                <td class="text-end fw-medium">0.40 BTC</td>
                <td class="text-end fw-medium">$35</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                  >
                    Sell
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$11,800</td>
              </tr>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="~/assets/images/usdc.png"
                      class="rounded-circle"
                      style="width: 22px; height: 22px"
                      alt="usdc"
                    />
                    <span class="ps-2 fw-medium">
                      USDC
                      <span class="text-body">(USDC)</span>
                    </span>
                  </div>
                </td>
                <td class="text-end fw-medium">2024-08-15</td>
                <td class="text-end fw-medium">3.00 USDC</td>
                <td class="text-end fw-medium">$0.9999</td>
                <td class="text-end">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                  >
                    Buy
                  </span>
                </td>
                <td class="text-end fw-medium pe-0">$5,400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPagination items="7" total="30" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionHistory",
});
</script>
