<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Chips with Outlined</h5>
    </div>
    <div class="text-center">
      <v-chip class="mr-2" color="success" variant="outlined">
        <v-icon start icon="mdi-server-plus"></v-icon>
        Server Status
      </v-chip>

      <v-chip class="" color="primary" variant="outlined">
        User Account
        <v-icon end icon="mdi-account-outline"></v-icon>
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "WithOutlined",
};
</script>
