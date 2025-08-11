<template>
  <v-row class="btn-toggle">
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Exclusive</h5>
        </div>
        <v-btn-toggle v-model="toggle_exclusive">
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Multiple</h5>
        </div>
        <p class="mb-0">
          <v-btn-toggle
            v-model="toggle_multiple"
            background-color="primary"
            multiple
          >
            <v-btn>
              <v-icon>mdi-format-bold</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-italic</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-underline</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>mdi-format-color-fill</v-icon>
            </v-btn>
          </v-btn-toggle>
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">No Options Selected</h5>
        </div>

        <v-btn-toggle v-model="toggle_none">
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
        <!-- <div class="mt-10">Selected value: {{ toggle }}</div> -->
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Mandatory</h5>
        </div>
        <div>
          <v-btn-toggle v-model="toggle_mandatory" color="primary" mandatory>
            <v-btn value="left">
              <v-icon>mdi-format-align-left</v-icon>
            </v-btn>

            <v-btn value="center">
              <v-icon>mdi-format-align-center</v-icon>
            </v-btn>

            <v-btn value="right">
              <v-icon>mdi-format-align-right</v-icon>
            </v-btn>

            <v-btn value="justify">
              <v-icon>mdi-format-align-justify</v-icon>
            </v-btn>
          </v-btn-toggle>
          <span class="fw-semibold d-block mt-10">
            Chosen value is: {{ toggle_mandatory }}
          </span>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Text Options</h5>
        </div>
        <div>
          <v-btn-toggle
            v-model="text"
            rounded="0"
            color="deep-purple-accent-3"
            group
          >
            <v-btn value="left"> Left </v-btn>

            <v-btn value="center"> Center </v-btn>

            <v-btn value="right"> Right </v-btn>

            <v-btn value="justify"> Justify </v-btn>
          </v-btn-toggle>
          <!-- <span class="fw-semibold d-block mt-10">
            Chosen value is: {{ toggle }}
          </span> -->
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Text &amp; Icon Options</h5>
        </div>
        <div class="mt-25">
          <v-btn-toggle v-model="icon" borderless>
            <v-btn value="left">
              <span class="hidden-sm-and-down">Left</span>

              <v-icon end> mdi-format-align-left </v-icon>
            </v-btn>

            <v-btn value="center">
              <span class="hidden-sm-and-down">Center</span>

              <v-icon end> mdi-format-align-center </v-icon>
            </v-btn>

            <v-btn value="right">
              <span class="hidden-sm-and-down">Right</span>

              <v-icon end> mdi-format-align-right </v-icon>
            </v-btn>

            <v-btn value="justify">
              <span class="hidden-sm-and-down">Justify</span>

              <v-icon end> mdi-format-align-justify </v-icon>
            </v-btn>
          </v-btn-toggle>
          <!-- <span class="fw-semibold d-block mt-10">
            Chosen value is:
            {{ toggle }}
          </span> -->
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-col cols="12" lg="12" md="12">
    <v-card class="mt-4 trezo-card btn-toggle">
      <div class="v-card-header mb-4">
        <h5 class="mb-0">Variant Prop</h5>
      </div>
      <div class="d-flex align-center flex-column bg-grey-lighten-4 pa-6">
        <div class="text-subtitle-2">Default</div>
        <v-btn-toggle v-model="toggle" color="primary">
          <v-btn icon="mdi-format-align-left"></v-btn>
          <v-btn icon="mdi-format-align-center"></v-btn>
          <v-btn icon="mdi-format-align-right"></v-btn>
          <v-btn icon="mdi-format-align-justify"></v-btn>
        </v-btn-toggle>

        <div class="mt-6 text-subtitle-2">Text</div>
        <v-btn-toggle v-model="toggle" color="primary" variant="text">
          <v-btn icon="mdi-format-align-left"></v-btn>
          <v-btn icon="mdi-format-align-center"></v-btn>
          <v-btn icon="mdi-format-align-right"></v-btn>
          <v-btn icon="mdi-format-align-justify"></v-btn>
        </v-btn-toggle>

        <div class="mt-6 text-subtitle-2">Plain</div>
        <v-btn-toggle v-model="toggle" color="primary" variant="plain">
          <v-btn icon="mdi-format-align-left"></v-btn>
          <v-btn icon="mdi-format-align-center"></v-btn>
          <v-btn icon="mdi-format-align-right"></v-btn>
          <v-btn icon="mdi-format-align-justify"></v-btn>
        </v-btn-toggle>

        <div class="mt-6 text-subtitle-2">Outlined</div>
        <v-btn-toggle v-model="toggle" color="primary" variant="outlined">
          <v-btn icon="mdi-format-align-left"></v-btn>
          <v-btn icon="mdi-format-align-center"></v-btn>
          <v-btn icon="mdi-format-align-right"></v-btn>
          <v-btn icon="mdi-format-align-justify"></v-btn>
        </v-btn-toggle>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ButtonToggle",
  data() {
    return {
      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      toggle: null,
      toggle_mandatory: undefined,
    };
  },
};
</script>
