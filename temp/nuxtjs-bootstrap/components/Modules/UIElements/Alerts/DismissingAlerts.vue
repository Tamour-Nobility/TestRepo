<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Dismissing Alerts</h4>
      <ul class="nav nav-tabs mb-4" id="myTab7" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview7-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview7-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview7-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code7-tab"
            data-bs-toggle="tab"
            data-bs-target="#code7-tab-pane"
            type="button"
            role="tab"
            aria-controls="code7-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent7">
        <div
          class="tab-pane fade show active"
          id="preview7-tab-pane"
          role="tabpanel"
          aria-labelledby="preview7-tab"
          tabindex="0"
        >
          <div class="alert alert-primary alert-dismissible" role="alert">
            A simple primary alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-secondary alert-dismissible" role="alert">
            A simple secondary alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-success alert-dismissible" role="alert">
            A simple success alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-danger alert-dismissible" role="alert">
            A simple danger alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-warning alert-dismissible" role="alert">
            A simple warning alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-info alert-dismissible" role="alert">
            A simple info alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-light alert-dismissible" role="alert">
            A simple light alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="alert alert-dark alert-dismissible" role="alert">
            A simple dark alert—check it out!
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code7-tab-pane"
          role="tabpanel"
          aria-labelledby="code7-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode7">
&lt;div class="alert alert-primary alert-dismissible" role="alert"&gt;
  A simple primary alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-secondary alert-dismissible" role="alert"&gt;
  A simple secondary alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-success alert-dismissible" role="alert"&gt;
  A simple success alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-danger alert-dismissible" role="alert"&gt;
  A simple danger alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-warning alert-dismissible" role="alert"&gt;
  A simple warning alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-info alert-dismissible" role="alert"&gt;
  A simple info alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-light alert-dismissible" role="alert"&gt;
  A simple light alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class="alert alert-dark alert-dismissible" role="alert"&gt;
  A simple dark alert—check it out!
  &lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
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
  name: "DismissingAlerts",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode7");
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
