<template>
  <v-card
    class="create-invoice-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="create-invoice-content">
      <div class="row">
        <div class="col-xxl-3 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Invoice ID </v-label>
            <v-text-field
              label="Enter invoice id"
              placeholder="E.g. #JAN-2345"
            ></v-text-field>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Status </v-label>
            <v-select label="Select" :items="['Paid', 'Unpaid', 'Cancelled']">
            </v-select>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Date </v-label>
            <v-text-field type="date" class="date-input"></v-text-field>
          </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Due Date </v-label>
            <v-text-field type="date" class="date-input"></v-text-field>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="invoice-info position-relative border-radius">
            <div>
              <span class="title text-black fw-medium d-block"> From: </span>
              <span class="d-block text-black fw-medium"> Olivia John </span>
              <span class="d-block"> olivia&#64;trezo.com </span>
              <span class="d-block">
                4545 Seth Street Ballinger, TX 78965
              </span>
              <span class="d-block"> +1 444 556 8899 </span>
            </div>
            <button type="button">
              <i class="material-symbols-outlined"> edit </i>
              Change
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="invoice-info position-relative border-radius">
            <div>
              <span class="title text-black fw-medium d-block"> To: </span>
            </div>
            <button type="button">
              <i class="material-symbols-outlined"> add </i>
              Add
            </button>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="basic-table table-responsive">
            <table>
              <thead>
                <tr>
                  <th scope="col" class="fw-medium">No</th>
                  <th scope="col" class="fw-medium">Item Description</th>
                  <th scope="col" class="fw-medium">Quantity</th>
                  <th scope="col" class="fw-medium">Price</th>
                  <th scope="col" class="fw-medium">Total</th>
                  <th scope="col" class="fw-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-body">1</td>
                  <td class="fw-medium">
                    <div class="trezo-form-group mb-0">
                      <v-text-field
                        label="Enter item name"
                        placeholder="E.g. Ergonomic Office Furniture"
                      ></v-text-field>
                    </div>
                  </td>
                  <td class="text-body">
                    <div class="trezo-form-group mb-0">
                      <v-text-field type="number" value="1"></v-text-field>
                    </div>
                  </td>
                  <td class="text-body">
                    <div class="trezo-form-group mb-0">
                      <v-text-field
                        label="Enter price"
                        placeholder="E.g. $0.00"
                      ></v-text-field>
                    </div>
                  </td>
                  <td class="text-body">$0.00</td>
                  <td class="action">
                    <button type="button">
                      <i class="material-symbols-outlined"> delete </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-btn text-center">
                      <button type="button">+ Add Item</button>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div class="trezo-form-group mb-0">
                      <v-label class="d-block fw-medium text-black">
                        Discount(%)
                      </v-label>
                      <v-text-field value="0.00"></v-text-field>
                    </div>
                  </td>
                  <td>
                    <div class="trezo-form-group mb-0">
                      <v-label class="d-block fw-medium text-black">
                        Tax(%)
                      </v-label>
                      <v-text-field value="0.00"></v-text-field>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-body">Sub Total:</td>
                  <td class="text-body">$0.00</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-body">Tax (0%)</td>
                  <td class="text-body">$0.00</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-body">Discount (0%)</td>
                  <td class="text-body">- $0.00</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-black fw-medium">Grand Total</td>
                  <td class="text-black">$0.00</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="form-btn-box text-center">
        <button type="button" class="warn">Cancel</button>
        <button type="button" class="primary">
          <i class="material-symbols-outlined"> add </i>
          Create
        </button>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CreateInvoice",
};
</script>

<style lang="scss" scoped>
.create-invoice-card {
  .create-invoice-content {
    .invoice-info {
      padding: 25px;
      min-height: 186px;
      margin-bottom: 25px;
      border: 1px solid var(--borderColor);

      div {
        span {
          margin-bottom: 8px;

          &.title {
            margin-bottom: 25px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      button {
        top: 25px;
        right: 25px;
        height: auto;
        min-width: auto;
        padding: 5px 10px;
        border-radius: 4px;
        position: absolute;
        display: inline-block;
        border: 1px dashed var(--primaryColor);
        display: flex;
        align-items: center;
        font: {
          size: 13px;
          weight: 500;
        }

        i {
          font-size: 18px;
          margin-right: 4px;
        }
      }
    }
    .basic-table {
      margin-bottom: 25px;

      .table,
      table {
        tbody {
          tr {
            td {
              .v-text-field {
                width: 200px;
                .v-input__control {
                  background-color: transparent;
                  border: 1px solid #d5d9e2;
                  border-radius: 10px;
                  padding: 0 15px;
                }
              }
              .form-btn {
                height: auto;
                min-width: auto;
                font-weight: 500;
                margin-right: 15px;
                border-radius: 7px;
                padding: 15px 27px;
                display: inline-block;
                background-color: var(--primaryColor);
                color: var(--whiteColor);
                position: relative;
                line-height: 1;

                i {
                  font-size: 20px;
                }
              }
              &.action {
                button {
                  color: var(--dangerColor);
                  display: inline-block;
                  border-radius: 0;
                  min-width: auto;
                  height: auto;
                  padding: 0;

                  i {
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .form-btn-box {
      button {
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
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .create-invoice-card {
    .create-invoice-content {
      .invoice-info {
        padding: 17px;
        margin-bottom: 17px;

        div {
          span {
            &.title {
              margin-bottom: 17px;
            }
          }
        }
        button {
          top: 0;
          right: 0;
          margin-top: 15px;
          position: relative;
        }
      }
      .basic-table {
        margin-bottom: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .create-invoice-card {
    .create-invoice-content {
      .invoice-info {
        padding: 20px;
        margin-bottom: 20px;

        div {
          span {
            &.title {
              margin-bottom: 20px;
            }
          }
        }
        button {
          margin-top: 17px;
        }
      }
      .basic-table {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
