<template>
  <div class="row pb-4">
    <div class="col-sm-5">
      <div class="pe-md-5 me-md-5">
        <form class="src-form position-relative">
          <input
            type="text"
            class="form-control"
            style="height: 45px"
            placeholder="Search here....."
          />
          <button
            type="submit"
            class="position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0"
          >
            <span
              class="material-symbols-outlined position-relative top-5 text-primary pe-2"
            >
              search
            </span>
          </button>
        </form>
      </div>
    </div>
    <div class="col-sm-7 text-sm-end text-center mt-3 mt-sm-0">
      <RouterLink
        to="/real-estate/add-property"
        class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
      >
        <i class="ri-add-line d-none d-sm-inline-block"></i>
        <span>Add Property</span>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddProperty",
});
</script>
