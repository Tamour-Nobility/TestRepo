<template>
  <v-card
    class="ticket-details-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="details-card-content">
      <h6>Ticket Description</h6>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of
        <RouterLink to="/help-desk/ticket-details">Lorem Ipsum</RouterLink>.
      </p>
      <h6>Network Infrastructure for Trezo</h6>
      <ul>
        <li>Login Issues</li>
        <li>Cloud Migration</li>
        <li>Website Revamp</li>
        <li>Mobile Application</li>
        <li>System Deployment</li>
      </ul>
      <h6>Here is the Code:</h6>
      <code>
        &lt;<span class="red">span</span><span class="green">class</span>=<span
          class="blue"
        >
          &quot;material-symbols-outlined&quot;</span
        >
        &gt;search&lt;/<span class="red">span</span>&gt;
      </code>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TicketDetails",
};
</script>

<style lang="scss" scoped>
.ticket-details-card {
  .details-card-content {
    h6 {
      &:not(:first-child) {
        margin: {
          bottom: 12px;
          top: 20px;
        }
      }
    }
    ul {
      padding-left: 40px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
      li {
        line-height: 1.8;
        margin-bottom: 5px;
        color: var(--bodyColor);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    code {
      padding: 20px;
      display: block;
      margin-top: 15px;
      background: #f5f2f0;

      .red {
        color: #905;
        margin-right: 5px;

        &:last-child {
          margin-right: 0;
        }
      }
      .green {
        color: #690;
      }
      .blue {
        color: #07a;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .ticket-details-card {
    .details-card-content {
      h6 {
        &:not(:first-child) {
          margin: {
            bottom: 10px;
            top: 15px;
          }
        }
      }
      ul {
        margin: {
          top: 12px;
          bottom: 15px;
        }
      }
      code {
        padding: 15px;
        margin-top: 12px;
      }
    }
  }
}
</style>
