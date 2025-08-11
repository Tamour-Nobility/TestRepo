<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Rounded Buttons</h4>
      <ul class="nav nav-tabs mb-4" id="myTab5" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview5-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview5-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview5-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code5-tab"
            data-bs-toggle="tab"
            data-bs-target="#code5-tab-pane"
            type="button"
            role="tab"
            aria-controls="code5-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent5">
        <div
          class="tab-pane fade show active"
          id="preview5-tab-pane"
          role="tabpanel"
          aria-labelledby="preview5-tab"
          tabindex="0"
        >
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn btn-primary fw-medium text-white py-2 px-4 rounded-pill"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-secondary fw-medium text-white py-2 px-4 rounded-pill"
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn btn-success fw-medium text-white py-2 px-4 rounded-pill"
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-danger fw-medium text-white py-2 px-4 rounded-pill"
            >
              Danger
            </button>
            <button
              type="button"
              class="btn btn-warning fw-medium text-white py-2 px-4 rounded-pill"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-info fw-medium text-white py-2 px-4 rounded-pill"
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-light fw-medium text-white py-2 px-4 rounded-pill"
            >
              Light
            </button>
            <button
              type="button"
              class="btn btn-dark fw-medium text-white py-2 px-4 rounded-pill"
            >
              Dark
            </button>
            <button
              type="button"
              class="btn btn-link fw-medium text-white py-2 px-4 rounded-pill"
            >
              Link
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code5-tab-pane"
          role="tabpanel"
          aria-labelledby="code5-tab"
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
&lt;button type="button" class="btn btn-primary fw-medium text-white py-2 px-4 rounded-pill"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary fw-medium text-white py-2 px-4 rounded-pill"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-success fw-medium text-white py-2 px-4 rounded-pill"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-danger fw-medium text-white py-2 px-4 rounded-pill"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning fw-medium text-white py-2 px-4 rounded-pill"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-info fw-medium text-white py-2 px-4 rounded-pill"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-light fw-medium text-white py-2 px-4 rounded-pill"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-dark fw-medium text-white py-2 px-4 rounded-pill"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link fw-medium text-white py-2 px-4 rounded-pill"&gt;Link&lt;/button&gt;
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
  name: "RoundedButtons",
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
