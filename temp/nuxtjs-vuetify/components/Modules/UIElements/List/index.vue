<template>
  <v-row class="lists-content">
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic List</h5>
        </div>
        <v-list role="list">
          <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n">
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Item Props</h5>
        </div>
        <v-list :items="itemsProps"></v-list>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Item Type</h5>
        </div>
        <v-list :items="itemsTypes"></v-list>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Density</h5>
        </div>
        <v-list density="compact">
          <v-list-subheader>REPORTS</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">List Variants</h5>
        </div>
        <v-list>
          <v-list-subheader>Plain Variant</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            variant="plain"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list>
          <v-list-subheader>Tonal Variant</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            variant="tonal"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Nav List</h5>
        </div>
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Users"
              ></v-list-item>
            </template>

            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Admin"></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Actions"></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              ></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  data: () => ({
    itemsTypes: [
      { type: "subheader", title: "Group #1" },
      {
        title: "Item #1",
        value: 1,
      },
      {
        title: "Item #2",
        value: 2,
      },
      {
        title: "Item #3",
        value: 3,
      },
      { type: "divider" },
      { type: "subheader", title: "Group #2" },
      {
        title: "Item #4",
        value: 4,
      },
      {
        title: "Item #5",
        value: 5,
      },
      {
        title: "Item #6",
        value: 6,
      },
    ],
    itemsProps: [
      {
        title: "Item #1",
        value: 1,
        props: {
          prependIcon: "mdi-home",
        },
      },
      {
        title: "Item #2",
        value: 2,
        props: {
          appendIcon: "mdi-close",
        },
      },
      {
        title: "Item #3",
        value: 3,
        props: {
          color: "primary",
        },
      },
    ],
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
    open: ["Users"],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
});
</script>

<style lang="scss" scoped>
.v-card-header {
  margin-bottom: 0 !important;
}
</style>
