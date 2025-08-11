<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Outline buttons</h4>
      <ul class="nav nav-tabs mb-4" id="myTab2" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview2-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview2-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview2-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code2-tab"
            data-bs-toggle="tab"
            data-bs-target="#code2-tab-pane"
            type="button"
            role="tab"
            aria-controls="code2-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent2">
        <div
          class="tab-pane fade show active"
          id="preview2-tab-pane"
          role="tabpanel"
          aria-labelledby="preview2-tab"
          tabindex="0"
        >
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn btn-outline-primary fw-medium py-2 px-4 hover-white"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary fw-medium py-2 px-4 hover-white"
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn btn-outline-success fw-medium py-2 px-4 hover-white"
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-outline-danger fw-medium py-2 px-4 hover-white"
            >
              Danger
            </button>
            <button
              type="button"
              class="btn btn-outline-warning fw-medium py-2 px-4 hover-white"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-outline-info fw-medium py-2 px-4 hover-white"
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-outline-light fw-medium py-2 px-4 hover-white"
            >
              Light
            </button>
            <button
              type="button"
              class="btn btn-outline-dark fw-medium py-2 px-4 hover-white"
            >
              Dark
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code2-tab-pane"
          role="tabpanel"
          aria-labelledby="code2-tab"
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
&lt;button type="button" class="btn btn-outline-primary fw-medium py-2 px-4 hover-white"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-secondary fw-medium py-2 px-4 hover-white"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-success fw-medium py-2 px-4 hover-white"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-danger fw-medium py-2 px-4 hover-white"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-warning fw-medium py-2 px-4 hover-white"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-info fw-medium py-2 px-4 hover-white"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-light fw-medium py-2 px-4 hover-white"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-dark fw-medium py-2 px-4 hover-white"&gt;Dark&lt;/button&gt;
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
  name: "OutlineButtons",
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
