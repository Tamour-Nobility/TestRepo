<template>
  <v-card
    class="product-specifications-card trezo-card border-bottom-radius d-block bg-white border-0 shadow-none"
  >
    <div class="specifications-card-content">
      <h6 class="fw-semibold">General</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">Brand:</span> Apple</li>
        <li><span class="text-black">Model:</span> MacBook Pro</li>
        <li><span class="text-black">Price:</span> $2499</li>
        <li>
          <span class="text-black">Dimensions (mm):</span> 304.10 x 212.40 x
          14.90
        </li>
        <li><span class="text-black">Weight (kg):</span> 1.37</li>
        <li><span class="text-black">Colors:</span> Space Grey</li>
        <li><span class="text-black">Operating system:</span> macOS</li>
        <li><span class="text-black">Battery Life (up to hours):</span> 10</li>
      </ul>
      <h6 class="fw-semibold">Display</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">Size:</span> 13.30-inch</li>
        <li><span class="text-black">Resolution:</span> 2560x1600 pixels</li>
        <li><span class="text-black">Touch Screen:</span> No</li>
      </ul>
      <h6 class="fw-semibold">Processor</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li>
          <span class="text-black">Processor:</span> Intel Core i5 7th Gen
        </li>
        <li><span class="text-black">Base Clock Speed:</span> 2.3 GHz</li>
      </ul>
      <h6 class="fw-semibold">Memory</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">RAM:</span> 12GB</li>
      </ul>
      <h6 class="fw-semibold">Storage</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">Hard disk:</span> No</li>
        <li><span class="text-black">SSD:</span> 512GB</li>
      </ul>
      <h6 class="fw-semibold">Connectivity</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li>
          <span class="text-black">Wi-Fi standards supported:</span>
          Apple
        </li>
        <li><span class="text-black">Bluetooth version:</span> 4.2</li>
      </ul>
      <h6 class="fw-semibold">Inputs</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">Web Camera:</span> Yes</li>
        <li><span class="text-black">Pointer Device:</span> Touchpad</li>
        <li><span class="text-black">Touchpad:</span> Yes</li>
        <li><span class="text-black">Internal Mic:</span> Yes</li>
        <li><span class="text-black">Speakers:</span> Stereo Speakers</li>
        <li><span class="text-black">Finger Print Sensor:</span> Yes</li>
      </ul>
      <h6 class="fw-semibold">Ports and slots</h6>
      <ul class="pl-0 mb-0 mt-0 list-unstyled">
        <li><span class="text-black">Number of USB Ports:</span> 2</li>
        <li><span class="text-black">USB Ports:</span> 2 x USB 3.0</li>
        <li><span class="text-black">Price:</span> $2499</li>
        <li><span class="text-black">Mic In:</span> Yes</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Specifications",
};
</script>

<style lang="scss" scoped>
.product-specifications-card {
  .specifications-card-content {
    h6 {
      margin-bottom: 12px;

      &:not(:first-child) {
        margin-top: 25px;
      }
    }
    ul {
      li {
        padding: 13px 20px;
        border: {
          bottom: 1px solid var(--borderColor);
          right: 1px solid var(--borderColor);
          left: 1px solid var(--borderColor);
        }
        &:first-child {
          border-top: 1px solid var(--borderColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .product-specifications-card {
    .specifications-card-content {
      h6 {
        margin-bottom: 10px;

        &:not(:first-child) {
          margin-top: 17px;
        }
      }
      ul {
        li {
          padding: 12px 15px;
        }
      }
    }
  }
}
</style>
