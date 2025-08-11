<template>
  <div class="card border-0 rounded-3 bg-primary mb-4">
    <div class="card-body p-4">
      <h3
        class="text-white mx-auto mb-4 text-center"
        style="max-width: 230px; line-height: 1.5"
      >
        Shipment to top countries around the world
      </h3>

      <div class="text-center" style="margin: 30px 0">
        <!-- <div id="shipment_to_top"></div> -->
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/united-states-2.png"
              class="rounded-circle"
              style="width: 16px"
              alt="united-states"
            />
            <span class="text-white ms-2">United States 85%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/germany-2.png"
              class="rounded-circle"
              style="width: 16px"
              alt="germany"
            />
            <span class="text-white ms-2">Germany 75%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/united-kingdom-2.png"
              class="rounded-circle"
              style="width: 16px"
              alt="united-kingdom"
            />
            <span class="text-white ms-2">United Kingdom 40%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/canada-2.png"
              class="rounded-circle"
              style="width: 16px"
              alt="canada"
            />
            <span class="text-white ms-2">Canada 10%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/portugal.svg"
              class="rounded-circle"
              style="width: 16px"
              alt="portugal"
            />
            <span class="text-white ms-2">Portugal 05%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/spain.svg"
              class="rounded-circle"
              style="width: 16px"
              alt="spain"
            />
            <span class="text-white ms-2">Spain 15%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/france.svg"
              class="rounded-circle"
              style="width: 16px"
              alt="france"
            />
            <span class="text-white ms-2">France 25%</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center mt-3">
            <img
              src="@/assets/images/australia.png"
              class="rounded-circle"
              style="width: 16px"
              alt="australia"
            />
            <span class="text-white ms-2">Australia 55%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShipmentToTopCountries",
});
</script>
