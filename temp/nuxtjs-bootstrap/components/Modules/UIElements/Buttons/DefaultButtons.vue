<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Default Buttons</h4>
      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code-tab"
            data-bs-toggle="tab"
            data-bs-target="#code-tab-pane"
            type="button"
            role="tab"
            aria-controls="code-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="preview-tab-pane"
          role="tabpanel"
          aria-labelledby="preview-tab"
          tabindex="0"
        >
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn btn-primary fw-medium text-white py-2 px-4"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-secondary fw-medium text-white py-2 px-4"
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn btn-success fw-medium text-white py-2 px-4"
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-danger fw-medium text-white py-2 px-4"
            >
              Danger
            </button>
            <button
              type="button"
              class="btn btn-warning fw-medium text-white py-2 px-4"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-info fw-medium text-white py-2 px-4"
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-light fw-medium text-white py-2 px-4"
            >
              Light
            </button>
            <button
              type="button"
              class="btn btn-dark fw-medium text-white py-2 px-4"
            >
              Dark
            </button>
            <button
              type="button"
              class="btn btn-link fw-medium text-white py-2 px-4"
            >
              Link
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code-tab-pane"
          role="tabpanel"
          aria-labelledby="code-tab"
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
&lt;button type="button" class="btn btn-primary fw-medium text-white py-2 px-4"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary fw-medium text-white py-2 px-4"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-success fw-medium text-white py-2 px-4"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-danger fw-medium text-white py-2 px-4"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning fw-medium text-white py-2 px-4"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-info fw-medium text-white py-2 px-4"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-light fw-medium text-white py-2 px-4"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-dark fw-medium text-white py-2 px-4"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link fw-medium text-white py-2 px-4"&gt;Link&lt;/button&gt;
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
  name: "DefaultButtons",
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
