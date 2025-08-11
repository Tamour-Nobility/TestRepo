<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Outline Rounded Buttons</h4>
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
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn btn-outline-primary fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn btn-outline-success fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-outline-danger fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Danger
            </button>
            <button
              type="button"
              class="btn btn-outline-warning fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-outline-info fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-outline-light fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Light
            </button>
            <button
              type="button"
              class="btn btn-outline-dark fw-medium py-2 px-4 hover-white rounded-pill"
            >
              Dark
            </button>
          </div>
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
&lt;button type="button" class="btn btn-outline-primary fw-medium py-2 px-4 hover-white rounded-pill"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-secondary fw-medium py-2 px-4 hover-white rounded-pill"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-success fw-medium py-2 px-4 hover-white rounded-pill"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-danger fw-medium py-2 px-4 hover-white rounded-pill"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-warning fw-medium py-2 px-4 hover-white rounded-pill"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-info fw-medium py-2 px-4 hover-white rounded-pill"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-light fw-medium py-2 px-4 hover-white rounded-pill"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-dark fw-medium py-2 px-4 hover-white rounded-pill"&gt;Dark&lt;/button&gt;
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
  name: "OutlineRoundedButtons",
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
