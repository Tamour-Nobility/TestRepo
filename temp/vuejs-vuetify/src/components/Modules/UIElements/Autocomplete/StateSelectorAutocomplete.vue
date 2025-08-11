<template>
  <div class="d"></div>
  <v-card-title class="text-h5 font-weight-regular bg-blue-grey">
    Profile
  </v-card-title>

  <v-card-text>
    <div class="text-caption pa-3">Where do you live?</div>

    <v-autocomplete
      v-model="model"
      :items="states"
      :readonly="!isEditing"
      :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
      persistent-hint
      prepend-icon="mdi-city"
      class="d-flex"
    >
      <template v-slot:append>
        <v-slide-x-reverse-transition mode="out-in">
          <v-icon
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            :icon="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
            @click="isEditing = !isEditing"
          ></v-icon>
        </v-slide-x-reverse-transition>
      </template>
    </v-autocomplete>
    <p class="text-center">
      {{ !isEditing ? "Click the icon to edit" : "Click the icon to save" }}
    </p>
  </v-card-text>
</template>

<script>
export default {
  name: "StateSelectorAutocomplete",
  data() {
    return {
      isEditing: false,
      model: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
};
</script>