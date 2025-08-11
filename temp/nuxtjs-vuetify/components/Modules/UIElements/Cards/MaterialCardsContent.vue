<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 p-15">
        <div class="fw-semibold">Simple card</div>
      </v-card>
      <v-card loading class="mb-25 p-15">
        <div class="v-card-header">
          <v-card-subtitle>Card with footer</v-card-subtitle>
          <v-card-title class="fw-semibold mb-10 mt-10">Shiba Inu</v-card-title>
        </div>
        <p>This card has divider and indeterminate progress as footer</p>
        <p>{{ longText }}</p>
        <v-divider></v-divider>
        <v-card-actions class="ps-15 mt-10 mb-10">
          <v-btn class="grey me-15 p-15">LIKE</v-btn>
          <v-btn class="grey p-15">SHARE</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header mb-15">
          <div class="d-flex justify-space-between">
            <div class="d-block">
              <v-card-title class="fw-semibold mb-10">
                Card with media size
              </v-card-title>
              <v-card-subtitle>Small</v-card-subtitle>
            </div>
            <v-img
              width="80px"
              src="../../../assets/img/recent-orders/product-details1.jpg"
            />
          </div>
        </div>
        <p>{{ longText }}</p>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header mb-15">
          <div class="d-flex justify-space-between">
            <div class="d-block">
              <v-card-title class="fw-semibold mb-10">
                Card with media size
              </v-card-title>
              <v-card-subtitle>Medium</v-card-subtitle>
            </div>
            <v-img
              width="112px"
              src="../../../assets/img/recent-orders/product-details1.jpg"
            />
          </div>
        </div>
        <p>{{ longText }}</p>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header mb-15">
          <div class="d-flex justify-space-between">
            <div class="d-block">
              <v-card-title class="fw-semibold mb-10">
                Card with media size
              </v-card-title>
              <v-card-subtitle>Large</v-card-subtitle>
            </div>
            <v-img
              width="152px"
              src="../../../assets/img/recent-orders/product-details1.jpg"
            />
          </div>
        </div>
        <p>{{ longText }}</p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 p-15">
        <div class="v-card-header">
          <v-card-title class="fw-semibold mb-10">
            Card with actions alignment option
          </v-card-title>
          <v-card-subtitle>Start</v-card-subtitle>
        </div>
        <v-card-actions class="ps-15 mt-10 mb-10">
          <v-btn class="grey me-15">LIKE</v-btn>
          <v-btn class="grey">SHARE</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header">
          <v-card-title class="fw-semibold mb-10">
            Card with actions alignment option
          </v-card-title>
          <v-card-subtitle>End</v-card-subtitle>
        </div>
        <v-card-actions class="pe-15 mb-10 justify-end">
          <v-btn class="grey me-15">LIKE</v-btn>
          <v-btn class="grey">SHARE</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header">
          <v-card-title class="fw-semibold mb-10">
            Card with sub-title
          </v-card-title>
          <v-card-subtitle class="mb-10">Dog Breed</v-card-subtitle>
        </div>
        <visits-by-day-chart>
          <p>This card indeterminates progress bar.</p>
          <p>{{ longText }}</p>
        </visits-by-day-chart>
        <v-card-actions class="ps-15 mt-10 mb-10">
          <v-btn class="grey me-15">LIKE</v-btn>
          <v-btn class="grey">SHARE</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mb-25 p-15">
        <div class="v-card-header mb-15">
          <div class="d-flex justify-space-between">
            <div class="d-block">
              <v-card-title class="fw-semibold mb-10">
                Card with media size
              </v-card-title>
              <v-card-subtitle>Extra large</v-card-subtitle>
            </div>
            <v-img
              width="240px"
              src="../../../assets/img/recent-orders/product-details1.jpg"
            />
          </div>
        </div>
        <p>{{ longText }}</p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 p-15">
        <div class="v-card-header d-flex align-center mb-10">
          <v-avatar
            :style="{
              'background-image': `url(${require('../../../assets/img/user/user1.jpg')})`,
              'background-position': 'center center',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
            }"
          ></v-avatar>
          <div class="d-block pl-3">
            <v-card-title class="fw-semibold mb-5">
              Card with multiple sections
            </v-card-title>
            <v-card-subtitle>Dog Breed</v-card-subtitle>
          </div>
        </div>
        <v-img
          src="../../../assets/img/recent-orders/product-details1.jpg"
          alt="Photo of a Shiba Inu"
        />
        <div class="pt-15"></div>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for.
        </p>
        <v-card-actions class="ps-15 mt-10 mb-10">
          <v-btn class="grey me-15">LIKE</v-btn>
          <v-btn class="grey">SHARE</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MaterialCardsContent",
  data() {
    return {
      longText:
        "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for.",
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card-subtitle {
  padding: 0;
}
.v-card-actions {
  padding-left: 0 !important;
  .v-btn {
    padding: 14px 35px !important;
    border-radius: 5px !important;
    width: auto !important;
    height: auto !important;
    font: {
      size: var(--fontSize) !important;
      weight: 500 !important;
    }
    &.grey {
      background-color: #edeff5;
    }
  }
}
.v-card-title {
  padding: 0;
  margin: 0;
}
</style>