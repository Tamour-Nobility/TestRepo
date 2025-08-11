<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-sm-6">
            <TotalIncome />
          </div>
          <div class="col-sm-6">
            <TotalShipment />
          </div>
          <div class="col-sm-6">
            <TotalCustomer />
          </div>
          <div class="col-sm-6">
            <TotalOrder />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <ShipmentDeliveredChart />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8">
        <div class="row">
          <div class="col-md-6">
            <AverageDeliveryTimeChart />
          </div>
          <div class="col-md-6">
            <LiveShipmentStatusChart />
          </div>
        </div>

        <TrackingOrder />
      </div>
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <ShipmentToTopCountries />
          </div>
          <div class="col-md-6 col-xxl-12">
            <ChatContent />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-xxl-4">
        <TopShippingMethodsChart />
      </div>
      <div class="col-md-6 col-xxl-4">
        <TodaysShipmentsChart />
      </div>
      <div class="col-md-12 col-xxl-4">
        <OnTimeDeliveryChart />
      </div>
    </div>

    <ShipmentList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "../../components/Dashboard/Shipment/TotalIncome.vue";
import TotalShipment from "../../components/Dashboard/Shipment/TotalShipment.vue";
import TotalCustomer from "../../components/Dashboard/Shipment/TotalCustomer.vue";
import TotalOrder from "../../components/Dashboard/Shipment/TotalOrder.vue";
import ShipmentDeliveredChart from "../../components/Dashboard/Shipment/ShipmentDeliveredChart.vue";
import AverageDeliveryTimeChart from "../../components/Dashboard/Shipment/AverageDeliveryTimeChart.vue";
import LiveShipmentStatusChart from "../../components/Dashboard/Shipment/LiveShipmentStatusChart.vue";
import ShipmentToTopCountries from "../../components/Dashboard/Shipment/ShipmentToTopCountries.vue";
import TrackingOrder from "../../components/Dashboard/Shipment/TrackingOrder.vue";
import ChatContent from "../../components/Dashboard/Shipment/ChatContent.vue";
import TopShippingMethodsChart from "../../components/Dashboard/Shipment/TopShippingMethodsChart.vue";
import TodaysShipmentsChart from "../../components/Dashboard/Shipment/TodaysShipmentsChart.vue";
import OnTimeDeliveryChart from "../../components/Dashboard/Shipment/OnTimeDeliveryChart.vue";
import ShipmentList from "../../components/Dashboard/Shipment/ShipmentList.vue";

export default defineComponent({
  name: "ShipmentPage",
  components: {
    TotalIncome,
    TotalShipment,
    TotalCustomer,
    TotalOrder,
    ShipmentDeliveredChart,
    AverageDeliveryTimeChart,
    LiveShipmentStatusChart,
    ShipmentToTopCountries,
    TrackingOrder,
    ChatContent,
    TopShippingMethodsChart,
    TodaysShipmentsChart,
    OnTimeDeliveryChart,
    ShipmentList,
  },
});
</script>
