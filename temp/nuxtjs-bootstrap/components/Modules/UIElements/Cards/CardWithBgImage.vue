<template>
  <ul class="nav nav-tabs mb-4 bg-white" id="myTab6" role="tablist">
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
  <div class="tab-content" id="myTab6Content">
    <div
      class="tab-pane fade show active"
      id="preview6-tab-pane"
      role="tabpanel"
      aria-labelledby="preview6-tab"
      tabindex="0"
    >
      <div class="card text-bg-dark border-0 rounded-3">
        <img src="~/assets/images/card-2.jpg" class="card-img" alt="card" />
        <div class="position-absolute top-0 p-3">
          <span
            class="badge bg-primary rounded-1 text-dark py-2 px-3 me-1 fs-13 fw-medium"
            >Primary</span
          >
          <span
            class="badge bg-warning rounded-1 text-dark py-2 px-3 me-1 fs-13 fw-medium"
            >Warning</span
          >
          <span
            class="badge bg-success rounded-1 text-dark py-2 px-3 me-1 fs-13 fw-medium"
            >Success</span
          >
        </div>
        <div class="card-img-overlay" style="top: auto; bottom: 0">
          <h5 class="card-title fs-18 fw-semibold">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text"><small>Last updated 3 mins ago</small></p>
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
        class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0 mt-5"
        @click="copyCode"
      >
        Copy
      </button>
      <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;div class="card text-bg-dark border-0 rounded-3"&gt;
&lt;img src="~/assets/images/card-2.jpg" class="card-img" alt="card"&gt;
&lt;div class="position-absolute top-0 p-3"&gt;
&lt;span class="badge bg-primary rounded-1 text-dark py-2 px-3 fs-13 fw-medium"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-warning rounded-1 text-dark py-2 px-3 fs-13 fw-medium"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-success rounded-1 text-dark py-2 px-3 fs-13 fw-medium"&gt;Success&lt;/span&gt;
&lt;/div&gt;
&lt;div class="card-img-overlay" style="top: auto; bottom: 0;"&gt;
&lt;h5 class="card-title"&gt;Card title&lt;/h5&gt;
&lt;p class="card-text"&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
&lt;p class="card-text"&gt;&lt;small&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
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
  name: "CardWithBgImage",
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
