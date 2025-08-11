<template>
  <v-card
    class="invoice-details-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="invoice-details-content">
      <div
        class="invoice-info d-md-flex align-items-center justify-content-between"
      >
        <div>
          <span class="title d-block">
            Invoice Number: <span class="text-black">#1346</span>
          </span>
          <span class="d-block text-body"> Invoice To: </span>
          <span class="d-block text-black"> Shannon Nelson </span>
          <span class="d-block text-black">
            4545 Seth Street Ballinger, TX 78965
          </span>
          <span class="d-block text-black"> +1 444 556 8899 </span>
        </div>
        <div>
          <v-img
            src="@/assets/images/qr-code.svg"
            class="qr-code-image"
            alt="qr-code-image"
          />
        </div>
        <div>
          <span class="title d-block text-body">
            Date: <span class="text-black">01 Dec 2024</span>
          </span>
          <span class="d-block text-body"> Pay To: </span>
          <span class="d-block text-body"> Mercedes Foreman </span>
          <span class="d-block text-body">
            458 Friendship Lane Walnut Creek, CA 5828
          </span>
          <span class="d-block text-bodys"> +1 444 888 0055 </span>
        </div>
      </div>
      <div class="basic-table table-responsive">
        <table>
          <thead>
            <tr>
              <th scope="col" class="fw-medium">No</th>
              <th scope="col" class="fw-medium">Item Description</th>
              <th scope="col" class="fw-medium">Quantity</th>
              <th scope="col" class="fw-medium">Price</th>
              <th scope="col" class="fw-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-body">1</td>
              <td class="fw-medium">
                Apple MacBook Pro 16.2' with M3 Pro Chip
              </td>
              <td class="text-body">4</td>
              <td class="text-body">$80</td>
              <td class="text-body">$320</td>
            </tr>
            <tr>
              <td class="text-body">2</td>
              <td class="fw-medium">SAMSUNG Galaxy Tab A9+ Tablet 11'</td>
              <td class="text-body">3</td>
              <td class="text-body">$45</td>
              <td class="text-body">$135</td>
            </tr>
            <tr>
              <td class="text-body">3</td>
              <td class="fw-medium">Apple iPhone 15 Pro Max (512 GB)</td>
              <td class="text-body">5</td>
              <td class="text-body">$30</td>
              <td class="text-body">$150</td>
            </tr>
            <tr>
              <td class="text-body">4</td>
              <td class="fw-medium">Gildan Men's Crew T-Shirts, Multipack</td>
              <td class="text-body">1</td>
              <td class="text-body">$56</td>
              <td class="text-body">$56</td>
            </tr>
            <tr>
              <td class="text-body">5</td>
              <td class="fw-medium">Skechers Men's Summits High Range</td>
              <td class="text-body">4</td>
              <td class="text-body">$90</td>
              <td class="text-body">$360</td>
            </tr>
            <tr>
              <td class="text-body">6</td>
              <td class="fw-medium">Amazfit GTR 3 Smart Watch for Men</td>
              <td class="text-body">2</td>
              <td class="text-body">$75</td>
              <td class="text-body">$150</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-body">Sub Total:</td>
              <td class="text-body">$1,171</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-body">Tax (0.22%)</td>
              <td class="text-body">$5.55</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-body">Discount (0.52%)</td>
              <td class="text-body">- $4.00</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-black fw-medium">Grand Total</td>
              <td class="text-black">$1,172.55</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="form-btn-box text-center">
        <button type="button" class="warn">Print</button>
        <button type="button" class="primary">
          <i class="material-symbols-outlined"> download </i>
          Download
        </button>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "InvoiceDetails",
};
</script>

<style lang="scss" scoped>
.invoice-details-card {
  .invoice-details-content {
    .invoice-info {
      margin-bottom: 25px;

      span {
        font-size: 15px;
        margin-bottom: 8px;

        &.title {
          margin-bottom: 30px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      div {
        &:last-child {
          text-align: end;
        }
      }
      .qr-code-image {
        width: 150px;
        margin-bottom: -3px;
      }
    }
    .basic-table {
      margin-bottom: 25px;
    }
    .form-btn-box {
      margin: {
        left: 10px;
        right: 10px;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .invoice-details-card {
    .invoice-details-content {
      .invoice-info {
        margin-bottom: 17px;

        span {
          font-size: 13px;
          margin-bottom: 8px;

          &.title {
            margin-bottom: 8px;
          }
        }
        div {
          &:last-child {
            text-align: start;
          }
        }
        .qr-code-image {
          width: 150px;
          margin: {
            top: 17px;
            bottom: 14px;
          }
        }
      }
      .basic-table {
        margin-bottom: 17px;
      }
      .form-btn-box {
        button {
          margin: {
            left: 7px;
            right: 7px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .invoice-details-card {
    .invoice-details-content {
      .invoice-info {
        margin-bottom: 20px;

        .qr-code-image {
          margin: {
            top: 20px;
            bottom: 17px;
          }
        }
      }
      .basic-table {
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .invoice-details-card {
    .invoice-details-content {
      .invoice-info {
        span {
          font-size: 14px;

          &.title {
            margin-bottom: 25px;
          }
        }
        .qr-code-image {
          width: 140px;
        }
      }
    }
  }
}
</style>
