<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Headings Badges</h4>
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
          <h1>Example heading <span class="badge bg-primary">New</span></h1>
          <h2>Example heading <span class="badge bg-secondary">New</span></h2>
          <h3>Example heading <span class="badge bg-success">New</span></h3>
          <h4>Example heading <span class="badge bg-warning">New</span></h4>
          <h5>Example heading <span class="badge bg-danger">New</span></h5>
          <h6>Example heading <span class="badge bg-info">New</span></h6>
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
<code class="language-markup" id="codeCopy">
&lt;h1&gt;Example heading &lt;span class="badge bg-primary"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;span class="badge bg-warning"&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;span class="badge bg-danger"&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;span class="badge bg-info"&gt;New&lt;/span&gt;&lt;/h6&gt;
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
  name: "HeadingsBadges",
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
