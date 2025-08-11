<template>
  <div class="m-auto m-1230">
    <form style="max-width: 550px">
      <div class="card bg-white border-0 rounded-10 mb-4 text-center">
        <div class="card-body p-4">
          <div class="mb-3 mb-md-4">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </div>
          <img
            src="~/assets/images/message.svg"
            class="mb-3 mb-md-4"
            alt="message"
          />
          <h4 class="fs-20 fw-semibold mb-2">Success !</h4>
          <p class="mb-4">
            A email has been send to <strong>hello@trezo.com</strong>. Please
            check for an email from company and click on the included link to
            reset your password.
          </p>

          <NuxtLink
            to="/authentication/login"
            class="btn btn-primary fs-16 fw-medium text-dark py-2 px-4 text-white w-100"
          >
            Confirm Mail
          </NuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmMail",
});
</script>
