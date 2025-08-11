<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Soft Buttons</h4>
      <ul class="nav nav-tabs mb-4" id="myTab3" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview3-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview3-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview3-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code3-tab"
            data-bs-toggle="tab"
            data-bs-target="#code3-tab-pane"
            type="button"
            role="tab"
            aria-controls="code3-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent3">
        <div
          class="tab-pane fade show active"
          id="preview3-tab-pane"
          role="tabpanel"
          aria-labelledby="preview3-tab"
          tabindex="0"
        >
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn bg-primary bg-opacity-10 fw-medium text-primary py-2 px-4"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn bg-secondary bg-opacity-10 fw-medium text-secondary py-2 px-4"
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn bg-success bg-opacity-10 fw-medium text-success py-2 px-4"
            >
              Success
            </button>
            <button
              type="button"
              class="btn bg-danger bg-opacity-10 fw-medium text-danger py-2 px-4"
            >
              Danger
            </button>
            <button
              type="button"
              class="btn bg-warning bg-opacity-10 fw-medium text-warning py-2 px-4"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn bg-info bg-opacity-10 fw-medium text-info py-2 px-4"
            >
              Info
            </button>
            <button
              type="button"
              class="btn bg-light bg-opacity-10 fw-medium text-light py-2 px-4"
            >
              Light
            </button>
            <button
              type="button"
              class="btn bg-dark bg-opacity-10 fw-medium text-dark py-2 px-4"
            >
              Dark
            </button>
            <button
              type="button"
              class="btn bg-link bg-opacity-10 fw-medium text-link py-2 px-4"
            >
              Link
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code3-tab-pane"
          role="tabpanel"
          aria-labelledby="code3-tab"
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
&lt;button type="button" class="btn bg-primary bg-opacity-10 fw-medium text-primary py-2 px-4"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn bg-secondary bg-opacity-10 fw-medium text-secondary py-2 px-4"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn bg-success bg-opacity-10 fw-medium text-success py-2 px-4"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn bg-danger bg-opacity-10 fw-medium text-danger py-2 px-4"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn bg-warning bg-opacity-10 fw-medium text-warning py-2 px-4"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn bg-info bg-opacity-10 fw-medium text-info py-2 px-4"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn bg-light bg-opacity-10 fw-medium text-light py-2 px-4"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn bg-dark bg-opacity-10 fw-medium text-dark py-2 px-4"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn bg-link bg-opacity-10 fw-medium text-link py-2 px-4"&gt;Link&lt;/button&gt;
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
  name: "SoftButtons",
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
