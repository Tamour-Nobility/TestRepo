<template>
  <div class="card border-0 rounded-3 bg-white p-4 mb-4 pb-0">
    <form>
      <div class="row">
        <div class="col-lg-3">
          <div class="position-relative mb-4">
            <input
              type="text"
              class="form-control bg-body-bg border-0"
              placeholder="Search here....."
            />
            <button
              type="submit"
              class="position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0 pe-3 pt-2 text-primary"
            >
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>Category</option>
              <option value="1">NFT</option>
              <option value="2">Bird</option>
              <option value="3">Pool</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>File Type</option>
              <option value="1">Full File</option>
              <option value="2">Zip FIle</option>
              <option value="3">Only Card</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>Sales Type</option>
              <option value="1">Full File</option>
              <option value="2">Zip FIle</option>
              <option value="3">Only Card</option>
            </select>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group mb-4 text-end">
            <button class="btn btn-primary py-2 px-5">
              <span class="py-1 d-inline-block">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterContent",
});
</script>
