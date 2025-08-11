<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Group User Example</h4>
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
          <div class="d-flex justify-content-between">
            <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
              <li>
                <a href="#">
                  <img
                    src="~/assets/images/user-1.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </a>
              </li>
              <li class="ms-m-15">
                <a href="#">
                  <img
                    src="~/assets/images/user-2.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </a>
              </li>
              <li class="ms-m-15">
                <a href="#">
                  <img
                    src="~/assets/images/user-3.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </a>
              </li>
              <li class="ms-m-15">
                <a
                  href="#"
                  class="wh-40 rounded-circle bg-primary d-block text-center position-relative text-decoration-none text-white hover-bg"
                >
                  <i
                    class="ri-add-line fs-20 position-absolute top-50 start-50 translate-middle"
                  ></i>
                </a>
              </li>
            </ul>
            <a
              href="#"
              class="btn bg-primary bg-opacity-10 fw-bold fs-14 hover-bg"
            >
              <span class="position-relative top-2">View Details</span>
            </a>
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
&lt;div class="card bg-white border-0 rounded-3 mb-4"&gt;
&lt;div class="card-body p-4"&gt;
&lt;h4 class="fs-18 mb-4"&gt;Group User Example&lt;/h4&gt;

&lt;div class="d-flex justify-content-between"&gt;
&lt;ul class="ps-0 mb-0 list-unstyled d-flex align-items-center"&gt;
&lt;li&gt;
&lt;a href="#"&gt;
&lt;img src="~/assets/images/user-1.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="ms-15"&gt;
&lt;a href="#"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="ms-15"&gt;
&lt;a href="#"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="ms-15"&gt;
&lt;a href="#" class="wh-40 rounded-circle bg-primary d-block text-center position-relative text-decoration-none text-white hover-bg"&gt;
&lt;i class="ri-add-line fs-20 position-absolute top-50 start-50 translate-middle"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;

&lt;a href="#" class="btn bg-primary bg-opacity-10 fw-bold fs-14 hover-bg"&gt;
&lt;span class="position-relative top-2"&gt;View Details&lt;/span&gt;
&lt;/a&gt;
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
  name: "GroupUserExample",
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
