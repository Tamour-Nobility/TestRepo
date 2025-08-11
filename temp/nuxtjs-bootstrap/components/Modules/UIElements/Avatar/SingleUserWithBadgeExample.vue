<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Single User With Badge Example</h4>
      <ul class="nav nav-tabs mb-4" id="myTab3" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview3-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview3-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview3-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code3-tab"
            data-bs-toggle="tab"
            data-bs-target="#code3-tab-pane"
            type="button"
            role="tab"
            aria-controls="code3-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent3">
        <div
          class="tab-pane fade show active"
          id="preview3-tab-pane"
          role="tabpanel"
          aria-labelledby="preview3-tab"
          tabindex="0"
        >
          <div class="d-flex justify-content-between">
            <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1">
              <li>
                <a href="#" class="position-relative d-block">
                  <img
                    src="~/assets/images/user-1.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                  <div
                    class="position-absolute top-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"
                  ></div>
                </a>
              </li>
              <li>
                <a href="#" class="position-relative d-block">
                  <img
                    src="~/assets/images/user-2.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                  <div
                    class="position-absolute top-0 end-0 p-1 bg-primary border border-2 border-white rounded-circle"
                  ></div>
                </a>
              </li>
              <li>
                <a href="#" class="position-relative d-block">
                  <img
                    src="~/assets/images/user-3.jpg"
                    class="wh-40 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                  <div
                    class="position-absolute top-0 end-0 p-1 bg-warning border border-2 border-white rounded-circle"
                  ></div>
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
          id="code3-tab-pane"
          role="tabpanel"
          aria-labelledby="code3-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode3">
&lt;div class="card bg-white border-0 rounded-3 mb-4"&gt;
&lt;div class="card-body p-4"&gt;
&lt;h4 class="fs-18 mb-4"&gt;Single User With Badge Example&lt;/h4&gt;

&lt;div class="d-flex justify-content-between"&gt;
&lt;ul class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1"&gt;
&lt;li&gt;
&lt;a href="#" class="position-relative d-block"&gt;
&lt;img src="~/assets/images/user-1.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;div class="position-absolute top-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"&gt;&lt;/div&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="#" class="position-relative d-block"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;div class="position-absolute top-0 end-0 p-1 bg-primary border border-2 border-white rounded-circle"&gt;&lt;/div&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="#" class="position-relative d-block"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-40 rounded-circle border border-2 border-color-white" alt="user"&gt;
&lt;div class="position-absolute top-0 end-0 p-1 bg-warning border border-2 border-white rounded-circle"&gt;&lt;/div&gt;
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleUserWithBadgeExample",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode3");
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
