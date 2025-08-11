<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <span class="badge text-outline-trezo me-15">trezo</span>
        <span class="badge text-outline-primary">Primary</span>
        <h5 class="mb-12 mt-20">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
        <button color="white" class="trezo">trezo</button>
      </v-card>
      <v-card
        class="mb-25 trezo-card"
        :style="{
          backgroundImage: `url(${image1})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      >
        <span class="badge text-bg-trezo me-15">trezo</span>
        <span class="badge text-bg-primary">Primary</span>
        <div style="height: 250px"></div>
        <h5 class="mt-20 text-white">Nesta Technologies</h5>
        <p class="text-white">
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
      </v-card>
      <v-card class="mb-25 trezo-card">
        <span class="badge text-bg-danger me-15">Danger</span>
        <span class="badge text-bg-warning">Warning</span>
        <h5 class="mb-12 mt-20">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
        <v-btn color="gray">Gray</v-btn>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <span class="badge text-bg-trezo me-15">trezo</span>
        <span class="badge text-bg-primary">Primary</span>
        <v-img
          src="~/assets/images/gallery/gallery1.jpg"
          class="border-radius mt-20"
          alt="card"
        />
        <h5 class="mb-12 mt-20">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
        <v-btn color="indigo-lighten-2">trezo</v-btn>
      </v-card>
      <v-card
        class="mb-25 trezo-card"
        :style="{
          backgroundImage: `url(${image2})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      >
        <span class="badge text-bg-danger me-15">Danger</span>
        <span class="badge text-bg-warning">Warning</span>
        <div style="height: 200px"></div>
        <h5 class="mb-12 mt-20 text-white">Nesta Technologies</h5>
        <p class="text-white">
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="mb-25 trezo-card">
        <span class="badge text-soft-danger me-15">Danger</span>
        <span class="badge text-soft-warning">Warning</span>
        <h5 class="mb-12 mt-20">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
        <v-btn color="pink">Accent</v-btn>
      </v-card>
      <v-card class="mb-25 trezo-card">
        <span class="badge text-soft-trezo me-15">trezo</span>
        <span class="badge text-soft-primary">Primary</span>
        <v-img
          src="~/assets/images/gallery/gallery3.jpg"
          class="border-radius mt-20"
          alt="card"
        />
        <h5 class="mb-12 mt-15">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
        <v-btn color="red">Warn</v-btn>
      </v-card>
      <v-card class="mb-25 trezo-card">
        <span class="badge text-bg-danger me-15">Danger</span>
        <span class="badge text-bg-warning">Warning</span>
        <h5 class="mb-12 mt-20">Nesta Technologies</h5>
        <p>
          When you enter into any new area of science, you almost always any new
          area of science find.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import image1 from "~/assets/images/gallery/gallery2.jpg";
import image2 from "~/assets/images/gallery/gallery9.jpg";

export default {
  name: "CardsContent",
  data() {
    return {
      image1,
      image2,
    };
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  padding: 10px 18px 11px !important;
  border-radius: 5px !important;

  & {
    font: {
      size: var(--fontSize) !important;
      weight: 500 !important;
    }
  }
  &.v-btn {
    padding: 14px 35px !important;
    min-height: unset;
    width: auto;
    height: auto;
    box-shadow: none;
  }
  &.trezo {
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  &.trezo {
    color: var(--primaryColor);
  }
}
</style>
