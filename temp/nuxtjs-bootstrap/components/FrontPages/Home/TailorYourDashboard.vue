<template>
  <div class="tailor-area position-relative z-1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="tailor-img">
            <img src="~/assets/images/landing/tailor-img.png" alt="tailor" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tailor-content">
            <h2>
              Tailor Your Dashboard: Unleash the Power of Customizable Widgets
            </h2>
            <ul class="ps-0 mb-0 list-unstyled">
              <li>
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <i class="material-symbols-outlined fs-20 text-primary">
                      done_outline
                    </i>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Tailored Display</h3>
                    <p>
                      Easily arrange, resize, and configure widgets to showcase
                      the data most relevant to your workflow.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <i class="material-symbols-outlined fs-20 text-primary">
                      done_outline
                    </i>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Personalized Insights</h3>
                    <p>
                      Customize widget content and visualization options to
                      match your specific preferences and priorities.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <i class="material-symbols-outlined fs-20 text-primary">
                      done_outline
                    </i>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Flexibility and Versatility</h3>
                    <p>
                      Adapt widgets to evolving business needs by adjusting
                      layouts, styles, and data sources with ease.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <i class="material-symbols-outlined fs-20 text-primary">
                      done_outline
                    </i>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Seamless Integration</h3>
                    <p>
                      Integrate widgets seamlessly with other dashboard
                      components and external systems for a cohesive user
                      experience.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img
      src="~/assets/images/landing/shape-1.png"
      class="shape shape-1"
      alt="shape"
    />
    <img
      src="~/assets/images/landing/shape-2.png"
      class="shape shape-2"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TailorYourDashboard",
});
</script>
