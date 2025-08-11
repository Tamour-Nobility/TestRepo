<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-15 mb-2 pb-1">Ticket Description</h4>
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
        <NuxtLink class="text-decoration-none" to="/help-desk/ticket-details">
          Lorem Ipsum.
        </NuxtLink>
      </p>

      <h4 class="fs-15 mb-2 pb-1 mt-4">Network Infrastructure for Trezo</h4>
      <ul class="mb-0">
        <li class="mb-2">Login Issues</li>
        <li class="mb-2">Cloud Migration</li>
        <li class="mb-2">Website Revamp</li>
        <li class="mb-2">Mobile Application</li>
        <li class="mb-2">System Deployment</li>
      </ul>

      <h4 class="fs-15 mb-2 pb-1 mt-4">Here is the Code:</h4>
      <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
&lt;span class="material-symbols-outlined"&gt;search&lt;/span&gt;
</code>
</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "TicketDescription",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>
