<template>
  <v-row class="menue-content">
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Menu Usage</h5>
        </div>
        <div class="d-flex justify-space-around">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                class="custom-list-item"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn color="primary">
            Parent activator

            <v-menu activator="parent">
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>

          <v-btn id="menu-activator" color="primary"> Sibling activator </v-btn>

          <v-menu activator="#menu-activator">
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Open on hover</h5>
        </div>
        <div class="text-center">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Dropdown </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Activator and tooltip</h5>
        </div>
        <div class="text-center">
          <v-menu>
            <template v-slot:activator="{ props: menu }">
              <v-tooltip location="top">
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
                    Dropdown w/ Tooltip
                  </v-btn>
                </template>
                <span>I'm A Tooltip</span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Menu Transitions</h5>
        </div>
        <div class="d-flex justify-space-around">
          <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Scale Transition </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Slide X Transition </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Slide Y Transition </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Popover menu</h5>
        </div>
        <div class="text-center">
          <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">
              <v-btn color="indigo" v-bind="props"> Menu as Popover </v-btn>
            </template>

            <v-card min-width="300">
              <v-list>
                <v-list-item
                  prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                  title="John Leider"
                  subtitle="Founder of Vuetify"
                >
                  <template v-slot:append>
                    <v-btn
                      variant="text"
                      :class="fav ? 'text-red' : ''"
                      icon="mdi-heart"
                      @click="fav = !fav"
                    ></v-btn>
                  </template>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-switch
                    v-model="message"
                    color="purple"
                    label="Enable messages"
                    hide-details
                  ></v-switch>
                </v-list-item>

                <v-list-item>
                  <v-switch
                    v-model="hints"
                    color="purple"
                    label="Enable hints"
                    hide-details
                  ></v-switch>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
                <v-btn color="primary" variant="text" @click="menu = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Use In components</h5>
        </div>
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-card height="200px">
              <v-card-title class="bg-blue">
                <span class="text-h5">Menu</span>

                <v-spacer></v-spacer>

                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-dots-vertical"
                      class="text-black"
                      v-bind="props"
                    ></v-btn>
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-title>

              <v-card-text>Lorem Ipsum</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mergeProps } from "vue";

export default defineComponent({
  name: "Menus",
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    items: [
      { title: "Click Me 1" },
      { title: "Click Me 2" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
    ],
  }),
  methods: {
    mergeProps,
  },
});
</script>

<style lang="scss" scoped>
.v-card-header {
  margin-bottom: 0;
}
</style>
