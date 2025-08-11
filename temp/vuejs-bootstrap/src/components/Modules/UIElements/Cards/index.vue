<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-6 position-relative">
      <DefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <DefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <DefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <DefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <CardWithImage />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <CardWithBgImage />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <CardWithList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultCard from "./DefaultCard.vue";
import CardWithImage from "./CardWithImage.vue";
import CardWithBgImage from "./CardWithBgImage.vue";
import CardWithList from "./CardWithList.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cards",
  components: {
    DefaultCard,
    CardWithImage,
    CardWithBgImage,
    CardWithList,
  },
});
</script>
