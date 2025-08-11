<template>
  <div
    class="card border-0 rounded-3 welcome-box mb-4 position-relative z-1 overflow-hidden"
    style="background-color: #4936f5"
  >
    <div class="card-body p-4">
      <div class="row align-items-center">
        <div class="col-9 col-lg-9 col-sm-6 col-xl-10 col-xxl-7">
          <div
            class="border-bottom"
            style="border: 0 !important; padding-bottom: 35px"
          >
            <h3 class="text-white fw-semibold mb-1 fs-20">
              Hi, <span style="color: #ffe8d4">Dr. Olivia!</span>
            </h3>
            <p class="text-body-bg">Your schedule today</p>
          </div>

          <div class="d-flex align-items-center flex-wrap gap-2 gap-xxl-4">
            <div class="d-flex align-items-center welcome-status-item">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined icon-bg">airplay</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="text-white fw-semibold mb-0 fs-18">320</h5>
                <p class="text-light">Patients</p>
              </div>
            </div>

            <div class="d-flex align-items-center welcome-status-item">
              <div class="flex-shrink-0">
                <i
                  class="material-symbols-outlined text-primary-div"
                  style="background-color: #f3e8ff"
                >
                  local_library
                </i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="text-white fw-semibold mb-0 fs-18">18</h5>
                <p class="text-light">Surgeries</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-lg-3 col-sm-6 col-xl-2 col-xxl-5">
          <div class="welcome-img text-center text-sm-end mt-4 mt-sm-0">
            <img src="~/assets/images/dr-olivia.png" alt="welcome" />
          </div>
        </div>
      </div>
    </div>
    <img
      src="~/assets/images/shape-7.png"
      class="position-absolute top-50 end-0 translate-middle-y z-n1 h-100"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YourScheduleToday",
});
</script>
