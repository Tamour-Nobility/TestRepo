<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Other Badges</h4>
      <ul class="nav nav-tabs mb-4" id="myTab6" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview6-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview6-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview6-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code6-tab"
            data-bs-toggle="tab"
            data-bs-target="#code6-tab-pane"
            type="button"
            role="tab"
            aria-controls="code6-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent6">
        <div
          class="tab-pane fade show active"
          id="preview6-tab-pane"
          role="tabpanel"
          aria-labelledby="preview6-tab"
          tabindex="0"
        >
          <button type="button" class="btn btn-primary fw-medium text-white">
            Notifications
            <span class="badge text-bg-danger text-white">4</span>
          </button>
          <div class="mb-4"></div>
          <button
            type="button"
            class="btn btn-primary position-relative fw-medium text-white"
          >
            Inbox
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          <div class="mb-4"></div>
          <button
            type="button"
            class="btn btn-primary position-relative fw-medium text-white"
          >
            Profile
            <span
              class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
            >
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
        </div>
        <div
          class="tab-pane fade"
          id="code6-tab-pane"
          role="tabpanel"
          aria-labelledby="code6-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;button type="button" class="btn btn-primary fw-medium text-white"&gt;
Notifications &lt;span class="badge text-bg-danger text-white"&gt;4&lt;/span&gt;
&lt;/button&gt;

&lt;button type="button" class="btn btn-primary position-relative fw-medium text-white"&gt;
Inbox
&lt;span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"&gt;
99+
&lt;span class="visually-hidden"&gt;unread messages&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;

&lt;button type="button" class="btn btn-primary position-relative fw-medium text-white"&gt;
Profile
&lt;span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"&gt;
&lt;span class="visually-hidden"&gt;New alerts&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "OtherBadges",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("codeCopy");
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.innerText);
          alert("Code copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return { copyCode };
  },
});
</script>
