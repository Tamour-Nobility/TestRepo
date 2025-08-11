<template>
  <div class="contact-us-area pt-150 position-relative z-2" id="contact">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="contact-us-img mb-4 mb-lg-0">
            <img
              src="~/assets/images/landing/contact-us.jpg"
              alt="contact-us"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-us-form ms-xl-4">
            <span class="top-title">
              <span>Contact Us</span>
            </span>
            <h2>
              Introducing Our Exceptional Team. Meet the Minds Driving Our
              Success
            </h2>
            <form>
              <div class="form-group mb-4">
                <label class="label text-secondary">Full Name</label>
                <input
                  type="text"
                  class="form-control bg-transparent h-55"
                  placeholder="Your full name"
                />
              </div>
              <div class="form-group mb-4">
                <label class="label text-secondary">Email Address</label>
                <input
                  type="email"
                  class="form-control bg-transparent h-55"
                  placeholder="Your email address"
                />
              </div>
              <div class="form-group mb-4">
                <label class="label text-secondary">Phone Number</label>
                <input
                  type="text"
                  class="form-control bg-transparent h-55"
                  placeholder="Your phone number"
                />
              </div>
              <div class="form-group mb-4">
                <label class="label text-secondary">Subject</label>
                <select
                  class="form-select form-control bg-transparent h-55"
                  aria-label="Default select example"
                >
                  <option selected>Select your subject</option>
                  <option value="1">Help Dask</option>
                  <option value="2">LMS</option>
                  <option value="3">CRM</option>
                </select>
              </div>
              <div class="form-group mb-4">
                <label class="label text-secondary">Phone Number</label>
                <textarea
                  rows="5"
                  class="form-control bg-transparent"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div class="form-group mb-0">
                <button type="submit" class="btn btn-primary py-2 px-4 w-100">
                  <i
                    class="ri-refresh-line fs-18 text-white position-relative top-1 me-1"
                  ></i>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUs",
});
</script>
