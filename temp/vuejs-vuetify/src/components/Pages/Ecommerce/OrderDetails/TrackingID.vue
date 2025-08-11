<template>
  <v-card
    class="tracking-id-card trezo-card mb-25 border-radius d-block bg-primary border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0 text-white">Tracking ID: 000346798254</h5>
    </div>
    <div
      class="numbers z-1 position-relative d-sm-flex align-items-center justify-space-between"
    >
      <div class="box">
        <div
          class="rounded-circle bg-primary text-center transition text-white fw-semibold"
        >
          01
        </div>
        <span class="fw-semibold d-block text-white"> Order Placed </span>
      </div>
      <div class="box">
        <div
          class="rounded-circle bg-primary text-center transition text-white fw-semibold"
        >
          02
        </div>
        <span class="fw-semibold d-block text-white"> Packed </span>
      </div>
      <div class="box active">
        <div
          class="rounded-circle bg-primary text-center transition text-white fw-semibold"
        >
          03
        </div>
        <span class="fw-semibold d-block text-white"> Shipped </span>
      </div>
      <div class="box">
        <div
          class="rounded-circle bg-primary text-center transition text-white fw-semibold"
        >
          04
        </div>
        <span class="fw-semibold d-block text-white"> Delivered </span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TrackingID",
};
</script>

<style lang="scss" scoped>
.tracking-id-card {
  .numbers {
    .box {
      div {
        width: 50px;
        height: 50px;
        line-height: 48px;
        border: 1px dashed var(--whiteColor);
      }
      span {
        margin-top: 15px;
      }
      &.active {
        div {
          background-color: var(--infoColor) !important;
        }
      }
      &:last-child {
        text-align: end;

        div {
          margin-left: auto;
        }
      }
    }
    &::before {
      left: 0;
      right: 0;
      top: 25px;
      content: "";
      z-index: -1;
      position: absolute;
      border-top: 1px dashed var(--whiteColor);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .tracking-id-card {
    .numbers {
      .box {
        display: inline-block;
        margin: {
          right: 25px;
          top: 15px;
        }
        div {
          width: 45px;
          height: 45px;
          line-height: 43px;
        }
        span {
          margin-top: 12px;
        }
        &:last-child {
          margin-right: 0;
          text-align: start;

          div {
            margin-left: 0;
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>
