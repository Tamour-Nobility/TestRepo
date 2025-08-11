<template>
  <v-form>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card
          class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Add A Product</h5>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product Title
                </v-label>
                <v-text-field
                  label="Enter product title"
                  placeholder="E.g. Google Pixel 7 Pro"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product Type
                </v-label>
                <v-select
                  label="Select"
                  :items="['Digital Product', 'Physical Product']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> SKU </v-label>
                <v-text-field
                  label="Enter sku"
                  placeholder="E.g. ABC-12345"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Brand Name
                </v-label>
                <v-select
                  label="Select"
                  :items="['Emburo', 'Fediz', 'Debilop', 'Canin', 'Daxa']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product Description
                </v-label>
                <TextEditor />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Regular Price
                </v-label>
                <v-text-field
                  label="Enter regular price"
                  placeholder="E.g. $99"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Sale Price
                </v-label>
                <v-text-field
                  label="Enter sale price"
                  placeholder="E.g. $29"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Publish Schedule
                </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product in Stock
                </v-label>
                <v-text-field
                  label="Enter product in stock"
                  placeholder="E.g. 17"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product ID
                </v-label>
                <v-text-field
                  label="Enter product id"
                  placeholder="E.g. #JAN-2345"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Discount / Offer
                </v-label>
                <v-text-field
                  label="Enter discount / offer"
                  placeholder="E.g. $20"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Available Date
                </v-label>

                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  End Date
                </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group mb-0">
                <v-label class="d-block fw-medium text-black">
                  Upload Product Images
                </v-label>

                <FileUploader />
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card
          class="trezo-card border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Product Category & Tags</h5>
          </div>
          <div class="row">
            <div class="col-lg-12 col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Category
                </v-label>
                <v-select
                  label="Select"
                  :items="['Watch', 'Mobile', 'Laptop', 'Headphone', 'Shoe']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Vendor </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Dennis Matthews',
                    'Susan Rader',
                    'Douglas Harvey',
                    'John Valdez',
                    'Kathryn Turner',
                  ]"
                ></v-select>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Collection
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Collection 1',
                    'Collection 2',
                    'Collection 3',
                    'Collection 4',
                    'Collection 5',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="trezo-form-group mb-0">
                <v-label class="d-block fw-medium text-black"> Tags </v-label>
                <v-select
                  label="Select"
                  v-model="favorites"
                  multiple
                  :items="states"
                >
                </v-select>
              </div>
            </div>
          </div>
        </v-card>
        <v-card
          class="trezo-card border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Other Options</h5>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Title </v-label>
                <v-text-field
                  label="Enter title"
                  placeholder="E.g. Google Pixel 7 Pro"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group mb-0">
                <v-label class="d-block fw-medium text-black">
                  Description
                </v-label>
                <v-textarea placeholder="It makes me feel..."></v-textarea>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="btn-box">
      <button type="button" class="warn">Cancel</button>
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> add </i>
        Create Product
      </button>
    </div>
  </v-form>
</template>

<script>
import TextEditor from "@/components/Common/TextEditor.vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default {
  name: "CreateProduct",
  components: {
    TextEditor,
    FileUploader,
  },
  data() {
    return {
      favorites: [],
      states: ["Watch", "Electronics", "Sports", "Fashion", "Jewellery"],
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-box {
  button {
    height: auto;
    min-width: auto;
    font-weight: 500;
    margin-right: 15px;
    border-radius: 7px;
    padding: 10px 26.5px;
    display: inline-block;

    &.warn {
      color: var(--whiteColor);
      background-color: var(--dangerColor);
    }
    &.primary {
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      padding-left: 45px;
      position: relative;

      i {
        left: 20px;
        top: 50%;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
