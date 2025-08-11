<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Badges With Icons</h4>
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
            aria-controls="code6-tab-pane"
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
          <div class="d-flex">
            <span
              class="badge text-bg-primary bg-opacity-10 py-1 px-2 me-1 text-primary rounded-1 fw-medium fs-12 d-flex align-items-center gap-1 py-3 px-4"
            >
              <i class="ri-layout-grid-fill fs-18"></i>
              <span class="ms-1 fw-medium fs-15">Dashboard</span>
              <span
                class="ms-1 bg-primary text-white py-1 px-2 me-1 rounded-1 fs-14 lh-1 ms-4"
                >4</span
              >
              <i class="ri-arrow-down-s-line ms-1"></i>
            </span>
            <span
              class="badge text-bg-primary py-1 px-2 me-1 text-white rounded-1 fw-medium fs-12 d-flex align-items-center gap-1 py-3 px-4 ms-3"
            >
              <i class="ri-layout-grid-fill fs-18"></i>
              <span class="ms-1 fw-medium fs-15">Dashboard</span>
              <span
                class="ms-1 bg-white bg-opacity-10 text-white py-1 px-2 me-1 rounded-1 fs-14 lh-1 ms-4"
                >4</span
              >
              <i class="ri-arrow-down-s-line ms-1"></i>
            </span>
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
<code class="language-markup" id="codeCopy">
&lt;span class="badge text-bg-primary bg-opacity-10 py-1 px-2 text-primary rounded-1 fw-medium fs-12 d-flex align-items-center gap-1 py-3 px-4"&gt;
&lt;i class="ri-layout-grid-fill fs-18"&gt;&lt;/i&gt;
&lt;span class="ms-1 fw-medium fs-15"&gt;Dashboard&lt;/span&gt;
&lt;span class="ms-1 bg-primary text-white py-1 px-2 rounded-1 fs-14 lh-1 ms-4"&gt;4&lt;/span&gt;
&lt;i class="ri-arrow-down-s-line ms-1"&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class="badge text-bg-primary py-1 px-2 text-white rounded-1 fw-medium fs-12 d-flex align-items-center gap-1 py-3 px-4 ms-3"&gt;
&lt;i class="ri-layout-grid-fill fs-18"&gt;&lt;/i&gt;
&lt;span class="ms-1 fw-medium fs-15"&gt;Dashboard&lt;/span&gt;
&lt;span class="ms-1 bg-white bg-opacity-10 text-white py-1 px-2 rounded-1 fs-14 lh-1 ms-4"&gt;4&lt;/span&gt;
&lt;i class="ri-arrow-down-s-line ms-1"&gt;&lt;/i&gt;
&lt;/span&gt;
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
  name: "BadgesWithIcons",
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
