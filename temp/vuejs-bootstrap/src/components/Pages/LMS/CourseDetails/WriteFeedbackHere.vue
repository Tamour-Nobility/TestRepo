<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="d-sm-flex justify-content-between mb-4">
        <h3 class="mb-0">Write Feedback Here:</h3>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex gap-2 justify-content-center ratings"
        >
          <li class="rating">
            <i class="ri-star-fill fs-20"></i>
          </li>
          <li class="rating">
            <i class="ri-star-fill fs-20"></i>
          </li>
          <li class="rating">
            <i class="ri-star-fill fs-20"></i>
          </li>
          <li class="rating">
            <i class="ri-star-fill fs-20"></i>
          </li>
          <li class="rating">
            <i class="ri-star-fill fs-20"></i>
          </li>
        </ul>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Your Name</label>
              <input
                type="text"
                class="form-control h-55 text-dark"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Your Email</label>
              <input
                type="email"
                class="form-control h-55 text-dark"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Your Phone No</label>
              <input
                type="number"
                class="form-control h-55 text-dark"
                placeholder="Your Phone No"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Your Subject</label>
              <input
                type="email"
                class="form-control h-55 text-dark"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label text-secondary">Write Comment</label>
              <textarea
                class="form-control"
                placeholder="Write Comment"
                cols="30"
                rows="10"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-0">
              <button
                type="submit"
                class="btn btn-primary text-white fw-semibold py-3 px-5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WriteFeedbackHere",
});
</script>
