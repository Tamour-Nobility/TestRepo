<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Alerts with Icon</h4>
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
          <div class="alert alert-primary text-primary" role="alert">
            <i class="ri-home-7-line fs-18 me-1"></i>
            A simple primary alert—check it out!
          </div>
          <div class="alert alert-secondary text-secondary" role="alert">
            <i class="ri-star-line fs-18 me-1"></i>
            A simple secondary alert—check it out!
          </div>
          <div class="alert alert-success text-success" role="alert">
            <i class="ri-play-circle-line fs-18 me-1"></i>
            A simple success alert—check it out!
          </div>
          <div class="alert alert-danger text-danger" role="alert">
            <i class="ri-service-line fs-18 me-1"></i>
            A simple danger alert—check it out!
          </div>
          <div class="alert alert-warning text-warning" role="alert">
            <i class="ri-edit-box-line fs-18 me-1"></i>
            A simple warning alert—check it out!
          </div>
          <div class="alert alert-info text-info" role="alert">
            <i class="ri-table-line fs-18 me-1"></i>
            A simple info alert—check it out!
          </div>
          <div class="alert alert-light text-light" role="alert">
            <i class="ri-code-s-slash-fill fs-18 me-1"></i>
            A simple light alert—check it out!
          </div>
          <div class="alert alert-dark text-dark mb-0" role="alert">
            <i class="ri-html5-line fs-18 me-1"></i>
            A simple dark alert—check it out!
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
<code class="language-markup" id="basicAlertsCode5">
&lt;div class="alert alert-primary text-primary" role="alert"&gt;
  &lt;i class="ri-home-7-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple primary alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-secondary text-secondary" role="alert"&gt;
  &lt;i class="ri-star-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple secondary alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-success text-success" role="alert"&gt;
  &lt;i class="ri-play-circle-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple success alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-danger text-danger" role="alert"&gt;
  &lt;i class="ri-service-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple danger alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-warning text-warning" role="alert"&gt;
  &lt;i class="ri-edit-box-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple warning alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-info text-info" role="alert"&gt;
  &lt;i class="ri-table-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple info alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-light text-light" role="alert"&gt;
  &lt;i class="ri-code-s-slash-fill fs-18 me-1"&gt;&lt;/i&gt;
  A simple light alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-dark text-dark mb-0" role="alert"&gt;
  &lt;i class="ri-html5-line fs-18 me-1"&gt;&lt;/i&gt;
  A simple dark alert—check it out!
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
  name: "AlertsWithIcon",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode5");
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
