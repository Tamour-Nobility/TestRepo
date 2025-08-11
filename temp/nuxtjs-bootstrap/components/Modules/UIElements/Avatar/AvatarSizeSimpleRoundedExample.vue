<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Avatar Size Simple Rounded Example</h4>
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
          <div class="d-flex align-items-center gap-4 flex-wrap">
            <img
              src="~/assets/images/screenshorts.jpg"
              class="wh-87 rounded-3"
              alt="screenshorts"
            />
            <img
              src="~/assets/images/screenshorts.jpg"
              class="wh-77 rounded-3"
              alt="screenshorts"
            />
            <img
              src="~/assets/images/screenshorts.jpg"
              class="wh-67 rounded-3"
              alt="screenshorts"
            />
            <img
              src="~/assets/images/screenshorts.jpg"
              class="wh-57 rounded-3"
              alt="screenshorts"
            />
            <img
              src="~/assets/images/screenshorts.jpg"
              class="wh-47 rounded-3"
              alt="screenshorts"
            />
          </div>
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
<code class="language-markup" id="basicAlertsCode5">
&lt;img src="~/assets/images/screenshorts.jpg" class="wh-87 rounded-3" alt="screenshorts"&gt;
&lt;img src="~/assets/images/screenshorts.jpg" class="wh-77 rounded-3" alt="screenshorts"&gt;
&lt;img src="~/assets/images/screenshorts.jpg" class="wh-67 rounded-3" alt="screenshorts"&gt;
&lt;img src="~/assets/images/screenshorts.jpg" class="wh-57 rounded-3" alt="screenshorts"&gt;
&lt;img src="~/assets/images/screenshorts.jpg" class="wh-47 rounded-3" alt="screenshorts"&gt;
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
  name: "AvatarSizeSimpleRoundedExample",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("basicAlertsCode5");
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
