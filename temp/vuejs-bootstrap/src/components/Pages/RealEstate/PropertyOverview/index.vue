<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 bg-white mb-4">
        <div class="card-body p-4">
          <div class="position-relative mb-4">
            <img src="@/assets/images/property-5.png" alt="property" />
            <span
              class="text-white bg-success d-inline-block fs-12 px-2 rounded-2 position-absolute top-0 end-0 mt-3 me-3"
            >
              Sale
            </span>
          </div>
          <h3 class="mb-3 text-danger">$250,000</h3>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary">
              location_on
            </span>
            <span class="ms-1">Largo Prazeres 32</span>
          </div>
          <div
            class="border-top border-bottom py-2 mb-4 d-flex justify-content-between align-items-center gap-2 mb-4"
          >
            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4">
              <li>
                <div class="d-flex align-items-center">
                  <span class="material-symbols-outlined fs-18 text-danger">
                    bed
                  </span>
                  <span class="ms-2">6 Bed</span>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <span class="material-symbols-outlined fs-18 text-danger">
                    bathtub
                  </span>
                  <span class="ms-2">5 Bath</span>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <span class="material-symbols-outlined fs-18 text-danger">
                    square_foot
                  </span>
                  <span class="ms-2">1800 qft</span>
                </div>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <div class="d-flex gap-1">
                <i class="ri-star-line text-danger"></i>
                <i class="ri-star-line text-danger"></i>
                <i class="ri-star-line text-danger"></i>
                <i class="ri-star-line text-danger"></i>
                <i class="ri-star-line text-danger"></i>
              </div>
              <span class="ms-2">4.9(Review)</span>
            </div>
          </div>

          <h3 class="mb-3">Description</h3>
          <p>
            This stunning 4-bedroom, 3-bathroom residence offers 2,000 square
            feet of modern living space in a quiet, family-friendly
            neighborhood. Built in 2010, the home features a spacious layout
            with a bright and airy living room, perfect for relaxation or
            entertaining guests. The beautifully updated kitchen includes
            granite countertops and stainless steel appliances, ideal for home
            cooking.
          </p>
          <p class="mb-md-5 mb-4">
            The master suite boasts an en-suite bathroom and plenty of closet
            space, while the additional bedrooms are perfect for family or
            guests. Step outside to your private backyard, complete with a deck
            for outdoor dining and a well-maintained garden area.
          </p>

          <h3 class="mb-3">Features</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Spacious living room with natural light</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Modern kitchen with granite countertops</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Master bedroom with en-suite bathroom</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Private backyard with deck</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">2-car garage</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Central heating and air conditioning</span>
            </li>
          </ul>

          <h3 class="mb-3">Neighborhood</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Located in a quiet residential area with nearby parks
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Close to schools, shopping centers, and public transportation
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Safe and family-friendly community</span>
            </li>
          </ul>

          <h3 class="mb-3">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622236789!2d-74.30932477148002!3d40.69701929469058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1730886027412!5m2!1sen!2sbd"
            class="d-block w-100 rounded-3 mb-md-5 mb-4"
            style="height: 250px"
          ></iframe>

          <h3 class="mb-3">Recent Renovations</h3>
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">New roof installed in 2023</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Fresh paint throughout the interior in 2024
              </span>
            </li>
            <li class="mb-0">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Updated appliances in the kitchen</span>
            </li>
          </ul>
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

          <h3 class="fs-16 mb-0">Harold Cook</h3>
          <span>Owner</span>

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
              <span class="text-secondary">Property ID:</span>
              <span>P1001</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Year Built:</span>
              <span>2010</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary">Property Type:</span>
              <span>Residential</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-0">
              <span class="text-secondary">Listing Date:</span>
              <span>Sep 15, 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyOverview",
});
</script>
