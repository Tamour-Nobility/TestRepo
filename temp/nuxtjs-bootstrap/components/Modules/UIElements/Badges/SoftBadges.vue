<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Soft Badges</h4>
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
          <span
            class="badge bg-opacity-10 bg-primary py-1 px-2 me-1 text-primary rounded-1 fw-medium fs-12"
            >Primary</span
          >
          <span
            class="badge bg-opacity-10 bg-secondary py-1 px-2 me-1 text-secondary rounded-1 fw-medium fs-12"
            >Secondary</span
          >
          <span
            class="badge bg-opacity-10 bg-secondary py-1 px-2 me-1 text-secondary rounded-1 fw-medium fs-12"
            >Success</span
          >
          <span
            class="badge bg-opacity-10 bg-danger py-1 px-2 me-1 text-danger rounded-1 fw-medium fs-12"
            >Danger</span
          >
          <span
            class="badge bg-opacity-10 bg-warning py-1 px-2 me-1 text-warning rounded-1 fw-medium fs-12"
            >Warning</span
          >
          <span
            class="badge bg-opacity-10 bg-info py-1 px-2 me-1 text-info rounded-1 fw-medium fs-12"
            >Info</span
          >
          <span
            class="badge bg-opacity-10 bg-light py-1 px-2 me-1 text-light rounded-1 fw-medium fs-12"
            >Light</span
          >
          <span
            class="badge bg-opacity-10 bg-dark py-1 px-2 me-1 text-dark rounded-1 fw-medium fs-12"
            >Dark</span
          >
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
&lt;span class="badge bg-opacity-10 bg-primary py-1 px-2 text-primary rounded-1 fw-medium fs-12"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-secondary py-1 px-2 text-secondary rounded-1 fw-medium fs-12"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-secondary py-1 px-2 me-1 text-secondary rounded-1 fw-medium fs-12"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-danger py-1 px-2 text-danger rounded-1 fw-medium fs-12"&gt;Danger&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-warning py-1 px-2 text-warning rounded-1 fw-medium fs-12"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-info py-1 px-2 text-info rounded-1 fw-medium fs-12"&gt;Info&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-light py-1 px-2 text-light rounded-1 fw-medium fs-12"&gt;Light&lt;/span&gt;
&lt;span class="badge bg-opacity-10 bg-dark py-1 px-2 text-dark rounded-1 fw-medium fs-12"&gt;Dark&lt;/span&gt;
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
  name: "SoftBadges",
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
