<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4" style="padding-bottom: 0 !important">
      <div class="mb-3 mb-lg-4">
        <h3 class="mb-0">Projects Overview</h3>
      </div>
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-sm-6">
          <div
            class="card bg-primary bg-opacity-10 border-primary border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-19">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-primary">
                    folder_open
                  </i>
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Total Projects</span>
                  <h3 class="fs-20 mt-1 mb-0">1235</h3>
                </div>
              </div>
              <div
                class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
              >
                <span class="fs-12">Projects this month</span>
                <span class="count up fw-medium ms-0">+10%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-sm-6">
          <div
            class="card bg-danger bg-opacity-10 border-danger border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-19">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-danger"
                    >stacks</i
                  >
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Active Projects</span>
                  <h3 class="fs-20 mt-1 mb-0">425</h3>
                </div>
              </div>
              <div
                class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
              >
                <span class="fs-12">Projects this month</span>
                <span class="count up fw-medium ms-0">+5.75%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-sm-6">
          <div
            class="card bg-success bg-opacity-10 border-success border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-19">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-success"
                    >assignment_turned_in</i
                  >
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Finished Projects</span>
                  <h3 class="fs-20 mt-1 mb-0">135</h3>
                </div>
              </div>
              <div
                class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
              >
                <span class="fs-12">Projects this month</span>
                <span class="count down fw-medium ms-0">-15%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-sm-6">
          <div
            class="card bg-primary-div bg-opacity-10 border-primary-div border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-2">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-primary-div"
                    >group</i
                  >
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Team Members</span>
                  <h3 class="fs-20 mt-1 mb-0">65+</h3>
                </div>
              </div>
              <div
                class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
              >
                <span class="fs-12">Hard Worker</span>
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>
                    <NuxtLink to="/my-profile">
                      <img
                        src="~/assets/images/user-16.jpg"
                        class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                        alt="user"
                      />
                    </NuxtLink>
                  </li>
                  <li class="ms-m-15">
                    <NuxtLink to="/my-profile">
                      <img
                        src="~/assets/images/user-17.jpg"
                        class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                        alt="user"
                      />
                    </NuxtLink>
                  </li>
                  <li class="ms-m-15">
                    <NuxtLink to="/my-profile">
                      <img
                        src="~/assets/images/user-18.jpg"
                        class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                        alt="user"
                      />
                    </NuxtLink>
                  </li>
                  <li class="ms-m-15">
                    <NuxtLink to="/my-profile">
                      <img
                        src="~/assets/images/user-19.jpg"
                        class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                        alt="user"
                      />
                    </NuxtLink>
                  </li>
                  <li class="ms-m-15">
                    <NuxtLink
                      to="/users/users-list"
                      class="wh-34 lh-34 rounded-circle bg-primary d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
                    >
                      +55
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsOverview",
});
</script>
