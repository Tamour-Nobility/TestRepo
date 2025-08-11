<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="default-table-area speaker-table">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Speaker</th>
                <th scope="col">Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-1.jpg"
                      class="wh-40 rounded-3"
                      alt="user-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Sarah Johnson</h6>
                    </div>
                  </div>
                </td>
                <td class="text-body">Opening Keynote</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-2.jpg"
                      class="wh-40 rounded-3"
                      alt="user-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Russell Colon</h6>
                    </div>
                  </div>
                </td>
                <td class="text-body">Panel Discussion: Future Trends</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-3.jpg"
                      class="wh-40 rounded-3"
                      alt="user-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Cynthia Baggett</h6>
                    </div>
                  </div>
                </td>
                <td class="text-body">Interactive Workshops</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="~/assets/images/user-4.jpg"
                      class="wh-40 rounded-3"
                      alt="user-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Raymond Nguyen</h6>
                    </div>
                  </div>
                </td>
                <td class="text-body">Networking Reception</td>
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
  name: "SpeakerTopic",
});
</script>
