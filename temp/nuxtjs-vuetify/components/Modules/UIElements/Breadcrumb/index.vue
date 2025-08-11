<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Basic Breadcrumb</h5>
    </div>
    <ol class="t-breadcrumb">
      <li class="t-breadcrumb-item active" aria-current="page">Home</li>
    </ol>

    <ol class="t-breadcrumb">
      <li class="t-breadcrumb-item">
        <router-link to="/dashboard">Home</router-link>
      </li>
      <li class="t-breadcrumb-item active" aria-current="page">Library</li>
    </ol>

    <ol class="t-breadcrumb">
      <li class="t-breadcrumb-item">
        <router-link to="/dashboard">Home</router-link>
      </li>
      <li class="t-breadcrumb-item"><a href="#">Library</a></li>
      <li class="t-breadcrumb-item active" aria-current="page">Data</li>
    </ol>

    <ol class="t-breadcrumb">
      <li class="t-breadcrumb-item">
        <router-link to="/dashboard">Home</router-link>
      </li>
      <li class="t-breadcrumb-item"><a href="#">Library</a></li>
      <li class="t-breadcrumb-item"><a href="#">Trezo</a></li>
      <li class="t-breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </v-card>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style lang="scss" scoped>
.t-breadcrumb {
  --breadcrumb-padding-x: 0;
  --breadcrumb-padding-y: 0;
  --breadcrumb-margin-bottom: 1rem;
  --breadcrumb-bg: ;
  --breadcrumb-border-radius: ;
  --breadcrumb-divider-color: var(--secondary-color);
  --breadcrumb-item-padding-x: 0.5rem;
  --breadcrumb-item-active-color: var(--secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding: var(--breadcrumb-padding-y) var(--breadcrumb-padding-x);
  margin-bottom: var(--breadcrumb-margin-bottom);
  font-size: var(--breadcrumb-font-size);
  list-style: none;
  background-color: var(--breadcrumb-bg);
  border-radius: var(--breadcrumb-border-radius);
  --secondary-color: rgba(33, 37, 41, 0.75);
  --link-color: var(--primaryColor);
}
.t-breadcrumb-item {
  &.active {
    color: var(--breadcrumb-item-active-color);
  }
  & + .t-breadcrumb-item {
    padding-left: var(--breadcrumb-item-padding-x);

    &::before {
      top: 1px;
      float: left;
      position: relative;
      padding-right: var(--breadcrumb-item-padding-x);
      color: var(--breadcrumb-divider-color);
      content: var(--breadcrumb-divider, "/");
    }
  }
  a {
    color: var(--link-color);
  }
}
</style>
