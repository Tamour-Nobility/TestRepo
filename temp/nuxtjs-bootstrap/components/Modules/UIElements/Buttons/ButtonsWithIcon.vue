<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Buttons With Icon</h4>
      <ul class="nav nav-tabs mb-4" id="myTab4" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview4-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview4-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview4-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code4-tab"
            data-bs-toggle="tab"
            data-bs-target="#code4-tab-pane"
            type="button"
            role="tab"
            aria-controls="code4-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent4">
        <div
          class="tab-pane fade show active"
          id="preview4-tab-pane"
          role="tabpanel"
          aria-labelledby="preview4-tab"
          tabindex="0"
        >
          <div class="d-flex gap-2 flex-wrap">
            <button
              type="button"
              class="btn btn-primary fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Primary
            </button>
            <button
              type="button"
              class="btn btn-secondary fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Secondary
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
              <i class="ri-add-line"></i> Danger
            </button>
            <button
              type="button"
              class="btn btn-warning fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Warning
            </button>
            <button
              type="button"
              class="btn btn-info fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Info
            </button>
            <button
              type="button"
              class="btn btn-light fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Light
            </button>
            <button
              type="button"
              class="btn btn-dark fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Dark
            </button>
            <button
              type="button"
              class="btn btn-link fw-medium text-white py-2 px-4"
            >
              <i class="ri-add-line"></i> Link
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code4-tab-pane"
          role="tabpanel"
          aria-labelledby="code4-tab"
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
&lt;button type="button" class="btn btn-primary fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-success fw-medium text-white py-2 px-4"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-danger fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-info fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Info&lt;/button&gt;
&lt;button type="button" class="btn btn-light fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Light&lt;/button&gt;
&lt;button type="button" class="btn btn-dark fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link fw-medium text-white py-2 px-4"&gt;&lt;i class="ri-add-line"&gt;&lt;/i&gt; Link&lt;/button&gt;
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
  name: "ButtonsWithIcon",
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
