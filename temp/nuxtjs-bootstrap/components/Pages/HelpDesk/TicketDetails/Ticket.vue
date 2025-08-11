<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body py-4 px-0">
      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ticket Title</th>
                <th scope="col">Requester</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Created Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="text-body">#854</td>
                <td>
                  <NuxtLink to="/help-desk/ticket-details" class="fw-medium">
                    Network Infrastructure
                  </NuxtLink>
                </td>
                <td class="text-secondary">Walter Frazier</td>
                <td class="text-secondary">Oliver Clark</td>
                <td class="text-secondary">20 Apr 2024</td>
                <td class="text-secondary">30 Apr 2024</td>
                <td class="text-secondary">High</td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                  >
                    Finished
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
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
  name: "Ticket",
});
</script>
