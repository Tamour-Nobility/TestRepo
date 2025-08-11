<template>
  <ul class="nav nav-tabs mb-4 bg-white" id="myTab7" role="tablist">
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
  <div class="tab-content" id="myTab7Content">
    <div
      class="tab-pane fade show active"
      id="preview7-tab-pane"
      role="tabpanel"
      aria-labelledby="preview7-tab"
      tabindex="0"
    >
      <div class="card bg-white">
        <div class="card-header fs-16 fw-semibold">Featured</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
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
        class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0 mt-5"
        @click="copyCode"
      >
        Copy
      </button>
      <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;div class="card bg-white"&gt;
&lt;div class="card-header fs-16 fw-semibold"&gt;
Featured
&lt;/div&gt;
&lt;ul class="list-group list-group-flush"&gt;
&lt;li class="list-group-item"&gt;An item&lt;/li&gt;
&lt;li class="list-group-item"&gt;A second item&lt;/li&gt;
&lt;li class="list-group-item"&gt;A third item&lt;/li&gt;
&lt;/ul&gt;
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
  name: "CardWithList",
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
