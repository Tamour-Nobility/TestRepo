<template>
  <ul class="nav nav-tabs mb-4 bg-white" id="myTab" role="tablist">
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
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="mb-4">
            <span
              class="badge bg-primary bg-opacity-50 rounded-1 text-dark py-2 px-3 me-1 fs-13 fw-medium"
              >Primary</span
            >
            <span
              class="badge bg-success bg-opacity-50 rounded-1 text-dark py-2 px-3 me-1 fs-13 fw-medium"
              >Success</span
            >
          </div>
          <h3 class="mb-3 fs-16 fw-semibold">Nesta Technologies</h3>
          <p class="mb-20">
            When you enter into any new area of science, you almost always find.
          </p>
          <a
            href="#"
            class="btn btn-primary py-2 px-4 bg-primary bg-opacity-10 fw-semibold text-primary border-0 hover-bg"
          >
            View Details
          </a>
        </div>
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
        class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0 mt-5"
        @click="copyCode"
      >
        Copy
      </button>
      <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;div class="card bg-white border-0 rounded-3 mb-4"&gt;
&lt;div class="card-body p-4"&gt;
&lt;div class="mb-4"&gt;
&lt;span class="badge bg-primary bg-opacity-50 rounded-1 text-dark py-2 px-3 fs-13 fw-medium"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-success bg-opacity-50 rounded-1 text-dark py-2 px-3 fs-13 fw-medium"&gt;Success&lt;/span&gt;
&lt;/div&gt;
&lt;h3 class="mb-3 fs-16 fw-semibold"&gt;Nesta Technologies&lt;/h3&gt;
&lt;p class="mb-20"&gt;When you enter into any new area of science, you almost always find.&lt;/p&gt;
&lt;a href="#" class="btn btn-primary py-2 px-4 bg-primary bg-opacity-10 fw-semibold text-primary border-0 hover-bg"&gt;
View Details
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
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
  name: "DefaultCard",
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
