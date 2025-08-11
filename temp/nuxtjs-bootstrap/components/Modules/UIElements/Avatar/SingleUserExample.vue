<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Single User Example</h4>
      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code-tab"
            data-bs-toggle="tab"
            data-bs-target="#code-tab-pane"
            type="button"
            role="tab"
            aria-controls="code-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="preview-tab-pane"
          role="tabpanel"
          aria-labelledby="preview-tab"
          tabindex="0"
        >
          <div class="d-sm-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center mb-3 mb-sm-0">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-62.jpg"
                  class="wh-60 rounded-circle"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4 class="fs-16 fw-semibold mb-1">Andrew Burns</h4>
                <span class="fs-14">Programmer</span>
              </div>
            </div>
            <ul class="ps-0 mb-0 list-unstyled d-flex gap-2">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block text-center position-relative rounded-circle text-primary hover-bg"
                >
                  <i
                    class="ri-facebook-fill position-absolute top-50 start-50 translate-middle fs-18"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block text-center position-relative rounded-circle text-primary hover-bg"
                >
                  <i
                    class="ri-twitter-x-line position-absolute top-50 start-50 translate-middle fs-18"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block text-center position-relative rounded-circle text-primary hover-bg"
                >
                  <i
                    class="ri-linkedin-fill position-absolute top-50 start-50 translate-middle fs-18"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code-tab-pane"
          role="tabpanel"
          aria-labelledby="code-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
&lt;div class="card bg-white border-0 rounded-3 mb-4"&gt;
&lt;div class="card-body p-4"&gt;
&lt;h4 class="fs-18 mb-4"&gt;Single User Example&lt;/h4&gt;
&lt;div class="d-sm-flex justify-content-between align-items-center"&gt;
&lt;div class="d-flex align-items-center mb-3 mb-sm-0"&gt;
&lt;div class="flex-shrink-0"&gt;
&lt;img src="~/assets/images/user-62.jpg" class="wh-60 rounded-circle" alt="user"&gt;
&lt;/div&gt;
&lt;div class="flex-grow-1 ms-3"&gt;
&lt;h4 class="fs-16 fw-semibold mb-1"&gt;Andrew Burns&lt;/h4&gt;
&lt;span class="fs-14"&gt;Programmer&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;ul class="ps-0 mb-0 list-unstyled d-flex gap-2"&gt;
&lt;li&gt;
&lt;a href="https://www.facebook.com/" target="_blank" class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block
text-center position-relative rounded-circle text-primary hover-bg"&gt;
&lt;i class="ri-facebook-fill position-absolute top-50 start-50 translate-middle fs-18"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://www.facebook.com/" target="_blank" class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block
text-center position-relative rounded-circle text-primary hover-bg"&gt;
&lt;i class="ri-twitter-x-line position-absolute top-50 start-50 translate-middle fs-18"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://www.facebook.com/" target="_blank" class="text-decoration-none wh-40 bg-primary bg-opacity-10 d-block
text-center position-relative rounded-circle text-primary hover-bg"&gt;
&lt;i class="ri-linkedin-fill position-absolute top-50 start-50 translate-middle fs-18"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
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
  name: "SingleUserExample",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode");
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
