<template>
  <v-card
    class="mp-additional-information-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Additional Information</h5>
    </div>
    <div class="additional-information-content">
      <ul class="info-list pr-0 pl-0 mb-0 mt-0 list-unstyled">
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Phone:</span> +1 444 266 5599
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Address:</span> 84 S. Arrowhead
          Court Branford
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Orders:</span> 696
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Products:</span> 9240
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Events:</span> 5
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AdditionalInformation",
};
</script>

<style lang="scss" scoped>
.mp-additional-information-card {
  .additional-information-content {
    .info-list {
      li {
        margin-bottom: 14px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
