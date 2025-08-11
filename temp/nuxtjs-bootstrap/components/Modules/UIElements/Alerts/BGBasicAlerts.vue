<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">BG Basic Alerts</h4>
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
          <div class="alert alert-primary bg-primary text-white" role="alert">
            A simple primary alert—check it out!
          </div>
          <div
            class="alert alert-secondary bg-secondary text-white"
            role="alert"
          >
            A simple secondary alert—check it out!
          </div>
          <div class="alert alert-success bg-success text-white" role="alert">
            A simple success alert—check it out!
          </div>
          <div class="alert alert-danger bg-danger text-white" role="alert">
            A simple danger alert—check it out!
          </div>
          <div class="alert alert-warning bg-warning text-white" role="alert">
            A simple warning alert—check it out!
          </div>
          <div class="alert alert-info bg-info text-white" role="alert">
            A simple info alert—check it out!
          </div>
          <div class="alert alert-light bg-light text-dark" role="alert">
            A simple light alert—check it out!
          </div>
          <div class="alert alert-dark mb-0 bg-dark text-white" role="alert">
            A simple dark alert—check it out!
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
<code class="language-markup" id="basicAlertsCode2">
&lt;div class="alert alert-primary bg-primary text-white" role="alert"&gt;
  A simple primary alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-secondary bg-secondary text-white" role="alert"&gt;
  A simple secondary alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-success bg-success text-white" role="alert"&gt;
  A simple success alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-danger bg-danger text-white" role="alert"&gt;
  A simple danger alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-warning bg-warning text-white" role="alert"&gt;
  A simple warning alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-info bg-info text-white" role="alert"&gt;
  A simple info alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-light bg-light text-dark" role="alert"&gt;
  A simple light alert—check it out!
&lt;/div&gt;
&lt;div class="alert alert-dark mb-0 bg-dark text-white" role="alert"&gt;
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
  name: "BGBasicAlerts",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode2");
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
