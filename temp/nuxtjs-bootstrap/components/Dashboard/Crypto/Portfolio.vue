<template>
  <div class="card bg-primary p-4 border-0 position-relative z-1">
    <div class="pb-4 mb-3">
      <h3 class="mb-0 text-white">Portfolio</h3>
    </div>
    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0">
        <img
          src="~/assets/images/balance.png"
          style="width: 41px"
          alt="balance"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <span class="mb-1 d-block fw-medium text-white">TOTAL BALANCE</span>
        <div class="d-flex">
          <h3 class="mb-0 fs-20 fw-semibold me-1 text-white">$78,350.00</h3>
          <i
            class="material-symbols-outlined fs-16 position-relative top-3 text-success"
          >
            trending_up
          </i>
          <span class="text-success">+2.3%</span>
        </div>
      </div>
    </div>

    <div class="default-table-area style-two portfolio-table">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <thead>
            <tr class="border-bottom">
              <th scope="col" class="text-white bg-transparent">Coin</th>
              <th scope="col" class="text-white text-end bg-transparent">
                Amount
              </th>
              <th scope="col" class="text-white text-end bg-transparent pe-0">
                Total Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-medium ps-0 text-white">
                <span class="fw-medium">Bitcoin <span>(BTC)</span></span>
              </td>
              <td class="text-end fw-medium text-white">0.50 BTC</td>
              <td class="text-end fw-medium text-white pe-0">$41,250</td>
            </tr>
            <tr>
              <td class="fw-medium ps-0">
                <span class="fw-medium text-white"
                  >Ethereum <span>(ETH)</span></span
                >
              </td>
              <td class="text-end fw-medium text-white">10.00 ETH</td>
              <td class="text-end fw-medium text-white pe-0">$17,500</td>
            </tr>
            <tr>
              <td class="fw-medium ps-0">
                <span class="fw-medium text-white"
                  >Solana <span>(SOL)</span></span
                >
              </td>
              <td class="text-end fw-medium text-white">500 BTC</td>
              <td class="text-end fw-medium text-white">$17,500</td>
            </tr>
            <tr>
              <td class="fw-medium text-white ps-0">
                <span class="fw-medium">Cardano <span>(ADA)</span></span>
              </td>
              <td class="text-end fw-medium text-white">2,000 ADA</td>
              <td class="text-end fw-medium text-white">$500</td>
            </tr>
            <tr>
              <td class="fw-medium text-white ps-0">
                <span class="fw-medium">Binance <span>(BNB)</span></span>
              </td>
              <td class="text-end fw-medium text-white">5.00 BNB</td>
              <td class="text-end fw-medium text-white">$1,250</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-end mt-4">
        <a
          href="#"
          class="btn btn-outline-primary text-white py-2 px-3"
          style="border-color: #757dff"
        >
          View All Portfolio
        </a>
      </div>
    </div>
    <img
      src="~/assets/images/shape-5.png"
      class="position-absolute bottom-0 start-0 z-n1"
      alt="shape"
    />
    <img
      src="~/assets/images/shape-6.png"
      class="position-absolute top-0 end-0 z-n1 pt-4 pe-4 shape-6"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Portfolio",
});
</script>
