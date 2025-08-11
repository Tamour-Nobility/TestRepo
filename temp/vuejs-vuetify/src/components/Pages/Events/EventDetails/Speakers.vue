<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Speakers</h5>
    </div>
    <div class="event-details-content">
      <div class="basic-table table-responsive">
        <table>
          <thead>
            <tr>
              <th scope="col" class="fw-medium">Speaker</th>
              <th scope="col" class="fw-medium">Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="speaker-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      src="@/assets/images/users/user1.jpg"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block fw-medium"> Sarah Johnson </span>
                </div>
              </td>
              <td class="text-body">Opening Keynote</td>
            </tr>
            <tr>
              <td>
                <div class="speaker-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      src="@/assets/images/users/user2.jpg"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block fw-medium"> Russell Colon </span>
                </div>
              </td>
              <td class="text-body">Panel Discussion: Future Trends</td>
            </tr>
            <tr>
              <td>
                <div class="speaker-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      src="@/assets/images/users/user3.jpg"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block fw-medium"> Cynthia Baggett </span>
                </div>
              </td>
              <td class="text-body">Interactive Workshops</td>
            </tr>
            <tr>
              <td>
                <div class="speaker-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      src="@/assets/images/users/user4.jpg"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block fw-medium"> Raymond Nguyen </span>
                </div>
              </td>
              <td class="text-body">Networking Reception</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Speakers",
};
</script>
