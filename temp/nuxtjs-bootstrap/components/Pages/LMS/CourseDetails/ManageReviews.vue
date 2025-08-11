<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="mb-3 mb-lg-4">
        <h3 class="mb-0">Manage Reviews</h3>
      </div>

      <div class="default-table-area manage-reviews-table">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Reviewer</th>
                <th scope="col">Review</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-6.jpg"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Olivia Clark</h6>
                      <span class="text-body">olivia@trezo.com</span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                  </div>
                  <p class="mw-380">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit.
                  </p>
                </td>
                <td>
                  <span class="d-block">17 Dec 2024</span>
                  <span class="d-block">08:30 PM</span>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                  >
                    Pending
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Approved'"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        download_done
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Reply'"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        reply
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Delete'"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-7.jpg"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Zephyr Zing</h6>
                      <span class="text-body">zephyr@trezo.com</span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-half-fill fs-18 text-warning"></i>
                  </div>
                  <p class="mw-380">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit.
                  </p>
                </td>
                <td>
                  <span class="d-block">17 Dec 2024</span>
                  <span class="d-block">08:30 PM</span>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                    >Pending</span
                  >
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Approved'"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >download_done</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Reply'"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >reply</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Delete'"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-8.jpg"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Nova Nectar</h6>
                      <span class="text-body">nova@trezo.com</span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-line fs-18 text-warning"></i>
                  </div>
                  <p class="mw-380">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit.
                  </p>
                </td>
                <td>
                  <span class="d-block">17 Dec 2024</span>
                  <span class="d-block">08:30 PM</span>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                  >
                    Pending
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Approved'"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        download_done
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Reply'"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        reply
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Delete'"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-9.jpg"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Isabella Chang</h6>
                      <span class="text-body">isabella@trezo.com</span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-half-fill fs-18 text-warning"></i>
                    <i class="ri-star-line fs-18 text-warning"></i>
                  </div>
                  <p class="mw-380">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit.
                  </p>
                </td>
                <td>
                  <span class="d-block">17 Dec 2024</span>
                  <span class="d-block">08:30 PM</span>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                    >Pending</span
                  >
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Approved'"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >download_done</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Reply'"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >reply</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Delete'"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-10.jpg"
                      class="wh-40 rounded-circle"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">Alina Bennett</h6>
                      <span class="text-body">alina@trezo.com</span>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <div
                    class="d-flex align-items-lg-center flex-wrap gap-1 mb-2"
                  >
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                    <i class="ri-star-fill fs-18 text-warning"></i>
                  </div>
                  <p class="mw-380">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit.
                  </p>
                </td>
                <td>
                  <span class="d-block">17 Dec 2024</span>
                  <span class="d-block">08:30 PM</span>
                </td>
                <td>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                    >Published</span
                  >
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Approved'"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >download_done</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Reply'"
                    >
                      <i class="material-symbols-outlined fs-16 text-body"
                        >reply</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      v-b-tooltip.hover.top="'Delete'"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-13 fw-medium">Items per pages: 5</span>

          <div class="d-flex align-items-center">
            <span class="fs-13 fw-medium me-2">1 - 5 of 12</span>
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0 justify-content-center">
                <li class="page-item">
                  <a class="page-link icon" href="#" aria-label="Previous">
                    <i class="material-symbols-outlined">keyboard_arrow_left</i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link icon" href="#" aria-label="Next">
                    <i class="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageReviews",
});
</script>
