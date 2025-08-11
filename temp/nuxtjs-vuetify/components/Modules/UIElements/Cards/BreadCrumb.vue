<template>
  <div
    class="breadcrumb-card mb-25 d-md-flex align-items-center justify-space-between"
  >
    <h5 class="mb-0">Material Cards</h5>
    <ol class="breadcrumb mb-0 ps-0">
      <li class="breadcrumb-item">
        <router-link to="/dashboard">
          <i class="ri-home-8-line"></i>
          Dashboard
        </router-link>
      </li>
      <li class="breadcrumb-item gray-color">UI Kit</li>
      <li class="breadcrumb-item fw-semibold">Material Cards</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
};
</script>
