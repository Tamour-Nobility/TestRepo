<template>
  <div class="row justify-content-center">
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-1.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Annual Conference 2024
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-6.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-7.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-8.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-9.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">1156</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 85%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-2.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Leadership Summit 2024
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-10.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-11.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">556</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 30%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-3.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Product Launch Webinar
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-12.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-13.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-14.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">356</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 60%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-4.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
            >AI in Healthcare Symposium</RouterLink
          >

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-15.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">3226</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 70%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-5.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Tech Summit 2024
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-16.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-17.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">4109</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 50%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-6.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Startup Pitch Day
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-18.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-19.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-20.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">432</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 40%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-7.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Workshop: Digital Marketing
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-21.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">1728</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 60%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-8.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
              >
                $120
              </span>
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
          >
            Charity Gala Dinner
          </RouterLink>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-22.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-23.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-24.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-25.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">1306</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 90%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-9.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
                >$120</span
              >
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
            >Web Development Seminar</RouterLink
          >

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-26.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-27.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">2756</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 50%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-10.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
                >$120</span
              >
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
            >Networking Mixer</RouterLink
          >

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-28.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-29.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">1467</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 85%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-1.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
                >$120</span
              >
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
            >Annual Conference 2024</RouterLink
          >

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-6.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-7.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-8.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">799</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 90%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-3 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 transition-y">
        <div class="card-body p-4">
          <div class="position-relative mb-3">
            <RouterLink to="/events/event-details">
              <img
                src="@/assets/images/event-2.jpg"
                class="rounded-3"
                alt="event"
              />
            </RouterLink>
            <div
              class="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode"
            >
              <span
                class="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold"
                >$120</span
              >
            </div>
          </div>
          <RouterLink
            to="/events/event-details"
            class="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
            >Leadership Summit 2024</RouterLink
          >

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <ul class="ps-0 mb-4 list-unstyled d-flex align-items-center">
            <li>
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-10.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-11.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-12.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
            <li class="ms-m-15">
              <RouterLink to="/my-profile">
                <img
                  src="@/assets/images/user-13.jpg"
                  class="wh-40 rounded-circle border border-2 border-color-white"
                  alt="user"
                />
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="d-flex justify-content-between mb-2">
              <span class="d-block">Seat Booked</span>
              <span class="fw-medium d-block text-secondary">3241</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 40%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <Pagination items="10" total="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "EventsGrid",
  components: {
    Pagination,
  },
});
</script>
