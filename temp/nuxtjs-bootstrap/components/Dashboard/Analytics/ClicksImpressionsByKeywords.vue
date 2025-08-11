<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4"
      >
        <h3 class="mb-0">Clicks/Impressions by Keywords</h3>
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
          <table class="table align-middle border-0 w-100 for-mobile-width">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="text-center bg-transparent">
                  <div class="d-flex">
                    <span>#</span>
                    <span class="ps-4">Dimension</span>
                  </div>
                </th>
                <th scope="col" class="text-end bg-transparent">Impressions</th>
                <th scope="col" class="text-end bg-transparent">Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">1</span>
                    <span class="ps-4 fw-medium">data metrics</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                    >
                      trending_up
                    </i>
                    <span class="fw-medium">949</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-1 me-2"
                    >
                      trending_down
                    </i>
                    <span class="fw-medium">656</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">2</span>
                    <span class="ps-4 fw-medium">sales metrics</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                    >
                      trending_up
                    </i>
                    <span class="fw-medium">842</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-1 me-2"
                    >
                      trending_down
                    </i>
                    <span class="fw-medium">420</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">3</span>
                    <span class="ps-4 fw-medium"> analytics dashboard </span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">640</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">534</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">4</span>
                    <span class="ps-4 fw-medium">saas metrics</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">865</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">560</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">5</span>
                    <span class="ps-4 fw-medium">hubspot analytics</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-2 me-2"
                      >trending_down</i
                    >
                    <span class="fw-medium">435</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-1 me-2"
                      >trending_down</i
                    >
                    <span class="fw-medium">328</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">6</span>
                    <span class="ps-4 fw-medium">smart goals</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">756</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">235</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">7</span>
                    <span class="ps-4 fw-medium">google analytics</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">578</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-1 me-2"
                      >trending_down</i
                    >
                    <span class="fw-medium">456</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-end fw-medium">
                  <div class="d-flex">
                    <span class="fw-medium">8</span>
                    <span class="ps-4 fw-medium">trezo dashboard</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-success fs-20 position-relative top-2 me-2"
                      >trending_up</i
                    >
                    <span class="fw-medium">660</span>
                  </div>
                </td>
                <td class="text-end fw-medium">
                  <div class="d-flex align-items-center justify-content-end">
                    <i
                      class="material-symbols-outlined text-danger fs-20 position-relative top-1 me-2"
                      >trending_down</i
                    >
                    <span class="fw-medium">478</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPagination items="8" total="30" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClicksImpressionsByKeywords",
});
</script>
