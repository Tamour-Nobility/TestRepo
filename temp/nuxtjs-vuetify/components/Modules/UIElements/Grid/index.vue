<template>
  <v-row>
    <v-col cols="12">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Large Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid2.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" lg="6" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Mid Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid2.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Mid Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid2.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
  </v-row>

  <v-row class="justify-content-center">
    <v-col cols="12" lg="4" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Vertical Alignment Center</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Vertical Alignment Center</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Vertical Alignment Center</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" lg="3" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Small Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Small Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Small Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" sm="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Small Grid</h5>
        </div>
        <v-img
          src="~/assets/images/grid1.jpg"
          alt="card"
          class="border-radius"
        />
      </v-card>
    </v-col>
  </v-row>

  <v-card class="mt-10 trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Breakpoint sizing</h5>
    </div>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="grey" cols="2">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-2 </v-sheet>
      </v-col>
      <v-col class="grey">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>
  </v-card>

  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Justify</h5>
    </div>
    <v-row justify="start">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .justify-start </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .justify-center </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .justify-end </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .justify-space-around </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .justify-space-between </v-sheet>
      </v-col>
    </v-row>
  </v-card>

  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Margin helpers</h5>
    </div>
    <v-row>
      <v-col md="4">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-md-4 </v-sheet>
      </v-col>
      <v-col md="4" class="ms-auto">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-md-4 .ms-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4" class="ms-md-auto">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-md-4 .ms-md-auto </v-sheet>
      </v-col>
      <v-col md="4" class="ms-md-auto">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-md-4 .ms-md-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" class="me-auto">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto .me-auto </v-sheet>
      </v-col>
      <v-col cols="auto">
        <v-sheet class="p-15 ma-2 bg-grey"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Grid",
};
</script>
