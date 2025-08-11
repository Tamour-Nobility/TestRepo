<template>
  <div
    class="key-features-area pt-150 pb-125 position-relative z-2"
    id="features"
  >
    <div class="container">
      <div class="section-title">
        <span class="top-title">
          <span>Key Features</span>
        </span>
        <h2>Discover What Sets Us Apart: Highlighted Dashboard Functions</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="key-features-single-item">
            <i
              class="material-symbols-outlined wh-87 bg-primary bg-opacity-25 d-inline-block text-primary"
            >
              stacks
            </i>
            <h3>Real-Time Updates</h3>
            <p>
              Provide real-time updates and notifications to keep users informed
              about important events, changes, or updates within the system.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="key-features-single-item">
            <i
              class="material-symbols-outlined wh-87 bg-primary-div bg-opacity-25 d-inline-block text-primary-div"
            >
              frame_source
            </i>
            <h3>Quality Code</h3>
            <p>
              These features include adherence to coding standards, robust error
              handling mechanisms, efficient algorithms, scalability,
              maintainability, and readability.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="key-features-single-item">
            <i
              class="material-symbols-outlined wh-87 bg-danger bg-opacity-25 d-inline-block text-danger"
            >
              support_agent
            </i>
            <h3>24/7 Customer Support</h3>
            <p>
              Our 24/7 customer support is dedicated to providing
              round-the-clock assistance, ensuring that help is always available
              whenever our customers need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KeyFeatures",
});
</script>
