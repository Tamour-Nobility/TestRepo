<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">BG Outline Alerts</h4>
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
          <div class="alert alert-primary text-primary" role="alert">
            A simple primary alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-secondary text-secondary" role="alert">
            A simple secondary alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-success text-success" role="alert">
            A simple success alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-danger text-danger" role="alert">
            A simple danger alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-warning text-warning" role="alert">
            A simple warning alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-info text-info" role="alert">
            A simple info alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-light text-light" role="alert">
            A simple light alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
          </div>
          <div class="alert alert-dark text-dark mb-0" role="alert">
            A simple dark alert with
            <a href="#" class="fw-semibold">an example link</a>. Give it a click
            if you like.
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
<code class="language-markup" id="basicAlertsCode4">
&lt;div class="alert alert-primary text-primary" role="alert"&gt;
  A simple primary alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-secondary text-secondary" role="alert"&gt;
  A simple secondary alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-success text-success" role="alert"&gt;
  A simple success alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-danger text-danger" role="alert"&gt;
  A simple danger alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-warning text-warning" role="alert"&gt;
  A simple warning alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-info text-info" role="alert"&gt;
  A simple info alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-light text-light" role="alert"&gt;
  A simple light alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class="alert alert-dark text-dark mb-0" role="alert"&gt;
  A simple dark alert with &lt;a href="#" class="fw-semibold"&gt;an example link&lt;/a&gt;. Give it a click if you like.
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
  name: "BGOutlineAlerts",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode4");
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
