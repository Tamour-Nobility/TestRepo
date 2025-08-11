<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Additional Content Alerts</h4>
      <ul class="nav nav-tabs mb-4" id="myTab8" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview8-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview8-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview8-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code8-tab"
            data-bs-toggle="tab"
            data-bs-target="#code8-tab-pane"
            type="button"
            role="tab"
            aria-controls="code8-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent8">
        <div
          class="tab-pane fade show active"
          id="preview8-tab-pane"
          role="tabpanel"
          aria-labelledby="preview8-tab"
          tabindex="0"
        >
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code8-tab-pane"
          role="tabpanel"
          aria-labelledby="code8-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode8">
&lt;div class="alert alert-success" role="alert"&gt;
&lt;h4 class="alert-heading"&gt;Well done!&lt;/h4&gt;
&lt;p&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;
&lt;hr&gt;
&lt;p class="mb-0"&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
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
  name: "AdditionalContentAlerts",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode8");
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
