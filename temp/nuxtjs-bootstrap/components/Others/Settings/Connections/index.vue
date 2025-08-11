<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <OthersSettingsMenu />

      <h4 class="fs-18 mb-2">Connected Accounts</h4>

      <div class="default-table-area connected-table border-bottom pb-3 mb-4">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <tbody>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/google2.svg" alt="google2" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Google</span>
                      <p class="fs-14 text-body fw-normal">
                        Calendar and Contacts
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/slack.svg" alt="slack" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Slack</span>
                      <p class="fs-14 text-body fw-normal">Communications</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/git.svg" alt="git" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Github</span>
                      <p class="fs-14 text-body fw-normal">
                        Manage your Git repositories
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/mailchimp.svg" alt="mailchimp" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Mailchimp</span>
                      <p class="fs-14 text-body fw-normal">
                        Email marketing service
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/asana.svg" alt="asana" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Asana</span>
                      <p class="fs-14 text-body fw-normal">Communication</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h4 class="fs-18 mb-2">Social Accounts</h4>

      <div class="default-table-area connected-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <tbody>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/facebook3.svg" alt="facebook2" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Facebook</span>
                      <p class="fs-14 text-body fw-normal">
                        Calendar and Contacts
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/twitter.svg" alt="twitter" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Twitter</span>
                      <p class="fs-14 text-body fw-normal">Communications</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/instagram.svg" alt="instagram" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Instagram</span>
                      <p class="fs-14 text-body fw-normal">
                        Manage your Git repositories
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/dribbble2.svg" alt="dribbble2" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Dribbble</span>
                      <p class="fs-14 text-body fw-normal">
                        Email marketing service
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <img src="~/assets/images/behance.svg" alt="behance" />
                    <div class="ms-3">
                      <span class="fw-semibold text-dark">Behance</span>
                      <p class="fs-14 text-body fw-normal">Communication</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <NuxtLink
                    to="/settings/connections"
                    class="text-decoration-none text-primary fs-14"
                  >
                    Click to Disconnect
                  </NuxtLink>
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
  name: "Connections",
});
</script>
