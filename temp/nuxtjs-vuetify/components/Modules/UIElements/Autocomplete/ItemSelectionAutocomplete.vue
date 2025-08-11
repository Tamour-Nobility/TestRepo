<template>
  <v-form>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            :disabled="isUpdating"
            color="blue-grey-lighten-2"
            label="Name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="title"
            :disabled="isUpdating"
            color="blue-grey-lighten-2"
            label="Title"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="friends"
            :disabled="isUpdating"
            :items="people"
            chips
            closable-chips
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Select"
            multiple
          >
            <template v-slot:chip="{ props, item }">
              <v-chip
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item?.raw?.avatar"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.group"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

  <v-divider></v-divider>

  <v-card-actions>
    <v-switch
      v-model="autoUpdate"
      :disabled="isUpdating"
      class="mt-0 ms-2"
      color="green-lighten-2"
      density="compact"
      hide-details
      label="Auto Update"
    ></v-switch>

    <v-spacer></v-spacer>

    <v-btn
      :disabled="autoUpdate"
      :loading="isUpdating"
      :variant="isUpdating ? 'tonal' : undefined"
      color="blue-grey-lighten-3"
      prepend-icon="mdi-update"
      @click="isUpdating = true"
    >
      Update Now
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "ItemSelectionAutocomplete",
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };

    return {
      autoUpdate: true,
      friends: ["Sandra Adams", "Britta Holt"],
      isUpdating: false,
      name: "Midnight Crew",
      people: [
        // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
        // { header: 'Group 1' },
        { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
        { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
        { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
        { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
        // { divider: true },
        // { header: 'Group 2' },
        { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
        { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
        { name: "John Smith", group: "Group 2", avatar: srcs[1] },
        { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
      ],
      title: "The summer breeze",
      timeout: null,
    };
  },

  watch: {
    isUpdating(val) {
      clearTimeout(this.timeout);

      if (val) {
        this.timeout = setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
