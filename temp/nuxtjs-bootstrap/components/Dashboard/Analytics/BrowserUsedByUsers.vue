<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4"
      >
        <h3 class="mb-0">Browser Used By Users</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 pe-4 w-auto"
          style="background-position: right 0 center; color: #64748b !important"
          aria-label="Default select example"
        >
          <option>July 01 - July 31, 2024</option>
          <option value="1">August 01 - August 31, 2024</option>
          <option selected value="2">September 01 - September 31, 2024</option>
        </select>
      </div>

      <div class="default-table-area style-two browser-leads">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="text-center bg-transparent">Browser</th>
                <th scope="col" class="text-end bg-transparent">Users (%)</th>
                <th scope="col" class="text-end bg-transparent">Sessions</th>
                <th scope="col" class="text-end bg-transparent">
                  Bounce Rate (%)
                </th>
                <th scope="col" class="text-end bg-transparent">
                  Avg. Session Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/chrome.png"
                      class="wh-16 rounded-circle"
                      alt="chrome"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Google Chrome</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/safari.png"
                      class="wh-16 rounded-circle"
                      alt="safari"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Safari</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/edge.png"
                      class="wh-16 rounded-circle"
                      alt="edge"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Microsoft Edge</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/firefox.png"
                      class="wh-16 rounded-circle"
                      alt="firefox"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Mozilla Firefox</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/opera.png"
                      class="wh-16 rounded-circle"
                      alt="opera"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Opera</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
              <tr>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      src="~/assets/images/other.png"
                      class="wh-16 rounded-circle"
                      alt="other"
                    />
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14">Other</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-end fw-medium">58.4%</td>
                <td class="text-end fw-medium">12,345</td>
                <td class="text-end fw-medium">34.2%</td>
                <td class="text-end fw-medium">3m 15s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BrowserUsedByUsers",
});
</script>
