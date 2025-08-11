<template>
  <div class="row">
    <div class="col-xxl-9 col-lg-8 col-md-7">
      <TransactionsHistory />
    </div>
    <div class="col-xxl-3 col-lg-4 col-md-5">
      <UserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransactionsHistory from "./TransactionsHistory.vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  name: "CustomerDetails",
  components: {
    TransactionsHistory,
    UserCard,
  },
});
</script>
