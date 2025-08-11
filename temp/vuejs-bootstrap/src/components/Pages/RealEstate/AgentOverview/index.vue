<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 bg-white mb-4">
        <div class="card-body p-4">
          <h3 class="mb-3">About Johnson</h3>
          <p>
            With over a decade of experience in the real estate market, John
            Smith has built a reputation for his in-depth knowledge of
            residential and commercial properties. His commitment to client
            satisfaction, combined with an extensive network, ensures a smooth
            and efficient process, whether buying or selling.
          </p>
          <p class="mb-md-5 mb-4">
            John’s approach focuses on understanding each client’s unique needs
            and goals, providing tailored advice and insights. His market
            expertise and negotiation skills consistently deliver the best
            outcomes, helping clients make informed real estate decisions.
          </p>

          <h3 class="mb-3">Property Status</h3>
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6">
              <div class="card bg-white rounded-3 mb-4">
                <div class="card-body p-4">
                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <span
                      class="d-inline-block border-success border bg-success bg-opacity-10 text-success rounded-pill fs-12 fw-medium px-2"
                    >
                      + 75%
                    </span>
                    <span class="fs-12">Last 30 days</span>
                  </div>
                  <div class="row align-items-end">
                    <div class="col-sm-6">
                      <span class="d-block mb-2">Properties for Sale</span>
                      <h3 class="mb-0 fs-20 mb-0">5,458</h3>
                    </div>
                    <div class="col-sm-6">
                      <div style="margin: -36px 0 -36px 0">
                        <PropertiesForSaleChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="card bg-white rounded-3 mb-4">
                <div class="card-body p-4">
                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <span
                      class="d-inline-block border-success border bg-success bg-opacity-10 text-success rounded-pill fs-12 fw-medium px-2"
                    >
                      + 35%
                    </span>
                    <span class="fs-12">Last 30 days</span>
                  </div>
                  <div class="row align-items-end">
                    <div class="col-sm-6">
                      <span class="d-block mb-2">Properties for Rent</span>
                      <h3 class="mb-0 fs-20 mb-0">2,510</h3>
                    </div>
                    <div class="col-sm-6">
                      <div style="margin: -36px 0 -36px 0">
                        <PropertiesForRentChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="mb-3">Specialization</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Expert in City A and surrounding neighborhoods
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Proficient in handling first-time homebuyers, seasoned
                investors, and luxury clients
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Strong understanding of local market trends and pricing
                strategies
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Provides comprehensive property assessments and personalized
                marketing plans
              </span>
            </li>
          </ul>

          <h3 class="mb-3">Recent Achievements</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Closed over $10 million in sales in 2023</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Top Agent Award at Prime Realty for 3 consecutive years
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Successfully negotiated deals for 20+ residential and commercial
                properties in the past year
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">5-star client satisfaction rating</span>
            </li>
          </ul>

          <h3 class="mb-3">Client Testimonials</h3>

          <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-48.jpg"
                  class="rounded-circle"
                  style="width: 40px; height: 40px"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="d-flex flex-wrap gap-2 justify-content-between">
                  <div>
                    <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
                    <span class="fs-12">15m ago</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
            <p style="line-height: 1.4; max-width: 518px">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>
          <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-49.jpg"
                  class="rounded-circle"
                  style="width: 40px; height: 40px"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="d-flex flex-wrap gap-2 justify-content-between">
                  <div>
                    <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
                    <span class="fs-12">15m ago</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
            <p style="line-height: 1.4; max-width: 518px">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>
          <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-50.jpg"
                  class="rounded-circle"
                  style="width: 40px; height: 40px"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="d-flex flex-wrap gap-2 justify-content-between">
                  <div>
                    <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
                    <span class="fs-12">15m ago</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
            <p style="line-height: 1.4; max-width: 518px">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>
          <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-51.jpg"
                  class="rounded-circle"
                  style="width: 40px; height: 40px"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="d-flex flex-wrap gap-2 justify-content-between">
                  <div>
                    <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
                    <span class="fs-12">15m ago</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
            <p style="line-height: 1.4; max-width: 518px">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>
          <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-52.jpg"
                  class="rounded-circle"
                  style="width: 40px; height: 40px"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="d-flex flex-wrap gap-2 justify-content-between">
                  <div>
                    <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
                    <span class="fs-12">15m ago</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                    <i class="ri-star-line text-warning fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
            <p style="line-height: 1.4; max-width: 518px">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <a
                  class="page-link icon"
                  href="real-estate.html"
                  aria-label="Previous"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link active" href="real-estate.html">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="real-estate.html">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="real-estate.html">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="real-estate.html">4</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link icon"
                  href="real-estate.html"
                  aria-label="Next"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div
        class="card border-0 rounded-3 bg-white mb-4 text-center position-relative z-1 overflow-hidden"
      >
        <span
          class="bg-danger rounded-top-3 position-absolute z-n1 top-0 d-block w-100"
          style="height: 120px"
        ></span>
        <img
          src="@/assets/images/shape-9.png"
          class="position-absolute top-0 start-0"
          alt="shape"
        />
        <div class="card-body px-4 pb-4" style="padding-top: 35px">
          <img
            src="@/assets/images/user-70.png"
            class="rounded-circle mb-4"
            style="width: 160px; height: 160px"
            alt="user"
          />

          <h3 class="fs-16 mb-0">Sarah Johnson</h3>
          <span class="text-primary">sarah@email.com</span>

          <ul
            class="ps-0 my-4 list-unstyled d-flex flex-wrap justify-content-center gap-3"
          >
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>

          <ul class="ps-0 mb-0 list-unstyled">
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Agency:</span>
              <span>Realty Group</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Phone:</span>
              <span>(123) 456-7890</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">License Number:</span>
              <span>RE123456</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Years of Experience:</span>
              <span>10+</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Areas of Expertise:</span>
              <span>Residential Sales</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-0">
              <span class="text-secondary">Location:</span>
              <span>74 Grim Avenue San Diego</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PropertiesForSaleChart from "./PropertiesForSaleChart.vue";
import PropertiesForRentChart from "./PropertiesForRentChart.vue";

export default defineComponent({
  name: "AgentOverview",
  components: {
    PropertiesForSaleChart,
    PropertiesForRentChart,
  },
});
</script>
