<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Property List" subTitle="Real Estate" />

    <AddProperty />
    <PropertyList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AddProperty from "@/components/Pages/RealEstate/PropertyList/AddProperty.vue";
import PropertyList from "@/components/Pages/RealEstate/PropertyList/index.vue";

export default defineComponent({
  name: "PropertyListPage",
  components: {
    PageTitle,
    AddProperty,
    PropertyList,
  },
});
</script>
