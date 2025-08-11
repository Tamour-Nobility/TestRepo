<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
      >
        <h3 class="mb-0">History Of Bids</h3>
        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i data-feather="more-horizontal"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="clock"></i>
                Today
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="pie-chart"></i>
                Last 7 Days
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="rotate-cw"></i>
                Last Month
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="calendar"></i>
                Last 1 Year
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="bar-chart"></i>
                All Time
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="eye"></i>
                View
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="trash"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-two history-of-bids">
        <div class="table-responsive hover-scroll-bar">
          <table class="table align-middle border-0">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-86.png"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">624 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-87.png"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Zara Loren</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">121.1 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-88.png"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Walter White</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">24.78 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-89.png"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Viktor James</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">72.8 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-90.png"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Zinia Loren</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">986 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-60.jpg"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">ALex Dew</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">4857 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-61.jpg"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Juhon Smith</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">7854 ETH</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-62.jpg"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">Kilva Dew</h4>
                      <span class="fs-12">@queensland</span>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body text-end">9864 ETH</td>
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
  name: "HistoryOfBids",
});
</script>
