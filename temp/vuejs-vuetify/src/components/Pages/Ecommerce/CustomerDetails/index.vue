<template>
  <v-row>
    <v-col cols="12" xl="9" lg="8">
      <TransactionsHistory />
    </v-col>
    <v-col cols="12" xl="3" lg="4">
      <UserCard />
    </v-col>
  </v-row>
</template>

<script>
import TransactionsHistory from "./TransactionsHistory.vue";
import UserCard from "./UserCard.vue";

export default {
  name: "CustomerDetails",
  components: {
    TransactionsHistory,
    UserCard,
  },
};
</script>
