<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <button
        class="language-menu-btn border-none rounded-circle position-relative"
        v-bind="props"
      >
        <i class="material-symbols-outlined">translate</i>
      </button>
    </template>

    <v-list class="language-menu-dropdown">
      <span class="title fw-semibold text-black d-block">Choose Language </span>
      <ul class="menu-body pl-0 mb-0 mt-0 list-unstyled">
        <li>
          <button type="button" class="d-flex align-items-center border-none">
            <v-img src="@/assets/images/flags/usa.svg" alt="usa" />
            English
          </button>
        </li>
        <li>
          <button type="button" class="d-fle align-items-center border-none">
            <v-img src="@/assets/images/flags/canada.svg" alt="canada" />
            Canada
          </button>
        </li>
        <li>
          <button type="button" class="d-fle align-items-center border-none">
            <v-img src="@/assets/images/flags/germany.svg" alt="germany" />
            German
          </button>
        </li>
        <li>
          <button type="button" class="d-fle align-items-center border-none">
            <v-img src="@/assets/images/flags/portugal.svg" alt="portugal" />
            Portugal
          </button>
        </li>
        <li>
          <button type="button" class="d-fle align-items-center border-none">
            <v-img src="@/assets/images/flags/spain.svg" alt="spain" />
            Spain
          </button>
        </li>
      </ul>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageMenu",
};
</script>
