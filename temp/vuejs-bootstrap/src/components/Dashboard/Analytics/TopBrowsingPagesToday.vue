<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3 mb-1"
      >
        <h3 class="mb-0">Top Browsing Pages Today</h3>
        <form class="position-relative table-src-form me-0">
          <input type="text" class="form-control" placeholder="Search here" />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
      </div>

      <div class="default-table-area style-two browser-leads">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">Page URL</th>
                <th scope="col" class="bg-transparent">Source</th>
                <th scope="col" class="bg-transparent">Avg Time</th>
                <th scope="col" class="bg-transparent text-end">Page Views</th>
                <th scope="col" class="bg-transparent text-end">
                  Bounce Rate (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary"> /dashboard-overview </a>
                </td>
                <td class="fw-medium">Organic</td>
                <td class="fw-medium">3m 45s</td>
                <td class="text-end fw-medium">350</td>
                <td class="text-end fw-medium">30.5%</td>
              </tr>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary">
                    /custom-reports/generate
                  </a>
                </td>
                <td class="fw-medium">Paid</td>
                <td class="fw-medium">7m 00s</td>
                <td class="text-end fw-medium">400</td>
                <td class="text-end fw-medium">24.9%</td>
              </tr>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary">/export-data</a>
                </td>
                <td class="fw-medium">Direct</td>
                <td class="fw-medium">2m 30s</td>
                <td class="text-end fw-medium">125</td>
                <td class="text-end fw-medium">50.0%</td>
              </tr>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary"> /realtime-users </a>
                </td>
                <td class="fw-medium">Referral</td>
                <td class="fw-medium">3m 00s</td>
                <td class="text-end fw-medium">190</td>
                <td class="text-end fw-medium">40.2%</td>
              </tr>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary"> /account-preferences </a>
                </td>
                <td class="fw-medium">Organic</td>
                <td class="fw-medium">2m 50s</td>
                <td class="text-end fw-medium">180</td>
                <td class="text-end fw-medium">42.1%</td>
              </tr>
              <tr>
                <td class="fw-medium">
                  <a href="#" class="text-primary"> /apis-and-reports </a>
                </td>
                <td class="fw-medium">Paid</td>
                <td class="fw-medium">4m 15s</td>
                <td class="text-end fw-medium">320</td>
                <td class="text-end fw-medium">28.7%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination items="8" total="30" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "TopBrowsingPagesToday",
  components: {
    Pagination,
  },
});
</script>
