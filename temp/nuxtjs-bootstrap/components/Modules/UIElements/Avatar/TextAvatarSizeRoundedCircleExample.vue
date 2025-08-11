<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Avatar Size Rounded-Circle Example</h4>
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
          <div class="d-flex align-items-center gap-4 flex-wrap">
            <div
              class="wh-87 rounded-circle position-relative text-center bg-primary bg-opacity-10"
            >
              <span
                class="fs-3 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"
                >Ab</span
              >
            </div>
            <div
              class="wh-77 rounded-circle position-relative text-center bg-primary bg-opacity-10"
            >
              <span
                class="fs-24 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"
                >Ab</span
              >
            </div>
            <div
              class="wh-67 rounded-circle position-relative text-center bg-primary bg-opacity-10"
            >
              <span
                class="fs-20 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"
                >Ab</span
              >
            </div>
            <div
              class="wh-57 rounded-circle position-relative text-center bg-primary bg-opacity-10"
            >
              <span
                class="fs-16 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"
                >Ab</span
              >
            </div>
            <div
              class="wh-47 rounded-circle position-relative text-center bg-primary bg-opacity-10"
            >
              <span
                class="fs-14 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"
                >Ab</span
              >
            </div>
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
<code class="language-markup" id="basicAlertsCode6">
&lt;div class="wh-87 rounded-circle position-relative text-center bg-primary bg-opacity-10"&gt;
&lt;span class="fs-3 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"&gt;Ab&lt;/span&gt;
&lt;/div&gt;
&lt;div class="wh-77 rounded-circle position-relative text-center bg-primary bg-opacity-10"&gt;
&lt;span class="fs-24 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"&gt;Ab&lt;/span&gt;
&lt;/div&gt;
&lt;div class="wh-67 rounded-circle position-relative text-center bg-primary bg-opacity-10"&gt;
&lt;span class="fs-20 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"&gt;Ab&lt;/span&gt;
&lt;/div&gt;
&lt;div class="wh-57 rounded-circle position-relative text-center bg-primary bg-opacity-10"&gt;
&lt;span class="fs-16 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"&gt;Ab&lt;/span&gt;
&lt;/div&gt;
&lt;div class="wh-47 rounded-circle position-relative text-center bg-primary bg-opacity-10"&gt;
&lt;span class="fs-14 text-primary fw-semibold position-absolute top-50 start-50 translate-middle"&gt;Ab&lt;/span&gt;
&lt;/div&gt;
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
  name: "TextAvatarSizeRoundedCircleExample",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode6");
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
