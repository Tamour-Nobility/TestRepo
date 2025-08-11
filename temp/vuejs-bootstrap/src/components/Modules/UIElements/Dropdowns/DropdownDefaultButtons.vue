<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Dropdown Default Buttons</h4>
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
          <div class="d-flex gap-3 flex-wrap">
            <div class="dropdown">
              <button
                class="btn btn-primary text-white py-2 px-3 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu bg-white">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a
                class="btn btn-primary text-white py-2 px-3 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <ul class="dropdown-menu bg-white">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
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
<code class="language-markup" id="codeCopy">
&lt;div class="dropdown"&gt;
&lt;button class="btn btn-primary text-white py-2 px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
Dropdown button
&lt;/button&gt;
&lt;ul class="dropdown-menu bg-white"&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="dropdown"&gt;
&lt;a class="btn btn-primary text-white py-2 px-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
Dropdown link
&lt;/a&gt;

&lt;ul class="dropdown-menu bg-white"&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
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
  name: "DropdownDefaultButtons",
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
